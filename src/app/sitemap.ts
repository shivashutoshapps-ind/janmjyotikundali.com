import { MetadataRoute } from 'next';
import { rashiData } from '@/data/content/rashi';
import { nakshatraData } from '@/data/content/nakshatra';
import { lagnaData } from '@/data/content/lagna';
import { grahaData } from '@/data/content/graha';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://janmjyotikundali.com';

  const rashiSlugs = Object.keys(rashiData);
  const rashiRoutes = rashiSlugs.map((slug) => ({
    url: `${baseUrl}/rashi/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const nakshatraSlugs = Object.keys(nakshatraData);
  const nakshatraRoutes = nakshatraSlugs.map((slug) => ({
    url: `${baseUrl}/nakshatra/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const lagnaSlugs = Object.keys(lagnaData);
  const lagnaRoutes = lagnaSlugs.map((slug) => ({
    url: `${baseUrl}/lagna/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const grahaSlugs = Object.keys(grahaData);
  const grahaRoutes = grahaSlugs.map((slug) => ({
    url: `${baseUrl}/graha/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const rashifalRoutes = rashiSlugs.map((slug) => ({
    url: `${baseUrl}/rashifal/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/kundli`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/matching`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/panchang`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rashifal`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/rashi`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nakshatra`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lagna`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/graha`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...rashiRoutes,
    ...nakshatraRoutes,
    ...lagnaRoutes,
    ...grahaRoutes,
    ...rashifalRoutes,
  ];
}
