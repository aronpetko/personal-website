import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="flex items-start justify-between mb-6">
        <h1 className="text-xl">Blog</h1>
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

      {posts.length === 0 ? (
        <div className="text-sm text-gray-400">no posts yet</div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <article key={post.slug} className="border border-white/10 p-3 panel">
              <h2 className="text-sm mb-1">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <div className="text-xs text-gray-400">
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="mx-2">·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
