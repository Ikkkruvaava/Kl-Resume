"use client";

import { useState } from 'react';
import { Sparkles, Save, Link as LinkIcon, Instagram, Github, Linkedin, Youtube, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import { savePortfolio } from './actions';
const MALAYALAM_BIOS = [
  "Freelance Editor by day, Cinephile by night 🎬",
  "Oru cheriya developer, valiya swapnangal 🚀 (Small developer, big dreams)",
  "Pani edukuvam, poya kanum... 💼 (Working, watch me go...)",
  "Tech enthusiast. Chunk bros > Code bugs 🐛",
  "Design aanu ente everything 🎨",
];

export default function OnboardingEditor() {
  const [formData, setFormData] = useState({
    name: 'Mohammed Mishab',
    username: 'mishab',
    bio: 'Building awesome GenZ products for the web.',
    malayalamTagline: 'Oru cheriya developer, valiya swapnangal 🚀',
    skills: 'Next.js, Tailwind, MongoDB',
    instagram: 'mishab',
    github: 'mishab',
    linkedin: 'mishab',
    youtube: '',
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateBio = () => {
    const randomBio = MALAYALAM_BIOS[Math.floor(Math.random() * MALAYALAM_BIOS.length)];
    setFormData((prev) => ({ ...prev, malayalamTagline: randomBio }));
  };

  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const response = await savePortfolio(formData);
      alert(response.message);
    } catch (error) {
      alert("Error saving data!");
    } finally {
      setIsSaving(false);
    }
  };

  const handleClaimUrl = () => {
    const url = `${window.location.origin}/${formData.username}`;
    navigator.clipboard.writeText(url);
    alert(`URL Copied to clipboard! 🚀\n${url}`);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 flex flex-col items-center bg-[url('/grid.svg')]">
      <div className="absolute inset-0 bg-black/80 z-[-1]"></div>
      
      <header className="w-full max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-black tracking-tighter bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          KL RESUME
        </h1>
        <button onClick={handleClaimUrl} className="glassmorphism px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition">
          <LinkIcon className="w-4 h-4" />
          Claim URL
        </button>
      </header>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* The Editor Sidebar */}
        <div className="bento-card flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              Customize Portfolio
            </h2>
          </div>

          <form onSubmit={handleSave} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Profile Picture</label>
              <div className="flex items-center gap-4 bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3">
                <label className="cursor-pointer bg-zinc-700 hover:bg-zinc-600 text-white text-xs font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition">
                  <ImageIcon className="w-4 h-4" />
                  Upload Image
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                </label>
                {formData.image && <span className="text-xs text-green-400 font-semibold">Image loaded!</span>}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Username (URL)</label>
              <div className="flex items-center bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-500">
                <span className="text-zinc-500">klresume.in/</span>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="bg-transparent border-none outline-none flex-1 text-white" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Bio</label>
              <textarea name="bio" value={formData.bio} onChange={handleInputChange} className="bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 h-24 resize-none"></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Malayalam Tagline</label>
                <button type="button" onClick={generateBio} className="text-xs text-purple-400 hover:text-purple-300 font-medium">Auto-Generate 🔮</button>
              </div>
              <input type="text" name="malayalamTagline" value={formData.malayalamTagline} onChange={handleInputChange} className="bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <h3 className="text-sm font-bold text-white border-b border-zinc-800 pb-2">Social Hub</h3>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center bg-zinc-800/50 border border-zinc-700 rounded-xl px-3 py-2 flex-1">
                  <Instagram className="w-4 h-4 text-zinc-500 mr-2" />
                  <input type="text" name="instagram" placeholder="Username" value={formData.instagram} onChange={handleInputChange} className="bg-transparent text-sm border-none outline-none flex-1 text-white w-full" />
                </div>
                <div className="flex items-center bg-zinc-800/50 border border-zinc-700 rounded-xl px-3 py-2 flex-1">
                  <Github className="w-4 h-4 text-zinc-500 mr-2" />
                  <input type="text" name="github" placeholder="Username" value={formData.github} onChange={handleInputChange} className="bg-transparent text-sm border-none outline-none flex-1 text-white w-full" />
                </div>
                <div className="flex items-center bg-zinc-800/50 border border-zinc-700 rounded-xl px-3 py-2 flex-1">
                  <Linkedin className="w-4 h-4 text-zinc-500 mr-2" />
                  <input type="text" name="linkedin" placeholder="Username" value={formData.linkedin} onChange={handleInputChange} className="bg-transparent text-sm border-none outline-none flex-1 text-white w-full" />
                </div>
                <div className="flex items-center bg-zinc-800/50 border border-zinc-700 rounded-xl px-3 py-2 flex-1">
                  <Youtube className="w-4 h-4 text-zinc-500 mr-2" />
                  <input type="text" name="youtube" placeholder="Channel" value={formData.youtube} onChange={handleInputChange} className="bg-transparent text-sm border-none outline-none flex-1 text-white w-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Top Skills (comma separated)</label>
              <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} className="bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>

            <button disabled={isSaving} type="submit" className="mt-4 bg-white text-black font-bold py-3 px-6 rounded-xl flex justify-center items-center gap-2 hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed">
              <Save className="w-5 h-5" />
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        </div>

        {/* The Live Preview */}
        <div className="sticky top-8 hidden lg:flex justify-center items-start">
          <div className="w-[375px] h-[750px] border-[8px] border-zinc-800 rounded-[2.5rem] bg-black overflow-hidden shadow-2xl relative text-white">
            <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-purple-600/40 to-transparent"></div>
            <div className="p-6 pt-20 flex flex-col h-full relative z-10 overflow-y-auto hide-scrollbar">
              
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 mb-6 p-1">
                <div className="w-full h-full rounded-full bg-zinc-900 border-2 border-transparent overflow-hidden flex items-center justify-center">
                  {formData.image ? (
                    <img src={formData.image} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-zinc-600 text-xs text-center font-bold">Upload<br/>Pic</span>
                  )}
                </div>
              </div>

              <h2 className="text-3xl font-black mb-1">{formData.name || 'Your Name'}</h2>
              <p className="text-zinc-400 font-medium mb-4">@{formData.username || 'username'}</p>
              
              <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-xl text-purple-300 text-sm font-medium mb-6 inline-block w-fit">
                {formData.malayalamTagline || "Your vibe here..."}
              </div>

              <p className="text-zinc-300 leading-relaxed mb-8">
                {formData.bio || 'Your bio will appear here.'}
              </p>

              <h3 className="text-lg font-bold mb-3 border-b border-zinc-800 pb-2">Skills</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {formData.skills.split(',').map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-semibold">{skill.trim()}</span>
                ))}
              </div>

              <h3 className="text-lg font-bold mb-3 border-b border-zinc-800 pb-2 mt-auto pt-8">Connect</h3>
              <div className="flex gap-4">
                {formData.instagram && <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer"><Instagram className="w-5 h-5"/></div>}
                {formData.github && <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer"><Github className="w-5 h-5"/></div>}
                {formData.linkedin && <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer"><Linkedin className="w-5 h-5"/></div>}
                {formData.youtube && <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition cursor-pointer"><Youtube className="w-5 h-5"/></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
