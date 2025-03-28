export const featuredPost = {
  id: "1",
  title: "How I Built a Web3 Marketplace That Actually Works",
  excerpt: "A step-by-step journey through building a decentralized marketplace with focus on user experience and web performance.",
  date: "May 25, 2023",
  category: "Blockchain",
  imageUrl: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
  slug: "web3-marketplace-that-works",
  content: `
    <p>Building a Web3 marketplace that provides an excellent user experience is challenging but rewarding. In this article, I'll share my journey and the lessons I learned along the way.</p>
    
    <h2>The Problem with Current Web3 Apps</h2>
    <p>Most decentralized applications suffer from poor user experience, slow loading times, and complex interfaces that alienate mainstream users. My goal was to create something different.</p>
    
    <h2>Planning the Architecture</h2>
    <p>I started by mapping out the user flows and identifying potential bottlenecks. The key was to hide blockchain complexity from users while still maintaining the benefits of decentralization.</p>
    
    <pre><code>// Example smart contract for the marketplace
    contract Marketplace {
      struct Listing {
        uint256 id;
        address seller;
        uint256 price;
        string metadata;
        bool active;
      }
      
      mapping(uint256 => Listing) public listings;
      
      function createListing(uint256 price, string memory metadata) external {
        // Implementation details
      }
      
      function purchaseListing(uint256 listingId) external payable {
        // Implementation details
      }
    }</code></pre>
    
    <p>The frontend was built with React, ethers.js for blockchain integration, and a focus on progressive enhancement to ensure the app works even when blockchain features aren't available.</p>
    
    <h2>Optimizing Performance</h2>
    <p>To achieve fast loading times, I implemented:</p>
    <ul>
      <li>Server-side rendering for initial page loads</li>
      <li>Static generation for content that doesn't change often</li>
      <li>Lazy loading for blockchain components</li>
      <li>Optimistic UI updates to make actions feel instant</li>
    </ul>
    
    <h2>Results and Lessons Learned</h2>
    <p>The finished marketplace achieved a 92% performance score on Lighthouse, and users reported a seamless experience regardless of their familiarity with blockchain technology.</p>
    
    <p>Key lessons:</p>
    <ol>
      <li>Always provide fallbacks for blockchain operations</li>
      <li>Abstract away technical complexity whenever possible</li>
      <li>Focus on speed and responsiveness above all else</li>
      <li>Educate users contextually, not all at once</li>
    </ol>
  `
};

