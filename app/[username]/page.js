import { notFound } from 'next/navigation';
import { Instagram, Github, Linkedin, Calendar, ExternalLink, ArrowUpRight, Sparkles, Youtube } from 'lucide-react';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import Link from 'next/link';

// Helper to fetch data
async function getUserData(username) {
  await dbConnect();
  
  // Note: During local dev or actual build without DB, we can return dummy data
  try {
    const user = await User.findOne({ username }).lean();
    if (user) {
      user._id = user._id.toString();
      user.createdAt = user.createdAt.toString();
      user.updatedAt = user.updatedAt.toString();
      return user;
    }
  } catch (error) {
    console.error(error);
  }
  
  // Return dummy data for demo purposes since we don't have seeded DB
  if (username === 'mishab' || username === 'demo') {
    return {
      name: 'Mohammed Mishab',
      username: username,
      image: '/avatar.png',
      portfolio: {
        bio: "I'm a full-stack developer focused on building fast, scalable web apps. I love React, Node, and everything Gen-Z aesthetic.",
        malayalamTagline: "Oru cheriya developer, valiya swapnangal 🚀",
        skills: ["Next.js", "React", "MongoDB", "TailwindCSS", "Node.js", "Framer Motion"],
        projects: [
          { title: "Gen Z Portfolio Engine", description: "A platform for Kerala's youth to build aesthetic portfolios.", link: "#" },
          { title: "Digital Quran App", description: "Android app for daily recitations, built with React Native.", link: "#" },
        ],
        socialLinks: {
          instagram: "mishab",
          github: "mishab",
          linkedin: "mishab",
        }
      }
    };
  }
  
  return null;
}

// Generate the OpenGraph Metadata dynamically
export async function generateMetadata({ params }) {
  const { username } = params;
  
  // This will use the /api/og dynamic image route when shared
  return {
    title: `${username} | KL Resume`,
    description: `Check out ${username}'s professional portfolio on KL Resume.`,
    openGraph: {
      images: [`/api/og?username=${username}`],
    },
  };
}

export default async function DynamicPortfolioPage({ params }) {
  const { username } = params;
  const user = await getUserData(username);

  if (!user) {
    notFound();
  }

  const { portfolio } = user;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500/30 pb-20">
      
      {/* Background blobs for Gen-Z glassmorphism aesthetic */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[120px]"></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-20">
        {/* Header Section (Bento Grid Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          
          {/* Main ID Card */}
          <div className="md:col-span-2 bento-card flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-1 flex-shrink-0">
              <div className="w-full h-full rounded-full bg-zinc-900 border-4 border-black group-hover:scale-95 transition duration-300 overflow-hidden flex justify-center items-center">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-zinc-600 font-bold">No Pic</span>
                )}
              </div>
            </div>
            <div className="z-10">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                {user.name}
              </h1>
              <p className="text-zinc-400 font-medium text-lg mb-4">@{user.username}</p>
              {portfolio.malayalamTagline && (
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl text-purple-200 text-sm font-semibold inline-block shadow-lg">
                  {portfolio.malayalamTagline}
                </div>
              )}
            </div>
          </div>

          {/* Socials Card */}
          <div className="bento-card flex flex-col justify-center items-center gap-4">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest w-full text-left">Connect</h3>
            <div className="flex flex-wrap gap-3 w-full justify-center md:justify-start">
              {portfolio.socialLinks?.instagram && (
                <Link href={`https://instagram.com/${portfolio.socialLinks.instagram}`} target="_blank" className="flex items-center justify-center p-4 bg-zinc-800/50 hover:bg-zinc-700/80 rounded-2xl transition group flex-1">
                  <Instagram className="w-6 h-6 text-zinc-400 group-hover:text-pink-500 transition" />
                </Link>
              )}
              {portfolio.socialLinks?.github && (
                <Link href={`https://github.com/${portfolio.socialLinks.github}`} target="_blank" className="flex items-center justify-center p-4 bg-zinc-800/50 hover:bg-zinc-700/80 rounded-2xl transition group flex-1">
                  <Github className="w-6 h-6 text-zinc-400 group-hover:text-white transition" />
                </Link>
              )}
              {portfolio.socialLinks?.linkedin && (
                <Link href={`https://linkedin.com/in/${portfolio.socialLinks.linkedin}`} target="_blank" className="flex items-center justify-center p-4 bg-zinc-800/50 hover:bg-zinc-700/80 rounded-2xl transition group flex-1">
                  <Linkedin className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition" />
                </Link>
              )}
              {portfolio.socialLinks?.youtube && (
                <Link href={`https://youtube.com/@${portfolio.socialLinks.youtube}`} target="_blank" className="flex items-center justify-center p-4 bg-zinc-800/50 hover:bg-zinc-700/80 rounded-2xl transition group flex-1">
                  <Youtube className="w-6 h-6 text-zinc-400 group-hover:text-red-500 transition" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Second Row: Bio and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bento-card flex flex-col">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">About Me</h3>
            <p className="text-zinc-300 text-lg leading-relaxed font-medium">
              {portfolio.bio}
            </p>
          </div>
          
          <div className="bento-card flex flex-col">
            <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Skills & Arsenal</h3>
            <div className="flex flex-wrap gap-2">
              {portfolio.skills?.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/50 rounded-xl text-sm font-semibold transition cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Third Row: Projects */}
        <div className="bento-card mb-10">
          <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-6 flex items-center justify-between">
            <span>Featured Projects</span>
            <ExternalLink className="w-4 h-4" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolio.projects?.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noreferrer" className="group block p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition">{project.title}</h4>
                  <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-purple-400 transition" />
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
              </a>
            ))}
          </div>
        </div>

      </main>
      
      {/* Footer / Branding mark */}
      <div className="text-center pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition uppercase tracking-widest">
          <Sparkles className="w-4 h-4 text-purple-500" />
          Powered by KL Resume
        </Link>
      </div>

    </div>
  );
}
