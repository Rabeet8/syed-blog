
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PostGrid from '../components/home/PostGrid';
import { latestPosts, categories } from '../data/mockData';

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  // Find category info
  const category = categories.find(cat => cat.id === categoryId);
  
  // Filter posts by category
  const categoryPosts = latestPosts.filter(post => 
    post.category.toLowerCase() === (category?.name.split(' ')[0].toLowerCase() || '')
  );
  
  // If category not found, show error
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="brutal-card p-8 text-center">
            <h1 className="font-mono font-bold text-3xl mb-4">Category Not Found</h1>
            <p className="mb-6">The category you're looking for doesn't exist.</p>
            <Link to="/" className="brutal-btn inline-block">
              BACK TO HOME
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Category Header */}
        <div className="bg-neobrutalism-yellow border-b-4 border-black">
          <div className="container mx-auto px-4 py-12">
            <Link to="/" className="flex items-center mb-6 hover:text-neobrutalism-blue transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to all posts
            </Link>
            
            <h1 className="brutal-heading mb-4">{category.name}</h1>
            <p className="text-xl max-w-2xl">{category.description}</p>
          </div>
        </div>
        
        {/* Posts Grid */}
        <PostGrid 
          posts={categoryPosts} 
          title={`${category.name.toUpperCase()} POSTS (${categoryPosts.length})`}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;
