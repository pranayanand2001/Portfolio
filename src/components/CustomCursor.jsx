import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      
      // Update dot position immediately
      setDotPosition({ x: clientX, y: clientY });
      
      // Update cursor position with a slight delay for smooth following effect
      setTimeout(() => {
        setPosition({ x: clientX, y: clientY });
      }, 50);

      // Check if hovering over clickable element
      const target = event.target;
      setIsPointer(
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.onclick ||
        target.classList.contains('clickable')
      );
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
        }}
      />
      <div
        className={`cursor ${isPointer ? 'scale-150' : ''}`}
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 