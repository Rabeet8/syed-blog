
import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
}

interface PostGridProps {
  posts: Post[];
  title: string;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, title }) => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center mb-8 space-x-2">
        <div className="w-12 h-1 bg-neobrutalism-pink"></div>
        <h2 className="font-mono font-bold text-2xl">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => {
          // Alternate card colors for visual interest
          const cardClasses = [
            'brutal-card',
            'brutal-card-blue',
            'brutal-card-yellow',
            'brutal-card-pink',
          ];
          const cardClass = cardClasses[index % cardClasses.length];
          
          return (
            <article key={post.id} className={`${cardClass} overflow-hidden flex flex-col`}>
              <div className="h-48 relative overflow-hidden border-b-4 border-black">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 font-mono font-bold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="font-mono font-bold text-xl mb-3">{post.title}</h3>
                <p className="mb-4 text-sm">{post.excerpt}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center mb-4 text-sm">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/post/${post.slug}`} 
                    className="block w-full text-center py-2 border-4 border-black font-mono font-bold bg-white hover:bg-black hover:text-white transition-colors duration-300"
                  >
                    READ POST
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PostGrid;
