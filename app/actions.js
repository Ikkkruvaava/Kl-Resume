'use server'
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export async function savePortfolio(formData) {
  try {
    await dbConnect();
    
    const { 
      name, username, image, theme, 
      bio, careerField, malayalamTagline, skills, 
      socialLinks, projects, education, experience, 
      contactEmail, whatsapp, location 
    } = formData;
    
    // Format the skills array
    const skillsArray = typeof skills === 'string' ? skills.split(',').map(s => s.trim()) : skills;

    await User.findOneAndUpdate(
      { username },
      {
        name,
        username,
        email: `${username}@mock.email.com`,
        image,
        theme: theme || 'bento-dark',
        portfolio: {
          bio,
          careerField,
          malayalamTagline,
          skills: skillsArray,
          socialLinks,
          projects,
          education,
          experience,
          contactEmail,
          whatsapp,
          location
        }
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    
    return { success: true, message: 'Portfolio saved to MongoDB successfully! 🚀' };
  } catch (error) {
    console.error("Database save error:", error);
    return { success: false, message: 'Failed to save portfolio.' };
  }
}
