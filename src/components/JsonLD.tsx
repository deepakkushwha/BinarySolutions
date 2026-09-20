interface JsonLDProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders JSON-LD structured data for search engines.
 * Server component — safe for SSR output.
 */
export default function JsonLD({ data }: JsonLDProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
