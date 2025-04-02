
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  useEffect(() => {
    document.title = "About Me | Syed's Blog";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center font-mono font-bold mb-8 hover:text-neobrutalism-pink">
          <ArrowLeft className="mr-2" size={20} />
          BACK TO HOME
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="border-4 border-black bg-neobrutalism-blue p-6 shadow-brutal-sm mb-6">
              <img 
                src="/lovable-uploads/d054ddeb-68a8-461a-995a-499fbc65c3b2.png" 
                alt="Syed Portrait" 
                className="w-full h-auto border-4 border-black"
              />
            </div>
            
            <div className="border-4 border-black p-6 shadow-brutal-sm">
              <h3 className="font-mono font-bold text-xl mb-4">CONNECT WITH ME</h3>
              <ul className="space-y-3">
                <li className="hover:text-neobrutalism-pink">
                  <a href="https://x.com/CuriousRabeet" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <span className="font-bold mr-2">Twitter:</span> @CuriousRabeet
                  </a>
                </li>
                <li className="hover:text-neobrutalism-pink">
                  <a href="https://github.com/Rabeet8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <span className="font-bold mr-2">GitHub:</span> Rabeet8
                  </a>
                </li>
                <li className="hover:text-neobrutalism-pink">
                  <a href="https://www.linkedin.com/in/syedrabeet/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    <span className="font-bold mr-2">LinkedIn:</span> syedrabeet
                  </a>
                </li>
                <li className="hover:text-neobrutalism-pink">
                  <a href="mailto:syedrabeet2002@gmail.com" className="inline-flex items-center">
                    <span className="font-bold mr-2">Email:</span> syedrabeet2002@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="brutal-heading mb-8">
              <span className="block text-neobrutalism-blue">ABOUT ME</span>
            </h1>
            
            <div className="space-y-6 text-lg">
              <p>
                Hey there! I'm Rabeet, a passionate software engineer with expertise in web, mobile, and blockchain development. 
                With years of experience in React, Next.js, TypeScript, and scalable architectures, I focus on building intuitive, 
                high-performance applications. Security and efficiency are at the core of my development approach, ensuring robust 
                and seamless user experiences.
              </p>
              
              <h2 className="font-mono font-bold text-2xl mt-10 mb-4">MY JOURNEY</h2>
              
              <p>
                I started as a self-taught developer, spending countless hours experimenting with different technologies, 
                frameworks, and architectures. Over time, what began as curiosity turned into a full-fledged career in software 
                engineering. While my primary focus is frontend and mobile development, my journey into blockchain and 
                cybersecurity has given me a deep appreciation for secure, decentralized systems and best practices in 
                application security.
              </p>
              
              <h2 className="font-mono font-bold text-2xl mt-10 mb-4">WHY THIS BLOG?</h2>
              
              <p>
                I created this blog to share insights, best practices, and lessons learned from my experience in 
                software engineering, blockchain, and security. Whether it's frontend development, UI/UX strategies, 
                secure coding principles, or decentralized applications, my goal is to provide clear, practical, and 
                valuable content. My writing style mirrors my coding philosophy—structured, straightforward, and to the point.
              </p>
              
              <h2 className="font-mono font-bold text-2xl mt-10 mb-4">WHAT'S NEXT?</h2>
              
              <p>
                I'm always exploring new trends in web and mobile development, along with advancements in blockchain 
                security, cryptography, and AI-powered applications. Stay tuned for deep dives into modern frameworks, 
                smart contract security, and secure software design.
              </p>
              
              <p>
                Let's connect! Whether you're a fellow developer, designer, or security enthusiast, I'd love to 
                exchange ideas and collaborate on innovative projects.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutMe;
