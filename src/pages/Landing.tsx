import Hero from "../components/Hero"
import Seo from "../components/SEO";

import BrandLogos from "../components/BrandLogos"
import Features from "../components/Features"
import About from "../components/About"


export const Landing = () => {
	return (
		<>
			<Seo
				title="Lisk Name Service"
				description="Register your .lisk domain and own your on-chain identity."
				canonical="https://lisk-name-server.vercel.app"
				image="/image.png"
				schemaMarkup={{
				"@context": "https://schema.org",
				"@type": "WebSite",
				"url": "https://lisk-name-server.vercel.app",
				"name": "Lisk Name Service"
				}}
			/>
			<Hero />
			<div className="flex items-center justify-center mt-20 w-full gap-20 ">
				<BrandLogos />
			</div>
			<Features />
			<About />
		</>
	)
}