export const latestPosts = [
  {
    id: "2",
    title: "Designing with Raw Aesthetics: The Neo-Brutalist Web",
    excerpt: "Exploring the bold, raw design philosophy that's taking over the web design landscape.",
    date: "May 18, 2023",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    slug: "neo-brutalist-web-design",
    content: `
      <p>Neo-brutalism in web design embraces raw, unpolished aesthetics while creating functional digital experiences. Let's explore this exciting trend.</p>
      
      <h2>Origins of Brutalism in Design</h2>
      <p>Brutalism began as an architectural movement characterized by raw concrete, bold geometry, and a utilitarian approach. Digital brutalism translates these principles to the web.</p>
      
      <h2>Characteristics of Neo-Brutalist Web Design</h2>
      <ul>
        <li>High contrast color schemes</li>
        <li>Bold, oversized typography</li>
        <li>Raw, unpolished interfaces</li>
        <li>Exposed structural elements</li>
        <li>Lack of decorative features</li>
        <li>Functional layouts</li>
      </ul>
      
      <h2>Code Examples</h2>
      <p>Neo-brutalist CSS often features stark contrasts and minimal transitions:</p>
      
      <pre><code>.brutalist-card {
  background-color: #ffffff;
  border: 5px solid #000000;
  box-shadow: 8px 8px 0 #000000;
  padding: 2rem;
  transition: transform 0.2s;
}

.brutalist-card:hover {
  transform: translate(4px, 4px);
  box-shadow: 4px 4px 0 #000000;
}</code></pre>
      
      <h2>Finding Balance</h2>
      <p>The challenge with neo-brutalist design is balancing raw aesthetics with usability. The best implementations maintain good UX principles while embracing the bold visual language.</p>
      
      <h2>Case Studies</h2>
      <p>Some excellent examples of neo-brutalist web design include the Balenciaga website, Gumroad, and Figma's recent marketing pages. Each brings a unique take while maintaining core brutalist principles.</p>
    `
  },
  {
    id: "3",
    title: "React Performance Optimization Techniques You Should Know",
    excerpt: "Level up your React applications with these powerful performance techniques.",
    date: "May 10, 2023",
    category: "Tech",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    slug: "react-performance-optimization",
    content: `
      <p>React applications can suffer from performance issues as they grow. Here are battle-tested techniques to keep your React apps lightning fast.</p>
      
      <h2>Memoization with React.memo and useMemo</h2>
      <p>Prevent unnecessary re-renders by memoizing components and computed values:</p>
      
      <pre><code>// Memoizing a component
const ExpensiveComponent = React.memo(({ data }) => {
  // Component implementation
});

// Memoizing a computed value
function ProductPage({ products, selectedCategory }) {
  const filteredProducts = useMemo(() => {
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);
  
  // Component implementation
}</code></pre>
      
      <h2>Virtualization for Long Lists</h2>
      <p>When rendering long lists, only render items that are visible in the viewport:</p>
      
      <pre><code>import { FixedSizeList } from 'react-window';

function ProductList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name} - ${items[index].price}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width="100%"
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}</code></pre>
      
      <h2>Code Splitting with React.lazy</h2>
      <p>Split your bundle and load components only when needed:</p>
      
      <pre><code>import React, { Suspense, lazy } from 'react';

// Lazy load the component
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}</code></pre>
      
      <h2>Debouncing and Throttling</h2>
      <p>Control the rate at which functions execute, especially for search inputs and scroll events:</p>
      
      <pre><code>import { useState, useEffect, useRef } from 'react';
import debounce from 'lodash/debounce';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // Create a debounced search function
  const debouncedSearch = useRef(
    debounce(term => {
      fetchSearchResults(term).then(setResults);
    }, 500)
  ).current;
  
  useEffect(() => {
    if (searchTerm) {
      debouncedSearch(searchTerm);
    }
  }, [searchTerm, debouncedSearch]);
  
  return (
    // Component JSX
  );
}</code></pre>
    `
  },
  {
    id: "4",
    title: "The Mind-Shifting Power of Daily Mindfulness",
    excerpt: "How incorporating mindfulness into your daily routine can transform your productivity and wellbeing.",
    date: "May 5, 2023",
    category: "Growth",
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    slug: "daily-mindfulness-power",
    content: `
      <p>Mindfulness isn't just a buzzword—it's a powerful practice that can transform how you work and live. Here's how to incorporate it into your daily routine.</p>
      
      <h2>What Is Mindfulness?</h2>
      <p>At its core, mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without distraction or judgment.</p>
      
      <h2>The Science Behind Mindfulness</h2>
      <p>Research has shown that regular mindfulness practice can:</p>
      <ul>
        <li>Reduce stress and anxiety</li>
        <li>Improve focus and concentration</li>
        <li>Enhance creativity and problem-solving</li>
        <li>Strengthen emotional regulation</li>
        <li>Improve memory and cognitive function</li>
      </ul>
      
      <h2>Simple Daily Mindfulness Practices</h2>
      <h3>1. Mindful Morning Routine</h3>
      <p>Begin your day with intention by taking 5-10 minutes to sit quietly, focus on your breath, and set intentions for the day ahead.</p>
      
      <h3>2. Single-Tasking</h3>
      <p>Instead of multitasking, focus completely on one task at a time. When coding, just code. When eating, just eat. When listening, just listen.</p>
      
      <h3>3. Mindful Transitions</h3>
      <p>Use the transitions between activities as mindfulness triggers. Before starting a new task, take three deep breaths and consciously shift your attention.</p>
      
      <h2>Incorporating Mindfulness into Coding</h2>
      <p>As developers, we can benefit greatly from mindful coding practices:</p>
      <ul>
        <li>Begin each coding session with a clear intention</li>
        <li>Take regular breaks to reset your mind (try the Pomodoro Technique)</li>
        <li>Practice mindful debugging by approaching errors with curiosity rather than frustration</li>
        <li>End each session by reviewing what you've accomplished</li>
      </ul>
      
      <h2>Building a Sustainable Practice</h2>
      <p>The key to making mindfulness work is consistency. Start small with just 5 minutes a day, use reminders or apps to stay on track, and gradually extend your practice as it becomes more natural.</p>
      
      <p>Remember, mindfulness isn't about achieving a perfect state of calm—it's about returning to the present moment again and again, with patience and without judgment.</p>
    `
  },
  {
    id: "5",
    title: "Setting Up a Secure Ethereum Development Environment",
    excerpt: "A comprehensive guide to creating a secure local environment for Ethereum smart contract development.",
    date: "April 28, 2023",
    category: "Blockchain",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    slug: "secure-ethereum-dev-environment",
    content: `
      <p>Setting up a secure environment for Ethereum development is crucial for writing safe smart contracts. Follow this guide to create your ideal setup.</p>
      
      <h2>Essential Tools</h2>
      <ul>
        <li>Hardhat: For compiling, testing, and deploying contracts</li>
        <li>Slither: For static analysis of smart contracts</li>
        <li>Mythril: For security analysis</li>
        <li>OpenZeppelin: For secure contract libraries</li>
        <li>MetaMask: For testing contract interactions</li>
      </ul>
      
      <h2>Setting Up Hardhat</h2>
      <pre><code>// Initialize a new project
npm init -y
npm install --save-dev hardhat

// Initialize Hardhat
npx hardhat

// Install additional plugins
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai</code></pre>
      
      <h2>Basic hardhat.config.js</h2>
      <pre><code>require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// Load environment variables
require('dotenv').config();

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    // Add other networks as needed
  }
};</code></pre>
      
      <h2>Security Best Practices</h2>
      <ol>
        <li>Never commit private keys or mnemonics to your repository</li>
        <li>Use .env files with .gitignore to manage secrets</li>
        <li>Run automated security tools before deploying</li>
        <li>Follow the principle of least privilege in your contracts</li>
        <li>Use established libraries like OpenZeppelin rather than writing everything from scratch</li>
      </ol>
      
      <h2>Sample Contract with Security Features</h2>
      <pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract SecureContract is Ownable, ReentrancyGuard {
    mapping(address => uint256) private _balances;
    
    // Events
    event Deposited(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);
    
    // Deposit function with reentrancy protection
    function deposit() external payable nonReentrant {
        require(msg.value > 0, "Must deposit some ETH");
        _balances[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }
    
    // Withdraw function with reentrancy protection
    function withdraw(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than zero");
        require(_balances[msg.sender] >= amount, "Insufficient balance");
        
        // Update state before external call
        _balances[msg.sender] -= amount;
        
        // Transfer funds (could fail)
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        
        emit Withdrawn(msg.sender, amount);
    }
    
    function getBalance() external view returns (uint256) {
        return _balances[msg.sender];
    }
}</code></pre>
    `
  },
  {
    id: "6",
    title: "Creating Custom CSS Grid Layouts for Modern Web Applications",
    excerpt: "Master CSS Grid to create flexible, responsive layouts that stand out from the template crowd.",
    date: "April 20, 2023",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    slug: "custom-css-grid-layouts",
    content: `
      <p>CSS Grid has revolutionized web layout design. Learn how to create custom grid layouts that break the mold and showcase your content effectively.</p>
      
      <h2>Beyond Basic Grids</h2>
      <p>While simple grid layouts are useful, the real power of CSS Grid comes from creating custom, asymmetrical layouts that adapt to different screen sizes.</p>
      
      <h2>The Anatomy of a Custom Grid</h2>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
}

.featured-item {
  grid-column: 1 / span 4;
  grid-row: 1 / span 2;
}

.secondary-item {
  grid-column: 5 / span 2;
  grid-row: 1;
}

.tertiary-item {
  grid-column: 5 / span 2;
  grid-row: 2;
}

/* More grid area definitions */</code></pre>
      
      <h2>Creating a Magazine-Style Layout</h2>
      <p>Magazine-style layouts with varied sizes of content blocks can be created easily with Grid:</p>
      
      <pre><code>.magazine-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 16px;
}

.headline {
  grid-column: 1 / span 8;
  grid-row: 1 / span 2;
}

.sidebar {
  grid-column: 9 / span 4;
  grid-row: 1 / span 4;
}

.article-preview-large {
  grid-column: 1 / span 5;
  grid-row: 3 / span 3;
}

.article-preview-medium {
  grid-column: 6 / span 3;
  grid-row: 3 / span 2;
}

/* And so on... */</code></pre>
      
      <h2>Responsive Grid Techniques</h2>
      <p>Making your custom grids responsive is essential. There are several approaches:</p>
      
      <h3>1. Using minmax()</h3>
      <pre><code>.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}</code></pre>
      
      <h3>2. Using grid-template-areas</h3>
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header header header header header"
    "main main main main sidebar sidebar"
    "footer footer footer footer footer footer";
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}</code></pre>
      
      <h3>3. Using grid-auto-flow: dense</h3>
      <p>This property helps fill in gaps in your grid when items are of different sizes:</p>
      
      <pre><code>.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
  grid-gap: 16px;
}

.wide {
  grid-column: span 2;
}

.tall {
  grid-row: span 2;
}

.large {
  grid-column: span 2;
  grid-row: span 2;
}</code></pre>
    `
  }
];

