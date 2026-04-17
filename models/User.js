import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  username: { type: String, unique: true, sparse: true },
  portfolio: {
    bio: String,
    careerField: String, // e.g. "Fullstack Developer"
    socialLinks: [{
      platform: String,
      url: String,
    }],
    skills: [String],
    projects: [{
      title: String,
      description: String,
      link: String,
      image: String,
    }],
    education: [{
      school: String,
      degree: String,
      year: String,
    }],
    experience: [{
      company: String,
      role: String,
      duration: String,
      description: String,
    }],
    malayalamTagline: String,
    contactEmail: String,
    whatsapp: String,
    location: String,
  },
  theme: { type: String, default: 'bento-dark' },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
