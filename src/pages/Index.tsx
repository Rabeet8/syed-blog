
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPost from '../components/home/FeaturedPost';
import PostGrid from '../components/home/PostGrid';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { featuredPost, latestPosts } from '../data/mockData';
import { ScrollArea } from '../components/ui/scroll-area';

const Index = () => {
  // Get latest posts (excluding the featured post)
  const latest = latestPosts.filter(post => post.id !== featuredPost.id);
  
  // Set document title
  React.useEffect(() => {
    document.title = "Syed's Blog | Home";
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <ScrollArea className="h-full">
          <Hero />
          <FeaturedPost post={featuredPost} />
          <PostGrid 
            posts={latest} 
            title="LATEST POSTS"
          />
        </ScrollArea>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
