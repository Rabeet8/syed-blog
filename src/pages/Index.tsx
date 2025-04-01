
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
  
  // Find Blockchain Revolution post
  const blockchainRevolutionPost = latestPosts.find(post => post.slug === "blockchain-revolutionizing-future");
  
  // Find DoS post
  const dosPost = latestPosts.find(post => post.slug === "denial-of-service-smart-contracts");
  
  // Create an array with only the three posts we want to display
  const filteredPosts = [
    ...(defiPost ? [defiPost] : []),
    ...(blockchainRevolutionPost ? [blockchainRevolutionPost] : []),
    ...(dosPost ? [dosPost] : [])
  ];
  
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
        
        {/* Display all three posts in LATEST POSTS section */}
        <PostGrid 
          posts={filteredPosts} 
          title="LATEST POSTS"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
