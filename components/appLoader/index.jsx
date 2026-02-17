import  { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./appLoader.module.css";

const AppLoader = ({ children, onLoadingComplete, setIsLoading, isLoading }) => {
  
  useEffect(() => {
    // Only run loader logic if isLoading is true
    if (!isLoading) {
      return;
    }

    // Force scroll to top immediately and keep it there
    window.scrollTo(0, 0);
    // Disable scroll while loading
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = '0';

    // Keep resetting scroll position during loading
    const scrollInterval = setInterval(() => {
      window.scrollTo(0, 0);
    }, 10);

    // Show loader for 4 seconds
    const timer = setTimeout(() => {
      clearInterval(scrollInterval);
      setIsLoading(false);
      if (onLoadingComplete) onLoadingComplete();
      // Re-enable scroll
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      // Ensure we're at top when content appears
      window.scrollTo(0, 0);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(scrollInterval);
      // Ensure scroll is re-enabled on cleanup
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isLoading, setIsLoading, onLoadingComplete]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            className={classes.loaderContainer}
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.5,
              transition: { 
                duration: 1.2, 
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth zoom-out
              } 
            }}
          >
            {/* Animated Background Gradient */}
            <div className={classes.gradientBackground} />

            {/* Logo Container with Animations */}
            <motion.div
              className={classes.logoWrapper}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.8,
                  ease: [0.6, 0.01, 0.05, 0.95]
                }
              }}
              exit={{ 
                scale: 1.2,
                opacity: 0,
                transition: { 
                  duration: 1,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }
              }}
            >
              {/* Logo */}
              <motion.div
                className={classes.logo}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.3,
                    duration: 0.6
                  }
                }}
              >
                <img 
                  src="/assets/footer-assets/logo.svg" 
                  alt="Facing North" 
                  className={classes.logoImage}
                />
              </motion.div>

              {/* Tagline */}
              <motion.div
                className={classes.tagline}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.6,
                    duration: 0.6
                  }
                }}
              >
                Where adventure finds its compass
              </motion.div>

              {/* Animated Dots */}
              <motion.div 
                className={classes.dotsContainer}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 1 }
                }}
              >
                <motion.span
                  className={classes.dot}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.span
                  className={classes.dot}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
                <motion.span
                  className={classes.dot}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className={classes.decorCircle}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          transition: { 
            duration: 0.8,
            delay: 0.2
          }
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AppLoader;
