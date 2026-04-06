'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Play } from 'lucide-react';

interface ScrollExpandHeroProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  subtitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

const ScrollExpandHero = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  subtitle,
  scrollToExpand = 'Scroll to Explore',
  children,
}: ScrollExpandHeroProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);
  const [playbackRate, setPlaybackRate] = useState<number>(2);

  // Load YouTube IFrame API
  useEffect(() => {
    if (mediaType !== 'video' || (!mediaSrc.includes('youtube.com') && !mediaSrc.includes('youtu.be'))) return;

    // Remove existing script if any
    const existingScript = document.getElementById('youtube-iframe-api');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const videoId = mediaSrc.includes('v=') 
      ? mediaSrc.split('v=')[1].split('&')[0] 
      : mediaSrc.split('/').pop()?.split('?')[0];

    const initPlayer = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            event.target.setPlaybackRate(playbackRate);
            event.target.mute();
          },
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    } else {
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [mediaSrc, mediaType]);

  // Update playback rate when state changes
  useEffect(() => {
    if (playerRef.current && playerRef.current.setPlaybackRate) {
      playerRef.current.setPlaybackRate(playbackRate);
    }
  }, [playbackRate]);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (sectionRef.current) {
        const heroRect = sectionRef.current.getBoundingClientRect();
        const isHeroInView = heroRect.top < window.innerHeight && heroRect.bottom > 0;
        if (!isHeroInView) return;
      }
      
      const isScrollingUp = e.deltaY < 0;
      
      if (mediaFullyExpanded && isScrollingUp && window.scrollY <= 10) {
        setMediaFullyExpanded(false);
        setScrollProgress(0.99);
        document.body.style.overflow = 'hidden';
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.001;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          document.body.style.overflow = ''; 
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY) return;
      
      if (sectionRef.current) {
        const heroRect = sectionRef.current.getBoundingClientRect();
        const isHeroInView = heroRect.top < window.innerHeight && heroRect.bottom > 0;
        if (!isHeroInView) return;
      }
      
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      const isScrollingUp = deltaY < 0;

      if (mediaFullyExpanded && isScrollingUp && window.scrollY <= 10) {
        setMediaFullyExpanded(false);
        setScrollProgress(0.99);
        document.body.style.overflow = 'hidden';
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.006;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
          document.body.style.overflow = '';
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    if (!mediaFullyExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('wheel', handleWheel as unknown as EventListener, { passive: false });
    window.addEventListener('touchstart', handleTouchStart as unknown as EventListener, { passive: false });
    window.addEventListener('touchmove', handleTouchMove as unknown as EventListener, { passive: false });
    window.addEventListener('touchend', () => setTouchStartY(0));

    return () => {
      window.removeEventListener('wheel', handleWheel as unknown as EventListener);
      window.removeEventListener('touchstart', handleTouchStart as unknown as EventListener);
      window.removeEventListener('touchmove', handleTouchMove as unknown as EventListener);
      document.body.style.overflow = '';
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          {/* Background Image with Parallax */}
          <motion.div
            className='absolute inset-0 z-0 h-full overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <motion.img
              src={bgImageSrc}
              alt='Background'
              className='w-screen h-screen object-cover'
              style={{
                y: scrollProgress * 30,
              }}
              transition={{ duration: 0.1 }}
            />
            <motion.div
              className='absolute inset-0 bg-black/10'
              animate={{ backgroundColor: `rgba(0, 0, 0, ${0.1 + scrollProgress * 0.2})` }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Content Container */}
          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              {/* Expanding Media */}
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl overflow-hidden'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  <div className='relative w-full h-full pointer-events-none'>
                    {mediaSrc.includes('youtube.com') || mediaSrc.includes('youtu.be') ? (
                      <div id='youtube-player' className='w-full h-full rounded-2xl' />
                    ) : (
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload='auto'
                        className='w-full h-full object-cover rounded-2xl'
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                    )}
                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-2xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Speed Toggle Overlay */}
                    <AnimatePresence>
                      {mediaFullyExpanded && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className='absolute bottom-8 right-8 z-30 pointer-events-auto'
                        >
                          <button
                            onClick={() => setPlaybackRate(prev => (prev === 2 ? 1 : 2))}
                            className='flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all shadow-xl group'
                          >
                            {playbackRate === 2 ? (
                              <Zap className='w-4 h-4 text-accent fill-accent' />
                            ) : (
                              <Play className='w-4 h-4 text-white fill-white' />
                            )}
                            <span className='text-sm font-bold tracking-tight'>
                              {playbackRate}x Speed
                            </span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className='w-full h-full object-cover rounded-2xl'
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-2xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              {/* Text Content */}
              <motion.div
                className='relative z-20 text-center px-4'
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 - scrollProgress * 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {title && (
                  <h1 className='text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 leading-tight'>
                    {title}
                  </h1>
                )}
                {subtitle && (
                  <p className='text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto'>
                    {subtitle}
                  </p>
                )}
                {!mediaFullyExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className='text-white/70 text-sm uppercase tracking-widest'
                  >
                    {scrollToExpand}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Expanded Content */}
          {mediaFullyExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='relative z-10 w-full'
            >
              {children}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandHero;
