'use client';

import Link from 'next/link';
import { BlogPost, Project } from '@/types';

interface HomeClientProps {
  posts: BlogPost[];
  featuredProjects: Project[];
}

export default function HomeClient({ posts, featuredProjects }: HomeClientProps) {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-20">
        <section className="mb-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div className="flex-1 min-w-0 whitespace-nowrap md:whitespace-normal">
              <h1 className="text-xl mb-2 font-bold" style={{ color: '#789cde' }}>Aron Petkovski</h1>
              <p className="text-xs text-gray-300/90 whitespace-nowrap">Undergraduate CS Junior at UT Dallas | Interned at Chess.com and State Farm</p>
            </div>
            <nav className="text-sm flex-shrink-0">
              <a href="/" className="underline inline-flex items-center">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><path d="M3 10l9-7 9 7"/><path d="M9 22V12h6v10"/></svg>
                Home
              </a>
              <span className="mx-3">/</span>
              <a href="/projects" className="underline inline-flex items-center">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><path d="M9 18l-6-6 6-6"/><path d="M15 6l6 6-6 6"/></svg>
                Projects
              </a>
              <span className="mx-3">/</span>
              <a href="/resume" className="underline inline-flex items-center">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="9" x2="17" y2="9"/><line x1="7" y1="13" x2="12" y2="13"/></svg>
                Resume
              </a>
              <span className="mx-3">/</span>
              <a href="/blog" className="underline inline-flex items-center">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><rect x="4" y="3" width="16" height="18" rx="2"/><line x1="8" y1="9" x2="16" y2="9"/><line x1="8" y1="13" x2="16" y2="13"/></svg>
                Blog
              </a>
              <span className="mx-3">/</span>
              <a href="/about" className="underline inline-flex items-center">
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="12" x2="12" y2="16"/></svg>
                About
              </a>
            </nav>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-sm text-gray-300/90 mb-0">
            <strong>Welcome!</strong> I'm Aron, and I'm particularly interested in low-level programming, distributed systems, and more recently, machine learning. Take a look at my projects to see the interesting problems I've been tackling lately!
          </p>
          <div className="mt-2 text-xs mb-8">
            <a className="underline" href="/about">Read more →</a>
          </div>
          <p className="text-xs text-gray-300/90 flex items-center flex-wrap">
            <a href="mailto:aron@aronpetko.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
              Email
            </a>
            <span className="mx-2 text-gray-500">/</span>
            <a href="https://github.com/aronpetko" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <span className="mx-2 text-gray-500">/</span>
            <a href="https://linkedin.com/in/aronpetkovski" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="mr-1"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>
              LinkedIn
            </a>
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm">Featured projects</h2>
            <Link href="/projects" className="text-sm">All projects →</Link>
          </div>

          {featuredProjects.length === 0 ? (
            <div className="text-sm text-gray-400">no projects yet</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {featuredProjects.map((project) => {
                const anchor = `/projects#project-${project.id}`;
                return (
                  <div
                    key={project.id}
                    className="panel p-3 text-sm project-card"
                    style={project.color ? ({
                      // Provide both dark and light variants via CSS variables
                      // Dark uses the provided color; Light mixes toward black for contrast
                      ['--project-title-dark' as any]: project.color,
                      ['--project-title-light' as any]: `color-mix(in oklab, ${project.color} 70%, black 30%)`,
                    } as React.CSSProperties) : undefined}
                  >
                    <h3 className="mb-1">
                      <Link href={anchor} className="underline project-title">{project.title}</Link>
                    </h3>
                    <p className="project-desc line-clamp-3 mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="text-gray-400">{tech}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm">Latest posts</h2>
            <Link href="/blog" className="text-sm">All posts →</Link>
          </div>

          {posts.length === 0 ? (
            <div className="text-sm text-gray-400">no posts yet</div>
          ) : (
            <div className="space-y-3">
              {posts.map((post) => (
                <article key={post.slug} className="panel p-3">
                  <h3 className="text-sm mb-1">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <div className="text-xs text-gray-400">
                    <time>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span>{post.readingTime} min</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
