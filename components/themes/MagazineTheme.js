"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function MagazineTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-serif pb-24 selection:bg-yellow-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Newspaper Style Header */}
        <header className="pt-24 pb-12 border-b-8 border-black mb-16 text-center">
           <div className="flex justify-between items-end mb-8 uppercase text-[10px] md:text-xs font-black tracking-[0.4em] font-sans">
              <span>VOL. 01 ISSUE. 2026</span>
              <span className="hidden md:block">KERALA, INDIA</span>
              <span>SPECIAL EDITION</span>
           </div>
           <h1 className="text-6xl md:text-9xl lg:text-[12rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
             {data.name}
           </h1>
           <div className="flex flex-col md:flex-row justify-between items-center border-t border-black pt-8 gap-6 md:gap-0">
              <div className="flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full border-2 border-black overflow-hidden bg-white grayscale">
                    {data.image ? <img src={data.image} alt="" className="w-full h-full object-cover" /> : null}
                 </div>
                 <div className="text-left font-sans">
                    <p className="text-xs font-black uppercase tracking-widest">Digital Architect</p>
                    <p className="text-sm font-bold opacity-60">@{data.username}</p>
                 </div>
              </div>
              <div className="flex items-center gap-8 font-black font-sans uppercase text-[10px] md:text-sm tracking-widest">
                 {portfolio?.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {portfolio.location}</div>}
                 <div>{new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
              </div>
           </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Left Sidebar Column */}
           <div className="lg:col-span-3 space-y-12 border-r-0 lg:border-r border-black pr-0 lg:pr-12">
              <div className="font-sans">
                 <h3 className="text-xs font-black uppercase tracking-widest border-b border-black pb-4 mb-6">Expertise</h3>
                 <div className="space-y-4">
                    {portfolio?.skills?.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between text-sm font-bold border-b border-black/10 pb-2">
                        <span>{skill}</span>
                        <Plus className="w-3 h-3" />
                      </div>
                    ))}
                 </div>
              </div>

              <div className="font-sans">
                 <h3 className="text-xs font-black uppercase tracking-widest border-b border-black pb-4 mb-6">Social</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {portfolio?.socialLinks?.map((link, idx) => (
                      <a key={idx} href={link.url} target="_blank" className="flex items-center gap-2 text-xs font-bold hover:underline transition-all group italic">
                        <SocialIcon platform={link.platform} className="w-4 h-4" /> {link.platform}
                      </a>
                    ))}
                 </div>
              </div>

              <div className="font-sans pt-8">
                 <h3 className="text-xs font-black uppercase tracking-widest border-b border-black pb-4 mb-6">Connect</h3>
                 <div className="space-y-3">
                   {portfolio?.contactEmail && (
                     <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-black text-white font-black py-4 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-400 hover:text-black transition-all shadow-xl text-xs uppercase tracking-widest">
                       <Mail className="w-4 h-4" /> Email Me
                     </a>
                   )}
                   {portfolio?.whatsapp && (
                     <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full border-2 border-black text-black font-black py-4 rounded-full flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all text-xs uppercase tracking-widest">
                       <MessageCircle className="w-4 h-4" /> WhatsApp
                     </a>
                   )}
                 </div>
              </div>
           </div>

           {/* Main Body Column */}
           <div className="lg:col-span-9 space-y-16">
              <section className="relative">
                 <div className="absolute -top-12 left-0 text-[10rem] font-black opacity-10 select-none pointer-events-none italic">01</div>
                 <h2 className="text-3xl md:text-6xl font-black mb-8 leading-[1.1] relative z-10 italic">
                   &ldquo;{portfolio?.bio}&rdquo;
                 </h2>
                 {portfolio?.malayalamTagline && (
                    <p className="text-2xl font-bold font-sans italic opacity-60">
                      {portfolio.malayalamTagline}
                    </p>
                 )}
              </section>

              {portfolio?.projects?.length > 0 && (
                <section className="pt-16 border-t border-black">
                   <div className="flex items-center justify-between mb-12">
                      <h3 className="text-xs font-black font-sans uppercase tracking-[0.4em]">Curated Works</h3>
                      <ExternalLink className="w-6 h-6" />
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">
                      {portfolio.projects.map((project, idx) => (
                        <a key={idx} href={project.link || '#'} target="_blank" className="group block space-y-6">
                           <div className="relative aspect-video overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-white">
                              {project.image ? (
                                <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-zinc-300 font-bold border border-black/5">PLATE_{idx}</div>
                              )}
                              <div className="absolute bottom-4 left-4 inline-block bg-black text-white text-[10px] font-black px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                View Experience
                              </div>
                           </div>
                           <div className="space-y-3">
                              <h4 className="text-3xl font-black italic group-hover:translate-x-4 transition-transform duration-500">{project.title}</h4>
                              <p className="text-lg md:text-xl font-medium leading-relaxed font-sans opacity-70">
                                {project.description}
                              </p>
                              <div className="h-1 w-full bg-black/5 group-hover:bg-black transition-colors"></div>
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
