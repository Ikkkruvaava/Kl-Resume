"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ArrowUpRight, Github, ExternalLink, Sparkles, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function RetroTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#FFF4E0] text-black font-sans pb-24 selection:bg-[#B4E1FF]">
      
      {/* Neo-Brutalist Hero Section */}
      <header className="pt-20 pb-12 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative group">
           <div className="absolute top-4 left-4 w-full h-full bg-black rounded-3xl"></div>
           <div className="relative w-48 h-48 md:w-64 md:h-64 bg-[#B4E1FF] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {data.image ? (
                <img src={data.image} alt="" className="w-full h-full object-cover grayscale active:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-black text-2xl uppercase italic text-center px-4">IMG_NULL</div>
              )}
           </div>
        </div>

        <div className="flex-1 text-center md:text-left">
           <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 font-black uppercase text-sm mb-6 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {portfolio?.careerField || 'Creative Professional'}
           </div>
           <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6">
             {data.name}
           </h1>
           <p className="text-xl md:text-2xl font-bold mb-8 italic">
             @{data.username} &bull; <span className="underline decoration-4 decoration-[#B4E1FF]">Portfolio_v2.1</span>
           </p>
           
           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {portfolio?.location && (
                <div className="flex items-center gap-2 font-black text-sm border-2 border-black bg-white px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MapPin className="w-4 h-4 text-red-500" /> {portfolio.location}
                </div>
              )}
              <div className="flex items-center gap-2 font-black text-sm border-2 border-black bg-[#FFD6EC] px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Sparkles className="w-4 h-4 text-purple-600" /> AUTHENTIC_TALENT
              </div>
           </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Bio Section */}
        <section className="lg:col-span-8 bg-white border-4 border-black p-8 md:p-12 rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
           <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-zinc-400 border-b-2 border-zinc-100 pb-2 flex items-center gap-2">
             <span className="w-3 h-3 bg-red-500 rounded-full"></span> Profile Summary
           </h3>
           <p className="text-2xl md:text-4xl font-black leading-[1.1] mb-10 tracking-tight">
             {portfolio?.bio}
           </p>
           {portfolio?.malayalamTagline && (
             <div className="inline-block bg-[#B4E1FF] border-2 border-black px-6 py-3 font-bold text-lg md:text-xl rounded-2xl rotate-[1deg] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
               &ldquo;{portfolio.malayalamTagline}&rdquo;
             </div>
           )}
        </section>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
           <div className="bg-[#B4FFC2] border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-[10px] font-black uppercase mb-6 tracking-widest bg-black text-white px-3 py-1 w-fit">Tech arsenal</h3>
              <div className="flex flex-wrap gap-2">
                 {portfolio?.skills?.map((skill, index) => (
                   <span key={index} className="px-3 py-2 bg-white border-2 border-black font-black text-xs uppercase hover:bg-yellow-300 transition-colors">
                     {skill}
                   </span>
                 ))}
              </div>
           </div>

           <div className="bg-[#FFD6EC] border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-[10px] font-black uppercase mb-6 tracking-widest bg-black text-white px-3 py-1 w-fit">Direct links</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {portfolio?.socialLinks?.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" className="w-12 h-12 bg-white border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
                    <SocialIcon platform={link.platform} className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="space-y-3">
                 {portfolio?.contactEmail && (
                   <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-black text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:border-black border-2 border-transparent transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)]">
                     <Mail className="w-5 h-5" /> Message
                   </a>
                 )}
                 {portfolio?.whatsapp && (
                   <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full bg-white border-2 border-black text-black font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#25D366] hover:text-white transition-all active:scale-95">
                     <MessageCircle className="w-5 h-5" /> WhatsApp
                   </a>
                 )}
              </div>
           </div>
        </div>

        {/* Career & Education (Expanded) */}
        {(portfolio?.experience?.length > 0 || portfolio?.education?.length > 0) && (
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
             {portfolio?.experience?.length > 0 && (
               <section className="bg-white border-4 border-black p-8 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-8 bg-yellow-300 border-2 border-black px-4 py-1 w-fit shadow-[4px_4px_0px_black] flex items-center gap-2">
                    <Briefcase className="w-5 h-5" /> Professional History
                  </h3>
                  <div className="space-y-8">
                    {portfolio.experience.map((exp, idx) => (
                      <div key={idx} className="border-b-2 border-black/5 pb-6 last:border-0">
                        <p className="text-sm font-black uppercase tracking-widest text-[#58a6ff] mb-1">{exp.duration}</p>
                        <h4 className="text-2xl font-black uppercase leading-tight mb-1">{exp.role}</h4>
                        <p className="font-bold text-zinc-500 mb-4">@ {exp.company}</p>
                        <p className="text-sm font-bold text-zinc-600 leading-snug">{exp.description}</p>
                      </div>
                    ))}
                  </div>
               </section>
             )}

             {portfolio?.education?.length > 0 && (
               <section className="bg-[#B4E1FF] border-4 border-black p-8 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-8 bg-white border-2 border-black px-4 py-1 w-fit shadow-[4px_4px_0px_black] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" /> Education log
                  </h3>
                  <div className="space-y-6">
                    {portfolio.education.map((edu, idx) => (
                      <div key={idx} className="bg-white border-2 border-black p-5 rounded-2xl shadow-[4px_4px_0px_black]">
                        <p className="text-xl font-black tracking-tight leading-tight">{edu.degree}</p>
                        <p className="font-bold text-zinc-500">{edu.school}</p>
                        <div className="mt-4 inline-block bg-black text-white text-[10px] font-black px-3 py-1 uppercase tracking-[0.2em]">{edu.year}</div>
                      </div>
                    ))}
                  </div>
               </section>
             )}
          </div>
        )}

        {/* Projects Section */}
        {portfolio?.projects?.length > 0 && (
          <section className="lg:col-span-12 space-y-8 pt-12">
             <div className="flex items-center gap-4">
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Proof of Work</h3>
                <div className="flex-1 h-3 bg-black"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               {portfolio.projects.map((project, idx) => (
                 <a key={idx} href={project.link || '#'} target="_blank" className="group block bg-white border-4 border-black rounded-[3rem] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all relative overflow-hidden">
                    <div className="absolute top-6 right-6 p-3 bg-black text-white rounded-full group-hover:rotate-45 transition-transform">
                       <ArrowUpRight className="w-5 h-5" />
                    </div>
                    {project.image && (
                      <div className="w-full aspect-video border-4 border-black rounded-[2rem] overflow-hidden mb-8 bg-zinc-100">
                        <img src={project.image} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                    )}
                    <h4 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter italic group-hover:text-blue-600 transition-colors leading-none">{project.title}</h4>
                    <p className="text-lg md:text-xl font-bold text-zinc-600 leading-tight mb-6">{project.description}</p>
                    <div className="inline-block bg-zinc-900 px-6 py-2 rounded-full text-white font-bold uppercase text-xs tracking-widest group-hover:bg-[#B4E1FF] group-hover:text-black transition-colors">
                       Examine build &gt;
                    </div>
                 </a>
               ))}
             </div>
          </section>
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-6 mt-24 text-center">
         <div className="p-8 border-t-4 border-black">
            <p className="text-[10px] font-black uppercase tracking-[0.5em]">SYSTEM_VERSION_2.1 // POWERED_BY_KL_RESUME</p>
         </div>
      </footer>
    </div>
  );
}
