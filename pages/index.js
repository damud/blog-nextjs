import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/layout/Layout';

// Sections
import Hero from '@/components/Hero';
import Blog from '@/components/Blog';
import Posts from '@/components/Posts';
import CategoryPost from '@/components/CategoryPosts';

export default function Home() {
  return (
    <Layout>
     <Hero></Hero>
     <Blog></Blog>
     <Posts></Posts>
     <CategoryPost></CategoryPost>
    </Layout>
    )
}
 