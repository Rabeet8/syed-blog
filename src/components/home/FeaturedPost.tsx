
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
  overview?: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post, overview }) => {
  return (
    <section className="container mx-auto px-4 py-4">
      <div className="flex items-center mb-3 space-x-2">
        <div className="w-8 h-1 bg-neobrutalism-green"></div>
        <h2 className="font-mono font-bold text-lg">FEATURED POST</h2>
      </div>
      
      <div className="brutal-card grid grid-cols-1 lg:grid-cols-5 overflow-hidden">
        <div className="lg:col-span-2 h-40 lg:h-auto relative overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-black">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-0 left-0 bg-neobrutalism-green text-white px-3 py-1 font-mono font-bold border-r-4 border-b-4 border-black">
            {post.category}
          </div>
        </div>
        
        <div className="lg:col-span-3 p-3 flex flex-col justify-between">
          <div>
            <h3 className="font-mono font-bold text-lg mb-2">{post.title}</h3>
            {overview ? (
              <p className="text-sm line-clamp-4">
                The Rollup Improvement Proposal (RIP) aims to introduce support for the secp256r1 elliptic curve on Ethereum, addressing a long-standing interoperability challenge. Currently, Ethereum relies on secp256k1, which, while secure and well-suited for blockchain applications, is not widely used outside the crypto space. Many modern security systems, including Apple's Secure Enclave, WebAuthn, and enterprise authentication frameworks, rely on secp256r1 due to its widespread adoption and regulatory backing.
              </p>
            ) : (
              <p className="mb-2 text-sm">{post.excerpt}</p>
            )}
          </div>
          
          <div>
            <div className="flex items-center mb-2 text-xs">
              <div className="flex items-center mr-4">
                <Calendar size={14} className="mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Tag size={14} className="mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <Link 
              to={`/post/${post.slug}`} 
              className="brutal-btn-green inline-flex items-center text-xs py-1"
            >
              READ MORE 
              <ArrowRight className="ml-1" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
