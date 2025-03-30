
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t-4 border-neobrutalism-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-mono font-bold text-2xl mb-4">SYED'S BLOG</h3>
            <p className="mb-4">A brutalist blog about blockchain, security, and smart contract auditing.</p>
            <p className="text-neobrutalism-gray">&copy; {new Date().getFullYear()} SYED'S BLOG. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-xl mb-4">CATEGORIES</h4>
            <ul className="space-y-2">
              <li><Link to="/category/blockchain" className="hover:text-neobrutalism-yellow transition-colors">Blockchain</Link></li>
              <li><Link to="/category/security" className="hover:text-neobrutalism-yellow transition-colors">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-mono font-bold text-xl mb-4">CONNECT</h4>
            <ul className="space-y-2">
              <li><a href="https://x.com/CuriousRabeet" target="_blank" rel="noopener noreferrer" className="hover:text-neobrutalism-yellow transition-colors">Twitter</a></li>
              <li><a href="https://github.com/Rabeet8" target="_blank" rel="noopener noreferrer" className="hover:text-neobrutalism-yellow transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/syedrabeet/" target="_blank" rel="noopener noreferrer" className="hover:text-neobrutalism-yellow transition-colors">LinkedIn</a></li>
              <li><a href="mailto:syedrabeet2002@gmail.com" className="hover:text-neobrutalism-yellow transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
