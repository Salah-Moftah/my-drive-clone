import { v2 as cloudinary } from 'cloudinary';
import { connectDB } from '@/lib/mongodb';
import File from '@/models/File';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing file ID' }, { status: 400 });
  }

  await connectDB();

  const file = await File.findById(id);

  if (!file) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  // delete from cloudinary
  await cloudinary.uploader.destroy(file.publicId, {
    resource_type: file.resource_type,
  });
  
  
  // delete from mongodb
  await File.deleteOne({ _id: id });

  return NextResponse.json({ message: 'File deleted successfully' });
}