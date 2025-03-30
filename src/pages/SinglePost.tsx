import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ReadingProgress from '../components/post/ReadingProgress';
import CommentSection from '../components/post/CommentSection';
import RelatedPosts from '../components/post/RelatedPosts';
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

  // Special rendering for DoS post with code blocks
  const renderDosPost = () => {
    if (post.slug === 'denial-of-service-smart-contracts') {
      return (
        <div className="prose prose-lg max-w-none prose-headings:font-mono prose-headings:font-bold prose-pre:bg-black prose-pre:text-white prose-pre:border-4 prose-pre:border-gray-600 prose-pre:shadow-brutal prose-code:font-mono">
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
          
          <pre className="mb-6 p-4 overflow-x-auto">
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
          
          <p className="mb-4">
            To illustrate this, we conducted a test where we added 1,000 users after two addresses, A and B, and then added address C. The gas fees for adding addresses A and B (the first and second users) were much lower compared to the gas fees for adding address C (after 1,000 users).
          </p>
          
          <pre className="mb-6 p-4 overflow-x-auto">
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
          
          <p className="mb-4">
            This difference in gas fees makes the function prohibitively expensive to use, leading to a Denial of Service attack. Essentially, no one will use the function because the gas fees are too high, effectively rendering the contract unusable.
          </p>
          
          <div className="my-8 border-4 border-black shadow-brutal">
            <img 
              src="/lovable-uploads/f6ec4018-8131-4539-9162-51d676a95645.png" 
              alt="Gas result DoS test showing increasing gas costs" 
              className="w-full h-auto"
            />
          </div>
          
          <p className="mb-4">
            To mitigate this, you can use a mapping instead of an array to keep track of whether an address has been entered or not. This way, checking for duplicates becomes an O(1) operation rather than O(n), eliminating the risk of a DoS attack due to high gas costs.
          </p>
          
          <pre className="mb-6 p-4 overflow-x-auto">
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
          
          <p className="mb-4">
            Now see that gas is much more efficiently handled by using a mapping.
          </p>
          
          <div className="my-8 border-4 border-black shadow-brutal">
            <img 
              src="/lovable-uploads/25ddbccd-6d66-4b2e-ba95-6f40629f7d8c.png" 
              alt="Test result showing improved gas efficiency with mapping" 
              className="w-full h-auto"
            />
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
              <span className="inline-block bg-neobrutalism-pink text-white px-4 py-2 font-mono font-bold mb-4 border-4 border-black">
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
            <div className="flex items-center">
              <Calendar size={20} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Tag size={20} className="mr-2" />
              <span>{post.category}</span>
            </div>
          </div>
          
          <Link to="/" className="flex items-center mt-4 sm:mt-0 hover:text-neobrutalism-blue transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to all posts
          </Link>
        </div>
        
        {/* Post Content */}
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-3xl mx-auto">
            {renderDosPost()}
            
            <div className="mt-12 pt-12 border-t-4 border-black">
              <CommentSection comments={comments} />
            </div>
            
            <div className="mt-12 pt-12 border-t-4 border-black">
              <RelatedPosts posts={relatedPosts} />
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SinglePost;
