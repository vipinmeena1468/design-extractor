// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Initial load animation timeline
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  // Nav fades in
  heroTl.from('.nav', {
    y: -50,
    opacity: 0,
    duration: 0.6
  })
  
  // Hero texts stagger in
  .from('.hero-badge, .hero-title, .hero-subtitle, .hero-ctas', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15
  }, '-=0.3')
  
  // Visual Mockup slides in
  .from('.visual-card', {
    x: 50,
    opacity: 0,
    duration: 1,
    rotation: 2 // Slight tilt for dynamic entry
  }, '-=0.6');


  // Feature Cards Stagger on Scroll
  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '.features',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  });


  // Installation Steps Stagger on Scroll
  const steps = gsap.utils.toArray('.timeline-step');
  
  steps.forEach((step, i) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.2)',
      delay: i * 0.1
    });
  });

});
