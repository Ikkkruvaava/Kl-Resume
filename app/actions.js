'use server';
import { auth } from '@/auth';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
export async function savePortfolio(formData) {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return { success: false, message: 'You must be logged in to save your portfolio.' };
    }

    await dbConnect();
    
    const { 
      name, username, image, theme, 
      bio, careerField, malayalamTagline, skills, 
      socialLinks, projects, education, experience, 
      contactEmail, whatsapp, location 
    } = formData;
    
    const skillsArray = typeof skills === 'string' ? skills.split(',').map(s => s.trim()) : (skills || []);

    // Verify if username is already taken by someone else
    const existingUserWithUsername = await User.findOne({ username });
    if (existingUserWithUsername && existingUserWithUsername.email !== session.user.email) {
      return { success: false, message: 'Username is already taken. Please choose another one.' };
    }

    await User.findOneAndUpdate(
      { email: session.user.email },
      {
        name: name || session.user.name,
        username,
        image: image || session.user.image,
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
      { new: true, upsert: true }
    );
    
    return { success: true, message: 'Portfolio saved successfully! 🚀' };
  } catch (error) {
    console.error("Database save error:", error);
    return { success: false, message: 'Failed to save portfolio.' };
  }
}

export async function fetchUserData() {
  try {
    const session = await auth();
    if (!session || !session.user) {
      return { success: false, message: 'Not authenticated' };
    }

    await dbConnect();
    const user = await User.findOne({ email: session.user.email }).lean();
    
    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // Adapt DB user format to formData format used in editor
    const formData = {
      name: user.name || '',
      username: user.username || '',
      image: user.image || '',
      theme: user.theme || 'bento-dark',
      ...user.portfolio,
      skills: user.portfolio?.skills?.join(', ') || '',
    };

    return { success: true, data: formData };
  } catch (error) {
    console.error("Fetch user data error:", error);
    return { success: false, message: 'Failed to fetch user data.' };
  }
}

export async function fetchCommunityData() {
  try {
    await dbConnect();
    const totalUsers = await User.countDocuments();
    // Get last 5 users with images
    const recentUsers = await User.find({ image: { $exists: true, $ne: "" } })
      .sort({ createdAt: -1 })
      .limit(5)
      .select('image')
      .lean();

    return { 
      success: true, 
      totalUsers: totalUsers + 450, // Added base offset for social proof
      recentImages: recentUsers.map(u => u.image)
    };
  } catch (error) {
    console.error("Fetch community data error:", error);
    return { success: false, message: 'Failed to fetch community data.' };
  }
}
