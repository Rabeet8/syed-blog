
import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  const scrollHeight = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    setWidth(scrollPercent * 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight);
    return () => window.removeEventListener('scroll', scrollHeight);
  }, []);

  return <div className="progress-bar" style={{ width: `${width}%` }} />;
};

export default ReadingProgress;
