export const SITE_CONFIG = {
  name: "Centre d'Optique Aït Ourir",
  shortName: "Aït Ourir Optique",
  tagline: "Votre vision mérite l'excellence.",
  description:
    "Centre d'optique premium à Aït Ourir, Marrakech. Examen de la vue, lunettes de prescription, lunettes de soleil, lentilles de contact et montures de marques internationales.",
  url: "https://optiqueaitourir.ma",
  phone: "+212 6 06 70 84 44",
  whatsapp: "212606708444",
  email: "contact@optiqueaitourir.ma",
  address: "السوق الجديد العمران، قرب باشوية أيت أورير، أيت أورير، مراكش",
  addressFr: "Souk Jadid Al Omrane, près de la Caïdat, Aït Ourir, Marrakech",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2217.6893808556024!2d-7.669358091129749!3d31.563365644913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDMzJzQ4LjEiTiA3wrA0MCcwMC40Ilc!5e1!3m2!1sen!2sma!4v1784240278943!5m2!1sen!2sma",
  instagram: "https://www.instagram.com/centredoptiqueaitourir",
  facebook: "https://www.facebook.com/profile.php?id=61588240704589",
  tiktok: "https://www.tiktok.com/@centre_optique_ait_ourir",
  hours: {
    weekdays: "09:00 – 13:00 / 15:00 – 20:00",
    saturday: "09:00 – 20:00",
    sunday: "Fermé",
  },
};

export const SERVICES = [
  {
    id: "examen-vue",
    icon: "Eye",
    title: "Examen de la Vue",
    subtitle: "Bilan visuel complet",
    description:
      "Bilan visuel complet par notre optométriste certifié. Détection précoce des troubles réfractifs, glaucome et pathologies oculaires.",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    features: [
      "Réfraction subjective & objective",
      "Tonométrie sans contact",
      "Fond d'œil digital",
      "Bilan binoculaire",
    ],
  },
  {
    id: "lunettes-prescription",
    icon: "Glasses",
    title: "Lunettes de Vue",
    subtitle: "Montures & verres premium",
    description:
      "Une sélection soignée des plus grandes marques mondiales. Des verres de haute technologie pour une vision parfaite.",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    features: [
      "Marques internationales",
      "Verres antireflet HD",
      "Traitement UV & bluelight",
      "Ajustement sur mesure",
    ],
  },
  {
    id: "lunettes-soleil",
    icon: "Sun",
    title: "Lunettes de Soleil",
    subtitle: "Protection & style",
    description:
      "Protégez vos yeux avec style. Lunettes solaires polarisées, photochromiques et graduées des plus grandes maisons.",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    features: [
      "Verres polarisés",
      "Protection UV 400",
      "Solaires graduées",
      "Collections été",
    ],
  },
  {
    id: "lentilles-contact",
    icon: "Circle",
    title: "Lentilles de Contact",
    subtitle: "Confort & liberté",
    description:
      "Lentilles journalières, mensuelles ou torique pour astigmates. Adaptation rigoureuse et suivi personnalisé.",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    features: [
      "Adaptation lentilles",
      "Lentilles torique",
      "Lentilles colorées",
      "Suivi mensuel",
    ],
  },
  {
    id: "lunettes-enfants",
    icon: "Baby",
    title: "Lunettes Enfants",
    subtitle: "Vision & apprentissage",
    description:
      "Montures légères, flexibles et colorées pour les plus petits. Suivi de la croissance oculaire.",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    features: [
      "Montures flexibles",
      "Verres incassables",
      "Bilan amblyopie",
      "Suivi scolaire",
    ],
  },
  {
    id: "reparation",
    icon: "Wrench",
    title: "Réparation Rapide",
    subtitle: "SAV & entretien",
    description:
      "Réparation express de montures, remplacement de verres, soudure, ajustement. Service professionnel en boutique.",
    color: "gold",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
    features: [
      "Soudure montures",
      "Remplacement verres",
      "Ajustement gratuit",
      "Nettoyage ultrason",
    ],
  },
];

