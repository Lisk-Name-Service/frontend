import type React from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"


export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, type: "spring" }
  })
}

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Tailored for Impactful Innovations
          </h1>
        </motion.div>

        <div className="space-y-8 text-lg leading-relaxed">
          {[
            "Lisk Name Service (LNS) is a decentralized naming protocol built for the future of Web3 adoption on Lisk and the broader Optimism Superchain.",
            "As more real-world applications move on-chain, LNS makes blockchain identities human-readable, interoperable, and accessible to everyone. Instead of long, complex wallet addresses, users and projects can register simple names like yourname.lisk — creating a consistent and portable identity across wallets, DApps, and the entire Lisk ecosystem.",
            "Built on Lisk's cost-efficient, scalable Layer 2 infrastructure and fully compatible with Ethereum's EVM, LNS brings the power of decentralized naming to one of the world's most promising blockchain networks for high-growth markets. Whether you're an individual user, a brand, a DAO, or an enterprise, LNS empowers you to:"
          ].map((text, i) => (
            <motion.p
              key={i}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-gray-300"
            >
              {text}
            </motion.p>
          ))}
        </div>

        <div className="space-y-6 mt-12">
          {[
            ["Simplify Payments:", "Send and receive funds using easy-to-remember .lisk names"],
            ["Build Identity:", "Create your on-chain profile and digital presence"],
            ["Enable Interoperability:", "Leverage your .lisk name across Lisk Ecosystem."],
            ["Strengthen Trust:", "Use verifiable domain names for your business, DAO, or project"]
          ].map(([title, desc], i) => (
            <motion.div
              key={title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex items-start space-x-4"
            >
              <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <span className="font-semibold">{title}</span>
                <span className="text-gray-300 ml-2">{desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
