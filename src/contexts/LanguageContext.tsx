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
    'home.subtitle': 'A Dystopian Novel',
    'home.quote': 'How far can we go in the name of the',
    'home.greaterGood': 'greater good',
    'home.enterWorld': 'Enter the World',
    'home.synopsis': 'Synopsis',
    'home.discoverAllegiance': 'Discover Your Allegiance',
    
    // Tropes
    'tropes.dystopian': 'Dystopian Fiction',
    'tropes.foundFamily': 'Found Family',
    'tropes.selfDiscovery': 'Self-Discovery',
    'tropes.ethicalDilemmas': 'Ethical Dilemmas',
    'tropes.politicalStakes': 'Political Stakes',
    'tropes.slowBurn': 'Slow Burn Romance',
    
    // Synopsis paragraphs
    'synopsis.p1': 'In a world where the line between salvation and destruction has been erased, Maya Chen discovers that the very system meant to protect humanity might be its greatest threat. The Order promises safety, unity, and purpose—but at what cost?',
    'synopsis.p2': 'When Maya uncovers the dark truth behind the government\'s \'greater good\' initiatives, she must choose between the comfortable lies that keep society stable and the dangerous truths that could tear everything apart. Every choice carries weight. Every action has consequences.',
    'synopsis.p3': 'As she navigates the treacherous waters of rebellion and loyalty, Maya learns that the most dangerous enemy isn\'t always the one you can see. Sometimes, the greatest peril lies in the choices we make when we believe we\'re doing the right thing.',
    
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
    'excerpt.content.p6': 'The question wasn\'t whether she could live with the truth. The question was whether she could live without it.',
    
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
    'excerpt.getBook': 'Whishlist Le Péril',
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
    'nav.getBook': 'Whishlist',
    
    // Home page
    'home.title': 'Le Péril',
    'home.subtitle': 'Un Roman Dystopique',
    'home.quote': 'Jusqu\'où peut-on aller au nom du',
    'home.greaterGood': 'bien commun',
    'home.enterWorld': 'Entrer dans l\'univers',
    'home.synopsis': 'Synopsis',
    'home.discoverAllegiance': 'Découvrez votre allégeance',
    
    // Tropes
    'tropes.dystopian': 'Dystopie',
    'tropes.foundFamily': 'Found family',
    'tropes.selfDiscovery': 'Quête de soi',
    'tropes.ethicalDilemmas': 'Dilemmes éthiques',
    'tropes.politicalStakes': 'Enjeux politiques',
    'tropes.slowBurn': 'Slow burn',
    
    // Synopsis paragraphs
    'synopsis.p1': 'Dans un monde où la frontière entre salut et destruction a été effacée, Maya Chen découvre que le système même censé protéger l\'humanité pourrait être sa plus grande menace. L\'Ordre promet sécurité, unité et but—mais à quel prix ?',
    'synopsis.p2': 'Quand Maya découvre la sombre vérité derrière les initiatives du « bien commun » du gouvernement, elle doit choisir entre les mensonges confortables qui maintiennent la stabilité sociale et les vérités dangereuses qui pourraient tout détruire. Chaque choix a du poids. Chaque action a des conséquences.',
    'synopsis.p3': 'Alors qu\'elle navigue dans les eaux traîtresses de la rébellion et de la loyauté, Maya apprend que l\'ennemi le plus dangereux n\'est pas toujours celui qu\'on peut voir. Parfois, le plus grand péril réside dans les choix que nous faisons quand nous croyons faire ce qui est juste.',
    
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
    'excerpt.content.p6': 'La question n\'était pas de savoir si elle pouvait vivre avec la vérité. La question était de savoir si elle pouvait vivre sans elle.',
    
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
    'excerpt.getBook': 'Whishlist Le Péril',
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