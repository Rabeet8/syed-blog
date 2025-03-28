
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
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Syed Portrait" 
                className="w-full h-auto border-4 border-black"
              />
            </div>
            
            <div className="border-4 border-black p-6 shadow-brutal-sm">
              <h3 className="font-mono font-bold text-xl mb-4">CONNECT WITH ME</h3>
              <ul className="space-y-3">
                <li className="hover:text-neobrutalism-pink">
                  <a href="#" className="inline-flex items-center">
                    <span className="font-bold mr-2">Twitter:</span> @syedblog
                  </a>
                </li>
                <li className="hover:text-neobrutalism-pink">
                  <a href="#" className="inline-flex items-center">
                    <span className="font-bold mr-2">GitHub:</span> syeddev
                  </a>
                </li>
                <li className="hover:text-neobrutalism-pink">
                  <a href="#" className="inline-flex items-center">
                    <span className="font-bold mr-2">LinkedIn:</span> syed
                  </a>
                </li>
                <li className="hover:text-neobrutalism-pink">
                  <a href="mailto:hello@syedblog.com" className="inline-flex items-center">
                    <span className="font-bold mr-2">Email:</span> hello@syedblog.com
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
                Hello! I'm Syed, a passionate developer, writer, and creator with a keen interest
                in technology, blockchain, personal growth, and design.
              </p>
              
              <p>
                With over 8 years of experience in software development, I've worked on a variety of
                projects ranging from web applications to blockchain solutions. My expertise lies in
                React, TypeScript, and creating intuitive user experiences.
              </p>
              
              <h2 className="font-mono font-bold text-2xl mt-10 mb-4">MY JOURNEY</h2>
              
              <p>
                My journey began as a self-taught developer, spending countless hours exploring
                programming languages and building small projects that gradually increased in complexity.
                What started as a hobby quickly turned into a passion and eventually a career.
              </p>
              
              <p>
                In 2018, I discovered blockchain technology and was immediately captivated by its
                potential to revolutionize various industries. Since then, I've been actively involved
                in the Web3 space, contributing to open-source projects and exploring innovative
                applications of decentralized technologies.
              </p>
              
              <h2 className="font-mono font-bold text-2xl mt-10 mb-4">WHY THIS BLOG?</h2>
              
              <p>
                I created this blog as a platform to share my thoughts, insights, and experiences with
                like-minded individuals. Here, you'll find articles on a wide range of topics, from
                technical tutorials and blockchain analyses to personal growth tips and design principles.
              </p>
              
              <p>
                My writing style is influenced by the neobrutalist design philosophy - raw, honest,
                and straightforward. I believe in cutting through the noise and delivering content
                that adds real value to my readers.
              </p>
              
              <h2 className="font-mono font-bold text-2xl mt-10 mb-4">WHAT'S NEXT?</h2>
              
              <p>
                I'm constantly exploring new technologies and ideas. Currently, I'm focused on
                advancing my knowledge in artificial intelligence and its intersection with blockchain
                technology. Stay tuned for insightful articles on these topics!
              </p>
              
              <p>
                Thank you for visiting my blog. Feel free to connect with me through any of the social
                media platforms listed or drop me an email. I'm always open to interesting conversations
                and collaboration opportunities.
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
