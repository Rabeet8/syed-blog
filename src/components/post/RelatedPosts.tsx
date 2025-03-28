
import React from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
}

interface RelatedPostsProps {
  posts: Post[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <section className="my-12">
      <h2 className="font-mono font-bold text-2xl mb-6">RELATED POSTS</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, index) => {
          // Alternate card colors for visual interest
          const cardClasses = [
            'brutal-card',
            'brutal-card-yellow',
            'brutal-card-blue',
          ];
          const cardClass = cardClasses[index % cardClasses.length];
          
          return (
            <Link key={post.id} to={`/post/${post.slug}`} className={`${cardClass} block group`}>
              <div className="h-40 relative overflow-hidden border-b-4 border-black">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-black text-white px-3 py-1 text-sm font-mono font-bold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-mono font-bold text-lg group-hover:underline">{post.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedPosts;
