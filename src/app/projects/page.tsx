import Link from 'next/link';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-xl">Projects</h1>
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

      {projects.length === 0 ? (
        <div className="text-sm text-gray-400">no projects available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="border panel border-white/10 p-3 project-card"
              style={project.color ? ({
                ['--project-title-dark' as any]: project.color,
                ['--project-title-light' as any]: `color-mix(in oklab, ${project.color} 70%, black 30%)`,
              } as React.CSSProperties) : undefined}
            >
              <h2 className="text-sm mb-1 project-title">{project.title}</h2>
              <p className="text-xs text-gray-300/90 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-gray-400">{tech}</span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-xs">
                {project.liveUrl && (
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo →
                  </Link>
                )}
                {project.githubUrl && (
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}