"use client";
import React from 'react';
import { Mail, MessageCircle, MapPin, ArrowUpRight, Briefcase, GraduationCap } from 'lucide-react';
import { SocialIcon } from '../SocialIcon';

export default function CenteredTheme({ data }) {
  const { portfolio } = data;

  return (
    <div className="min-h-screen bg-[#fafafc] text-zinc-900 font-sans pb-24 selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* Centered Profile Hero */}
      <div className="pt-16 md:pt-24 pb-12 px-4 md:px-6 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="relative mb-10">
          <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-2xl rounded-full"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border-[6px] border-white overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
            {data.image ? (
              <img src={data.image} alt="Profile" className="w-full h-full object-cover scale-110" />
            ) : (
              <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-300 font-black text-xs text-center px-4">NO PROFILE IMAGE</div>
            )}
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-3 text-zinc-900 drop-shadow-sm">{data.name}</h1>
        <p className="text-indigo-600 font-black text-lg md:text-xl mb-4 tracking-[0.1em] uppercase">
          {portfolio?.careerField || 'Engineering Professional'}
        </p>
        <p className="text-zinc-400 font-bold text-sm mb-6 tracking-tight bg-white px-4 py-1.5 rounded-full border border-zinc-100 shadow-sm transition-all hover:border-zinc-300">@{data.username}</p>
        
        {portfolio?.location && (
          <div className="flex items-center justify-center gap-1.5 text-zinc-400 text-[10px] md:text-xs font-black mb-8 uppercase tracking-[0.2em] bg-zinc-50 px-3 py-1 rounded-full">
            <MapPin className="w-3 h-3 text-red-400" /> {portfolio.location}
          </div>
        )}

        <p className="text-lg md:text-2xl text-zinc-600 font-medium leading-[1.6] max-w-xl mx-auto mb-12 px-4 italic">
          "{portfolio?.bio}"
        </p>

        {portfolio?.malayalamTagline && (
          <div className="px-5 py-2.5 bg-gradient-to-r from-zinc-900 to-black text-white rounded-2xl text-xs md:text-sm font-bold mb-12 shadow-xl shadow-zinc-200">
            {portfolio.malayalamTagline}
          </div>
        )}

        {/* Action Buttons */}
        <div className="w-full space-y-3 mb-16 max-w-md">
          {portfolio?.contactEmail && (
            <a href={`mailto:${portfolio.contactEmail}`} className="group w-full bg-white hover:bg-black hover:text-white border border-zinc-200 text-zinc-900 font-black py-4 md:py-5 rounded-2xl transition-all flex justify-center items-center gap-3 shadow-sm hover:shadow-2xl hover:scale-[1.02] active:scale-95 px-6">
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" /> <span className="text-sm uppercase tracking-wide">Connect with me</span>
            </a>
          )}
          {portfolio?.whatsapp && (
            <a href={`https://wa.me/${portfolio.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" className="group w-full bg-[#25D366]/5 hover:bg-[#25D366] hover:text-white border border-[#25D366]/20 text-[#128C7E] font-black py-4 md:py-5 rounded-2xl transition-all flex justify-center items-center gap-3 shadow-sm hover:shadow-2xl hover:scale-[1.02] active:scale-95 px-6">
              <MessageCircle className="w-5 h-5 group-hover:-rotate-12 transition-transform" /> <span className="text-sm uppercase tracking-wide">Direct Message</span>
            </a>
          )}
        </div>

        {/* Social Icons Row */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {portfolio?.socialLinks?.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-zinc-100 flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:scale-110 transition-all shadow-sm hover:shadow-xl group">
              <SocialIcon platform={link.platform} className="w-5 h-5 md:w-6 md:h-6 opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </a>
          ))}
        </div>
      </div>

      {/* Expertise */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-10">
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] bg-white px-4 py-2 border border-zinc-100 rounded-full">Strategic Arsenal</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl mx-auto">
          {portfolio?.skills?.map((skill, index) => (
            <span key={index} className="px-5 py-2.5 bg-white border border-zinc-100 rounded-xl text-zinc-700 shadow-sm font-bold text-xs md:text-sm hover:border-zinc-300 transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Career Journey (NEW) */}
      {(portfolio?.experience?.length > 0 || portfolio?.education?.length > 0) && (
        <div className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-100">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Experience */}
              <div>
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-500" /> Career History
                </h3>
                <div className="space-y-12">
                   {portfolio.experience?.map((exp, idx) => (
                     <div key={idx} className="group">
                        <p className="text-zinc-400 font-black text-[10px] mb-2">{exp.duration}</p>
                        <h4 className="text-xl font-black text-black group-hover:text-indigo-600 transition-colors uppercase leading-tight mb-2">{exp.role}</h4>
                        <p className="font-bold text-zinc-500 mb-4">{exp.company}</p>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">{exp.description}</p>
                     </div>
                   ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-pink-500" /> Education
                </h3>
                <div className="space-y-8">
                   {portfolio.education?.map((edu, idx) => (
                     <div key={idx} className="border-l-2 border-zinc-100 pl-6 py-1">
                        <p className="text-zinc-900 font-black text-lg">{edu.degree}</p>
                        <p className="font-bold text-zinc-500 text-sm mb-2">{edu.school}</p>
                        <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{edu.year}</p>
                     </div>
                   ))}
                </div>
              </div>
           </div>
        </div>
      )}

      {/* Centered Projects Stack */}
      {portfolio?.projects?.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 border-t border-zinc-100">
           <div className="text-center mb-12">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] bg-white px-4 py-2 border border-zinc-100 rounded-full">Key Case Studies</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {portfolio.projects.map((project, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <a href={project.link || '#'} target="_blank" className="w-full relative block overflow-hidden rounded-3xl mb-6 shadow-xl active:scale-[0.98] transition-all duration-500 aspect-video md:aspect-[4/3] bg-zinc-200">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.5] group-hover:grayscale-0" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-300 font-black text-xs text-center px-6">PROJECT PREVIEW</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2">View Experience <ArrowUpRight className="w-4 h-4" /></p>
                  </div>
                </a>
                <h4 className="text-xl md:text-2xl font-black mb-2 text-zinc-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{project.title}</h4>
                <p className="text-zinc-500 text-xs md:text-sm leading-relaxed max-w-xs font-medium line-clamp-2 md:line-clamp-none mb-6">{project.description}</p>
                {project.link && (
                  <div className="h-1 w-0 group-hover:w-16 bg-indigo-600 transition-all duration-500 rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
