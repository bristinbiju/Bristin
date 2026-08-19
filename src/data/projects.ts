import { translations } from './translations';
import type { Language } from '../context/LanguageContext';

export const getProjects = (lang: Language) => {
  const t = translations[lang].projects.categories;

  return [
    {
      num: '01',
      category: t.campaign,
      name: 'You Can',
      link: 'https://www.behance.net/gallery/218572583/World-Cancer-Day?share=1',
      images: {
        leftTop: '/images/projects/liverpool/liverpool-01.png',
        leftBottom: '/images/projects/liverpool/liverpool-02.png',
        right: '/images/projects/liverpool/liverpool-03.png'
      },
      gallery: [
        '/images/projects/liverpool/liverpool-01.png',
        '/images/projects/liverpool/liverpool-02.png',
        '/images/projects/liverpool/liverpool-03.png',
        '/images/projects/liverpool/liverpool-04.png',
        '/images/projects/liverpool/liverpool-05.png',
        '/images/projects/liverpool/liverpool-06.png',
      ]
    },
    {
      num: '02',
      category: t.socialMedia,
      name: 'Cowary Farms',
      link: '',
      images: {
        leftTop: '/images/projects/cowary/Cowary_.png',
        leftBottom: '/images/projects/cowary/Goat Farming.jpg',
        right: '/images/projects/cowary/Gvlobal stage!.jpg'
      },
      gallery: [
        '/images/projects/cowary/2.jpg',
        '/images/projects/cowary/A Day on the Farm.jpg',
        '/images/projects/cowary/Artboard 1.1.png',
        '/images/projects/cowary/Artboard 2.png',
        '/images/projects/cowary/Artboard 4.jpg',
        '/images/projects/cowary/Artboard 5.jpg',
        '/images/projects/cowary/Beekeeping Training Flyer.jpg',
        '/images/projects/cowary/Easter Begins at the Roots.jpg',
        '/images/projects/cowary/Goat Farming.jpg',
        '/images/projects/cowary/Gvlobal stage!.jpg',
        '/images/projects/cowary/Happy Easter.jpg',
        '/images/projects/cowary/Labour Day post.jpg',
        '/images/projects/cowary/Meet Us in.jpg',
        '/images/projects/cowary/Ranchers Programme copy.jpg',
        '/images/projects/cowary/Woman Behind the Vision.jpg',
      ]
    },
    {
      num: '03',
      category: t.socialMedia,
      name: 'Liverpool',
      link: '',
      images: {
        leftTop: '/images/projects/liverpool-social/Liverpool.jpg',
        leftBottom: '/images/projects/liverpool-social/Caring.jpg',
        right: '/images/projects/liverpool-social/Annual Health Check 02.jpg'
      },
      gallery: [
        '/images/projects/liverpool-social/Annual Health Check 02.jpg',
        '/images/projects/liverpool-social/Bone Cancer Awareness_.png',
        '/images/projects/liverpool-social/Brain Facts.png',
        '/images/projects/liverpool-social/Caring.jpg',
        '/images/projects/liverpool-social/Easter.jpg',
        '/images/projects/liverpool-social/Fertility Care & Support02_.jpg',
        '/images/projects/liverpool-social/Healthy Heart.jpg',
        '/images/projects/liverpool-social/Heat exhaustion hits fast.png',
        '/images/projects/liverpool-social/IVF.png',
        '/images/projects/liverpool-social/Next Big Leap_.jpg',
        '/images/projects/liverpool-social/Webinar -02.jpg',
        '/images/projects/liverpool-social/Webinar02 -03-03.jpg',
        '/images/projects/liverpool-social/World Brain Day.png',
        '/images/projects/liverpool-social/World Cancer Day04.jpg',
        '/images/projects/liverpool-social/Your bones peak.png',
      ]
    },
    {
      num: '04',
      category: t.socialMedia,
      name: 'Devine',
      link: '',
      images: {
        leftTop: '/images/projects/devine-social/FB Cover.jpg',
        leftBottom: '/images/projects/devine-social/Pure. Natural. Divine.jpg',
        right: '/images/projects/devine-social/Your Health.jpg'
      },
      gallery: [
        '/images/projects/devine-social/carousel-1_01.jpg',
        '/images/projects/devine-social/carousel-1_02.jpg',
        '/images/projects/devine-social/carousel-1_03.jpg',
        '/images/projects/devine-social/04_02.jpg',
        '/images/projects/devine-social/A super Crop.jpg',
        '/images/projects/devine-social/Carousel-Post---Why-Cassava_06.jpg',
        '/images/projects/devine-social/Carousel-Post---Why-Cassava_07.jpg',
        '/images/projects/devine-social/Cookis-Recipe_01.jpg',
        '/images/projects/devine-social/Easter Poster.jpg',
        '/images/projects/devine-social/Labour Day.jpg',
        '/images/projects/devine-social/Pure. Natural. Divine.jpg',
        '/images/projects/devine-social/Your Health.jpg',
      ]
    },
    {
      num: '05',
      category: t.branding,
      name: 'GBA',
      link: '',
      images: {
        leftTop: '/images/projects/gba-designs/Artboard 5.jpg',
        leftBottom: '/images/projects/gba-designs/01.jpg',
        right: '/images/projects/gba-designs/02.jpg'
      },
      gallery: [
        '/images/projects/gba-designs/01.jpg',
        '/images/projects/gba-designs/02.jpg',
        '/images/projects/gba-designs/03.jpg',
        '/images/projects/gba-designs/04.jpg',
        '/images/projects/gba-designs/05.jpg',
        '/images/projects/gba-designs/06.jpg',
        '/images/projects/gba-designs/07.jpg',
        '/images/projects/gba-designs/08.jpg',
        '/images/projects/gba-designs/AIM Congress 2025 01.jpg',
        '/images/projects/gba-designs/AIM Congress 2025 04.jpg',
        '/images/projects/gba-designs/AIM Congress 2025 05.jpg',
        '/images/projects/gba-designs/AIM Congress 2025 06.jpg',
        '/images/projects/gba-designs/Artboard 5.jpg',
      ]
    },
    {
      num: '06',
      category: t.branding,
      name: 'Javvis',
      link: '',
      images: {
        leftTop: '/images/projects/javvis-designs/01.jpg',
        leftBottom: '/images/projects/javvis-designs/02.jpg',
        right: '/images/projects/javvis-designs/03.jpg'
      },
      gallery: [
        '/images/projects/javvis-designs/01.jpg',
        '/images/projects/javvis-designs/02.jpg',
        '/images/projects/javvis-designs/03.jpg',
        '/images/projects/javvis-designs/04.jpg',
        '/images/projects/javvis-designs/05.jpg',
        '/images/projects/javvis-designs/06.jpg',
        '/images/projects/javvis-designs/07.jpg',
        '/images/projects/javvis-designs/08.jpg',
        '/images/projects/javvis-designs/09.jpg',
        '/images/projects/javvis-designs/Artboard 1.jpg',
      ]
    },
    {
      num: '07',
      category: t.branding,
      name: 'Joyce4Life',
      link: '',
      images: {
        leftTop: '/images/projects/joyce4life-designs/01.jpg',
        leftBottom: '/images/projects/joyce4life-designs/02.jpg',
        right: '/images/projects/joyce4life-designs/03.jpg'
      },
      gallery: [
        '/images/projects/joyce4life-designs/01.jpg',
        '/images/projects/joyce4life-designs/02.jpg',
        '/images/projects/joyce4life-designs/03.jpg',
        '/images/projects/joyce4life-designs/04.jpg',
        '/images/projects/joyce4life-designs/05.jpg',
        '/images/projects/joyce4life-designs/06.jpg',
        '/images/projects/joyce4life-designs/07.jpg',
        '/images/projects/joyce4life-designs/08.jpg',
        '/images/projects/joyce4life-designs/09.jpg',
        '/images/projects/joyce4life-designs/10.jpg',
        '/images/projects/joyce4life-designs/11.jpg',
        '/images/projects/joyce4life-designs/12.jpg',
        '/images/projects/joyce4life-designs/Artboard 1.jpg',
      ]
    },
    {
      num: '08',
      category: t.packaging,
      name: 'Forti',
      link: '',
      images: {
        leftTop: '/images/projects/forti-designs/Pakage Design 02.jpg',
        leftBottom: '/images/projects/forti-designs/Corn Porridge Pakage 01.jpg',
        right: '/images/projects/forti-designs/Fufu 01.jpg'
      },
      gallery: [
        '/images/projects/forti-designs/Corn Porridge Pakage 01.jpg',
        '/images/projects/forti-designs/Fufu 01.jpg',
        '/images/projects/forti-designs/Packaging Mockup.jpg',
        '/images/projects/forti-designs/Packaging Mockup3.jpg',
        '/images/projects/forti-designs/Pakage Design 02.jpg',
        '/images/projects/forti-designs/Psd_1.jpg',
        '/images/projects/forti-designs/Psd_4.jpg',
      ]
    }
  ];
};
