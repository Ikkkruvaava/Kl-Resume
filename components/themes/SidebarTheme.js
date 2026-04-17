"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function SidebarTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans flex flex-col lg:flex-row relative">
      
      {/* Sidebar - Mobile: Relative, Desktop: Sticky */}
      <aside className="w-full lg:w-[400px] bg-zinc-50 border-b lg:border-r border-zinc-200 p-6 md:p-10 flex flex-col justify-between sticky lg:top-0 h-auto lg:h-screen z-20 overflow-y-visible lg:overflow-y-auto">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white shadow-xl">
              {data.image ? (
                <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-zinc-200 flex items-center justify-center text-zinc-400 font-black text-xs px-4 text-center">NO IMAGE</div>
              )}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-1 text-zinc-900">{data.name}</h1>
          <p className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] mb-4">
            {portfolio?.careerField || 'Creative Professional'}
          </p>
          <p className="text-zinc-400 font-bold text-sm mb-6 tracking-tight">@{data.username}</p>
          
          {portfolio?.location && (
            <div className="flex items-center gap-1.5 text-zinc-500 text-sm font-bold mb-6 bg-white px-3 py-1 rounded-full border border-zinc-200 shadow-sm">
              <MapPin className="w-4 h-4 text-blue-500" /> {portfolio.location}
            </div>
          )}

          {portfolio?.malayalamTagline && (
            <div className="mb-8 relative group">
              <div className="absolute inset-0 bg-blue-500/5 rotate-2 rounded-xl"></div>
              <div className="relative px-4 py-2 border border-blue-100 text-blue-800 rounded-xl text-xs md:text-sm font-bold italic bg-white shadow-sm">
                "{portfolio.malayalamTagline}"
              </div>
            </div>
          )}

          <div className="w-full mb-8 pt-8 border-t border-zinc-200/60 hidden lg:block">
            <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {portfolio?.skills?.map((skill, index) => (
                <span key={index} className="px-3 py-1.5 bg-white border border-zinc-200 text-xs font-bold text-zinc-700 rounded-lg shadow-sm hover:border-blue-300 hover:text-blue-600 transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full pt-8 lg:pt-0">
          <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-4 text-center lg:text-left">Network</h3>
           <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
            {portfolio?.socialLinks?.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" className="p-3 bg-white border border-zinc-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 rounded-xl transition-all shadow-sm group">
                <SocialIcon platform={link.platform} className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {portfolio?.contactEmail && (
              <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-zinc-900 hover:bg-black text-white font-black py-3.5 rounded-xl text-center transition-all flex justify-center items-center gap-2 text-sm shadow-lg active:scale-[0.98]">
                <Mail className="w-4 h-4" /> Professional Reach
              </a>
            )}
            {portfolio?.whatsapp && (
              <a href={`https://wa.me/${portfolio.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 font-black py-3.5 rounded-xl text-center transition-all flex justify-center items-center gap-2 text-sm shadow-sm active:scale-[0.98]">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> Direct Chat
              </a>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Pane */}
      <main className="flex-1 p-6 md:p-12 lg:p-20 bg-white">
        
        <section className="mb-20 max-w-2xl">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-8 bg-blue-50 w-fit px-3 py-1 rounded-full underline decoration-blue-200 decoration-4">Role Summary</h2>
          <p className="text-xl md:text-3xl lg:text-4xl leading-[1.4] text-zinc-800 font-medium tracking-tight">
            {portfolio?.bio}
          </p>
        </section>

        {/* Career Timeline */}
        {(portfolio?.experience?.length > 0 || portfolio?.education?.length > 0) && (
          <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-500" /> Work History
              </h3>
              <div className="space-y-10">
                {portfolio.experience?.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-zinc-200">
                    <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-blue-500"></div>
                    <p className="text-lg font-black text-zinc-900 uppercase tracking-tight">{exp.role}</p>
                    <p className="text-sm font-bold text-blue-600 mb-4">{exp.company} &bull; {exp.duration}</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-500" /> Educational Path
              </h3>
              <div className="space-y-6">
                {portfolio.education?.map((edu, idx) => (
                  <div key={idx} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl">
                    <p className="text-lg font-black text-zinc-900">{edu.degree}</p>
                    <p className="text-sm font-medium text-zinc-500">{edu.school}</p>
                    <div className="mt-4 inline-block px-3 py-1 bg-white border border-zinc-200 rounded-full text-[10px] font-black text-zinc-800">CLASS OF {edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {portfolio?.projects?.length > 0 && (
          <section className="max-w-4xl border-t border-zinc-100 pt-20">
            <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-12 bg-blue-50 w-fit px-3 py-1 rounded-full flex items-center gap-2">
              Portfolio / Projects <ArrowUpRight className="w-3 h-3" />
            </h2>
            
            <div className="grid grid-cols-1 gap-16 md:gap-24">
              {portfolio.projects.map((project, idx) => (
                <a key={idx} href={project.link || '#'} target="_blank" className="group block relative">
                  <div className="relative overflow-hidden rounded-3xl mb-8 border border-zinc-100 shadow-2xl transition duration-700 aspect-video md:aspect-[16/8]">
                    {project.image ? (
                      <img src={project.image} alt="" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" />
                    ) : (
                       <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-300 font-black">MOCKUP</div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <div className="px-6 py-3 bg-white text-black font-black rounded-full shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 uppercase text-xs tracking-widest">
                         Open Case Study <ArrowUpRight className="w-4 h-4" />
                       </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-zinc-100 pb-8">
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-black text-zinc-900 group-hover:text-blue-600 transition-all mb-3">{project.title}</h4>
                      <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-xl group-hover:text-zinc-700 transition-all">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
