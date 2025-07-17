import { connectDB } from '@/lib/mongodb';
import File from '@/models/File';
import { NextResponse } from 'next/server';

export async function PATCH(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  }

  await connectDB();

  const file = await File.findById(id);
  if (!file) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  file.isStarred = !file.isStarred; 
  await file.save();

  return NextResponse.json({ message: 'Star updated', isStarred: file.isStarred });
}
