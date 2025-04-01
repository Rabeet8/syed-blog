
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPost from '../components/home/FeaturedPost';
import PostGrid from '../components/home/PostGrid';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { featuredPost, latestPosts } from '../data/mockData';

const Index = () => {
  // Find DeFi post
  const defiPost = latestPosts.find(post => post.slug === "defi-benefits-unbanked-population");
  
  // Get latest posts (excluding the featured post and DeFi post since it will be shown separately)
  const latest = latestPosts.filter(post => 
    post.id !== featuredPost.id && 
    post.id !== (defiPost?.id || '')
  );
  
  // Create a copy of featured post with updated date
  const updatedFeaturedPost = {
    ...featuredPost,
    date: "25 Feb 2025"
  };
  
  // Set document title
  React.useEffect(() => {
    document.title = "Syed's Blog | Home";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Hero />
        <FeaturedPost post={updatedFeaturedPost} overview="short" />
        {defiPost && (
          <PostGrid 
            posts={[defiPost]} 
            title="FEATURED IN BLOCKCHAIN"
          />
        )}
        <PostGrid 
          posts={latest} 
          title="LATEST POSTS"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
