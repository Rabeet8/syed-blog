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
    id: "7",
    title: "Understanding Denial of Service (DoS) in Smart Contracts",
    excerpt: "Learn about Denial of Service attacks in smart contracts and how to prevent them with proper code patterns.",
    date: "June 10, 2023",
    category: "Security",
    imageUrl: "/lovable-uploads/edb3d298-9bd7-4622-afa7-be52d5465297.png",
    slug: "denial-of-service-smart-contracts",
    content: `
      <p>I embark on my journey to become a smart contract auditor with Cyfrin Updraft,
      I have learned about various attack vectors, with Denial of Service (DoS) being my favorite. Imagine being an attacker who completely disrupts a protocol's functionality—while it might seem satisfying from an attacker's perspective, our job as auditors is to prevent such attacks.</p>
      
      <h2>Understanding DoS in Smart Contracts</h2>
      <p>Let's consider an example involving an unbounded loop that leads to a DoS attack.</p>
      
      <p>In this smart contract, users call the enter function, which checks if their address is already in an array. If the address is not in the array, the function adds it.</p>
      
      <pre><code>// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
contract DoS {
    address[] entrants;

    function enter() public {
        // Check for duplicate entrants
        for (uint256 i; i < entrants.length; i++) {
            if (entrants[i] == msg.sender) {
                revert("You've already entered!");
            }
        }
        entrants.push(msg.sender);
    }
}</code></pre>
      
      <p>Initially, this works fine for a few users. However, as the number of users grows into the thousands, the cost of running the loop increases significantly. Each time the loop executes, it becomes more expensive for new users to enter.</p>
      
      <h2>Testing the DoS Vulnerability</h2>
      <p>To illustrate this, we conducted a test where we added 1,000 users after two addresses, A and B, and then added address C. The gas fees for adding addresses A and B (the first and second users) were much lower compared to the gas fees for adding address C (after 1,000 users).</p>
      
      <pre><code>// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import {Test, console2} from "forge-std/Test.sol";
import {DoS} from "../../src/denial-of-service/DoS.sol";

contract DoSTest is Test {
    DoS public dos;

    address warmUpAddress = makeAddr("warmUp");
    address personA = makeAddr("A");
    address personB = makeAddr("B");
    address personC = makeAddr("C");

    function setUp() public {
        dos = new DoS();
    }

    function test_denialOfService() public {
        // We want to warm up the storage stuff
        vm.prank(warmUpAddress);

        dos.enter();

        uint256 gasStartA = gasleft();
        vm.prank(personA);
        dos.enter();
        uint256 gasCostA = gasStartA - gasleft();

        uint256 gasStartB = gasleft();
        vm.prank(personB);
        dos.enter();
        uint256 gasCostB = gasStartB - gasleft();

        for (uint256 i; i < 1000; i++) {
            vm.prank(address(uint160(i)));
            dos.enter();
        }

        uint256 gasStartC = gasleft();
        vm.prank(personC);
        dos.enter();
        uint256 gasCostC = gasStartC - gasleft();

        console2.log("Gas cost A: %s", gasCostA);
        console2.log("Gas cost B: %s", gasCostB);
        console2.log("Gas cost C: %s", gasCostC);

        // The gas cost will just keep rising, making it harder and harder for new people to enter!
        assert(gasCostC > gasCostB);
        assert(gasCostB > gasCostA);
    }
}</code></pre>
      
      <div class="my-6">
        <img src="/lovable-uploads/f6ec4018-8131-4539-9162-51d676a95645.png" alt="Gas result DoS" class="w-full border-4 border-black" />
      </div>
      
      <p>This difference in gas fees makes the function prohibitively expensive to use, leading to a Denial of Service attack. Essentially, no one will use the function because the gas fees are too high, effectively rendering the contract unusable.</p>
      
      <h2>The Solution: Using Mappings</h2>
      <p>To mitigate this, you can use a mapping instead of an array to keep track of whether an address has been entered or not. This way, checking for duplicates becomes an O(1) operation rather than O(n), eliminating the risk of a DoS attack due to high gas costs.</p>
      
      <pre><code>// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract DoS {
    mapping(address => bool) public hasEntered;

    function enter() public {
        // Check if the sender has already entered
        require(!hasEntered[msg.sender], "You've already entered!");

        // Mark the sender as having entered
        hasEntered[msg.sender] = true;
    }
}</code></pre>
      
      <div class="my-6">
        <img src="/lovable-uploads/d054ddeb-68a8-461a-995a-499fbc65c3b2.png" alt="Test result DoS2" class="w-full border-4 border-black" />
      </div>
      
      <p>Now you can see that gas is much more efficiently handled by using a mapping, which prevents the contract from being vulnerable to DoS attacks!</p>
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
    title: "Smart Contract Security Best Practices",
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb",
    slug: "smart-contract-security-best-practices"
  }
];

export const categories = [
  {
    id: "blockchain",
    name: "Blockchain",
    description: "Exploring blockchain technology, cryptocurrencies, and decentralized applications.",
    count: 2
  },
  {
    id: "security",
    name: "Security",
    description: "Articles about smart contract security, auditing, and best practices for secure blockchain development.",
    count: 1
  }
];
