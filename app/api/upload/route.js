import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import File from '@/models/File';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  await connectDB();

  const formData = await req.formData();
  const file = formData.get('file');

  const originalName = file.name;

  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { resource_type: 'auto', folder: 'mydrive' },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  const savedFile = await File.create({
    name: originalName,
    url: uploadResult.secure_url,
    publicId: uploadResult.public_id,
    resource_type: uploadResult.resource_type,
    bytes: uploadResult.bytes,
  });

  return NextResponse.json({
    message: 'File uploaded successfully',
    file: savedFile,
  });
}
