// ThreeD.js
import React, { useEffect, useRef } from 'react';
import './ThreeD.css';

export default function ThreeD() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Function to draw a recycling symbol
    function drawRecyclingSymbol(ctx, x, y, size) {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      // Draw three arrows in a circular pattern
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.rotate((Math.PI * 2) / 3);
        ctx.moveTo(0, -size / 2);
        ctx.lineTo(size / 4, -size / 4);
        ctx.lineTo(size / 8, 0);
        ctx.lineTo(size / 2, 0);
        ctx.lineTo(size / 2, -size / 4);
        ctx.lineTo(0, -size / 2);
        ctx.stroke();
      }

      ctx.restore();
    }

    // Function to draw a droplet
    function drawDroplet(ctx, x, y, size) {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(0, -size / 2);
      ctx.bezierCurveTo(size / 2, -size / 2, size / 2, size / 2, 0, size / 2);
      ctx.bezierCurveTo(-size / 2, size / 2, -size / 2, -size / 2, 0, -size / 2);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.restore();
    }

    // Function to draw a cloud
    function drawCloud(ctx, x, y, size) {
      ctx.save();
      ctx.translate(x, y);
      ctx.beginPath();
      ctx.moveTo(-size / 2, 0);
      ctx.bezierCurveTo(-size / 2, -size / 3, -size / 6, -size / 2, 0, -size / 2);
      ctx.bezierCurveTo(size / 3, -size / 2, size / 2, -size / 3, size / 2, 0);
      ctx.bezierCurveTo(size / 2, size / 3, size / 3, size / 2, 0, size / 2);
      ctx.bezierCurveTo(-size / 3, size / 2, -size / 2, size / 3, -size / 2, 0);
      ctx.strokeStyle = 'white';
      ctx.stroke();
      ctx.restore();
    }

    // Create objects
    const recyclingSymbol = { type: 'recycling', x: canvas.width / 2, y: canvas.height / 2, size: 100 };
    const icons = Array(20).fill().map(() => ({
      type: Math.random() < 0.5 ? 'droplet' : 'cloud',
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 20,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    }));

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#072927';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawRecyclingSymbol(ctx, recyclingSymbol.x, recyclingSymbol.y, recyclingSymbol.size);

      icons.forEach(icon => {
        // Move icon
        icon.x += icon.vx;
        icon.y += icon.vy;

        // Bounce off walls
        if (icon.x < icon.size / 2 || icon.x > canvas.width - icon.size / 2) {
          icon.vx *= -1;
        }
        if (icon.y < icon.size / 2 || icon.y > canvas.height - icon.size / 2) {
          icon.vy *= -1;
        }

        // Check collision with recycling symbol
        const dx = icon.x - recyclingSymbol.x;
        const dy = icon.y - recyclingSymbol.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (icon.size + recyclingSymbol.size) / 2) {
          // Bounce back
          const angle = Math.atan2(dy, dx);
          const targetX = recyclingSymbol.x + Math.cos(angle) * ((icon.size + recyclingSymbol.size) / 2);
          const targetY = recyclingSymbol.y + Math.sin(angle) * ((icon.size + recyclingSymbol.size) / 2);
          icon.x = targetX;
          icon.y = targetY;
          icon.vx = Math.cos(angle) * 2;
          icon.vy = Math.sin(angle) * 2;
        }

        // Draw icon
        if (icon.type === 'droplet') {
          drawDroplet(ctx, icon.x, icon.y, icon.size);
        } else {
          drawCloud(ctx, icon.x, icon.y, icon.size);
        }
      });

      requestAnimationFrame(animate);
    }

    // Start animation
    animate();

    // Handle window resizing
    function handleResize() {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      recyclingSymbol.x = canvas.width / 2;
      recyclingSymbol.y = canvas.height / 2;
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="three-d-container">
      <canvas ref={canvasRef} />
    </div>
  );
}