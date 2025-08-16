import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Square, Flame } from 'lucide-react';
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
    // Handle the "Start the Test" button click
    if (answerIndex === -1 && !quizStarted) {
      // Start the quiz
      setQuizStarted(true);
      setCurrentQuestion(0);
    } else {
      // Handle actual quiz answers
      // Map the selected answer back to its original index for scoring
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
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowResult(false);
    setQuizStarted(false);
  };

  if (!showResult) {
    return (
      <div className="min-h-screen pt-16 md:pt-20 relative overflow-hidden">

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-20">
          {!quizStarted && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-16"
            >
              <div className="mb-4 md:mb-8 flex justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
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
              
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-serif font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                {t('quiz.title')}{' '}
                <span className="text-blue-500">{t('quiz.loyal')}</span>{' '}
                {t('quiz.or')}{' '}
                <span className="text-red-500">{t('quiz.peril')}</span>?
              </h1>
              
              <button
                onClick={() => handleAnswer(-1)}
                className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10">{t('quiz.startTest')}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </button>
            </motion.div>
          )}

          {/* Questions */}
          <AnimatePresence mode="wait">
            {quizStarted && currentQuestion < questions.length && (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="mb-6 md:mb-8">
                  <div className="flex justify-center mb-4">
                    <span className="text-base text-red-400 font-medium">
                      {t('quiz.question')} {currentQuestion + 1} {t('quiz.of')} {questions.length}
                    </span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-6 md:mb-8">
                    <motion.div
                      className="bg-gradient-to-r from-red-600 to-orange-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-6 md:mb-12 leading-relaxed px-2">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-4 max-w-2xl mx-auto">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => handleAnswer(index)}
                      className="w-full p-4 md:p-6 text-left bg-black/40 backdrop-blur-sm border border-red-900/30 rounded-lg text-gray-200 hover:bg-red-900/20 hover:border-red-700/50 hover:text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20 text-base md:text-base leading-relaxed"
                    >
                      <span className="font-medium">{answer}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 md:pt-20 relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-red-600 transform rotate-45 relative">
                <div className="absolute inset-[2px] border-4 border-gray-700"></div>
              </div>
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 bg-red-600/30 transform rotate-45 blur-lg"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 md:mb-8"
        >
          {t('quiz.youAre')} {result?.type === 'loyal' ? (
            <span className="text-blue-500">{t('quiz.aLoyal')}</span>
          ) : (
            <span className="text-red-500">{t('quiz.aDissident')}</span>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 font-serif italic px-4"
        >
          {result?.type === 'loyal' ? t('quiz.loyalMessage') : t('quiz.dissidentMessage')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base md:text-lg text-gray-400 mb-6 md:mb-8 px-4">
            {t('quiz.curiousAbout')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/excerpt"
              className="bg-gradient-to-r from-orange-700 to-red-700 hover:from-orange-600 hover:to-red-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              {t('quiz.readExcerpt')}
            </Link>
            
            <button
              onClick={resetQuiz}
              className="text-gray-400 hover:text-white px-4 md:px-6 py-2.5 md:py-3 font-medium text-sm md:text-base transition-colors"
            >
              {t('quiz.retakeTest')}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;