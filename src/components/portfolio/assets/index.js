import barnesDeepViewer from './BarnesIIIFDeepViewer.mp4';
import barnesWWW from './BarnesWWW.mp4';
import barnesCollection from './BarnesCollection.mp4';
import barnesSignage from './BarnesSignage.jpg';
import barnesTwitch from './BarnesTwitch.jpg';
import contactlessTicketing from './ContactlessTicketing.jpg';

export const PORTFOLIO_ASSETS = {
    work: {
        sort: 1,
        projects: [
            {
                title: 'Barnes Online Collection — Revisions',
                technologies: 'React, JavaScript, Redux',
                href: 'barnes-digital-signage',
                src: barnesCollection,
                text: 'Collection site detail for Jacques Lipschitz — Bather”.',
                isVideo: true,
            },
            {
                title: 'Barnes IIIF Deep Viewer',
                technologies: 'React, TypeScript',
                href: 'barnes-digital-signage',
                src: barnesDeepViewer,
                text: 'Examining a detail of “Unknown Artist, Hieronymus Bosch — Christ Mocked” with the Barnes IIIF Deep Viewer.',
                isVideo: true,
            },
            {
                title: 'Barnes Temi Contactless Ticketing',
                technologies: 'Kotlin',
                href: 'barnes-digital-signage',
                src: contactlessTicketing,
                text: 'Figma sketch of Contactless Ticketing prototype for Temi robot.'
            },
            
            {
                title: 'Barnes WWW — Revisions',
                technologies: 'Twig, JavaScript',
                href: 'barnes-digital-signage',
                src: barnesWWW,
                text: 'Searching for paintings by Henri Rousseau using the updated search feature on the Barnes\' flagship site.',
                isVideo: true
            },
            {
                title: 'Barnes Twitch pollma.pe Skin',
                technologies: 'SCSS',
                href: 'barnes-digital-signage',
                src: barnesTwitch,
                text: 'HTML mock-up for Barnes twitch polling dialog.',
                isTall: true,
            }
        ]
    }
};

export const TEST = PORTFOLIO_ASSETS.work.projects.filter(project => project.src);
