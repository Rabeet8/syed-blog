
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AvatarModel from './AvatarModel';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="brutal-heading mb-6">
            <span className="block">WELCOME TO</span>
            <span className="block text-neobrutalism-blue">SYED'S BLOG</span>
            <span className="block">SPACE</span>
          </h1>
          
          <p className="text-xl mb-8 max-w-lg">
            Exploring tech, blockchain, personal growth, and design through a brutalist lens. 
            Expect bold opinions, raw insights, and unapologetic perspectives.
          </p>
          
          <Link 
            to="/about" 
            className="brutal-btn-blue inline-flex items-center"
          >
            ABOUT ME 
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
        
        <div className="relative">
          <div className="w-full h-80 md:h-96 bg-neobrutalism-yellow border-4 border-black shadow-brutal-lg overflow-hidden">
            {/* Avatar Image */}
            <AvatarModel />
            
            <div className="absolute -bottom-5 -right-5 bg-neobrutalism-pink text-white font-mono font-bold py-2 px-4 border-4 border-black rotate-3">
              DEVELOPER • WRITER • CREATOR
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
