import React from 'react';
import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  schemaMarkup?: Record<string, unknown>;
};

const Seo: React.FC<SeoProps> = ({ title, description, canonical, image, schemaMarkup }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    {/* Twitter Card */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Schema.org Structured Data */}
    {schemaMarkup && (
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    )}
  </Helmet>
);

export default Seo;
