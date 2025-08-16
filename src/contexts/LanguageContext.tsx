import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.synopsis': 'Synopsis',
    'nav.test': 'Test',
    'nav.excerpt': 'Excerpt',
    'nav.getBook': 'Wishlist',
    
    // Home page
    'home.title': 'Le Péril',
    'home.subtitle': 'Volume 1, to be released late 2025 as an eBook',
    'home.quote': 'How far can we go in the name of the',
    'home.greaterGood': 'greater good',
    'home.enterWorld': 'Immerse yourself in the world',
    'home.synopsis': 'Synopsis',
    'home.discoverAllegiance': 'Which faction do you belong to?',
    
    // Tropes
    'tropes.dystopian': 'Dystopian Fiction',
    'tropes.foundFamily': 'Found Family',
    'tropes.selfDiscovery': 'Self-Discovery',
    'tropes.ethicalDilemmas': 'Ethical Dilemmas',
    'tropes.ethicalDilemmasMobile': 'Ethical Dilemmas',
    'tropes.politicalStakes': 'Political Stakes',
    'tropes.slowBurn': 'Slow Burn Romance',
    
    // Synopsis paragraphs
    'synopsis.p1': 'Thanks to the Program, the inhabitants of the Territories of Nol can offer a chosen portion of their lives to strengthen the Aetheranium, the protective barrier that shields them from the Breath.',
    'synopsis.p2': 'But during one collection, a woman dies. This unprecedented incident sparks a deep and violent crisis between the defenders of the Program and those in whom doubt has begun to take root.',
    'synopsis.p3': 'Joseph, founder of the Program, must uphold it at all costs. Aylin, his niece and a young Aspirant, begins to glimpse the first cracks in what she once believed unshakable, and Cal, a determined dissident, sees in it the spark he had been waiting for.',
    
    // Quiz page
    'quiz.title': 'Will you be a',
    'quiz.loyal': 'Loyal',
    'quiz.dissident': 'Dissident',
    'quiz.or': '…\nor a member of the',
    'quiz.peril': 'Peril',
    'quiz.startTest': 'Start the Test',
    'quiz.question': 'Question',
    'quiz.of': 'of',
    'quiz.youAre': 'You are',
    'quiz.aLoyal': 'a Loyal',
    'quiz.aDissident': 'a Dissident',
    'quiz.loyalMessage': 'Order above all. You believe in the system and trust that collective security is worth individual sacrifice.',
    'quiz.dissidentMessage': 'The truth only burns those who fear it. You value freedom and truth over comfortable lies.',
    'quiz.curiousAbout': 'Curious about Maya\'s journey and the choices that await her?',
    'quiz.readExcerpt': 'Read an Excerpt',
    'quiz.retakeTest': 'Retake Test',
    
    // Excerpt content
    'excerpt.content.p1': 'The announcement crackled through every speaker in the city at exactly noon, just as it had every day for the past seven years. Maya Chen paused mid-step on the cracked pavement, her breath visible in the cold autumn air as the familiar voice of Director Hawthorne filled the empty streets.',
    'excerpt.content.p2': '"Citizens of New Eden, your dedication to the Order ensures our collective prosperity. Today\'s productivity quotas have been exceeded by point-seven percent. This achievement brings us closer to the promised tomorrow."',
    'excerpt.content.p3': 'Maya\'s fingers tightened around the data pad in her coat pocket. The weight of what she\'d discovered pressed against her ribs like a knife. Seven years of announcements. Seven years of promises. And now she knew the truth about what those promises really meant.',
    'excerpt.content.p4': 'A shadow moved in her peripheral vision—another citizen, head down, moving with the practiced efficiency the Order demanded. Maya forced herself to mirror the posture, to blend in, even as her heart hammered against her chest.',
    'excerpt.content.p5': 'She had to make a choice. And in New Eden, the wrong choice didn\'t just mean punishment—it meant erasure.',
    'excerpt.content.p6': 'When choices must be made, only ashes will remain.',
    
    // Quiz questions
    'quiz.q1': 'A new law is passed that restricts personal freedoms but promises greater security. Your reaction?',
    'quiz.q1a1': 'Support it completely—security is more important than individual freedoms',
    'quiz.q1a2': 'Question the necessity and seek more information about its implementation',
    'quiz.q1a3': 'Oppose it actively—no law should restrict personal freedoms',
    
    'quiz.q2': 'You discover information that could expose corruption in leadership. What do you do?',
    'quiz.q2a1': 'Report it through official channels and trust the system to handle it',
    'quiz.q2a2': 'Carefully investigate further before deciding on action',
    'quiz.q2a3': 'Share it publicly regardless of the consequences',
    
    'quiz.q3': 'When faced with an order that conflicts with your personal morals:',
    'quiz.q3a1': 'Follow the order—the greater good requires sacrifice',
    'quiz.q3a2': 'Seek clarification and try to find a compromise',
    'quiz.q3a3': 'Refuse to comply and face the consequences',
    
    'quiz.q4': 'The government announces a new surveillance program to \'protect citizens.\' Your thoughts?',
    'quiz.q4a1': 'Necessary for our safety—those with nothing to hide shouldn\'t worry',
    'quiz.q4a2': 'Concerning but might be justified if properly regulated',
    'quiz.q4a3': 'Unacceptable violation of privacy that must be resisted',
    
    'quiz.q5': 'You\'re offered a position of power within the current system. You:',
    'quiz.q5a1': 'Accept it eagerly—you can make positive changes from within',
    'quiz.q5a2': 'Accept it cautiously, planning to reform what you can',
    'quiz.q5a3': 'Refuse it—working within a corrupt system only enables it',
    
    // Excerpt page
    'excerpt.title': 'Chapter One',
    'excerpt.subtitle': 'The Greater Good',
    'excerpt.continue': 'Continue Maya\'s journey and discover the truth behind the Order.',
    'excerpt.getBook': 'Wishlist Le Péril',
    'excerpt.available': 'Available in digital and paperback formats',
    
    // Footer
    'footer.contact': 'Contact:',
    'footer.rights': '© 2024 Le Péril. All rights reserved.'
  },
  fr: {
    // Navigation
    'nav.synopsis': 'Synopsis',
    'nav.test': 'Test',
    'nav.excerpt': 'Extrait',
    'nav.getBook': 'Prévenez-moi à la sortie',
    
    // Home page
    'home.title': 'Le Péril',
    'home.subtitle': 'Tome 1, à paraître fin 2025 en eBook',
    'home.quote': 'Jusqu\'où peut-on aller au nom du',
    'home.greaterGood': 'bien commun ',
    'home.enterWorld': 'Plonger dans l\'univers',
    'home.synopsis': 'Synopsis',
    'home.discoverAllegiance': 'À quelle faction appartenez-vous ?',
    
    // Tropes
    'tropes.dystopian': 'Dystopie',
    'tropes.foundFamily': 'Found family',
    'tropes.selfDiscovery': 'Quête de soi',
    'tropes.ethicalDilemmas': 'Dilemmes éthiques',
    'tropes.ethicalDilemmasMobile': 'Enjeux éthiques',
    'tropes.politicalStakes': 'Enjeux politiques',
    'tropes.slowBurn': 'Slow burn',
    
    // Synopsis paragraphs
    'synopsis.p1': 'Grâce au Programme, les habitants des Territoires de Nol peuvent offrir un temps déterminé de leur vie pour renforcer l\’Éthéranium, la barrière protectrice qui les préserve du Souffle.',
    'synopsis.p2': 'Mais lors d\’une collecte, une femme meurt. Cet incident sans précédent va déclencher une crise profonde et violente entre les défenseurs du Programme et ceux chez qui le doute s\’est immiscé.',
    'synopsis.p3': 'Joseph, fondateur du Programme, doit le maintenir coûte que coûte. Aylin, sa nièce et jeune Aspirante, voit les premières failles dans ce qu\’elle croyait immuable et Cal, un dissident résolu, voit là l\’étincelle qu\’il attendait.',
    
    // Quiz page
    'quiz.title': 'Serez-vous un',
    'quiz.loyal': 'Loyal',
    'quiz.dissident': 'Dissident',
    'quiz.or': '…\nou un membre du',
    'quiz.peril': 'Péril',
    'quiz.startTest': 'Commencer le test',
    'quiz.question': 'Question',
    'quiz.of': 'sur',
    'quiz.youAre': 'Vous êtes',
    'quiz.aLoyal': 'un Loyal',
    'quiz.aDissident': 'un Dissident',
    'quiz.loyalMessage': 'L\'ordre avant tout. Vous croyez au système et faites confiance au fait que la sécurité collective vaut le sacrifice individuel.',
    'quiz.dissidentMessage': 'La vérité ne brûle que ceux qui la craignent. Vous valorisez la liberté et la vérité plutôt que les mensonges confortables.',
    'quiz.curiousAbout': 'Curieux du voyage de Maya et des choix qui l\'attendent ?',
    'quiz.readExcerpt': 'Lire un extrait',
    'quiz.retakeTest': 'Refaire le test',
    
    // Excerpt content
    'excerpt.content.p1': 'L\'annonce grésilla dans chaque haut-parleur de la ville à exactement midi, comme elle l\'avait fait chaque jour depuis sept ans. Maya Chen s\'arrêta net sur le trottoir fissuré, son souffle visible dans l\'air froid d\'automne tandis que la voix familière du Directeur Hawthorne emplissait les rues vides.',
    'excerpt.content.p2': '« Citoyens de New Eden, votre dévouement à l\'Ordre assure notre prospérité collective. Les quotas de productivité d\'aujourd\'hui ont été dépassés de zéro virgule sept pour cent. Cette réussite nous rapproche du lendemain promis. »',
    'excerpt.content.p3': 'Les doigts de Maya se resserrèrent autour de la tablette de données dans la poche de son manteau. Le poids de ce qu\'elle avait découvert pesait contre ses côtes comme un couteau. Sept ans d\'annonces. Sept ans de promesses. Et maintenant elle connaissait la vérité sur ce que ces promesses signifiaient vraiment.',
    'excerpt.content.p4': 'Une ombre bougea dans sa vision périphérique—un autre citoyen, tête baissée, se déplaçant avec l\'efficacité pratiquée que l\'Ordre exigeait. Maya se força à imiter cette posture, à se fondre dans la masse, même si son cœur battait la chamade contre sa poitrine.',
    'excerpt.content.p5': 'Elle devait faire un choix. Et à New Eden, le mauvais choix ne signifiait pas seulement une punition—cela signifiait l\'effacement.',
    'excerpt.content.p6': 'À l\’heure des choix, il ne restera que des cendres.',
    
    // Quiz questions
    'quiz.q1': 'Une nouvelle loi est adoptée qui restreint les libertés personnelles mais promet une plus grande sécurité. Votre réaction ?',
    'quiz.q1a1': 'La soutenir complètement—la sécurité est plus importante que les libertés individuelles',
    'quiz.q1a2': 'Questionner la nécessité et chercher plus d\'informations sur sa mise en œuvre',
    'quiz.q1a3': 'S\'y opposer activement—aucune loi ne devrait restreindre les libertés personnelles',
    
    'quiz.q2': 'Vous découvrez des informations qui pourraient exposer la corruption du leadership. Que faites-vous ?',
    'quiz.q2a1': 'Le signaler par les canaux officiels et faire confiance au système pour s\'en occuper',
    'quiz.q2a2': 'Enquêter soigneusement avant de décider d\'une action',
    'quiz.q2a3': 'Le partager publiquement quelles qu\'en soient les conséquences',
    
    'quiz.q3': 'Face à un ordre qui entre en conflit avec votre morale personnelle :',
    'quiz.q3a1': 'Suivre l\'ordre—le bien commun exige des sacrifices',
    'quiz.q3a2': 'Chercher des clarifications et essayer de trouver un compromis',
    'quiz.q3a3': 'Refuser de vous conformer et faire face aux conséquences',
    
    'quiz.q4': 'Le gouvernement annonce un nouveau programme de surveillance pour « protéger les citoyens ». Vos pensées ?',
    'quiz.q4a1': 'Nécessaire pour notre sécurité—ceux qui n\'ont rien à cacher ne devraient pas s\'inquiéter',
    'quiz.q4a2': 'Préoccupant mais pourrait être justifié s\'il est correctement réglementé',
    'quiz.q4a3': 'Violation inacceptable de la vie privée qui doit être résistée',
    
    'quiz.q5': 'On vous offre un poste de pouvoir dans le système actuel. Vous :',
    'quiz.q5a1': 'L\'acceptez avec empressement—vous pouvez apporter des changements positifs de l\'intérieur',
    'quiz.q5a2': 'L\'acceptez avec prudence, prévoyant de réformer ce que vous pouvez',
    'quiz.q5a3': 'Le refusez—travailler dans un système corrompu ne fait que l\'encourager',
    
    // Excerpt page
    'excerpt.title': 'Chapitre Un',
    'excerpt.subtitle': 'Le Bien Commun',
    'excerpt.continue': 'Continuez le voyage de Maya et découvrez la vérité derrière l\'Ordre.',
    'excerpt.getBook': 'Prévenez-moi à la sortie',
    'excerpt.available': 'Disponible en formats numérique et papier',
    
    // Footer
    'footer.contact': 'Contact :',
    'footer.rights': '© 2024 Le Péril. Tous droits réservés.'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};