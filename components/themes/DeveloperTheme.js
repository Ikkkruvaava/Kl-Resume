"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, Github, BookOpen, Star, GitBranch, Layers, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function DeveloperTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans pb-20 selection:bg-[#58a6ff66] overflow-x-hidden">
      
      {/* GitHub Style Top Nav Mock */}
      <div className="w-full bg-[#161b22] border-b border-[#30363d] py-3 px-4 md:px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3 md:gap-4">
          <Github className="w-6 h-6 md:w-8 md:h-8 text-white" />
          <nav className="hidden md:flex items-center gap-4 text-sm font-semibold text-white">
            <span className="hover:text-[#8b949e] cursor-pointer transition-colors">Product</span>
            <span className="hover:text-[#8b949e] cursor-pointer transition-colors">Solutions</span>
            <span className="hover:text-[#8b949e] cursor-pointer transition-colors">Open Source</span>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#30363d] border border-[#444c56]"></div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 pt-8 flex flex-col md:flex-row gap-4 md:gap-8">
        
        {/* Left Sidebar (Profile Info) */}
        <div className="w-full md:w-[296px] shrink-0">
          <div className="relative mb-6 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
            <div className="relative group">
               <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-full md:h-auto md:aspect-square rounded-full md:rounded-lg border border-[#30363d] overflow-hidden shadow-2xl relative z-10 transition-transform hover:scale-[1.01]">
                {data.image ? (
                  <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#21262d] flex items-center justify-center text-[#8b949e] text-xs font-bold text-center px-4">404_AVATAR</div>
                )}
              </div>
            </div>
            
            <div className="md:mt-4 text-left">
              <h1 className="text-xl md:text-2xl font-bold text-[#c9d1d9] leading-tight">{data.name}</h1>
              <p className="text-[#8b949e] font-light text-base mb-2">@{data.username}</p>
              <div className="text-[#c9d1d9] font-semibold text-sm h-fit px-2 py-0.5 border border-[#30363d] rounded-full w-fit bg-[#161b22]">
                {portfolio?.careerField || 'Software Engineer'}
              </div>
            </div>
          </div>

          <p className="text-[#c9d1d9] text-sm leading-relaxed mb-6 px-1">{portfolio?.bio}</p>

          <div className="flex flex-col gap-2 mb-6">
            {portfolio?.contactEmail && (
              <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] text-[#c9d1d9] font-semibold py-2 px-4 rounded-md transition text-center text-sm shadow-sm active:bg-[#282e37]">
                Connect via Email
              </a>
            )}
            {portfolio?.whatsapp && (
              <a href={`https://wa.me/${portfolio.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full bg-[#238636] hover:bg-[#2ea043] text-white font-semibold py-2 px-4 rounded-md transition text-center text-sm shadow-sm flex items-center justify-center gap-2 active:bg-[#2a913d]">
                 <MessageCircle className="w-4 h-4 text-white/80" /> WhatsApp Ping
              </a>
            )}
          </div>

          <div className="space-y-3 mb-8 pt-4 border-t border-[#30363d]">
             {portfolio?.malayalamTagline && (
              <div className="flex items-start gap-2 text-[#c9d1d9] text-sm leading-tight">
                <BookOpen className="w-4 h-4 text-[#8b949e] shrink-0 mt-0.5" /> <span className="italic">"{portfolio.malayalamTagline}"</span>
              </div>
            )}
            {portfolio?.location && (
              <div className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <MapPin className="w-4 h-4 text-[#8b949e]" /> {portfolio.location}
              </div>
            )}
          </div>

          <div className="mb-8 border-t border-[#30363d] pt-4">
            <h3 className="text-sm font-semibold text-[#8b949e] mb-3 uppercase tracking-tighter text-[10px]">Links</h3>
            <div className="flex flex-col gap-2">
              {portfolio?.socialLinks?.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" className="flex items-center gap-2 text-[#58a6ff] hover:underline text-sm font-semibold group italic">
                  <ExternalLink className="w-4 h-4 text-[#8b949e] group-hover:text-[#58a6ff] transition-colors" /> {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0">
          
          {/* Tabs */}
          <div className="w-full border-b border-[#30363d] mb-6 flex overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-[#f78166] text-[#c9d1d9] font-semibold text-sm cursor-pointer whitespace-nowrap">
              <BookOpen className="w-4 h-4 text-[#8b949e]" /> Overview
            </div>
            <div className="flex items-center gap-2 px-4 py-3 text-[#c9d1d9] hover:bg-[#21262d] rounded-t-md cursor-pointer transition text-sm whitespace-nowrap opacity-60">
              <Github className="w-4 h-4 text-[#8b949e]" /> Repositories <span className="bg-[#30363d] text-[#c9d1d9] text-xs px-2 py-0.5 rounded-full">{portfolio?.projects?.length || 0}</span>
            </div>
          </div>

          {/* Role Timeline (Experience) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            <div className="lg:col-span-8">
               <div className="mb-8 bg-[#0d1117] border border-[#30363d] rounded-md overflow-hidden">
                <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
                   <h3 className="text-xs font-semibold text-[#c9d1d9] flex items-center gap-2 uppercase tracking-widest">
                     <Briefcase className="w-4 h-4 text-[#8b949e]" /> Professional History
                   </h3>
                </div>
                <div className="p-4 md:p-6 space-y-8">
                   {portfolio?.experience?.length > 0 ? (
                     portfolio.experience.map((exp, idx) => (
                       <div key={idx} className="relative pl-6 border-l border-[#30363d]">
                         <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-[#30363d] border border-[#0d1117]"></div>
                         <h4 className="text-[#c9d1d9] font-bold text-base leading-tight mb-1">{exp.role}</h4>
                         <p className="text-[#8b949e] text-sm mb-3">@ {exp.company} &bull; {exp.duration}</p>
                         <p className="text-[#8b949e] text-xs leading-relaxed max-w-2xl">{exp.description}</p>
                       </div>
                     ))
                   ) : (
                     <p className="text-[#8b949e] text-sm italic">Initializing history cluster... 0% populated.</p>
                   )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
               <div className="bg-[#0d1117] border border-[#30363d] rounded-md overflow-hidden h-fit">
                  <div className="bg-[#161b22] px-4 py-3 border-b border-[#30363d]">
                    <h3 className="text-xs font-semibold text-[#c9d1d9] flex items-center gap-2 uppercase tracking-widest">
                       <GraduationCap className="w-4 h-4 text-[#8b949e]" /> Education
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {portfolio?.education?.map((edu, idx) => (
                      <div key={idx} className="bg-[#161b22]/50 p-3 rounded-md border border-[#30363d]">
                        <p className="text-[#c9d1d9] font-bold text-sm leading-tight">{edu.degree}</p>
                        <p className="text-[#8b949e] text-xs mt-1">{edu.school}</p>
                        <p className="text-[#58a6ff] text-[10px] font-black mt-2">CY_{edu.year}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          <div className="mb-8 border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
            <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center justify-between">
               <div className="flex items-center gap-2 text-xs font-semibold text-[#8b949e]">
                 <span className="text-[#c9d1d9]">{data.username}</span> / expertise.sh
               </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-wrap gap-2">
                {portfolio?.skills?.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-full text-xs font-semibold text-[#58a6ff] hover:border-[#58a6ff] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <h3 className="text-base font-semibold text-[#c9d1d9] mb-4 flex items-center justify-between lg:px-1">
             <span className="flex items-center gap-2 uppercase tracking-tighter text-xs">Pinned Projects / var/www</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
            {portfolio?.projects?.map((project, idx) => (
              <div key={idx} className="border border-[#30363d] rounded-md p-4 bg-[#0d1117] flex flex-col h-full hover:border-[#8b949e] transition shadow-sm group">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-[#8b949e]" />
                  <a href={project.link || '#'} target="_blank" className="font-semibold text-[#58a6ff] hover:underline whitespace-nowrap overflow-hidden text-ellipsis text-sm md:text-base">
                    {project.title}
                  </a>
                  <span className="ml-auto border border-[#30363d] rounded-full px-2 py-0.5 text-[10px] text-[#8b949e] font-bold uppercase tracking-tight">Public</span>
                </div>
                
                {project.image && (
                  <div className="w-full relative aspect-[21/9] overflow-hidden rounded-md border border-[#30363d] mb-4 bg-black">
                    <img src={project.image} alt="" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                  </div>
                )}
                
                <p className="text-[#8b949e] text-xs leading-relaxed mb-6 flex-1 line-clamp-2 font-medium">{project.description}</p>
                
                <div className="flex items-center gap-6 text-[10px] md:text-xs text-[#8b949e] mt-auto font-bold tracking-tight">
                  <div className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#f1e05a]"></span> JS_STACK</div>
                  <div className="flex items-center gap-1.5 hover:text-[#58a6ff] cursor-pointer transition-colors"><Star className="w-4 h-4" /> 1.{idx + 4}k</div>
                  <div className="flex items-center gap-1.5 hover:text-[#58a6ff] cursor-pointer transition-colors"><GitBranch className="w-4 h-4" /> {idx * 2 + 10}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