export const comments = [
  {
    id: "c1",
    author: "Jane Cooper",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "This is exactly what I've been looking for! The explanation of smart contract integration was particularly helpful. I've been struggling with optimizing gas fees.",
    date: "May 26, 2023",
    replies: [
      {
        id: "c1r1",
        author: "Simon Larsen",
        avatar: "https://i.pravatar.cc/150?img=2",
        content: "I've found that using EIP-1559 has helped a lot with gas optimization. Have you tried implementing that?",
        date: "May 26, 2023"
      },
      {
        id: "c1r2",
        author: "Author",
        avatar: "https://i.pravatar.cc/150?img=12",
        content: "That's a great point about EIP-1559, Simon! I actually cover that in my next article coming out next week.",
        date: "May 26, 2023"
      }
    ]
  },
  {
    id: "c2",
    author: "Marcus Reynolds",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "The code samples were super helpful. I implemented the contract pattern you suggested and it reduced our deployment costs by almost 15%!",
    date: "May 25, 2023"
  },
  {
    id: "c3",
    author: "Alicia Wang",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "I appreciate the focus on user experience. Too many Web3 projects forget that not everyone understands blockchain technology. Your approach of gradually introducing complexity is spot on.",
    date: "May 25, 2023",
    replies: [
      {
        id: "c3r1",
        author: "David Kim",
        avatar: "https://i.pravatar.cc/150?img=8",
        content: "Completely agree. I've been working on similar UX patterns for onboarding non-crypto users. Would love to connect and share ideas!",
        date: "May 25, 2023"
      }
    ]
  }
];

export const relatedPosts = [
  {
    id: "r1",
    title: "Building Scalable Smart Contracts with Proxy Patterns",
    category: "Blockchain",
    imageUrl: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
    slug: "scalable-smart-contracts-proxy-patterns"
  },
  {
    id: "r2",
    title: "Web3 Authentication Methods Compared",
    category: "Blockchain",
    imageUrl: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    slug: "web3-authentication-methods"
  },
  {
    id: "r3",
    title: "Designing DeFi Interfaces That Users Actually Love",
    category: "Design",
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    slug: "designing-defi-interfaces"
  }
];

export const categories = [
  {
    id: "tech",
    name: "Tech & Development",
    description: "Articles about programming, software development, and technology trends.",
    count: 12
  },
  {
    id: "blockchain",
    name: "Blockchain & Web3",
    description: "Exploring blockchain technology, cryptocurrencies, and decentralized applications.",
    count: 8
  },
  {
    id: "growth",
    name: "Personal Growth",
    description: "Insights on productivity, mindfulness, learning, and personal development.",
    count: 5
  },
  {
    id: "design",
    name: "Design & Aesthetics",
    description: "Topics covering web design, user experience, and visual aesthetics.",
    count: 7
  }
];
