import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Excerpt from './pages/Excerpt';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen relative">
          {/* Fixed Fire Background */}
          <div className="fixed inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/20 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-orange-950/15 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-red-900/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-900/15 rounded-full blur-3xl"></div>
              <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-red-800/10 rounded-full blur-2xl"></div>
            </div>
            
            {/* Fire Sparkles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              {/* Row 1 */}
              <div className="absolute w-1 h-1 bg-orange-600/50 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '8%', animationDelay: '-2s' }}></div>
              <div className="absolute w-2 h-2 bg-orange-500/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '18%', animationDelay: '-5.2s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-700/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '32%', animationDelay: '-8.8s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-orange-600/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '45%', animationDelay: '-3.7s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-500/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '58%', animationDelay: '-11.5s' }}></div>
              <div className="absolute w-2 h-2 bg-orange-700/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '72%', animationDelay: '-6.9s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-600/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '85%', animationDelay: '-14.2s' }}></div>
              
              {/* Row 2 */}
              <div className="absolute w-1.5 h-1.5 bg-orange-500/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '15%', animationDelay: '-1.1s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-700/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '28%', animationDelay: '-6.3s' }}></div>
              <div className="absolute w-2 h-2 bg-orange-600/50 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '42%', animationDelay: '-4.8s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-500/35 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '65%', animationDelay: '-12.9s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-orange-700/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '78%', animationDelay: '-7.7s' }}></div>
              
              {/* Row 3 */}
              <div className="absolute w-1 h-1 bg-orange-600/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '22%', animationDelay: '-3.2s' }}></div>
              <div className="absolute w-2 h-2 bg-orange-500/50 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '52%', animationDelay: '-0.5s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-700/35 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '88%', animationDelay: '-9.8s' }}></div>
              
              {/* Row 4 */}
              <div className="absolute w-1.5 h-1.5 bg-orange-600/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '12%', animationDelay: '-2.5s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-500/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '35%', animationDelay: '-7.8s' }}></div>
              <div className="absolute w-2 h-2 bg-yellow-500/70 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '55%', animationDelay: '-4.2s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-600/35 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '75%', animationDelay: '-13.1s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-yellow-400/65 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '92%', animationDelay: '-6.3s' }}></div>
              
              {/* Row 5 */}
              <div className="absolute w-1 h-1 bg-orange-700/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '5%', animationDelay: '-11.7s' }}></div>
              <div className="absolute w-2 h-2 bg-yellow-500/75 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '25%', animationDelay: '-8.4s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '9%', animationDelay: '-3.1s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-600/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '38%', animationDelay: '-14.3s' }}></div>
              <div className="absolute w-2 h-2 bg-yellow-500/70 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '61%', animationDelay: '-7.7s' }}></div>
              
              {/* Row 6 - Additional sparkles */}
              <div className="absolute w-1 h-1 bg-orange-500/45 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '3%', animationDelay: '-4.5s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-yellow-400/65 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '17%', animationDelay: '-9.2s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-600/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '29%', animationDelay: '-12.8s' }}></div>
              <div className="absolute w-2 h-2 bg-orange-700/50 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '41%', animationDelay: '-2.1s' }}></div>
              <div className="absolute w-1 h-1 bg-yellow-500/70 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '53%', animationDelay: '-7.3s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-orange-500/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '67%', animationDelay: '-10.6s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-600/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '79%', animationDelay: '-5.9s' }}></div>
              <div className="absolute w-2 h-2 bg-yellow-400/70 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '91%', animationDelay: '-13.4s' }}></div>
              
              {/* Row 7 - More sparkles */}
              <div className="absolute w-1 h-1 bg-orange-700/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '6%', animationDelay: '-8.7s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '20%', animationDelay: '-1.8s' }}></div>
              <div className="absolute w-1 h-1 bg-yellow-500/65 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '34%', animationDelay: '-6.1s' }}></div>
              <div className="absolute w-2 h-2 bg-orange-600/45 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '48%', animationDelay: '-11.3s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-500/40 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '62%', animationDelay: '-3.6s' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-float-sparkle opacity-0" style={{ bottom: '0', left: '76%', animationDelay: '-9.9s' }}></div>
              <div className="absolute w-1 h-1 bg-orange-700/35 rounded-full animate-float-sparkle-slow opacity-0" style={{ bottom: '0', left: '89%', animationDelay: '-14.7s' }}></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-20">
            <ScrollToTop />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/excerpt" element={<Excerpt />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App