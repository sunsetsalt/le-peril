export interface Question {
  question: string;
  answers: string[];
  originalIndices: number[];
}

export interface QuizResult {
  type: 'loyal' | 'dissident';
  message: string;
}

const shuffleAnswers = (answers: string[]): { shuffled: string[], mapping: number[] } => {
  const indices = [0, 1, 2];
  const shuffled = [...answers];
  const mapping = [0, 1, 2];
  
  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    [mapping[i], mapping[j]] = [mapping[j], mapping[i]];
  }
  
  return { shuffled, mapping };
};

export const getQuestions = (t: (key: string) => string): Question[] => [
  {
    question: t('quiz.q1'),
    ...(() => {
      const originalAnswers = [
        t('quiz.q1a1'),
        t('quiz.q1a2'),
        t('quiz.q1a3')
      ];
      const { shuffled, mapping } = shuffleAnswers(originalAnswers);
      return {
        answers: shuffled,
        originalIndices: mapping
      };
    })()
  },
  {
    question: t('quiz.q2'),
    ...(() => {
      const originalAnswers = [
        t('quiz.q2a1'),
        t('quiz.q2a2'),
        t('quiz.q2a3')
      ];
      const { shuffled, mapping } = shuffleAnswers(originalAnswers);
      return {
        answers: shuffled,
        originalIndices: mapping
      };
    })()
  },
  {
    question: t('quiz.q3'),
    ...(() => {
      const originalAnswers = [
        t('quiz.q3a1'),
        t('quiz.q3a2'),
        t('quiz.q3a3')
      ];
      const { shuffled, mapping } = shuffleAnswers(originalAnswers);
      return {
        answers: shuffled,
        originalIndices: mapping
      };
    })()
  },
  {
    question: t('quiz.q4'),
    ...(() => {
      const originalAnswers = [
        t('quiz.q4a1'),
        t('quiz.q4a2'),
        t('quiz.q4a3')
      ];
      const { shuffled, mapping } = shuffleAnswers(originalAnswers);
      return {
        answers: shuffled,
        originalIndices: mapping
      };
    })()
  },
  {
    question: t('quiz.q5'),
    ...(() => {
      const originalAnswers = [
        t('quiz.q5a1'),
        t('quiz.q5a2'),
        t('quiz.q5a3')
      ];
      const { shuffled, mapping } = shuffleAnswers(originalAnswers);
      return {
        answers: shuffled,
        originalIndices: mapping
      };
    })()
  }
];

export const calculateResult = (answers: number[], t: (key: string) => string): QuizResult => {
  const loyalScore = answers.filter(answer => answer === 0).length;
  const dissidentScore = answers.filter(answer => answer === 2).length;
  
  if (loyalScore > dissidentScore) {
    return {
      type: 'loyal',
      message: t('quiz.loyalMessage')
    };
  } else {
    return {
      type: 'dissident', 
      message: t('quiz.dissidentMessage')
    };
  }
};