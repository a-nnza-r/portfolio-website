'use client';

import React, { useState, useEffect } from 'react';

const TextEncryptionEffect = ({ text = '', duration = 1500 , customClasses}) => {
  const [displayText, setDisplayText] = useState('');
  const characters = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  useEffect(() => {
    let animationFrame;
    let startTime;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      let result = '';
      const targetLength = Math.ceil(text.length * percentage);
      
      for (let i = 0; i < text.length; i++) {
        if (i < targetLength) {
          if (percentage === 1) {
            result += text[i];
          } else {
            result += characters[Math.floor(Math.random() * characters.length)];
          }
        } else {
          result += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      
      setDisplayText(result);
      
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [text, duration]);

  return (
    <span className={customClasses}>{displayText}</span>
  );
};

export default TextEncryptionEffect;