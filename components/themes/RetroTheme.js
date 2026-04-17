"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, Monitor, Cpu } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function RetroTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#120458] text-[#ff00e0] font-mono pb-24 relative overflow-hidden selection:bg-[#00f3ff] selection:text-black">
      {/* Scanline & Grid Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
      
      {/* 80s Grid Floor */}
      <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(transparent,#2d0b5a),linear-gradient(90deg,#ff00e055_1px,transparent_1px),linear-gradient(#ff00e055_1px,transparent_1px)] bg-[length:100%_100%,40px_40px,40px_40px] [transform:perspective(500px)_rotateX(60deg)_translateY(100px)] [transform-origin:bottom] z-0 opacity-40"></div>

      <main className="max-w-4xl mx-auto px-6 pt-16 relative z-10">
        <header className="text-center mb-16 px-4 py-8 border-4 border-[#ff00e0] bg-[#120458] shadow-[0_0_20px_#ff00e0,inset_0_0_10px_#ff00e0]">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="relative shrink-0">
                <div className="absolute -inset-4 border-2 border-[#00f3ff] animate-pulse"></div>
                <div className="w-32 h-32 border-4 border-[#ff00e0] bg-black overflow-hidden relative">
                   {data.image ? (
                     <img src={data.image} alt="" className="w-full h-full object-cover grayscale brightness-125 contrast-125" />
                   ) : (
                     <div className="w-full h-full flex items-center justify-center text-[10px]">&gt; NOIMG</div>
                   )}
                </div>
             </div>
             <div className="text-center md:text-left flex-1">
                <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-2 text-[#00f3ff] drop-shadow-[4px_4px_0px_#ff00e0]">
                  {data.name}
                </h1>
                <p className="text-xl md:text-2xl font-bold bg-[#ff00e0] text-[#120458] px-4 py-1 inline-block skew-x-[-12deg]">
                  @{data.username}
                </p>
                <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start uppercase text-[10px] md:text-xs font-bold tracking-widest">
                   {portfolio?.location && <div className="flex items-center gap-2 text-[#00f3ff]"><MapPin className="w-4 h-4" /> {portfolio.location}</div>}
                   <div className="flex items-center gap-2 text-white"><Cpu className="w-4 h-4" /> RETROVIBE_SYSTEM_ACTIVE</div>
                </div>
             </div>
          </div>
        </header>

        <section className="border-4 border-[#00f3ff] bg-[#120458] p-6 md:p-10 mb-8 shadow-[0_0_15px_#00f3ff] relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-[#ff00e0]">
          <div className="flex items-center gap-4 mb-8">
             <Monitor className="w-6 h-6 text-[#00f3ff]" />
             <h3 className="text-xl font-black bg-[#00f3ff] text-black px-4 py-1 skew-x-[-15deg]">SYSTEM PROFILE</h3>
          </div>
          <p className="text-lg md:text-2xl leading-relaxed text-white">
            {portfolio?.bio}
          </p>
          {portfolio?.malayalamTagline && (
             <div className="mt-8 border-l-4 border-[#ff00e0] pl-6 py-2 text-[#ff00e0] font-bold text-sm md:text-lg">
               &gt; {portfolio.malayalamTagline}
             </div>
          )}
        </section>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
           <div className="md:col-span-2 border-4 border-[#ff00e0] bg-[#120458] p-6 shadow-[0_0_15px_#ff00e0] flex flex-col justify-center items-center">
              <h3 className="text-xs font-black uppercase mb-6 bg-[#ff00e0] text-black px-4 py-1 w-full text-center">NETWORK_LINK</h3>
              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {portfolio?.socialLinks?.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" className="w-12 h-12 border-2 border-[#00f3ff] flex items-center justify-center hover:bg-[#00f3ff] hover:text-black transition-all">
                    <SocialIcon platform={link.platform} className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="w-full flex flex-col gap-2">
                 {portfolio?.contactEmail && (
                   <a href={`mailto:${portfolio.contactEmail}`} className="w-full border-2 border-[#00f3ff] text-[#00f3ff] font-black py-3 text-sm text-center hover:bg-[#00f3ff] hover:text-black transition-all">
                     SEND_COMMAND
                   </a>
                 )}
                 {portfolio?.whatsapp && (
                   <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full border-2 border-[#ff00e0] text-[#ff00e0] font-black py-3 text-sm text-center hover:bg-[#ff00e0] hover:text-black transition-all">
                     PING_NODE
                   </a>
                 )}
              </div>
           </div>

           <div className="md:col-span-3 border-4 border-[#00f3ff] bg-[#120458] p-6 shadow-[0_0_15px_#00f3ff] relative overflow-hidden">
              <h3 className="text-xs font-black uppercase mb-6 bg-[#00f3ff] text-black px-4 py-1">TECH_STACK.exe</h3>
              <div className="flex flex-wrap gap-3">
                {portfolio?.skills?.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-black border border-[#00f3ff] text-[10px] md:text-xs font-bold text-white uppercase hover:bg-[#ff00e0] hover:border-[#ff00e0] transition-all">
                    [{skill}]
                  </span>
                ))}
              </div>
              <div className="absolute bottom-[-10px] right-[-10px] text-[60px] font-black opacity-10 select-none">VRC</div>
           </div>
        </div>

        {portfolio?.projects?.length > 0 && (
          <div className="space-y-4">
             {portfolio.projects.map((project, idx) => (
               <a key={idx} href={project.link || '#'} target="_blank" className="group block border-4 border-[#ff00e0] bg-black p-4 relative overflow-hidden hover:border-[#00f3ff] transition-all duration-300">
                  <div className="absolute top-0 right-0 px-4 py-1 bg-[#ff00e0] text-black text-[10px] font-black group-hover:bg-[#00f3ff]">0x{idx + 1}</div>
                  <div className="flex flex-col md:flex-row gap-6">
                     {project.image && (
                       <div className="w-full md:w-1/3 aspect-video bg-[#120458] border-2 border-[#00f3ff] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                         <img src={project.image} alt="" className="w-full h-full object-cover" />
                       </div>
                     )}
                     <div className="flex-1">
                        <h4 className="text-2xl font-black text-[#00f3ff] mb-2 uppercase group-hover:text-white transition-colors">{project.title}</h4>
                        <p className="text-white text-xs md:text-sm leading-relaxed mb-4 group-hover:text-[#ff00e0] transition-colors">{project.description}</p>
                        <span className="text-[10px] font-black inline-block text-[#00f3ff] border-b-2 border-transparent group-hover:border-[#00f3ff] transition-all">EXECUTE_VIEW &gt;_ </span>
                     </div>
                  </div>
               </a>
             ))}
          </div>
        )}
      </main>
    </div>
  );
}
