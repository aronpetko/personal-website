import Link from 'next/link';
import { experiences } from '@/lib/data';

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-xl">Resume</h1>
        <nav className="text-sm">
          <a href="/" className="underline inline-flex items-center"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><path d="M3 10l9-7 9 7"/><path d="M9 22V12h6v10"/></svg>Home</a>
          <span className="mx-3">/</span>
          <a href="/projects" className="underline inline-flex items-center"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>Projects</a>
          <span className="mx-3">/</span>
          <a href="/resume" className="underline inline-flex items-center"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="12" y2="13"/></svg>Resume</a>
          <span className="mx-3">/</span>
          <a href="/blog" className="underline inline-flex items-center"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg>Blog</a>
          <span className="mx-3">/</span>
          <a href="/about" className="underline inline-flex items-center"><svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="12" x2="12" y2="16"/></svg>About</a>
        </nav>
      </div>

      <div className="mb-8">
        <Link href="/resume.pdf" target="_blank" className="text-sm underline">
          Download Resume (PDF)
        </Link>
      </div>

      <section>
        <h2 className="text-sm mb-4">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="border border-white/10 p-3 panel">
              <div className="flex items-center justify-between text-sm mb-2">
                <div>
                  <div className="">{exp.position}</div>
                  <div className="text-gray-400">{exp.company}</div>
                </div>
                <div className="text-gray-400 text-xs">{exp.startDate} - {exp.endDate || 'Present'}</div>
              </div>
              <ul className="list-disc list-inside text-xs text-gray-300/90 space-y-1 mb-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
