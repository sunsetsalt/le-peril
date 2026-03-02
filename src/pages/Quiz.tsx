import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Flame } from 'lucide-react';
import { getQuestions, calculateResult, QuizResult } from '../utils/quiz';
import { useLanguage } from '../contexts/LanguageContext';

const Quiz = () => {
  const { t } = useLanguage();
  const questions = getQuestions(t);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === -1 && !quizStarted) {
      setQuizStarted(true);
      setCurrentQuestion(0);
      return;
    }
    const originalAnswerIndex = questions[currentQuestion].originalIndices[answerIndex];
    const newAnswers = [...answers, originalAnswerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const quizResult = calculateResult(newAnswers, t);
      setResult(quizResult);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setQuizStarted(false);
  };

  const isLoyal = result?.type === 'loyal';

  /* ── RESULT SCREEN ────────────────────────────────────────── */
  if (showResult) {
    return (
      <div className="min-h-screen pt-14 md:pt-16 flex items-center justify-center px-5">
        <div className="w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`border rounded-lg p-8 md:p-12 text-center ${
              isLoyal
                ? 'border-slate-700/30 bg-slate-950/40'
                : 'border-red-900/35 bg-red-950/20'
            }`}
          >
            {/* Faction icon */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center mb-8"
            >
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={`p-4 rounded-full ${
                  isLoyal ? 'bg-slate-800/40' : 'bg-red-950/50'
                }`}
              >
                {isLoyal
                  ? <Shield className="w-8 h-8 text-slate-400" />
                  : <Flame className="w-8 h-8 text-red-500" />
                }
              </motion.div>
            </motion.div>

            {/* Official header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <p className={`text-[10px] tracking-[0.28em] uppercase mb-1 ${
                isLoyal ? 'text-slate-500' : 'text-red-700/60'
              }`}>
                {isLoyal ? t('quiz.loyalTitle') : t('quiz.dissidentTitle')}
              </p>
              <div className={`h-px w-12 mx-auto ${
                isLoyal ? 'bg-slate-700/50' : 'bg-red-900/50'
              }`} />
            </motion.div>

            {/* You are */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-sm text-stone-500 tracking-wide mb-2">{t('quiz.youAre')}</p>
              <h1 className={`font-serif font-bold text-4xl md:text-5xl leading-tight ${
                isLoyal ? 'text-slate-300' : 'text-red-400'
              }`}>
                {isLoyal ? t('quiz.aLoyal') : t('quiz.aDissident')}
              </h1>
            </motion.div>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="font-serif text-lg md:text-xl text-stone-400 italic leading-relaxed mt-6 mb-10"
            >
              {isLoyal ? t('quiz.loyalMessage') : t('quiz.dissidentMessage')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-3"
            >
              <p className="text-sm text-stone-500 mb-5">{t('quiz.curiousAbout')}</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to="/excerpt"
                  className={`px-7 py-2.5 text-sm font-medium rounded transition-all duration-200 ${
                    isLoyal
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                      : 'bg-red-900 hover:bg-red-800 text-white'
                  }`}
                >
                  {t('quiz.readExcerpt')}
                </Link>
                <button
                  onClick={resetQuiz}
                  className="px-6 py-2.5 text-sm text-stone-500 hover:text-stone-300 border border-white/8 hover:border-white/15 rounded transition-all duration-200"
                >
                  {t('quiz.retakeTest')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    );
  }

  /* ── QUIZ SCREEN ──────────────────────────────────────────── */
  return (
    <div className="min-h-screen pt-14 md:pt-16 flex items-center justify-center px-5">
      <div className="w-full max-w-2xl py-12 md:py-20">

        {/* ── Opening / intro screen ── */}
        {!quizStarted && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Official frame */}
            <div className="inline-block border border-red-900/30 rounded px-5 py-2 mb-10">
              <p className="text-xs tracking-[0.18em] uppercase text-red-500/75">
                {t('quiz.officialHeader')}
              </p>
            </div>

            {/* Pulsing diamond seal */}
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-red-600 transform rotate-45 relative">
                  <div className="absolute inset-[2px] border-4 border-gray-700"></div>
                </div>
                <motion.div
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 bg-red-600/30 transform rotate-45 blur-lg"
                />
              </motion.div>
            </div>

            {/* Eval title */}
            <p className="text-xs tracking-[0.25em] uppercase text-stone-500 mb-6">
              {t('quiz.evalTitle')}
            </p>

            {/* Title */}
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-white leading-snug mb-2">
              {t('quiz.title')}{' '}
              <span className="text-slate-400">{t('quiz.loyal')}</span>
            </h1>
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-white leading-snug mb-10">
              {t('quiz.or')}{' '}
              <span className="text-red-500">{t('quiz.peril')}</span>{' '}?
            </h1>

            {/* Start button */}
            <motion.button
              onClick={() => handleAnswer(-1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-lg md:text-xl transition-all duration-300"
            >
              {t('quiz.startTest')}
            </motion.button>
          </motion.div>
        )}

        {/* ── Question cards ── */}
        <AnimatePresence mode="wait">
          {quizStarted && currentQuestion < questions.length && (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
            >
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-stone-500 tracking-wide">
                    {t('quiz.question')} {currentQuestion + 1} {t('quiz.of')} {questions.length}
                  </span>
                  <span className="text-xs text-stone-600">
                    {Math.round(((currentQuestion) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="h-px bg-stone-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-900 to-red-700"
                    initial={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-8 md:mb-10">
                {questions[currentQuestion].question}
              </h2>

              {/* Answers */}
              <div className="space-y-3">
                {questions[currentQuestion].answers.map((answer, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-4 md:p-5 border border-white/8 hover:border-red-900/40 bg-white/2 hover:bg-red-950/15 rounded-lg text-stone-300 hover:text-stone-100 text-sm md:text-base leading-relaxed transition-all duration-200 group"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-900/50 group-hover:bg-red-700/70 flex-shrink-0 transition-colors" />
                      {answer}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Quiz;
