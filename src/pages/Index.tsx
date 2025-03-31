
import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPost from '../components/home/FeaturedPost';
import PostGrid from '../components/home/PostGrid';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { featuredPost, latestPosts } from '../data/mockData';

const Index = () => {
  // Get latest posts (excluding the featured post)
  const latest = latestPosts.filter(post => post.id !== featuredPost.id);
  
  // Set document title
  React.useEffect(() => {
    document.title = "Syed's Blog | Home";
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full">
        <Hero />
        <FeaturedPost 
          post={featuredPost} 
          overview={`The Rollup Improvement Proposal (RIP) aims to introduce support for the secp256r1 elliptic curve on Ethereum, addressing a long-standing interoperability challenge. Currently, Ethereum relies on secp256k1, which, while secure and well-suited for blockchain applications, is not widely used outside the crypto space. Many modern security systems, including Apple's Secure Enclave, WebAuthn, and enterprise authentication frameworks, rely on secp256r1 due to its widespread adoption and regulatory backing. By integrating native verification for secp256r1 signatures, this proposal enables Ethereum to interact seamlessly with these ecosystems, reducing reliance on costly precompiles or off-chain solutions.

Beyond interoperability, this improvement brings significant efficiency and scalability benefits. Native support for secp256r1 allows Layer 2 rollups to verify transactions and signatures more efficiently, leading to lower gas fees and improved throughput. Traditionally, verifying non-secp256k1 signatures on Ethereum requires expensive cryptographic operations, often handled off-chain or through specialized smart contracts. By making secp256r1 verification a first-class citizen on Ethereum, the proposal reduces computational overhead, paving the way for more scalable and cost-effective smart contract interactions.

This upgrade also strengthens Ethereum's security model while maintaining its trustless nature. As Web2 and Web3 authentication methods converge, enabling secp256r1 on-chain fosters smoother user experiences and broader institutional adoption. Users can authenticate with Ethereum applications using hardware-backed security keys and mobile devices, reducing friction and enhancing usability. Additionally, institutions and enterprises that require regulatory-compliant cryptographic standards will find Ethereum more accessible, unlocking new use cases in finance, identity verification, and secure communication.`}
        />
        <PostGrid 
          posts={latest} 
          title="LATEST POSTS"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
