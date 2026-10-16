import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  linkUrl: string;
  linkLabel: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'PMPS DDS & QDDS Portals',
    category: 'ENTERPRISE DOCUMENT MANAGEMENT & QUALITY SYSTEMS',
    description:
      'Engineered centralized document management and quality distribution platforms designed for large-scale engineering files, revision histories, and enterprise approval workflows. Boosted retrieval speed and platform responsiveness across engineering divisions.',
    linkUrl: 'mailto:nehalimbhore@gmail.com',
    linkLabel: 'INQUIRE PLATFORM',
    tech: [
      'ASP.NET Core',
      'ASP.NET MVC',
      'SQL Server',
      'Entity Framework Core',
      'Angular',
      'Stored Procedures',
      'Database Indexing',
    ],
    metrics: [
      { label: 'THROUGHPUT BOOST', value: '30% - 40% Faster' },
      { label: 'ARCHITECTURE', value: 'ASP.NET Core & MVC' },
      { label: 'DOMAIN', value: 'Engineering Workflows' },
    ],
  },
  {
    number: '02',
    title: 'Enterprise Idea Management & Rewards',
    category: 'INNOVATION PLATFORM & WORKFLOW AUTOMATION',
    description:
      'Built an automated corporate platform for registering, evaluating, and rewarding innovative employee ideas. Developed automated email notification modules, approval hierarchies, and dynamic analytical dashboards using complex SQL Stored Procedures.',
    linkUrl: 'mailto:nehalimbhore@gmail.com',
    linkLabel: 'INQUIRE PLATFORM',
    tech: [
      'ASP.NET Core',
      'C#',
      'SQL Server',
      'Angular',
      'Automated Notifications',
      'Dynamic Dashboards',
      'REST APIs',
    ],
    metrics: [
      { label: 'ENGAGEMENT', value: '+25% User Activity' },
      { label: 'AUTOMATION', value: 'Email & Workflow Engine' },
      { label: 'ANALYTICS', value: 'Dynamic SQL Dashboards' },
    ],
  },
  {
    number: '03',
    title: 'E-Warranty Management System',
    category: 'ENTERPRISE OPERATIONS & CLAIM AUTOMATION',
    description:
      'Architected an end-to-end warranty lifecycle and claim processing platform, replacing fragmented manual tracking spreadsheets with a unified digital audit trail, reducing claim handling turnaround time.',
    linkUrl: 'mailto:nehalimbhore@gmail.com',
    linkLabel: 'INQUIRE PLATFORM',
    tech: [
      'ASP.NET MVC',
      'C#',
      'SQL Server',
      'REST Web APIs',
      'Bootstrap',
      'Role-Based Access',
    ],
    metrics: [
      { label: 'PROCESSING', value: 'Zero Manual Tracking' },
      { label: 'EFFICIENCY', value: 'Fast Turnaround' },
      { label: 'SECURITY', value: 'Role-Based Auditing' },
    ],
  },
  {
    number: '04',
    title: 'Legacy Modernization & Azure DevOps CI/CD',
    category: 'CLOUD INFRASTRUCTURE & CLEAN ARCHITECTURE',
    description:
      'Modernized legacy Classic ASP.NET and ASP.NET MVC systems into decoupled, secure clean architecture standards at KSB. Standardized multi-branch Git strategies and automated continuous integration/deployment (CI/CD) pipelines in Azure DevOps.',
    linkUrl: 'https://linkedin.com/in/neha-kalokhe-047b68275',
    linkLabel: 'VIEW LINKEDIN',
    tech: [
      'Azure DevOps',
      'CI/CD Pipelines',
      'Git Repositories',
      'Classic ASP.NET',
      'C#',
      'Clean Architecture',
      'Visual Studio',
    ],
    metrics: [
      { label: 'PIPELINES', value: 'Azure DevOps CI/CD' },
      { label: 'TIME REDUCTION', value: 'Up to 40% Saved' },
      { label: 'STANDARDS', value: 'Clean Architecture' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 sm:pt-20 pb-16 sm:pb-32 px-4 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 sm:w-[36rem] sm:h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[80px] sm:blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-[30rem] sm:h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[80px] sm:blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-4 sm:mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / ENTERPRISE DELIVERABLES &amp; IMPACT
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.9] sm:leading-[0.85] select-none break-words"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              FEATURED SYSTEMS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              ENGINEERED IMPACT.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-3 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to review enterprise platforms, database optimizations, and cloud-ready architectures engineered for high availability.
          </p>
        </motion.div>

        {/* React Bits Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div 
                style={{ touchAction: 'pan-y' }}
                className="relative w-full rounded-xl sm:rounded-2xl border border-[#8C6D4F]/50 bg-[#0E0C0A] p-5 sm:p-8 lg:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]"
              >
                
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute top-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 left-0 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 sm:w-4 sm:h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-3 text-6xl sm:text-8xl md:text-9xl font-bold text-[#EAD8C7]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 sm:space-x-3 mb-3 sm:mb-4">
                        <span className="text-xs font-mono font-bold text-[#D4AF37]">
                          {project.number} //
                        </span>
                        <span className="text-[9.5px] sm:text-[10.5px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#A8988B]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 sm:mb-4 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.95] sm:leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#BDB0A4] leading-[1.7] sm:leading-[1.85] tracking-wide mb-5 sm:mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 border-t border-[#8C6D4F]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 sm:px-3 sm:py-1 text-[9px] sm:text-[10px] font-medium tracking-[0.14em] sm:tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#16120E] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-6 lg:pl-6 lg:border-l lg:border-[#8C6D4F]/25">
                    <div className="space-y-2.5 sm:space-y-3">
                      <span className="text-[9px] sm:text-[9.5px] font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#8C6D4F] block mb-1.5 sm:mb-2">
                        // OPERATIONAL HIGHLIGHTS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-2.5 sm:p-3.5 rounded-sm border border-[#8C6D4F]/25 bg-[#050403] flex items-center justify-between"
                        >
                          <span className="text-[9.5px] sm:text-[10px] font-mono text-[#A8988B]">
                            {m.label}
                          </span>
                          <span className="text-[10.5px] sm:text-[11px] font-mono font-medium text-[#F7E7C4]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.linkUrl}
                      className="inline-flex items-center justify-center space-x-2.5 sm:space-x-3 px-5 sm:px-6 py-3 sm:py-3.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10.5px] sm:text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.1)] w-full text-center"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>{project.linkLabel}</span>
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;