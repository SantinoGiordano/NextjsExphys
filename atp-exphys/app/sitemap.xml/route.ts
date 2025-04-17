
import { MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.atp-exphys.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    }
    
  ];
}
