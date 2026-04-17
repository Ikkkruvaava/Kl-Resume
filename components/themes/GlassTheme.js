"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ExternalLink, ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function GlassTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 font-sans pb-24 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] bg-blue-300 rounded-full blur-[100px] opacity-40"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-pink-300 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-[40%] right-[30%] w-[25vw] h-[25vw] bg-indigo-300 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pt-12 md:pt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar Area */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200 flex flex-col items-center text-center">
               <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-6">
                  {data.image ? (
                    <img src={data.image} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-300 font-black text-xs text-center px-4">IMG_PREVIEW</div>
                  )}
               </div>
               <h1 className="text-2xl font-black tracking-tight mb-1 text-slate-900 leading-none">{data.name}</h1>
               <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">
                 {portfolio?.careerField || 'Creative Professional'}
               </p>
               <p className="text-slate-400 font-bold text-xs mb-6 italic">@{data.username}</p>
               
               {portfolio?.location && (
                 <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-black uppercase tracking-widest bg-white/50 px-3 py-1 rounded-full mb-6">
                   <MapPin className="w-3 h-3 text-blue-500" /> {portfolio.location}
                 </div>
               )}

               <div className="flex gap-3 justify-center w-full">
                  {portfolio?.socialLinks?.slice(0, 4).map((link, idx) => (
                    <a key={idx} href={link.url} target="_blank" className="w-10 h-10 flex items-center justify-center bg-white/60 border border-white/80 rounded-xl hover:bg-black hover:text-white transition-all shadow-sm group">
                      <SocialIcon platform={link.platform} className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
               </div>
            </div>

            <div className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200">
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 border-b border-black/5 pb-2">Direct Contact</h3>
               <div className="flex flex-col gap-3">
                  {portfolio?.contactEmail && (
                    <a href={`mailto:${portfolio.contactEmail}`} className="w-full bg-slate-900 border border-slate-800 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg text-sm active:scale-95 uppercase tracking-tighter">
                      <Mail className="w-4 h-4" /> Message
                    </a>
                  )}
                  {portfolio?.whatsapp && (
                    <a href={`https://wa.me/${portfolio.whatsapp?.replace(/[^0-9]/g, '')}`} target="_blank" className="w-full bg-white/80 border border-white text-slate-900 font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm text-sm active:scale-95 uppercase tracking-tighter">
                      <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
                    </a>
                  )}
               </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-3 space-y-6">
            <section className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200 relative overflow-hidden group transition-all duration-500 hover:bg-white/60">
               <h3 className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-8">Personal Narrative</h3>
               <p className="text-xl md:text-3xl font-medium leading-[1.6] text-slate-800">
                 {portfolio?.bio}
               </p>
               {portfolio?.malayalamTagline && (
                  <div className="mt-10 px-6 py-4 bg-white/40 border border-white rounded-2xl inline-block text-slate-600 font-bold text-sm md:text-base italic">
                    {portfolio.malayalamTagline}
                  </div>
               )}
            </section>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {(portfolio?.experience?.length > 0 || portfolio?.education?.length > 0) && (
                 <>
                   {portfolio?.experience?.length > 0 && (
                     <section className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                           <Briefcase className="w-4 h-4 text-blue-500" /> Work History
                        </h3>
                        <div className="space-y-8">
                           {portfolio.experience.map((exp, idx) => (
                             <div key={idx} className="relative pl-6 border-l border-white">
                               <div className="absolute top-0 left-[-4.5px] w-2 h-2 rounded-full bg-blue-500"></div>
                               <h4 className="text-sm font-black text-slate-900 leading-tight uppercase">{exp.role}</h4>
                               <p className="text-[10px] font-bold text-slate-500 mb-2 italic">@ {exp.company} &bull; {exp.duration}</p>
                               <p className="text-xs text-slate-400 leading-relaxed font-medium">{exp.description}</p>
                             </div>
                           ))}
                        </div>
                     </section>
                   )}

                   {portfolio?.education?.length > 0 && (
                     <section className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
                           <GraduationCap className="w-4 h-4 text-pink-500" /> Education
                        </h3>
                        <div className="space-y-6">
                           {portfolio.education.map((edu, idx) => (
                             <div key={idx} className="bg-white/40 p-5 rounded-[1.8rem] border border-white/60">
                               <h4 className="text-sm font-black text-slate-900 leading-tight uppercase">{edu.degree}</h4>
                               <p className="text-[10px] font-bold text-slate-500 mb-3">{edu.school}</p>
                               <span className="text-[8px] font-black bg-white text-blue-600 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">CY_{edu.year}</span>
                             </div>
                           ))}
                        </div>
                     </section>
                   )}
                 </>
               )}

               <section className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Strategic Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolio?.skills?.map((skill, index) => (
                      <span key={index} className="px-4 py-2 bg-white/60 border border-white/80 rounded-xl text-xs md:text-sm font-bold text-slate-700 hover:bg-white transition-all shadow-sm cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
               </section>

               <section className="bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-8 shadow-xl shadow-slate-200 relative overflow-hidden">
                  <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-pink-500/10 blur-3xl rounded-full"></div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">High-Impact Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="text-center bg-white/40 p-4 rounded-2xl border border-white/50">
                        <span className="text-2xl font-black block text-slate-900 tracking-tighter">{portfolio?.projects?.length || 0}</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Builds_Live</span>
                     </div>
                     <div className="text-center bg-white/40 p-4 rounded-2xl border border-white/50">
                        <span className="text-2xl font-black block text-slate-900 tracking-tighter">5+</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Proficiency</span>
                     </div>
                  </div>
               </section>
            </div>

            {portfolio?.projects?.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center justify-between px-2 pt-12">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Curated Portfolio</h3>
                  <span className="text-[8px] font-black text-blue-500 border border-blue-500/30 px-3 py-1 rounded-full bg-blue-500/5 uppercase tracking-widest">Operational Output</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolio.projects.map((project, idx) => (
                    <a key={idx} href={project.link || '#'} target="_blank" className="group block bg-white/40 backdrop-blur-3xl border border-white/50 rounded-[2.5rem] p-4 transition-all duration-500 hover:bg-white/80 hover:scale-[1.02] shadow-xl shadow-slate-200/50 relative overflow-hidden">
                      {project.image && (
                        <div className="w-full aspect-video bg-slate-100 rounded-[1.8rem] overflow-hidden border border-white/50 mb-6">
                          <img src={project.image} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100" />
                        </div>
                      )}
                      <div className="px-2 pb-2">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight italic">{project.title}</h4>
                           <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </div>
                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium line-clamp-2 md:line-clamp-none group-hover:text-slate-700 transition-colors">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
