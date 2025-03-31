
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Lightbulb } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ReadingProgress from '../components/post/ReadingProgress';
import CommentSection from '../components/post/CommentSection';
import RelatedPosts from '../components/post/RelatedPosts';
import { ScrollArea } from '../components/ui/scroll-area';
import { featuredPost, latestPosts, comments, relatedPosts } from '../data/mockData';

const SinglePost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post based on slug
  const post = [featuredPost, ...latestPosts].find(post => post.slug === slug);
  
  // If post not found, show error
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="brutal-card p-8 text-center">
            <h1 className="font-mono font-bold text-3xl mb-4">Post Not Found</h1>
            <p className="mb-6">The post you're looking for doesn't exist or has been moved.</p>
            <Link to="/" className="brutal-btn inline-block">
              BACK TO HOME
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // RIP-7212 post specific rendering
  const renderRip7212Post = () => {
    if (post.slug === 'what-is-rip-7212-rollup-improvement-proposal') {
      return (
        <div className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold">
          <h2 className="text-2xl font-mono font-bold mb-4 text-neobrutalism-green">Introduction</h2>
          <p className="mb-4">
            On EVM networks, the Elliptic Curve Digital Signature Algorithm (ECDSA) is used for creating externally owned accounts (EOA), signing transactions and verifying digital signatures. The ECDSA relies on the secp256k1 elliptic curves because of its efficiency and security.
          </p>
          
          <p className="mb-4">
            These elliptic curves play a crucial role in blockchain security and integrity, ensuring trust and reliability in transactions.
          </p>

          <p className="mb-6">
            The Rollup Improvement Proposal (RIP) aims to introduce support for the secp256r1 elliptic curve on Ethereum, addressing a long-standing interoperability challenge. Currently, Ethereum relies on secp256k1, which, while secure and well-suited for blockchain applications, is not widely used outside the crypto space. Many modern security systems, including Apple's Secure Enclave, WebAuthn, and enterprise authentication frameworks, rely on secp256r1 due to its widespread adoption and regulatory backing. By integrating native verification for secp256r1 signatures, this proposal enables Ethereum to interact seamlessly with these ecosystems, reducing reliance on costly precompiles or off-chain solutions.
          </p>
          
          <p className="mb-6">
            Beyond interoperability, this improvement brings significant efficiency and scalability benefits. Native support for secp256r1 allows Layer 2 rollups to verify transactions and signatures more efficiently, leading to lower gas fees and improved throughput. Traditionally, verifying non-secp256k1 signatures on Ethereum requires expensive cryptographic operations, often handled off-chain or through specialized smart contracts. By making secp256r1 verification a first-class citizen on Ethereum, the proposal reduces computational overhead, paving the way for more scalable and cost-effective smart contract interactions.
          </p>
          
          <p className="mb-6">
            This upgrade also strengthens Ethereum's security model while maintaining its trustless nature. As Web2 and Web3 authentication methods converge, enabling secp256r1 on-chain fosters smoother user experiences and broader institutional adoption. Users can authenticate with Ethereum applications using hardware-backed security keys and mobile devices, reducing friction and enhancing usability. Additionally, institutions and enterprises that require regulatory-compliant cryptographic standards will find Ethereum more accessible, unlocking new use cases in finance, identity verification, and secure communication.
          </p>
          
          <h2 className="text-2xl font-mono font-bold mb-4 text-neobrutalism-green">Understanding Elliptic Curves</h2>
          <p className="mb-4">
            Elliptic curves are continuous curves described by the equation:
          </p>
          
          <div className="math-formula">
            <div className="math-formula-inner">
              y² = x³ + ax + b
            </div>
          </div>
          
          <p className="mb-4">
            These curves have special mathematical properties allowing points on the curves to be added together. In simpler terms, these curves are used to generate random points by drawing and reflecting lines, and then these points are used to create key pairs.
          </p>
          
          <p className="mb-4">
            Below is the graphical representation of the elliptic curve.
          </p>
          
          <div className="brutal-image">
            <img 
              src="/lovable-uploads/9c6a467a-f67c-4b57-82a7-35dbe4cb4a44.png" 
              alt="Elliptic curve graphical representation" 
              className="w-full h-auto"
            />
            <div className="brutal-image-caption bg-neobrutalism-green text-white">
              Elliptic Curve Visualization
            </div>
          </div>
          
          <p className="mb-4">
            There are different types of elliptic curves but we will cover secp256k1 and secp256r1 in this blog.
          </p>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">1) secp256k1:</h3>
          
          <p className="mb-4">
            secp256k1 is an elliptic curve that is primarily used for cryptographic applications, the "k" here denotes koblitz. In the koblitz curves like secp256k1 the parameters "a" and "b" are pre-defined and allow more effective computation that is advantageous for blockchains.
          </p>
          
          <p className="mb-4">
            it is defined by
          </p>
          
          <div className="math-formula">
            <div className="math-formula-inner">
              y² = x³ + 7
            </div>
          </div>
          
          <p className="mb-4">
            Here:
          </p>
          
          <p className="mb-4">
            a = 0, b=7
          </p>
          
          <p className="mb-4">
            This curve operates over a finite field of prime order "p", where:
          </p>
          
          <div className="math-formula">
            <div className="math-formula-inner">
              p = 2²⁵⁶ - 2³² - 2⁹ - 2⁸ - 2⁷ - 2⁶ - 2⁴ - 1
            </div>
          </div>
          
          <div className="flex items-center my-4 p-4 bg-neobrutalism-yellow border-4 border-black shadow-brutal">
            <Lightbulb size={24} className="mr-2 flex-shrink-0" />
            <p className="m-0">This curve's formulation offers a combination of computational efficiency and security that makes it ideal for blockchains like Ethereum and Bitcoin.</p>
          </div>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">2) secp256r1:</h3>
          
          <p className="mb-4">
            secp256r1 is an elliptic curve also known as "P256" commonly used in security protocols and standards for web communication and hardware security modules. The "r" here denotes random, unlike secp256k1 in this curve the "a" and "b" parameters are not predefined but are chosen randomly. These values are selected through a rigorous process to maintain the curve's security.
          </p>
          
          <p className="mb-4">
            The parameters "a" and "b" are part of a larger standard designed for broader cryptographic applications like web communications.
          </p>
          
          <p className="mb-4">
            It is defined by:
          </p>
          
          <div className="math-formula">
            <div className="math-formula-inner">
              y² = x³ + ax + b
            </div>
          </div>
          
          <p className="mb-4">
            Here:
          </p>
          
          <p className="mb-4">
            a is set to a value equivalent to −3-3−3 modulo p. In hexadecimal, this is typically represented as
          </p>
          
          <div className="code-block">
            <div className="code-block-header">Parameter a</div>
            <code>a=FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC</code>
          </div>
          
          <p className="mb-4">
            b is a large, seemingly random constant:
          </p>
          
          <div className="code-block">
            <div className="code-block-header">Parameter b</div>
            <code>b=5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B</code>
          </div>
          
          <p className="mb-4">
            The appearance of randomness in these parameters is the intended choice to ensure security.
          </p>
          
          <h2 className="text-2xl font-mono font-bold mb-4 mt-8 text-neobrutalism-green">Why Study secp256r1?</h2>
          
          <p className="mb-4">
            Well because the secp256r1 elliptic curve is supported by secure enclaves and passkey used in modern devices for secure authentication. Many Trusted Execution Environment (TEE) chips like Apple secure enclave generate and store cryptographic keys using the secp256r1 curve, ensuring that the private keys never leave the device and can only be accessible through biometric verification.
          </p>
          
          <p className="mb-4">
            Similarly, passkey which provides password authentication for web applications also uses the secp256r1 curve for generating and managing key pairs. However, Ethereum natively supports secp256k1. To bridge this gap and enable on-chain verification of these signatures on modern devices we need a way to verify secp256r1 signatures on Ethereum.
          </p>
          
          <h2 className="text-2xl font-mono font-bold mb-4 text-neobrutalism-green">The Solution: RIP-7212</h2>
          
          <p className="mb-4">
            RIP-7212 is an important change in the Ethereum protocol that introduces precompiled contracts for secp256r1 curve signature verification. It is the first-ever Rollup Improvement Proposal (RIP) aiming to enable the verification of signatures used in modern systems while maintaining high-performance standards.
          </p>
          
          <p className="mb-4">
            RIP-7212 bridges a crucial gap between Ethereum's native secp256k1 curve and the secp256r1 that is used in secure enclaves and biometric systems.
          </p>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">What Are Precompiled Contracts?</h3>
          
          <p className="mb-4">
            These are not traditional smart contracts that we interact with usually but they are predefined native functions that are precompiled because they are natively available in the Ethereum protocol.
          </p>
          
          <p className="mb-4">
            For performing cryptographic operations such as signature verification, precompiled smart contracts are the best choice as they are highly efficient and require low gas costs. Without these contracts performing these operations would cost high computational energy which will eventually lead to higher gas costs.
          </p>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">Precompiled Contract Specification:</h3>
          
          <p className="mb-4">
            In RIP-7212, new precompiled specifications for P256VERIFY precompiled contracts have been introduced. These specifications have been introduced with the following inputs and outputs.
          </p>
          
          <div className="my-6 bg-white p-4 border-4 border-black shadow-brutal">
            <h4 className="font-mono font-bold mb-3">Input data: 160 bytes of data including:</h4>
            <ul className="list-disc pl-6 mb-4">
              <li>32 bytes of the signed data hash</li>
              <li>32 bytes of the r component of the signature</li>
              <li>32 bytes of the s component of the signature</li>
              <li>32 bytes of the x coordinate of the public key</li>
              <li>32 bytes of the y coordinate of the public key</li>
            </ul>
            
            <h4 className="font-mono font-bold mb-3">Output data:</h4>
            <ul className="list-disc pl-6">
              <li>If the signature verification process succeeds, it returns 1 in 32-byte format.</li>
              <li>If the signature verification process fails, it does not return any output data.</li>
            </ul>
            
            <div className="mt-4 pt-4 border-t-2 border-dashed border-black">
              <span className="font-mono text-sm">Source: <a href="https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7212.md" target="_blank" rel="noopener noreferrer" className="text-neobrutalism-blue">https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7212.md</a></span>
            </div>
          </div>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">Gas Efficiency of RIP-7212:</h3>
          
          <p className="mb-4">
            RIP-7212 only cost 3450 gas verifying P256. It is the most secure, gas-efficient and fastest way to verify P256 on EVM chains.
          </p>
          
          <p className="mb-4">
            There are many other ways to verify the P256 curve on-chain. The below table shows that none of them are cheaper than RIP-7212.
          </p>
          
          <div className="overflow-x-auto my-8">
            <table className="brutal-table">
              <thead>
                <tr>
                  <th>Implementation</th>
                  <th>Gas Cost</th>
                  <th>Speed</th>
                  <th>Security</th>
                  <th>Complexity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RIP-7212</td>
                  <td>3,450</td>
                  <td>Very Fast</td>
                  <td>High</td>
                  <td>Low</td>
                </tr>
                <tr>
                  <td>Smart Contract</td>
                  <td>300,000+</td>
                  <td>Slow</td>
                  <td>Medium</td>
                  <td>High</td>
                </tr>
                <tr>
                  <td>ZK Proof</td>
                  <td>100,000+</td>
                  <td>Medium</td>
                  <td>High</td>
                  <td>Very High</td>
                </tr>
                <tr>
                  <td>Third-party Oracle</td>
                  <td>50,000+</td>
                  <td>Fast</td>
                  <td>Low</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>Assembly Optimization</td>
                  <td>200,000+</td>
                  <td>Medium</td>
                  <td>Medium</td>
                  <td>Very High</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="flex items-center my-4 p-4 bg-neobrutalism-yellow border-4 border-black shadow-brutal">
            <Lightbulb size={24} className="mr-2 flex-shrink-0" />
            <p className="m-0">RIP-7212 reduces gas costs for secp256r1 signature verification by approximately 100x, enhancing efficiency for developers and users.</p>
          </div>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">Adoption of RIP 7212:</h3>
          
          <p className="mb-4">
            RIP-7212 has been implemented by major rollups and blockchains that include ZKsync, optimism, Kakorot ZkEvm and Polygon.
          </p>
          
          <div className="brutal-image">
            <img 
              src="/lovable-uploads/e377c656-1eaf-4bf2-8075-8ea4cac39d8b.png" 
              alt="ZKsync adoption of RIP-7212" 
              className="w-full h-auto"
            />
            <div className="brutal-image-caption bg-neobrutalism-blue text-white">
              ZKsync Implementation of RIP-7212
            </div>
          </div>
          
          <h2 className="text-2xl font-mono font-bold mb-4 text-neobrutalism-green">Practical Applications Enabled By RIP-7212:</h2>
          
          <p className="mb-4">
            The adoption of RIP-7212 unlocks many applications that include:
          </p>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">Biometric Verification For Ethereum Transaction:</h3>
          
          <p className="mb-4">
            With the support secp256r1 support, users can leverage biometric authentication methods for signing Ethereum transactions.
          </p>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">Smart Account Integrations:</h3>
          
          <p className="mb-4">
            It can facilitate programmable features like daily spending limits and multi-signer arrangements allowing for more transactions.
          </p>
          
          <h3 className="text-xl font-mono font-bold mb-3 text-neobrutalism-blue">Attestation of TEEs:</h3>
          
          <p className="mb-4">
            It can be used to verify remote attestation of Trusted Execution Environments (TEEs) which can used for different purposes in blockchain.
          </p>
          
          <div className="brutal-image">
            <img 
              src="/lovable-uploads/69960258-a8c7-41a0-a86d-9d2e79e69efb.png" 
              alt="Applications of RIP-7212" 
              className="w-full h-auto"
            />
            <div className="brutal-image-caption bg-neobrutalism-yellow text-black">
              Applications Enabled by RIP-7212
            </div>
          </div>
          
          <h2 className="text-2xl font-mono font-bold mb-4 text-neobrutalism-green">Conclusion And Future Outlook:</h2>
          
          <p className="mb-4">
            The proposal of RIP-7212 was submitted by Ulaş Erdoğan and Doğan Alpaslan on June 20, 2023, and represents an achievement for the Ethereum protocol because it enhances Ethereum's functionality by enabling cheaper, faster and more secure secp256r1 curve verification.
          </p>
          
          <p className="mb-4">
            This proposal has garnered support from various Ethereum ecosystems such as Arbitrum that have proposed adopting this precompile to facilitate account abstraction wallets and improve user experience on DAPPs.
          </p>
          
          <p className="mb-4">
            By embracing this proposal Ethereum would be able to enhance its technical capabilities by integrating with modern devices that would help the developers to build more user-friendly software and application
          </p>
        </div>
      );
    }
    
    // Special rendering for DoS post
    if (post.slug === 'denial-of-service-smart-contracts') {
      return (
        <div className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold">
          <p className="mb-4">
            I embark on my journey to become a smart contract auditor with Cyfrin Updraft,
            I have learned about various attack vectors, with Denial of Service (DoS) being my favorite. Imagine being an attacker who completely disrupts a protocol's functionality—while it might seem satisfying from an attacker's perspective, our job as auditors is to prevent such attacks.
          </p>
          
          <p className="mb-4">
            Let's consider an example involving an unbounded loop that leads to a DoS attack.
          </p>
          
          <p className="mb-4">
            In this smart contract, users call the enter function, which checks if their address is already in an array. If the address is not in the array, the function adds it.
          </p>
          
          <p className="mb-4">
            Initially, this works fine for a few users. However, as the number of users grows into the thousands, the cost of running the loop increases significantly. Each time the loop executes, it becomes more expensive for new users to enter.
          </p>
          
          <div className="my-8 relative">
            <pre className="p-6 overflow-x-auto bg-neobrutalism-black text-white border-4 border-neobrutalism-blue shadow-brutal font-mono rounded-none">
              <div className="absolute top-0 left-0 bg-neobrutalism-blue text-white px-4 py-1 font-mono font-bold border-b-4 border-r-4 border-black">
                DoS.sol
              </div>
              <code className="language-solidity">
{`// SPDX-License-Identifier: MIT
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
}`}
              </code>
            </pre>
          </div>
          
          <p className="mb-4">
            To illustrate this, we conducted a test where we added 1,000 users after two addresses, A and B, and then added address C. The gas fees for adding addresses A and B (the first and second users) were much lower compared to the gas fees for adding address C (after 1,000 users).
          </p>
          
          <div className="my-8 relative">
            <pre className="p-6 overflow-x-auto bg-neobrutalism-black text-white border-4 border-neobrutalism-pink shadow-brutal font-mono rounded-none">
              <div className="absolute top-0 left-0 bg-neobrutalism-pink text-white px-4 py-1 font-mono font-bold border-b-4 border-r-4 border-black">
                DoSTest.sol
              </div>
              <code className="language-solidity">
{`// SPDX-License-Identifier: MIT
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
}`}
              </code>
            </pre>
          </div>
          
          <p className="mb-4">
            This difference in gas fees makes the function prohibitively expensive to use, leading to a Denial of Service attack. Essentially, no one will use the function because the gas fees are too high, effectively rendering the contract unusable.
          </p>
          
          <div className="my-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="border-4 border-black shadow-brutal-lg bg-white p-2">
              <img 
                src="/lovable-uploads/f6ec4018-8131-4539-9162-51d676a95645.png" 
                alt="Gas result DoS test showing increasing gas costs" 
                className="w-full h-auto"
              />
              <div className="bg-neobrutalism-yellow border-t-4 border-black p-2 font-mono text-center font-bold -mb-2 -mx-2">
                Gas costs increasing with more users
              </div>
            </div>
          </div>
          
          <p className="mb-4">
            To mitigate this, you can use a mapping instead of an array to keep track of whether an address has been entered or not. This way, checking for duplicates becomes an O(1) operation rather than O(n), eliminating the risk of a DoS attack due to high gas costs.
          </p>
          
          <div className="my-8 relative">
            <pre className="p-6 overflow-x-auto bg-neobrutalism-black text-white border-4 border-neobrutalism-yellow shadow-brutal font-mono rounded-none">
              <div className="absolute top-0 left-0 bg-neobrutalism-yellow text-black px-4 py-1 font-mono font-bold border-b-4 border-r-4 border-black">
                ImprovedDoS.sol
              </div>
              <code className="language-solidity">
{`// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

contract DoS {
    mapping(address => bool) public hasEntered;

    function enter() public {
        // Check if the sender has already entered
        require(!hasEntered[msg.sender], "You've already entered!");

        // Mark the sender as having entered
        hasEntered[msg.sender] = true;
    }
}`}
              </code>
            </pre>
          </div>
          
          <p className="mb-4">
            Now see that gas is much more efficiently handled by using a mapping.
          </p>
          
          <div className="my-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="border-4 border-black shadow-brutal-lg bg-white p-2">
              <img 
                src="/lovable-uploads/25ddbccd-6d66-4b2e-ba95-6f40629f7d8c.png" 
                alt="Test result showing improved gas efficiency with mapping" 
                className="w-full h-auto"
              />
              <div className="bg-neobrutalism-blue border-t-4 border-black p-2 font-mono text-center font-bold text-white -mb-2 -mx-2">
                Improved gas efficiency with mapping
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div 
        className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold prose-pre:bg-black prose-pre:text-white prose-pre:border-4 prose-pre:border-gray-600 prose-pre:shadow-brutal prose-code:font-mono"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    );
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <ReadingProgress />
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="w-full h-96 relative overflow-hidden border-b-4 border-black">
          <img 
            src={post.imageUrl} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <span className="inline-block bg-neobrutalism-pink text-white px-4 py-2 font-mono font-bold mb-4 border-4 border-black shadow-brutal transform rotate-1">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white shadow-text">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Post Meta */}
        <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between border-b-4 border-black">
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-neobrutalism-lightblue px-4 py-1 border-2 border-black shadow-brutal">
              <Calendar size={20} className="mr-2" />
              <span className="font-mono">{post.date}</span>
            </div>
            <div className="flex items-center bg-neobrutalism-yellow px-4 py-1 border-2 border-black shadow-brutal">
              <Tag size={20} className="mr-2" />
              <span className="font-mono">{post.category}</span>
            </div>
          </div>
          
          <Link to="/" className="brutal-btn flex items-center mt-4 sm:mt-0 hover:text-white transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to all posts
          </Link>
        </div>
        
        {/* Post Content */}
        <div className="container mx-auto px-4 py-12 overflow-hidden">
          <ScrollArea className="max-w-3xl mx-auto h-full rounded-none">
            <article className="px-2">
              {renderRip7212Post()}
              
              <div className="mt-12 pt-12 border-t-4 border-black">
                <CommentSection comments={comments} />
              </div>
              
              <div className="mt-12 pt-12 border-t-4 border-black">
                <RelatedPosts posts={relatedPosts} />
              </div>
            </article>
          </ScrollArea>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SinglePost;
