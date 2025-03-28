
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <header className="w-full border-b-4 border-black bg-white py-4 sticky top-0 z-40">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-mono font-bold">
          NEOBLOG
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          <nav>
            <ul className="flex space-x-6 font-mono font-bold">
              <li><Link to="/" className="hover:text-neobrutalism-pink hover:underline underline-offset-4">HOME</Link></li>
              <li><Link to="/category/tech" className="hover:text-neobrutalism-pink hover:underline underline-offset-4">TECH</Link></li>
              <li><Link to="/category/blockchain" className="hover:text-neobrutalism-pink hover:underline underline-offset-4">BLOCKCHAIN</Link></li>
              <li><Link to="/category/growth" className="hover:text-neobrutalism-pink hover:underline underline-offset-4">GROWTH</Link></li>
              <li><Link to="/category/design" className="hover:text-neobrutalism-pink hover:underline underline-offset-4">DESIGN</Link></li>
            </ul>
          </nav>
          
          <button 
            onClick={toggleSearch}
            aria-label="Search"
            className="p-2 border-4 border-black bg-neobrutalism-yellow hover:bg-neobrutalism-pink transition-colors duration-300"
          >
            <Search size={20} />
          </button>
        </div>
        
        <button 
          className="md:hidden p-2 border-4 border-black bg-neobrutalism-yellow"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4 font-mono font-bold">
              <li><Link to="/" className="block py-2 hover:text-neobrutalism-pink" onClick={toggleMenu}>HOME</Link></li>
              <li><Link to="/category/tech" className="block py-2 hover:text-neobrutalism-pink" onClick={toggleMenu}>TECH</Link></li>
              <li><Link to="/category/blockchain" className="block py-2 hover:text-neobrutalism-pink" onClick={toggleMenu}>BLOCKCHAIN</Link></li>
              <li><Link to="/category/growth" className="block py-2 hover:text-neobrutalism-pink" onClick={toggleMenu}>GROWTH</Link></li>
              <li><Link to="/category/design" className="block py-2 hover:text-neobrutalism-pink" onClick={toggleMenu}>DESIGN</Link></li>
              <li>
                <button 
                  onClick={() => {
                    toggleSearch();
                    toggleMenu();
                  }}
                  className="flex items-center space-x-2 py-2 hover:text-neobrutalism-pink"
                >
                  <Search size={20} />
                  <span>SEARCH</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4">
          <button 
            onClick={toggleSearch}
            className="absolute top-4 right-4 p-2 border-4 border-black bg-neobrutalism-yellow hover:bg-neobrutalism-pink transition-colors duration-300"
            aria-label="Close search"
          >
            <X size={24} />
          </button>
          
          <div className="w-full max-w-2xl">
            <form className="flex">
              <input 
                type="text" 
                placeholder="Search posts..." 
                className="flex-grow px-4 py-3 border-4 border-black focus:outline-none"
              />
              <button 
                type="submit"
                className="px-4 py-3 bg-neobrutalism-blue text-white border-t-4 border-r-4 border-b-4 border-black"
              >
                <Search size={24} />
              </button>
            </form>
            
            <div className="mt-8">
              <h3 className="font-mono font-bold text-xl mb-4">POPULAR TAGS</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'JavaScript', 'Web3', 'Design', 'UX', 'Blockchain', 'CSS', 'TypeScript'].map(tag => (
                  <span 
                    key={tag} 
                    className="px-4 py-2 border-4 border-black bg-neobrutalism-yellow hover:bg-neobrutalism-blue hover:text-white cursor-pointer transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
