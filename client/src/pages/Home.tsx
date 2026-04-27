import { useEffect, useState, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';

/**
 * Design Philosophy: Romantic Luxury - Optimized
 * - Soft pink and white palette with delicate gradients
 * - Glassmorphism effects with transparency and blur
 * - Smooth animations (reduced for performance)
 * - Arabic typography with elegant serif fonts
 * - Premium, intimate atmosphere
 * - Performance optimized: reduced floating elements and animations
 */

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lovePercentage, setLovePercentage] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll progress for animations (throttled)
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / (documentHeight - windowHeight)) * 100;
        setScrollProgress(progress);
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  // Animate love percentage on mount
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < 100) {
        current += 2;
        setLovePercentage(Math.min(current, 100));
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Scroll to message section
  const scrollToMessage = () => {
    const messageSection = document.getElementById('message-section');
    messageSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ direction: 'rtl' }}>
      {/* Optimized animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50" />
        
        {/* Soft light orbs (reduced from 2 to 1 for performance) */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" style={{ animation: 'pulse 8s ease-in-out infinite' }} />
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(236, 72, 153, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(236, 72, 153, 0.6);
          }
        }

        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-heart-beat {
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(236, 72, 153, 0.1);
        }

        .text-gradient {
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photo-frame {
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(236, 72, 153, 0.25);
          border: 3px solid rgba(236, 72, 153, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .photo-frame:hover {
          transform: scale(1.02);
          box-shadow: 0 30px 80px rgba(236, 72, 153, 0.35);
        }

        .photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Main heading with animation */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient font-display">
              💖 كل عام وأنت أجمل أقداري يا حنان
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full mb-8" />
          </div>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-pink-700 mb-12 font-light"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s forwards', opacity: 0 }}
          >
            إلى نوني... البعيدة عن عيني، القريبة من قلبي دائمًا ✨
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToMessage}
            className="group relative px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-glow"
            style={{
              background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
              animation: 'pulse-glow 2s ease-in-out infinite, fadeInUp 0.8s ease-out 0.6s forwards',
              opacity: 0,
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              افتح الرسالة ❤️
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Decorative hearts around button */}
          <div className="mt-12 flex justify-center gap-4 text-4xl animate-heart-beat" style={{ animation: 'heartBeat 1.5s ease-in-out infinite, fadeInUp 0.8s ease-out 0.8s forwards', opacity: 0 }}>
            <Heart className="text-pink-400 fill-pink-400" size={32} />
            <Sparkles className="text-pink-300" size={32} />
            <Heart className="text-pink-400 fill-pink-400" size={32} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-pink-400 text-2xl">↓</div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient font-display mb-12 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            لحظة جميلة معك 📸
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Photo */}
            <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
              <div className="photo-frame max-w-md mx-auto md:mx-0">
                <img 
                  src="/manus-storage/145_cf8b9dc8.jpg" 
                  alt="صورة جميلة معك"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <p className="text-xl md:text-2xl text-pink-700 leading-relaxed font-light">
                في كل لحظة أراك فيها، أشعر بأن الحياة أصبحت أجمل وأكثر معنى.
              </p>
              
              <p className="text-lg md:text-xl text-pink-600 leading-relaxed">
                ابتسامتك تضيء يومي، وعينك تخبرني قصة حب لا تنتهي.
              </p>

              <p className="text-lg md:text-xl text-pink-600 leading-relaxed">
                أتمنى أن تبقي دائمًا بجانبي، تشاركيني كل لحظة، كل ابتسامة، كل شعور.
              </p>

              <div className="pt-4">
                <Heart className="text-pink-400 fill-pink-400 animate-heart-beat" size={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section
        id="message-section"
        className="py-20 px-4 relative bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-6 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient font-display mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              رسالة من القلب 💌
            </h2>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-800">
              <p className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                اليوم عيد ميلادك… وأنا بعيد عنك، لكن قلبي أقرب لك من أي وقت مضى 🤍
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                كل عام وأنت بخير يا أجمل صدفة دخلت حياتي، وكل سنة وأنت ساكنة داخلي مهما بعدت بيننا الطرق والمسافات.
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                يمكن ما أقدر أكون جنبك اليوم، ولا أشاركك لحظة فرحتك كما أتمنى، لكن إحساسي فيك حاضر، وشوقي لك يوصل لك مع كل نبضة من قلبي.
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                أدعّي ربي يجمعني بك قريب، وأكون أول شخص يعيد عليك وهو شايف عيونك، مو بس متخيلها من بعيد.
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                وجودك بحياتي، حتى مع البعد، هو أجمل شيء أملكه، وأنت دائمًا أقرب لي من الجميع.
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                أحبك أكثر من كل المسافات، وأكثر من كل الكلام اللي ممكن يوصف شعوري.
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                ولو كان بيدي، لجعلت هذا اليوم عيدين لأنك فيه وُلدتِ.
              </p>

              <p className="animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                وفي كل سنة جديدة من عمرك، أتمنى لك فرحًا يليق بقلبك، وراحة تليق بروحك، وحبًا يليق بجمالك.
              </p>

              <p className="animate-fadeInUp text-xl font-semibold text-pink-700" style={{ animationDelay: '1s' }}>
                وكل عام وأنت قلبي، وروحي، وأجمل ما أهدتني الحياة ❤️🎂✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient font-display mb-8">
              ⏳ باقي على يومك المميز القادم
            </h2>
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Love Meter Section */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12 text-center glass-effect animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient font-display mb-8">
              حب لا يعرف المسافة ❤️
            </h2>

            <div className="mb-8">
              <div className="text-6xl font-bold text-pink-600 mb-4">
                {lovePercentage}%
              </div>
              <div className="w-full bg-pink-100 rounded-full h-6 overflow-hidden shadow-lg">
                <div
                  className="bg-gradient-to-r from-pink-400 to-pink-600 h-full rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${lovePercentage}%` }}
                />
              </div>
            </div>

            <p className="text-xl text-pink-700 font-semibold">
              حب بلا حدود، بلا مسافات، بلا وقت 💕
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="glass-effect rounded-3xl p-12">
            <Sparkles className="mx-auto mb-6 text-pink-400" size={48} />
            <blockquote className="text-3xl md:text-4xl font-light text-pink-800 italic font-display">
              "مهما باعدتنا الدنيا... ستبقين أقرب الناس لقلبي."
            </blockquote>
            <Sparkles className="mx-auto mt-6 text-pink-400" size={48} />
          </div>
        </div>
      </section>

      {/* Ending Section */}
      <section className="py-20 px-4 relative bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-5xl md:text-6xl font-bold text-gradient font-display">
              إلى نوني...
            </h2>
            <p className="text-2xl md:text-3xl text-pink-700 font-light">
              ستبقين أجمل قصة سكنت قلبي ✨
            </p>

            {/* Signature */}
            <div className="mt-16 pt-12 border-t-2 border-pink-200">
              <p className="font-amiri text-5xl md:text-6xl text-pink-600 font-light tracking-wider animate-shimmer">
                سيف
              </p>
              <p className="text-pink-500 text-sm mt-4">
                مع كل نبضة من قلبي ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-100 to-pink-50 py-8 px-4 text-center border-t-2 border-pink-200">
        <p className="text-pink-700 text-lg font-semibold">
          Made with Love for Hanan ✨
        </p>
        <p className="text-pink-500 text-sm mt-2">
          مع كل الحب والاشتياق 💕
        </p>
      </footer>
    </div>
  );
}

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      // Calculate next birthday (example: 1 month from now)
      const now = new Date();
      const nextBirthday = new Date(now.getFullYear(), now.getMonth() + 1, 1);

      if (nextBirthday < now) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
      }

      const difference = nextBirthday.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="glass-effect rounded-2xl p-6 min-w-24">
      <div className="text-4xl md:text-5xl font-bold text-pink-600">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-pink-700 mt-2 font-semibold">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <TimeUnit value={timeLeft.days} label="يوم" />
      <TimeUnit value={timeLeft.hours} label="ساعة" />
      <TimeUnit value={timeLeft.minutes} label="دقيقة" />
      <TimeUnit value={timeLeft.seconds} label="ثانية" />
    </div>
  );
}
