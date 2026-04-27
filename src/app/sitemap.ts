import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stayzen.fr'; // Remplacez par votre domaine final

  // Liste de toutes les routes de l'application
  const routes = [
    '',
    '/services',
    '/proprietaires',
    '/simulateur',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
