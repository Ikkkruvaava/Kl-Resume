"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function AuroraTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans pb-20 relative overflow-hidden selection:bg-cyan-500/30">
      {/* Animated Aurora Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-cyan-600/20 blur-[120px] rounded-full animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-emerald-600/10 blur-[100px] rounded-full animate-pulse [animation-delay:4s]"></div>
      </div>

      <main className="max-w-5xl mx-auto px-6 pt-24 relative z-10">
        <header className="flex flex-col items-center text-center mb-16">
          <div className="relative mb-8 pt-4">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 blur-2xl opacity-20 scale-150 rounded-full"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl rotate-3 bg-slate-900 flex items-center justify-center">
              {data.image ? (
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 font-black text-center px-4">NO IMAGE</div>
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-xl uppercase tracking-widest border border-white/20">
               Verified
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent italic">
            {data.name}
          </h1>
          <p className="text-cyan-400 font-black text-lg md:text-2xl tracking-[0.2em] uppercase mb-4 opacity-90 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
            {portfolio?.careerField || 'Creative Architect'}
          </p>
          <p className="text-white/40 font-bold text-sm mb-8 tracking-widest">
            @{data.username}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {portfolio?.location && (
              <div className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-300 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-cyan-500" /> {portfolio.location}
              </div>
            )}
            <div className="flex items-center gap-2 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs font-bold text-purple-300 backdrop-blur-md">
               PREMIUM_TIER_USER
            </div>
          </div>
        </header>

        {/* Career Intelligence (Work & Education) */}
        {(portfolio?.experience?.length > 0 || portfolio?.education?.length > 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
             {portfolio?.experience?.length > 0 && (
               <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl group transition-all duration-500 hover:bg-white/[0.07]">
                 <h3 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
                   <Briefcase className="w-4 h-4" /> Work History
                 </h3>
                 <div className="space-y-10">
                   {portfolio.experience.map((exp, idx) => (
                     <div key={idx} className="relative pl-6 border-l border-white/10">
                       <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>
                       <p className="text-white font-black text-lg leading-tight uppercase tracking-tight mb-1">{exp.role}</p>
                       <p className="text-cyan-400/70 text-xs font-bold mb-3">{exp.company} &bull; {exp.duration}</p>
                       <p className="text-slate-400 text-xs leading-relaxed group-hover:text-slate-300 transition-colors">{exp.description}</p>
                     </div>
                   ))}
                 </div>
               </section>
             )}

             {portfolio?.education?.length > 0 && (
               <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-10 shadow-2xl group transition-all duration-500 hover:bg-white/[0.07]">
                 <h3 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
                   <GraduationCap className="w-4 h-4" /> Academic Log
                 </h3>
                 <div className="space-y-8">
                    {portfolio.education.map((edu, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-white/5 to-transparent p-5 rounded-3xl border border-white/5">
                        <p className="text-white font-black text-base uppercase tracking-tight leading-tight">{edu.degree}</p>
                        <p className="text-purple-400/80 text-xs mt-1 font-bold">{edu.school}</p>
                        <div className="mt-4 text-[10px] font-black text-white bg-purple-500/20 px-3 py-1 rounded-full w-fit border border-purple-500/30">
                          CLASS: {edu.year}
                        </div>
                      </div>
                    ))}
                 </div>
               </section>
             )}
          </div>
        )}

        <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 md:p-12 mb-8 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
           <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <h3 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-8">Role Bio</h3>
           <p className="text-xl md:text-3xl font-medium leading-relaxed text-slate-200">
             {portfolio?.bio}
           </p>
           {portfolio?.malayalamTagline && (
             <p className="mt-8 text-sm md:text-lg italic text-slate-400 font-medium opacity-60">
               &ldquo;{portfolio.malayalamTagline}&rdquo;
             </p>
           )}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
           <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8">
              <h3 className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-6">Social Grid</h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {portfolio?.socialLinks?.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all shadow-lg active:scale-90 group/icon">
                    <SocialIcon platform={link.platform} className="w-6 h-6 group-hover/icon:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3">
                 {portfolio?.contactEmail && (
                   <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all active:scale-95 shadow-xl uppercase text-xs tracking-widest">
                     <Mail className="w-5 h-5" /> Professional Outreach
                   </a>
                 )}
                 {portfolio?.whatsapp && (
                   <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#25D366]/20 transition-all active:scale-95 uppercase text-xs tracking-widest">
                     <MessageCircle className="w-5 h-5" /> Quick Contact
                   </a>
                 )}
              </div>
           </div>

           <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 uppercase overflow-hidden relative">
              <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-purple-500/20 blur-3xl rounded-full"></div>
              <h3 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio?.skills?.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-xl text-[10px] md:text-sm font-black text-slate-300 hover:bg-cyan-500 hover:text-black transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
           </div>
        </div>

        {portfolio?.projects?.length > 0 && (
          <section className="space-y-8 pb-20">
            <div className="flex items-center justify-between px-4">
               <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Project Archive</h3>
               <div className="h-[1px] flex-1 mx-6 bg-white/10"></div>
               <ArrowUpRight className="w-5 h-5 text-cyan-500" />
            </div>
            {portfolio.projects.map((project, idx) => (
              <a key={idx} href={project.link || '#'} target="_blank" className="group block bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-4 md:p-6 transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/[0.08] relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {project.image && (
                    <div className="w-full md:w-1/2 aspect-video bg-black rounded-[2rem] overflow-hidden border border-white/10">
                      <img src={project.image} alt="" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                    </div>
                  )}
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl md:text-4xl font-black mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{project.title}</h4>
                    <p className="text-sm md:text-lg text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors mb-6">{project.description}</p>
                    <div className="inline-flex items-center gap-2 text-xs font-black text-cyan-500 border border-cyan-500/20 px-6 py-2.5 rounded-full uppercase tracking-widest group-hover:bg-cyan-500 group-hover:text-black transition-all">
                       Examine System &gt;
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
