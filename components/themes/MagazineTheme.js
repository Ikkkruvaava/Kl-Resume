"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, Plus, Minus, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function MagazineTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#F0F0F2] text-black font-serif pb-24 selection:bg-yellow-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Newspaper Style Header */}
        <header className="pt-24 pb-12 border-b-8 border-black mb-16 text-center">
           <div className="flex justify-between items-end mb-8 uppercase text-[10px] md:text-xs font-black tracking-[0.4em] font-sans">
              <span>VOL. 2.1 ISSUE. 2026</span>
              <span className="hidden md:block">KOCHI, KERALA EDITION</span>
              <span>LATEST CLASSIFIEDS</span>
           </div>
           <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
             {data.name}
           </h1>
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-black pt-8 gap-6 md:gap-0 font-sans">
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-white grayscale group hover:grayscale-0 transition-all">
                    {data.image ? <img src={data.image} alt="" className="w-full h-full object-cover" /> : null}
                 </div>
                 <div className="text-left">
                    <p className="text-sm font-black uppercase tracking-widest">{portfolio?.careerField || 'Creative Architect'}</p>
                    <p className="text-xs font-bold opacity-60 italic">@{data.username}</p>
                 </div>
              </div>
              <div className="flex items-center gap-8 font-black uppercase text-[10px] md:text-sm tracking-widest">
                 {portfolio?.location && <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-600" /> {portfolio.location}</div>}
                 <div className="bg-black text-white px-3 py-1 italic tracking-normal">{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'long', year: 'numeric' })}</div>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Left Column (Expertise & Socials) */}
           <div className="lg:col-span-3 space-y-12 lg:border-r border-black/40 pr-0 lg:pr-12">
              <div className="font-sans">
                 <h3 className="text-xs font-black uppercase tracking-widest border-b border-black pb-4 mb-6 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Core Arsenal
                 </h3>
                 <div className="space-y-4">
                    {portfolio?.skills?.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm font-bold border-b border-black/10 pb-2 hover:bg-yellow-100 transition-colors cursor-default">
                        <span>{skill}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-30" />
                      </div>
                    ))}
                 </div>
              </div>

              {portfolio?.education?.length > 0 && (
                <div className="font-sans">
                   <h3 className="text-xs font-black uppercase tracking-widest border-b border-black pb-4 mb-6">Education</h3>
                   <div className="space-y-6">
                      {portfolio.education.map((edu, idx) => (
                        <div key={idx} className="group cursor-default">
                           <p className="text-sm font-black uppercase leading-tight">{edu.degree}</p>
                           <p className="text-xs font-bold opacity-60 mb-2">{edu.school}</p>
                           <span className="text-[10px] bg-black text-white px-2 py-0.5 font-bold tracking-widest uppercase italic">{edu.year}</span>
                        </div>
                      ))}
                   </div>
                </div>
              )}

              <div className="font-sans pt-8 border-t border-black">
                 <h3 className="text-xs font-black uppercase tracking-widest border-b border-black pb-4 mb-6">Network</h3>
                 <div className="space-y-3">
                   {portfolio?.contactEmail && (
                     <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-black text-white font-black py-4 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition-all shadow-xl text-xs uppercase tracking-widest">
                       <Mail className="w-4 h-4" /> Dispatch Email
                     </a>
                   )}
                   {portfolio?.whatsapp && (
                     <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full border-2 border-black text-black font-black py-4 rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest">
                       <MessageCircle className="w-4 h-4 shadow-[0_0_10px_rgba(37,211,102,0.2)]" /> WhatsApp Line
                     </a>
                   )}
                 </div>
                 <div className="flex flex-wrap gap-3 mt-6">
                    {portfolio?.socialLinks?.map((link, idx) => (
                      <a key={idx} href={link.url} title={link.platform} target="_blank" className="w-10 h-10 border border-black flex items-center justify-center hover:bg-yellow-300 transition-all">
                        <SocialIcon platform={link.platform} className="w-4 h-4" />
                      </a>
                    ))}
                 </div>
              </div>
           </div>

           {/* Main Column */}
           <div className="lg:col-span-9 space-y-20">
              <section className="relative">
                 <div className="absolute -top-16 left-[-2rem] text-[12rem] font-black opacity-5 select-none pointer-events-none italic">ED</div>
                 <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.05] relative z-10 italic tracking-tighter max-w-4xl">
                   &ldquo;{portfolio?.bio}&rdquo;
                 </h2>
                 <div className="h-1 w-24 bg-red-600 mb-8"></div>
                 {portfolio?.malayalamTagline && (
                    <p className="text-2xl font-bold font-sans italic opacity-40 uppercase tracking-[0.1em]">
                      {portfolio.malayalamTagline}
                    </p>
                 )}
              </section>

              {portfolio?.experience?.length > 0 && (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans pt-16 border-t border-black/20">
                  <div className="md:col-span-2">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] mb-12">Professional Narrative</h3>
                  </div>
                  {portfolio.experience.map((exp, idx) => (
                    <div key={idx} className="space-y-4 border-b border-black pb-8 last:border-b-0 md:border-b-0 md:even:border-l border-black/10 md:even:pl-12">
                       <span className="text-[10px] font-black bg-zinc-200 px-3 py-1 italic tracking-widest">{exp.duration}</span>
                       <h4 className="text-4xl font-black uppercase italic leading-none group-hover:text-red-600 transition-colors tracking-tighter">{exp.role}</h4>
                       <p className="text-xl font-bold opacity-60">@{exp.company}</p>
                       <p className="text-lg leading-relaxed text-zinc-600 max-w-md">
                         {exp.description}
                       </p>
                    </div>
                  ))}
                </section>
              )}

              {portfolio?.projects?.length > 0 && (
                <section className="pt-16 border-t-8 border-black">
                   <div className="flex items-center justify-between mb-16">
                      <h3 className="text-[10px] font-black font-sans uppercase tracking-[0.5em] bg-black text-white px-4 py-2">Exclusive Portfolio</h3>
                      <div className="flex-1 border-b-2 border-dashed border-black mx-4"></div>
                      <ExternalLink className="w-6 h-6" />
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
                      {portfolio.projects.map((project, idx) => (
                        <a key={idx} href={project.link || '#'} target="_blank" className="group block space-y-6">
                           <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-white border border-black p-1">
                              {project.image ? (
                                <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-300 font-bold border border-black/5 bg-zinc-50 font-sans">FILE_NOT_FOUND</div>
                              )}
                              <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                 <div className="bg-white text-black text-xs font-black px-6 py-3 border border-black shadow-[4px_4px_0px_black] uppercase tracking-widest flex items-center gap-2">
                                    Open Document <ArrowUpRight className="w-4 h-4" />
                                 </div>
                              </div>
                           </div>
                           <div className="space-y-4">
                              <h4 className="text-4xl font-black italic group-hover:translate-x-4 transition-transform duration-500 tracking-tighter uppercase">{project.title}</h4>
                              <p className="text-lg md:text-xl font-medium leading-relaxed font-sans opacity-70 line-clamp-3">
                                {project.description}
                              </p>
                              <div className="h-[2px] w-full bg-black/10 group-hover:bg-red-600 transition-colors"></div>
                           </div>
                        </a>
                      ))}
                   </div>
                </section>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
