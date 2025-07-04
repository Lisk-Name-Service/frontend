import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./About";

const Footer: React.FC = () => {
  return (
	<motion.footer
			className="bg-black border-t border-neutral-800 text-gray-400 px-4 py-10"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			variants={fadeInUp}
		>
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
				<div>
				<div className="text-xl sm:text-2xl font-bold flex items-center space-x-2">
					<img
						src="/images/lns.png"
						className="h-16 w-auto object-contain transition-all duration-300"
						alt="Lisk Logo"
					/>
					<span className="text-base text-white sm:text-xl md:text-2xl">LNS</span>
				</div>
				<p className="text-sm leading-relaxed">
					Redefining on-chain digital identity.
					Secure your <code className="text-white">.lisk</code> name today.
				</p>
				</div>

				<div className="md:text-center">
				<h3 className="text-white text-base font-semibold mb-2">
					Pages
				</h3>
				<ul className="space-y-1">
					<li>
					<a href="/" className="hover:text-white transition-colors">Home</a>
					</li>
					<li>
					<a href="/auction" className="hover:text-white transition-colors">Auction</a>
					</li>
					<li>
					<a href="/developer" className="hover:text-white transition-colors">Developer</a>
					</li>
				</ul>
				</div>

				<div className="md:text-center">
				<h3 className="text-white text-base font-semibold mb-2">
					SDKs
				</h3>
				<ul className="space-y-1">
					<li>
					<a target="_blank" href="https://pypi.org/project/lisk-name-service" className="hover:text-white transition-colors">Python SDK</a>
					</li>
					<li>
					<a target="_blank" href="https://www.npmjs.com/package/lisk-name-service" className="hover:text-white transition-colors">JS / TS SDK</a>
					</li>
				</ul>
				</div>

				<div className="md:text-center">
				<h3 className="text-white text-base font-semibold mb-2">
					Follow Us
				</h3>
				<ul className="space-y-1">
					<li>
					<a href="https://github.com/Lisk-Name-Service" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
						GitHub
					</a>
					</li>
					<li>
					<a href="https://x.com/lisk_ns" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
						X (Twitter)
					</a>
					</li>
				</ul>
				</div>
			</div>

			<div className="mt-8 border-t border-neutral-800 pt-4 text-xs text-center text-neutral-500">
				&copy; 2025 Lisk Name Service. All rights reserved.
				<span className="mx-2">|</span>
				<a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
				<span className="mx-2">|</span>
				<a href="/privacy-policy" className="hover:text-white">Terms of Service</a>
			</div>
		</motion.footer>
  );
};

export default Footer;
