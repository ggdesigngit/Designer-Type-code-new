import { personalityTypes } from '../data/personalityTypes';

export const preloadImages = () => {
  // Preload all personality type images
  personalityTypes.forEach(type => {
    const img = new Image();
    img.src = type.imageUrl;
  });
  
  // Preload the intro hero image
  const heroImg = new Image();
  heroImg.src = "https://raw.githubusercontent.com/ggdesigngit/Whats-Your-Designer-Type/c4c42f04b440ff355a0567d3c8956e3f298c7300/External_Whats%20Your%20Designer%20Type_updated%20cover.jpg";
};