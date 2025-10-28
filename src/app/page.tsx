import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/data';
import HomeClient from './HomeClient';

export default function Home() {
  const posts = getAllPosts().slice(0, 5); // Get top 5 latest posts
  const featuredProjects = projects.slice(0, 3);

  return <HomeClient posts={posts} featuredProjects={featuredProjects} />;
}
