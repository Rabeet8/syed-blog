
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ReadingProgress from '../components/post/ReadingProgress';
import CommentSection from '../components/post/CommentSection';
import RelatedPosts from '../components/post/RelatedPosts';
import { featuredPost, latestPosts, comments, relatedPosts } from '../data/mockData';

const SinglePost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post based on slug
  const post = [featuredPost, ...latestPosts].find(post => post.slug === slug);
  
  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="brutal-card p-8 text-center">
            <h1 className="font-mono font-bold text-3xl mb-4">Post Not Found</h1>
            <p className="mb-6">The post you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="brutal-btn inline-block">
              BACK TO HOME
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="w-full h-96 relative overflow-hidden border-b-4 border-black">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block bg-neobrutalism-pink text-white px-4 py-2 font-mono font-bold mb-4 border-4 border-black">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white shadow-text">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Post Meta */}
        <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between border-b-4 border-black">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar size={20} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag size={20} className="mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
          
          <Link to="/" className="flex items-center mt-4 sm:mt-0 hover:text-neobrutalism-blue transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to all posts
          </Link>
        </div>
        
        {/* Post Content */}
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold prose-pre:bg-black prose-pre:text-white prose-pre:border-4 prose-pre:border-gray-600 prose-pre:shadow-brutal prose-code:font-mono"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className="mt-12 pt-12 border-t-4 border-black">
              <CommentSection comments={comments} />
            </div>
            
            <div className="mt-12 pt-12 border-t-4 border-black">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SinglePost;
