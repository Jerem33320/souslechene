import { Helmet } from "react-helmet-async";
import { defaultMeta } from "./metaConfig";
import { schemaData } from "./schema";

interface HelmetSetupProps {
  title?: string;
  description?: string;
  path?: string;
}

export const HelmetSetup = ({
  title,
  description,
  path = "/",
}: HelmetSetupProps) => {
  const metaTitle = title ? `${title} | Sous le chêne, la France` : defaultMeta.title;
  const metaDescription = description || defaultMeta.description;
  const url = `${defaultMeta.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={defaultMeta.keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={defaultMeta.image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={defaultMeta.image} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