export const BRANDS = [
  { name: "Ray-Ban", logo: "RB", country: "USA" },
  { name: "Oakley", logo: "OAK", country: "USA" },
  { name: "Police", logo: "POL", country: "Italie" },
  { name: "Guess", logo: "GUE", country: "USA" },
  { name: "Carrera", logo: "CAR", country: "Autriche" },
  { name: "Vogue", logo: "VOG", country: "Italie" },
  { name: "Tom Ford", logo: "TF", country: "USA" },
  { name: "Prada", logo: "PRA", country: "Italie" },
  { name: "Persol", logo: "PER", country: "Italie" },
  { name: "Silhouette", logo: "SIL", country: "Autriche" },
  { name: "Lindberg", logo: "LIN", country: "Danemark" },
  { name: "Maui Jim", logo: "MJ", country: "USA" },
];

export const COLLECTIONS = [
  {
    id: 1,
    name: "Milano Titanium",
    brand: "Tom Ford",
    category: "men",
    type: "optical",
    price: "1 200 MAD",
    image:
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80",
    badge: "Nouveau",
    badgeColor: "gold",
    isNew: true,
  },
  {
    id: 2,
    name: "Havana Classic",
    brand: "Ray-Ban",
    category: "women",
    type: "sunglasses",
    price: "950 MAD",
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=80",
    badge: "Best Seller",
    badgeColor: "red",
    isNew: false,
  },
  {
    id: 3,
    name: "Sport Elite",
    brand: "Oakley",
    category: "men",
    type: "sunglasses",
    price: "1 100 MAD",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
    badge: null,
    isNew: false,
  },
  {
    id: 4,
    name: "Parisienne",
    brand: "Vogue",
    category: "women",
    type: "optical",
    price: "780 MAD",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
    badge: "Nouveau",
    badgeColor: "gold",
    isNew: true,
  },
  {
    id: 5,
    name: "Little Explorer",
    brand: "Police",
    category: "kids",
    type: "optical",
    price: "650 MAD",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    badge: null,
    isNew: false,
  },
  {
    id: 6,
    name: "Merano Gold",
    brand: "Carrera",
    category: "men",
    type: "optical",
    price: "1 350 MAD",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    badge: "Premium",
    badgeColor: "gold",
    isNew: false,
  },
  {
    id: 7,
    name: "Riviera Sun",
    brand: "Prada",
    category: "women",
    type: "sunglasses",
    price: "1 800 MAD",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    badge: "Exclusif",
    badgeColor: "red",
    isNew: true,
  },
  {
    id: 8,
    name: "Junior Smart",
    brand: "Guess",
    category: "kids",
    type: "optical",
    price: "580 MAD",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&q=80",
    badge: null,
    isNew: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Fatima Zahra B.",
    avatar: "FZ",
    rating: 5,
    text: "Service exceptionnel ! L'équipe est très professionnelle et à l'écoute. Mon examen de la vue a été réalisé avec soin et précision. Je recommande vivement.",
    date: "Il y a 2 semaines",
    source: "Google",
  },
  {
    id: 2,
    name: "Mohammed A.",
    avatar: "MA",
    rating: 5,
    text: "Très bonne expérience. Large choix de montures de marques internationales à des prix raisonnables. Personnel accueillant et compétent.",
    date: "Il y a 1 mois",
    source: "Google",
  },
  {
    id: 3,
    name: "Aicha K.",
    avatar: "AK",
    rating: 5,
    text: "J'ai acheté mes lentilles de contact ici. L'adaptation a été parfaite et le suivi est excellent. Un service vraiment premium pour notre région.",
    date: "Il y a 3 semaines",
    source: "Google",
  },
  {
    id: 4,
    name: "Youssef El M.",
    avatar: "YM",
    rating: 5,
    text: "Le meilleur centre d'optique de la région. Des lunettes Tom Ford à prix compétitif et une qualité de service irréprochable. Bravo !",
    date: "Il y a 2 mois",
    source: "Google",
  },
  {
    id: 5,
    name: "Nadia R.",
    avatar: "NR",
    rating: 5,
    text: "Mes enfants ont été pris en charge avec beaucoup de patience et de professionnalisme. Les montures pour enfants sont solides et jolies.",
    date: "Il y a 1 semaine",
    source: "Google",
  },
];

