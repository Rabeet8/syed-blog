export const featuredPost = {
  id: 'post-1',
  title: 'What is RIP-7212? The First Rollup Improvement Proposal (RIP)',
  excerpt: 'Exploring how RIP-7212 enables secure verification of secp256r1 signatures on Ethereum, improving interoperability with modern security systems.',
  content: `
    <p>On EVM networks, the Elliptic Curve Digital Signature Algorithm (ECDSA) is used for creating externally owned accounts (EOA), signing transactions and verifying digital signatures. The ECDSA relies on the secp256k1 elliptic curves because of its efficiency and security.</p>
    
    <p>These elliptic curves play a crucial role in blockchain security and integrity, ensuring trust and reliability in transactions.</p>
    
    <h2>Understanding Elliptic Curves</h2>
    <p>Elliptic curves are continuous curves described by the equation:</p>
    
    <div class="my-8 bg-neobrutalism-green/20 p-6 border-4 border-black shadow-brutal text-center">
      <div class="font-mono text-2xl">y² = x³ + ax + b</div>
    </div>
    
    <p>These curves have special mathematical properties allowing points on the curves to be added together. In simpler terms, these curves are used to generate random points by drawing and reflecting lines, and then these points are used to create key pairs.</p>
    
    <p>Below is the graphical representation of the elliptic curve.</p>
    
    <div class="my-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div class="border-4 border-black shadow-brutal-lg bg-white p-2">
        <img 
          src="/lovable-uploads/9c6a467a-f67c-4b57-82a7-35dbe4cb4a44.png" 
          alt="Elliptic curve graphical representation" 
          class="w-full h-auto"
        />
        <div class="bg-neobrutalism-yellow border-t-4 border-black p-2 font-mono text-center font-bold -mb-2 -mx-2">
          Elliptic Curve Graphical Representation
        </div>
      </div>
    </div>
    
    <p>There are different types of elliptic curves but we will cover secp256k1 and secp256r1 in this blog.</p>
    
    <h2>1) secp256k1</h2>
    
    <p>secp256k1 is an elliptic curve that is primarily used for cryptographic applications, the "k" here denotes koblitz. In the koblitz curves like secp256k1 the parameters "a" and "b" are pre-defined and allow more effective computation that is advantageous for blockchains.</p>
    
    <p>It is defined by:</p>
    
    <div class="my-8 bg-neobrutalism-blue/20 p-6 border-4 border-black shadow-brutal text-center">
      <div class="font-mono text-2xl">y² = x³ + 7</div>
    </div>
    
    <p>Here:</p>
    
    <div class="my-6 bg-white p-4 border-4 border-black shadow-brutal">
      <p class="font-mono">a = 0, b = 7</p>
    </div>
    
    <p>This curve operates over a finite field of prime order "p", where:</p>
    
    <div class="my-6 bg-white p-4 border-4 border-black shadow-brutal">
      <p class="font-mono">p = 2²⁵⁶ - 2³² - 2⁹ - 2⁸ - 2⁷ - 2⁶ - 2⁴ - 1</p>
    </div>
    
    <div class="flex items-center my-6 p-4 bg-neobrutalism-yellow border-4 border-black shadow-brutal">
      <span class="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></span>
      <p><strong>Extra info:</strong> This curve's formulation offers a combination of computational efficiency and security that makes it ideal for blockchains like Ethereum and Bitcoin.</p>
    </div>
    
    <h2>2) secp256r1</h2>
    
    <p>secp256r1 is an elliptic curve also known as "P256" commonly used in security protocols and standards for web communication and hardware security modules. The "r" here denotes random, unlike secp256k1 in this curve the "a" and "b" parameters are not predefined but are chosen randomly. These values are selected through a rigorous process to maintain the curve's security.</p>
    
    <p>The parameters "a" and "b" are part of a larger standard designed for broader cryptographic applications like web communications.</p>
    
    <p>It is defined by:</p>
    
    <div class="my-8 bg-neobrutalism-pink/20 p-6 border-4 border-black shadow-brutal text-center">
      <div class="font-mono text-2xl">y² = x³ + ax + b</div>
    </div>
    
    <p>Here:</p>
    
    <p>a is set to a value equivalent to −3 modulo p. In hexadecimal, this is typically represented as:</p>
    
    <div class="my-6 bg-white p-4 border-4 border-black shadow-brutal overflow-x-auto">
      <p class="font-mono text-sm">a = FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC</p>
    </div>
    
    <p>b is a large, seemingly random constant:</p>
    
    <div class="my-6 bg-white p-4 border-4 border-black shadow-brutal overflow-x-auto">
      <p class="font-mono text-sm">b = 5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B</p>
    </div>
    
    <p>The appearance of randomness in these parameters is the intended choice to ensure security.</p>
    
    <p>Now you might have thought that secp256k1 favours blockchain and cryptocurrencies but why are we studying secp256r1?</p>
    
    <p>Well because the secp256r1 elliptic curve is supported by secure enclaves and passkey used in modern devices for secure authentication. Many Trusted Execution Environment (TEE) chips like Apple secure enclave generate and store cryptographic keys using the secp256r1 curve, ensuring that the private keys never leave the device and can only be accessible through biometric verification.</p>
    
    <p>Similarly, passkey which provides password authentication for web applications also uses the secp256r1 curve for generating and managing key pairs. However, Ethereum natively supports secp256k1. To bridge this gap and enable on-chain verification of these signatures on modern devices we need a way to verify secp256r1 signatures on Ethereum.</p>
    
    <h2>The Solution: RIP-7212</h2>
    
    <p>RIP-7212 is an important change in the Ethereum protocol that introduces precompiled contracts for secp256r1 curve signature verification. It is the first-ever Rollup Improvement Proposal (RIP) aiming to enable the verification of signatures used in modern systems while maintaining high-performance standards.</p>
    
    <p>RIP-7212 bridges a crucial gap between Ethereum's native secp256k1 curve and the secp256r1 that is used in secure enclaves and biometric systems.</p>
    
    <h2>What Are Precompiled Contracts?</h2>
    
    <p>These are not traditional smart contracts that we interact with usually but they are predefined native functions that are precompiled because they are natively available in the Ethereum protocol.</p>
    
    <p>For performing cryptographic operations such as signature verification, precompiled smart contracts are the best choice as they are highly efficient and require low gas costs. Without these contracts performing these operations would cost high computational energy which will eventually lead to higher gas costs.</p>
    
    <h2>Precompiled Contract Specification</h2>
    
    <p>In RIP-7212, new precompiled specifications for P256VERIFY precompiled contracts have been introduced. These specifications have been introduced with the following inputs and outputs.</p>
    
    <div class="my-8 border-4 border-black shadow-brutal bg-neobrutalism-lightblue/20">
      <div class="border-b-4 border-black bg-neobrutalism-blue text-white font-mono font-bold p-3">
        Input data: 160 bytes of data including:
      </div>
      <div class="p-4 space-y-2">
        <p class="font-mono">• 32 bytes of the signed data hash</p>
        <p class="font-mono">• 32 bytes of the r component of the signature</p>
        <p class="font-mono">• 32 bytes of the s component of the signature</p>
        <p class="font-mono">• 32 bytes of the x coordinate of the public key</p>
        <p class="font-mono">• 32 bytes of the y coordinate of the public key</p>
      </div>
    </div>
    
    <div class="my-8 border-4 border-black shadow-brutal bg-neobrutalism-lightblue/20">
      <div class="border-b-4 border-black bg-neobrutalism-blue text-white font-mono font-bold p-3">
        Output data:
      </div>
      <div class="p-4 space-y-2">
        <p class="font-mono">• If the signature verification process succeeds, it returns 1 in 32-byte format.</p>
        <p class="font-mono">• If the signature verification process fails, it does not return any output data.</p>
      </div>
    </div>
    
    <p>Source: <a href="https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7212.md" class="text-neobrutalism-blue underline font-bold" target="_blank">https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7212.md</a></p>
    
    <h2>Gas Efficiency of RIP-7212</h2>
    
    <p>RIP-7212 only cost 3450 gas verifying P256. It is the most secure, gas-efficient and fastest way to verify P256 on EVM chains.</p>
    
    <p>There are many other ways to verify the P256 curve on-chain. The below table shows that none of them are cheaper than RIP-7212.</p>
    
    <div class="my-8 overflow-x-auto">
      <table class="w-full border-collapse border-4 border-black">
        <thead>
          <tr class="bg-neobrutalism-green text-white">
            <th class="border-4 border-black p-3 font-mono">Implementation</th>
            <th class="border-4 border-black p-3 font-mono">Gas Cost</th>
            <th class="border-4 border-black p-3 font-mono">Verification Time</th>
            <th class="border-4 border-black p-3 font-mono">Security</th>
            <th class="border-4 border-black p-3 font-mono">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">RIP-7212</td>
            <td class="border-4 border-black p-3 font-mono">3,450</td>
            <td class="border-4 border-black p-3 font-mono">~5μs</td>
            <td class="border-4 border-black p-3 font-mono">High</td>
            <td class="border-4 border-black p-3 font-mono">Native precompile</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">Solidity Impl.</td>
            <td class="border-4 border-black p-3 font-mono">~2,000,000</td>
            <td class="border-4 border-black p-3 font-mono">~1.5s</td>
            <td class="border-4 border-black p-3 font-mono">Medium</td>
            <td class="border-4 border-black p-3 font-mono">Expensive</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">EIP-7212</td>
            <td class="border-4 border-black p-3 font-mono">15,000</td>
            <td class="border-4 border-black p-3 font-mono">~20μs</td>
            <td class="border-4 border-black p-3 font-mono">High</td>
            <td class="border-4 border-black p-3 font-mono">Ethereum L1</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">STARK Proof</td>
            <td class="border-4 border-black p-3 font-mono">~500,000</td>
            <td class="border-4 border-black p-3 font-mono">N/A</td>
            <td class="border-4 border-black p-3 font-mono">High</td>
            <td class="border-4 border-black p-3 font-mono">Complex setup</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">SNARK Proof</td>
            <td class="border-4 border-black p-3 font-mono">~200,000</td>
            <td class="border-4 border-black p-3 font-mono">N/A</td>
            <td class="border-4 border-black p-3 font-mono">High</td>
            <td class="border-4 border-black p-3 font-mono">Trusted setup</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">Assembly Opt.</td>
            <td class="border-4 border-black p-3 font-mono">~800,000</td>
            <td class="border-4 border-black p-3 font-mono">~0.4s</td>
            <td class="border-4 border-black p-3 font-mono">Medium</td>
            <td class="border-4 border-black p-3 font-mono">Hard to audit</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">Optimized Lib</td>
            <td class="border-4 border-black p-3 font-mono">~1,200,000</td>
            <td class="border-4 border-black p-3 font-mono">~0.8s</td>
            <td class="border-4 border-black p-3 font-mono">Medium</td>
            <td class="border-4 border-black p-3 font-mono">More auditable</td>
          </tr>
          <tr class="bg-white hover:bg-neobrutalism-green/10 transition-colors">
            <td class="border-4 border-black p-3 font-mono">Oracle Solution</td>
            <td class="border-4 border-black p-3 font-mono">~50,000</td>
            <td class="border-4 border-black p-3 font-mono">Variable</td>
            <td class="border-4 border-black p-3 font-mono">Low</td>
            <td class="border-4 border-black p-3 font-mono">Centralized</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <p>Source: <a href="https://hackmd.io/@1ofB8klpQky-YoR5pmPXFQ/SJ0nuzD1T" class="text-neobrutalism-blue underline font-bold" target="_blank">https://hackmd.io/@1ofB8klpQky-YoR5pmPXFQ/SJ0nuzD1T</a></p>
    
    <div class="flex items-center my-6 p-4 bg-neobrutalism-yellow border-4 border-black shadow-brutal">
      <span class="mr-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></span>
      <p><strong>Extra info:</strong> RIP-7212 reduces gas costs for secp256r1 signature verification by approximately 100x, enhancing efficiency for developers and users.</p>
    </div>
    
    <h2>Adoption of RIP 7212</h2>
    
    <p>RIP-7212 has been implemented by major rollups and blockchains that include ZKsync, optimism, Kakorot ZkEvm and Polygon.</p>
    
    <div class="my-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
      <div class="border-4 border-black shadow-brutal-lg bg-white p-2">
        <img 
          src="/lovable-uploads/24374f6d-0ef7-4873-892a-a9a60aed9c95.png" 
          alt="ZKsync and other networks implementing RIP-7212" 
          class="w-full h-auto"
        />
        <div class="bg-neobrutalism-green border-t-4 border-black p-2 font-mono text-center font-bold text-white -mb-2 -mx-2">
          ZKsync, Polygon, Optimism & Kakorot implementing RIP-7212
        </div>
      </div>
    </div>
    
    <h2>Practical Applications Enabled By RIP-7212</h2>
    
    <p>The adoption of RIP-7212 unlocks many applications that include:</p>
    
    <h3>Biometric Verification For Ethereum Transaction</h3>
    
    <p>With the support secp256r1 support, users can leverage biometric authentication methods for signing Ethereum transactions.</p>
    
    <h3>Smart Account Integrations</h3>
    
    <p>It can facilitate programmable features like daily spending limits and multi-signer arrangements allowing for more transactions.</p>
    
    <h3>Attestation of TEEs</h3>
    
    <p>It can be used to verify remote attestation of Trusted Execution Environments (TEEs) which can used for different purposes in blockchain.</p>
    
    <div class="my-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
      <div class="border-4 border-black shadow-brutal-lg bg-white p-2">
        <img 
          src="/lovable-uploads/e377c656-1eaf-4bf2-8075-8ea4cac39d8b.png" 
          alt="Applications of RIP-7212" 
          class="w-full h-auto"
        />
        <div class="bg-neobrutalism-blue border-t-4 border-black p-2 font-mono text-center font-bold text-white -mb-2 -mx-2">
          Practical Applications of RIP-7212
        </div>
      </div>
    </div>
    
    <h2>Conclusion And Future Outlook</h2>
    
    <p>The proposal of RIP-7212 was submitted by Ulaş Erdoğan and Doğan Alpaslan on June 20, 2023, and represents an achievement for the Ethereum protocol because it enhances Ethereum's functionality by enabling cheaper, faster and more secure secp256r1 curve verification.</p>
    
    <p>This proposal has garnered support from various Ethereum ecosystems such as Arbitrum that have proposed adopting this precompile to facilitate account abstraction wallets and improve user experience on DAPPs.</p>
    
    <p>By embracing this proposal Ethereum would be able to enhance its technical capabilities by integrating with modern devices that would help the developers to build more user-friendly software and application.</p>
  `,
  date: 'June 5, 2024',
  category: 'Blockchain',
  imageUrl: '/lovable-uploads/d054ddeb-68a8-461a-995a-499fbc65c3b2.png',
  slug: 'what-is-rip-7212-rollup-improvement-proposal'
};

export const latestPosts = [
  {
    id: "2",
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
    id: "7",
    title: "Understanding Denial of Service (DoS) in Smart Contracts",
    excerpt: "Learn about Denial of Service attacks in smart contracts and how to prevent them with proper code patterns.",
    date: "August 24, 2024",
    category: "Security",
    imageUrl: "/lovable-uploads/69960258-a8c7-41a0-a86d-9d2e79e69efb.png",
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
