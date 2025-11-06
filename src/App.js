import PlayersList from './features/players/PlayersList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
  <Navbar />
  {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none" aria-hidden="true">
          <svg className="absolute -top-10 left-1/2 -translate-x-1/2" width="1200" height="300" viewBox="0 0 1200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.25" filter="url(#f0)"><circle cx="200" cy="150" r="200" fill="#2f74ff"/></g>
            <g opacity="0.15" filter="url(#f1)"><circle cx="1000" cy="-20" r="220" fill="#0c42b4"/></g>
            <defs>
              <filter id="f0"><feGaussianBlur stdDeviation="80"/></filter>
              <filter id="f1"><feGaussianBlur stdDeviation="80"/></filter>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-purple-600 to-pink-600 animate-gradientX">Discover Elite Football Talent</span>
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Curated player profiles with crisp visuals and key stats. Built with React and Tailwind CSS.</p>
          <div className="mt-8 animate-fadeUp">
            <Carousel />
          </div>
        </div>
      </section>
      {/* Root renders the PlayersList as per checkpoint requirements */}
      <PlayersList />

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
        <div className="rounded-2xl bg-white/70 border border-slate-200 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">About ProBall Profiles</h2>
          <p className="mt-2 text-slate-600">A sleek showcase of footballers built with React and Tailwind CSS. Explore quick snapshots of player details with a visually engaging layout.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
