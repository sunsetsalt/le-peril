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
    'home.firstsubtitle': 'Those who burn',
    'home.subtitle': 'Volume 1, to be released late 2025 as an eBook',
    'home.quote': 'How far can we go in the name of the',
    'home.greaterGood': 'greater good',
    'home.enterWorld': 'Immerse yourself',
    'home.synopsis': 'Synopsis',
    'home.discoverAllegiance': 'Which faction do you belong to?',
    
    // Tropes
    'tropes.dystopian': 'Dystopian Fiction',
    'tropes.foundFamily': 'Found Family',
    'tropes.selfDiscovery': 'Self-Discovery',
    'tropes.ethicalDilemmas': 'Ethical Dilemmas',
    'tropes.ethicalDilemmasMobile': 'Ethical Dilemmas',
    'tropes.politicalStakes': 'Political Stakes',
    'tropes.slowBurn': 'Slow Burn',
    
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
    'quiz.loyalMessage': 'Discipline and order. You believe in the system and the established order, even if the common good sometimes demands sacrifices.',
    'quiz.dissidentMessage': 'Doubt and justice. You place compassion and fairness above all else, even if your thirst for truth may shake the common good.',
    'quiz.curiousAbout': 'Ready to discover what awaits Aylin?',
    'quiz.readExcerpt': 'Read an Excerpt',
    'quiz.retakeTest': 'Retake Test',
    
    // Excerpt content (English)
    'excerpt.content.p1': 'The Program is, above all, a promise. A promise made to every inhabitant of the Territories of Nol. A promise of a radiant future, where the Breath is no more… Joseph Stern recited solemnly in front of his mirror, focused on the expression of his face. He nodded, satisfied with the closing line of his speech.',
    'excerpt.content.p2': 'His gaze was sharp, his deep voice steady under all circumstances, his diction flawless. He excelled at the art of persuasion, skillfully weaving between words and numbers. Joseph was not merely gifted, he was brilliant. He had succeeded where all others had failed before him. He had found a way to sustain the Etheranium.',
    'excerpt.content.p3': 'It had begun as a childhood dream, then an adolescent obsession, and finally the very reason he lived as an adult. He never understood how others could go about their lives without the constant terror that the Breath might condemn them.',
    'excerpt.content.p4': 'For so long he had been angry, resenting them for their selfishness and their ingratitude. Had they forgotten that men had sacrificed themselves so they could live with such lightness of being?',
    'excerpt.content.p5': ' He never could.',
    //'excerpt.content.p5': 'When choices must be made, only ashes will remain.',
    
    // Quiz questions (English)
    'quiz.q1': 'When an order conflicts with your personal morals, what do you do?',
    'quiz.q1a1': 'I follow it, believing the greater good may require individual sacrifices.',
    'quiz.q1a2': 'I look for a verifiable compromise (safeguards, alternatives), escalating if needed.',
    'quiz.q1a3': 'I refuse to comply and fully accept the consequences.',

    'quiz.q2': 'How far would you go to protect yourself and your family from a threat?',
    'quiz.q2a1': 'I would go to extreme measures, even if it harms others, to guarantee our safety.',
    'quiz.q2a2': 'I accept heavy constraints, but I refuse to cause direct harm to anyone.',
    'quiz.q2a3': 'I won’t cross my principles, even if it puts my own survival at risk.',

    'quiz.q3': 'A mechanism could save many lives but will certainly condemn at least one person. What do you do?',
    'quiz.q3a1': 'I activate it immediately to prevent a greater disaster, while accepting moral responsibility for the choice.',
    'quiz.q3a2': 'I first look for a realistic alternative (delay, alert, divert) and only activate it as a last resort, with evidence to justify it.',
    'quiz.q3a3': 'I don’t activate it: I refuse to decide who must die and accept the uncertainty of a higher human cost.',

    'quiz.q4': 'You hold undeniable proof that an institution is corrupt. What do you do?',
    'quiz.q4a1': 'I delay the release until the situation is secure and a responsible framework is in place.',
    'quiz.q4a2': 'I publish a contextualized version (what is known/unknown, action plan, limits) while also alerting the proper authorities.',
    'quiz.q4a3': 'I release everything immediately: truth comes first, even if it shakes the established order.',

    'quiz.q5': 'What would be your greatest regret?',
    'quiz.q5a1': 'Not having fought hard enough for what is right.',
    'quiz.q5a2': 'Not having stood by my values and ideals when I had the chance.',
    'quiz.q5a3': 'Not being able to sacrifice everything for the greater good.',
    
    // Excerpt page
    'excerpt.title': 'Chapter One',
    'excerpt.subtitle': 'The Ceremony',
    'excerpt.continue': 'When choices must be made, only ashes will remain.',
    'excerpt.getBook': 'Wishlist Le Péril',
    'excerpt.available': 'Available in digital format',
    
    // Footer
    'footer.contact': 'Contact:',
    'footer.rights': '© 2025 Le Péril. All rights reserved.'
  },
  fr: {
    // Navigation
    'nav.synopsis': 'Synopsis',
    'nav.test': 'Test',
    'nav.excerpt': 'Extrait',
    'nav.getBook': 'Prévenez-moi à la sortie',
    
    // Home page
    'home.title': 'Le Péril',
    'home.firstsubtitle': 'Ceux qui se consument ',
    'home.subtitle': 'Tome 1, à paraître fin 2025 en eBook',
    'home.quote': 'Jusqu\'où peut-on aller au nom du',
    'home.greaterGood': 'bien commun ',
    'home.enterWorld': 'Plongez dans l\'univers',
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
    'quiz.loyalMessage': 'Rigueur et cadre. Vous croyez au système et à l\'ordre établi, même si le bien commun implique parfois des sacrifies.',
    'quiz.dissidentMessage': 'Doute et justice. Vous placez la compassion et l\'équité avant le reste, même si votre soif de vérité peut ébranler le bien commun.',
    'quiz.curiousAbout': 'Prêt à découvrir ce qui attend Aylin ?',
    'quiz.readExcerpt': 'Lire un extrait',
    'quiz.retakeTest': 'Refaire le test',
    
    // Excerpt content
    'excerpt.content.p1': 'Le Programme est avant tout une promesse. Une promesse faite à tous les habitants des Territoires de Nol. Celle d’un avenir radieux, où le Souffle n’est plus… récita solennellement Joseph Stern devant son miroir, concentré sur l’expression de son visage. Il acquiesça, satisfait par la clôture de son discours.',
    'excerpt.content.p2': 'Son regard était vif, sa voix grave était maîtrisée en toutes circonstances et son articulation était parfaite. Il excellait dans l’art de convaincre, jonglant savamment entre les mots et les chiffres. Joseph n’était pas seulement doué, il était brillant. Il avait réussi là où tous les autres avaient échoué avant lui. Il avait trouvé comment maintenir l’Ethéranium.',
    'excerpt.content.p3': 'C’était un rêve d’enfant, devenu une obsession d’adolescent et une raison de vivre à l’âge adulte. Il n’avait jamais compris que ce ne soit pas le cas pour les autres, qu’ils puissent mener leurs vies sans être terrifiés à l’idée que le Souffle ne les condamne.',
    'excerpt.content.p4': 'Il avait été en colère pendant si longtemps, il leur en voulait pour leur égoïsme et pour leur ingratitude. Avaient-ils oublié que des hommes s’étaient sacrifiés pour qu’ils puissent vivre avec autant de légèreté ?',
    'excerpt.content.p5': 'Lui n’avait jamais pu.',
    //'excerpt.content.p5': 'À l\’heure des choix, il ne restera que des cendres.',

    
    // Quiz questions
    'quiz.q1': 'Face à un ordre qui entre en conflit avec votre morale, que faites-vous ?',
    'quiz.q1a1': 'J’obéis, parce que je crois que le bien commun peut exiger des sacrifices individuels.',
    'quiz.q1a2': 'J’essaie de construire un compromis vérifiable (garde-fous, alternatives), quitte à escalader si nécessaire.',
    'quiz.q1a3': 'Je refuse d’obéir et j’assume pleinement les conséquences.',

    'quiz.q2': 'Jusqu’où êtes-vous prêt·e à aller pour repousser une menace qui pèse sur vous et votre famille ?',
    'quiz.q2a1': 'Je vais jusqu’à des mesures extrêmes, même si elles portent atteinte à d’autres, pour garantir notre sécurité.',
    'quiz.q2a2': 'J’accepte des contraintes fortes, mais je refuse tout ce qui causerait un tort direct à quelqu’un.',
    'quiz.q2a3': 'Je refuse d’outrepasser mes principes, même si cela met ma propre survie en jeu.',

    'quiz.q3': 'Un mécanisme peut sauver de nombreuses vies, mais condamnera au moins une personne. Que faites-vous ?',
    'quiz.q3a1': 'Je l’active immédiatement, pour éviter un désastre plus large, tout en assumant la responsabilité morale de ce choix.',
    'quiz.q3a2': 'Je cherche d’abord une alternative réaliste (ralentir, alerter, détourner) et je n’active qu’en ultime recours, preuves à l’appui.',
    'quiz.q3a3': 'Je ne l’active pas : je refuse de décider qui doit mourir et j’assume l’incertitude d’un coût humain plus élevé.',

    'quiz.q4': 'Vous détenez une preuve accablante qu\'une institution est corrompue. Que faites-vous ?',
    'quiz.q4a1': 'Je diffère la publication le temps de sécuriser la situation et d’organiser un cadre de réception responsable.',
    'quiz.q4a2': 'Je publie une version contextualisée (ce qui est su/ignoré, plan d’action, limites) et j’alerte en parallèle les autorités compétentes.',
    'quiz.q4a3': 'Je publie immédiatement l’intégralité des éléments : la vérité prime, même si elle bouscule l’ordre établi.',

    'quiz.q5': 'Quel serait-votre plus grand regret ?',
    'quiz.q5a1': 'Ne pas m\'être suffisamment battu.e pour ce qui est juste.',
    'quiz.q5a2': 'Ne pas avoir porté mes valeurs et idéaux lorsque j\'en avais l\'occasion.',
    'quiz.q5a3': 'Ne pas avoir été capable de tout sacrifier pour le bien commun.',

    
    // Excerpt page
    'excerpt.title': 'Chapitre Un',
    'excerpt.subtitle': 'La Cérémonie',
    'excerpt.continue': 'À l’heure des choix, il ne restera que des cendres.',
    'excerpt.getBook': 'Prévenez-moi à la sortie',
    'excerpt.available': 'Disponible en format numérique',
    
    // Footer
    'footer.contact': 'Contact :',
    'footer.rights': '© 2025 Le Péril. Tous droits réservés.'
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