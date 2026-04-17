"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, ShieldCheck, Zap, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function CyberTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-black text-[#f2ff00] font-sans pb-24 relative overflow-hidden selection:bg-[#f2ff00] selection:text-black">
      {/* HUD Overlays */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40 opacity-20 bg-[radial-gradient(#f2ff0011_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* Side HUD Lines */}
      <div className="fixed top-0 left-4 w-px h-full bg-[#f2ff0033] hidden md:block"></div>
      <div className="fixed top-0 right-4 w-px h-full bg-[#f2ff0033] hidden md:block"></div>

      <main className="max-w-6xl mx-auto px-6 pt-16 relative z-10">
        
        <header className="flex flex-col md:flex-row items-center gap-12 mb-20">
           <div className="relative group shrink-0">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#f2ff00] to-transparent opacity-20 animate-pulse rounded-full"></div>
              <div className="relative w-40 h-40 md:w-56 md:h-56 clip-path-polygon rounded-none bg-black border-2 border-[#f2ff00] p-1 shadow-[0_0_30px_#f2ff0033]">
                 {data.image ? (
                   <img src={data.image} alt="" className="w-full h-full object-cover grayscale brightness-75 contrast-125" />
                 ) : (
                   <div className="w-full h-full bg-black flex items-center justify-center text-[10px] font-black italic text-center px-4">BIO_SCN_FAILURE</div>
                 )}
                 <div className="absolute top-0 left-0 p-2 bg-[#f2ff00] text-black text-[10px] font-black uppercase tracking-tighter">OP:ALPHA_7</div>
              </div>
           </div>

           <div className="text-center md:text-left flex-1 relative">
              <div className="absolute -top-10 left-0 text-[10px] font-black opacity-30 flex items-center gap-2 tracking-widest">
                 <ShieldCheck className="w-3 h-3 text-[#f2ff00]" /> SECTOR_AUTHENTICATION_OK
              </div>
              <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-[4px_4px_0px_#f2ff00]">
                {data.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <span className="bg-[#f2ff00] text-black px-6 py-2 text-sm font-black italic skew-x-[-12deg] tracking-widest uppercase">
                  {portfolio?.careerField || 'Engineering Unit'}
                </span>
                <span className="border border-[#f2ff00]/50 text-[#f2ff00]/60 px-4 py-1 text-xs font-bold flex items-center gap-2 uppercase tracking-widest">
                   @{data.username}
                </span>
                {portfolio?.location && (
                  <span className="border border-[#f2ff00]/50 text-[#f2ff00] px-4 py-1 text-xs font-bold flex items-center gap-2 uppercase tracking-widest bg-[#f2ff00]/5">
                    <MapPin className="w-4 h-4" /> {portfolio.location}
                  </span>
                )}
              </div>
              {portfolio?.malayalamTagline && (
                <div className="text-lg md:text-2xl font-black italic text-white/50 border-l-4 border-[#f2ff00] pl-6 uppercase tracking-tight bg-gradient-to-r from-[#f2ff0011] to-transparent py-2">
                  &ldquo;{portfolio.malayalamTagline}&rdquo;
                </div>
              )}
           </div>
        </header>

        {/* Career Clusters (NEW) */}
        {(portfolio?.experience?.length > 0 || portfolio?.education?.length > 0) && (
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-1">
             {portfolio?.experience?.length > 0 && (
               <div className="bg-[#111] border border-[#f2ff0033] p-8 relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-r-2 border-t-2 border-[#f2ff00]/20"></div>
                  <h3 className="text-[10px] font-black text-[#f2ff00] uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Service Record
                  </h3>
                  <div className="space-y-10">
                    {portfolio.experience.map((exp, idx) => (
                      <div key={idx} className="relative pl-6 border-l border-[#f2ff0033] hover:border-[#f2ff00] transition-colors">
                        <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-[#f2ff00] shadow-[0_0_10px_#f2ff00]"></div>
                        <p className="text-[#f2ff00] font-black text-lg leading-tight uppercase tracking-tighter">{exp.role}</p>
                        <p className="text-white/40 text-[10px] font-black mb-2 italic">@ {exp.company.toUpperCase()} &bull; {exp.duration.toUpperCase()}</p>
                        <p className="text-white/60 text-xs leading-relaxed uppercase font-bold tracking-tight">{exp.description}</p>
                      </div>
                    ))}
                  </div>
               </div>
             )}

             {portfolio?.education?.length > 0 && (
               <div className="bg-[#111] border border-[#f2ff0033] p-8 relative overflow-hidden group">
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#f2ff00]/20"></div>
                  <h3 className="text-[10px] font-black text-[#f2ff00] uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Academic Nodes
                  </h3>
                  <div className="space-y-6">
                    {portfolio.education.map((edu, idx) => (
                      <div key={idx} className="border-t border-[#f2ff0011] pt-4 group/edu">
                        <p className="text-white font-black text-lg group-hover:text-[#f2ff00] transition-colors uppercase leading-none">{edu.degree}</p>
                        <p className="text-[#f2ff00]/40 text-xs font-bold mt-1 uppercase tracking-tighter">{edu.school}</p>
                        <div className="mt-4 text-[10px] font-black bg-[#f2ff00] text-black px-3 py-1 w-fit italic">TIMESTAMP: {edu.year}</div>
                      </div>
                    ))}
                  </div>
               </div>
             )}
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
           {/* Bio Block */}
           <div className="md:col-span-8 bg-[#111] border-l-4 border-[#f2ff00] p-8 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 p-2 text-[#f2ff0011] font-black text-6xl italic select-none">DATA_PULSE</div>
              <h3 className="text-[10px] font-black opacity-50 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                <Zap className="w-3 h-3 text-[#f2ff00]" /> Intelligence Report
              </h3>
              <p className="text-xl md:text-3xl font-black italic uppercase leading-none text-white transition-all group-hover:text-[#f2ff00] tracking-tighter">
                {portfolio?.bio}
              </p>
           </div>

           {/* Skills Block */}
           <div className="md:col-span-4 bg-[#f2ff00] text-black p-8 relative overflow-hidden italic">
              <div className="absolute top-[-20%] right-[-20%] w-32 h-32 bg-white/40 blur-3xl rounded-full"></div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 border-b border-black pb-2">Technical Loadouts</h3>
              <div className="flex flex-wrap gap-2">
                {portfolio?.skills?.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-black text-[#f2ff00] text-[10px] font-black uppercase tracking-tighter italic border border-black group-hover:bg-white transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
           </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4 py-8 border-y-2 border-[#f2ff0033]">
           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
             {portfolio?.socialLinks?.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" className="w-16 h-16 border-2 border-[#f2ff00] flex items-center justify-center hover:bg-[#f2ff00] hover:text-black transition-all group relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                   <SocialIcon platform={link.platform} className="w-8 h-8 group-hover:scale-110 transition-transform relative z-10" />
                </a>
             ))}
           </div>
           <div className="flex flex-col gap-3">
              {portfolio?.contactEmail && (
                <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-[#f2ff00] text-black font-black py-4 uppercase italic tracking-widest text-center hover:bg-white transition-all shadow-[6px_6px_0px_#444] active:shadow-none active:translate-x-1 active:translate-y-1">
                  ESTABLISH_DIRECT_COMMS_LINK
                </a>
              )}
              {portfolio?.whatsapp && (
                <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full border-2 border-[#f2ff00] text-[#f2ff00] font-black py-4 uppercase italic tracking-widest text-center hover:bg-[#f2ff00] hover:text-black transition-all">
                  SIGNAL_VIA_ENCRYPTED_WA
                </a>
              )}
           </div>
        </div>

        {portfolio?.projects?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
             <div className="md:col-span-2">
                <h3 className="text-[10px] font-black text-[#f2ff0055] uppercase tracking-[1em] text-center mb-8">Operational Artifacts</h3>
             </div>
             {portfolio.projects.map((project, idx) => (
               <a key={idx} href={project.link || '#'} target="_blank" className="group block space-y-4">
                  <div className="relative aspect-video bg-[#111] overflow-hidden border-b-4 border-[#f2ff00]/20 group-hover:border-[#f2ff00] transition-all duration-500 p-1">
                     {project.image ? (
                       <img src={project.image} alt="" className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
                     ) : (
                       <div className="w-full h-full bg-[#111] flex items-center justify-center text-[#f2ff0044] font-black italic">MOCK_RENDER_MISSING</div>
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                     <div className="absolute top-2 right-2 text-[8px] font-black text-[#f2ff00] bg-black px-2 py-1 border border-[#f2ff00]">OBJ_REF: 0x{idx}F</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black italic uppercase text-white group-hover:text-[#f2ff00] transition-colors leading-none tracking-tighter">{project.title}</h4>
                    <p className="text-xs font-bold text-[#f2ff00]/40 leading-relaxed uppercase tracking-widest mt-2">{project.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                       <span className="w-12 h-[1px] bg-[#f2ff00]/20 group-hover:w-full transition-all duration-700"></span>
                       <ArrowUpRight className="w-6 h-6 shrink-0 group-hover:rotate-45 transition-transform" />
                    </div>
                  </div>
               </a>
             ))}
          </div>
        )}

      </main>

      {/* Decorative Marks */}
      <div className="fixed bottom-0 left-0 w-full h-[10px] bg-gradient-to-r from-transparent via-[#f2ff00] to-transparent opacity-20"></div>
    </div>
  );
}