export const EYE_TEST_STEPS = [
  {
    step: "01",
    title: "Prise de rendez-vous",
    description:
      "Réservez votre consultation en ligne ou par téléphone. Disponible 6 jours sur 7.",
    icon: "Calendar",
  },
  {
    step: "02",
    title: "Accueil & Anamnèse",
    description:
      "Notre opticien recueille votre historique visuel et vos besoins spécifiques.",
    icon: "ClipboardList",
  },
  {
    step: "03",
    title: "Examen Préliminaire",
    description:
      "Mesure de la pression oculaire, acuité visuelle et tests préliminaires.",
    icon: "Scan",
  },
  {
    step: "04",
    title: "Réfraction Complète",
    description:
      "Détermination précise de votre correction avec les derniers équipements.",
    icon: "Eye",
  },
  {
    step: "05",
    title: "Recommandations",
    description:
      "Conseil personnalisé sur les verres, montures et options de correction.",
    icon: "CheckCircle",
  },
  {
    step: "06",
    title: "Livraison & Suivi",
    description:
      "Vos lunettes prêtes en 48h. Ajustement gratuit et suivi post-adaptation.",
    icon: "Package",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    alt: "Collection lunettes premium",
    span: "col-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    alt: "Lunettes de soleil",
    span: "col-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&q=80",
    alt: "Montures tendance",
    span: "col-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80",
    alt: "Lunettes homme",
    span: "col-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=600&q=80",
    alt: "Lunettes femme",
    span: "col-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    alt: "Examen de la vue",
    span: "col-span-2",
  },
];

export const FAQS = [
  {
    question: "Comment prendre rendez-vous pour un examen de la vue ?",
    answer:
      "Vous pouvez prendre rendez-vous directement via notre formulaire en ligne, par téléphone au +212 6 00 00 00 00, ou via WhatsApp. Nous vous confirmons votre créneau sous 24h.",
  },
  {
    question: "Combien de temps dure un examen de la vue ?",
    answer:
      "Un examen complet dure entre 30 et 45 minutes. Cela inclut l'anamnèse, les tests préliminaires, la réfraction subjective et les recommandations personnalisées.",
  },
  {
    question: "Quelles marques de lunettes proposez-vous ?",
    answer:
      "Nous proposons les plus grandes marques internationales : Ray-Ban, Oakley, Police, Guess, Carrera, Vogue, Tom Ford, Prada, Persol et bien d'autres. Notre catalogue est régulièrement mis à jour.",
  },
  {
    question: "Quel est le délai de fabrication des lunettes ?",
    answer:
      "La plupart des lunettes sont prêtes en 24 à 48 heures. Pour les verres très forts ou progressifs complexes, le délai peut aller jusqu'à 5-7 jours ouvrables.",
  },
  {
    question: "Proposez-vous des lentilles de contact ?",
    answer:
      "Oui, nous proposons une large gamme de lentilles : journalières, mensuelles, toriques pour astigmates et colorées. Une adaptation rigoureuse est réalisée par notre contactologue.",
  },
  {
    question: "Acceptez-vous les mutuelles et assurances ?",
    answer:
      "Nous travaillons avec les principales mutuelles et compagnies d'assurance au Maroc. Contactez-nous pour vérifier votre couverture et les modalités de remboursement.",
  },
  {
    question: "Y a-t-il une garantie sur les lunettes ?",
    answer:
      "Oui, toutes nos montures bénéficient d'une garantie fabricant d'au moins 1 an. Nos verres sont garantis contre les défauts de fabrication. Les réparations mineures (ajustement, nettoyage) sont gratuites à vie.",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Comment choisir la monture idéale selon la forme de votre visage",
    excerpt:
      "Ovale, rond, carré, cœur... Découvrez les règles d'or pour choisir des lunettes qui subliment votre visage.",
    category: "Conseils",
    date: "15 Juin 2025",
    readTime: "5 min",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80",
    slug: "choisir-monture-forme-visage",
  },
  {
    id: 2,
    title: "Les verres progressifs : tout ce que vous devez savoir",
    excerpt:
      "Presbytie, verres progressifs, adaptation... Notre guide complet pour vous aider à franchir le pas sereinement.",
    category: "Expertise",
    date: "2 Juin 2025",
    readTime: "7 min",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    slug: "verres-progressifs-guide",
  },
  {
    id: 3,
    title: "Protéger vos yeux du soleil marocain : nos recommandations",
    excerpt:
      "L'ensoleillement intense au Maroc exige une protection UV sérieuse. Voici nos conseils et les meilleures options.",
    category: "Santé visuelle",
    date: "20 Mai 2025",
    readTime: "4 min",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    slug: "protection-soleil-maroc",
  },
];
