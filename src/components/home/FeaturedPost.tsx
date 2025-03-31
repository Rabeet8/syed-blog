
import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
    slug: string;
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8 space-x-2">
        <div className="w-12 h-1 bg-neobrutalism-green"></div>
        <h2 className="font-mono font-bold text-2xl">FEATURED POST</h2>
      </div>
      
      <div className="brutal-card grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-md">
        <div className="lg:col-span-3 h-64 lg:h-auto relative overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-0 left-0 bg-neobrutalism-green text-white px-4 py-2 font-mono font-bold border-r-4 border-b-4 border-black">
            {post.category}
          </div>
        </div>
        
        <div className="lg:col-span-2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="font-mono font-bold text-2xl mb-4">{post.title}</h3>
            <p className="mb-4">{post.excerpt}</p>
          </div>
          
          <div>
            <div className="flex items-center mb-4 text-sm">
              <div className="flex items-center mr-4">
                <Calendar size={16} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <Link 
              to={`/post/${post.slug}`} 
              className="brutal-btn-green inline-flex items-center"
            >
              READ MORE 
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
