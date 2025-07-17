import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
  name: String,
  url: String,
  publicId: String,
  resource_type: String,
  bytes: Number,
  createdAt: { type: Date, default: Date.now },
  isStarred: { type: Boolean, default: false },
});


export default mongoose.models.File || mongoose.model('File', FileSchema);