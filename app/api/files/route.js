import { connectDB } from '@/lib/mongodb';
import File from '@/models/File';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();

  const files = await File.find().sort({ createdAt: -1 }); // Newest file first

  return NextResponse.json(files);
}