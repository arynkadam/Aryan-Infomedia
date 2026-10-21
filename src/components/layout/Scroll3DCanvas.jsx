import React, { useEffect, useRef } from 'react';

/**
 * Scroll3DCanvas - Practical, High-End Tech Aesthetic with Evolving Lateral Glass Elements
 * 
 * Features:
 * 1. Deep atmospheric midnight/charcoal gradient canvas.
 * 2. Subtle architectural dot-matrix & corner crosshair HUD.
 * 3. Soft, organic ambient auroras that smoothly shift with scroll.
 * 4. EVOLVING LATERAL GLASS ELEMENTS:
 *    - Anchored along the extreme left and right margins (off-center, zero text overlap).
 *    - Modern, bevelled glass panels and faceted crystal shards.
 *    - Dynamically morph position, rotation, scale, and specular reflection angles with scroll progress.
 */
export default function Scroll3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollProgress = 0;
    let targetProgress = 0;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable > 0) {
        targetProgress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      }
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    onScroll();

    // Floating micro-nodes
    const NODE_COUNT = width < 768 ? 20 : 42;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.6,
      baseAlpha: Math.random() * 0.25 + 0.15,
    }));

    let time = 0;

    // Helper: 2D rotation for glass vertices
    function rotate2D(x, y, rad) {
      const cos = Math.cos(rad);
      const sin = Math.sin(rad);
      return { x: x * cos - y * sin, y: x * sin + y * cos };
    }

    function render() {
      // Damped smooth scroll interpolation
      scrollProgress += (targetProgress - scrollProgress) * 0.08;
      time += 0.006;

      ctx.clearRect(0, 0, width, height);

      const p = scrollProgress; // 0.0 (top) to 1.0 (bottom)

      // ==========================================
      // 1. DYNAMIC AMBIENT LIGHT AURORAS
      // ==========================================
      const g1X = width * 0.5 + Math.sin(time + p * Math.PI) * (width * 0.18);
      const g1Y = height * 0.25 + (p * height * 0.5);
      const rad1 = ctx.createRadialGradient(g1X, g1Y, 0, g1X, g1Y, Math.max(width, height) * 0.55);
      rad1.addColorStop(0, 'rgba(37, 99, 255, 0.12)');
      rad1.addColorStop(0.5, 'rgba(30, 58, 138, 0.05)');
      rad1.addColorStop(1, 'rgba(8, 11, 16, 0)');
      ctx.fillStyle = rad1;
      ctx.fillRect(0, 0, width, height);

      const g2X = (p > 0.5 ? width * 0.15 : width * 0.85) + Math.cos(time * 0.8) * 35;
      const g2Y = height * 0.65 - (p * height * 0.3);
      const rad2 = ctx.createRadialGradient(g2X, g2Y, 0, g2X, g2Y, Math.max(width, height) * 0.4);
      rad2.addColorStop(0, 'rgba(96, 165, 250, 0.08)');
      rad2.addColorStop(0.6, 'rgba(37, 99, 255, 0.03)');
      rad2.addColorStop(1, 'rgba(8, 11, 16, 0)');
      ctx.fillStyle = rad2;
      ctx.fillRect(0, 0, width, height);

      // ==========================================
      // 2. ARCHITECTURAL DOT MATRIX GRID
      // ==========================================
      const gridSize = 48;
      const offsetY = -(p * 70) % gridSize;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      for (let x = 0; x < width; x += gridSize) {
        for (let y = offsetY; y < height; y += gridSize) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // ==========================================
      // 3. EVOLVING LATERAL GLASS ELEMENTS (Left & Right Margins)
      // ==========================================
      // These elements remain parked on the extreme lateral borders
      // so central headlines, text, and cards remain 100% unobstructed.
      ctx.save();

      // --- LEFT GLASS SHIELD / CRYSTAL ---
      // Moves down, rotates, and scales with scroll
      const leftCenterX = (width < 768 ? -20 : width * 0.06) + Math.sin(time + p) * 12;
      const leftCenterY = height * 0.35 + p * (height * 0.38) + Math.cos(time * 0.8) * 15;
      const leftRot = p * 1.8 + time * 0.15;
      const leftScale = (width < 768 ? 0.7 : 1.0) * (1 + Math.sin(p * Math.PI) * 0.2);

      // Glass Diamond Geometry Vertices
      const rawDiamond = [
        { x: 0, y: -110 },
        { x: 75, y: -20 },
        { x: 55, y: 90 },
        { x: -45, y: 95 },
        { x: -65, y: -20 },
      ];

      const leftTransformed = rawDiamond.map(v => {
        const r = rotate2D(v.x * leftScale, v.y * leftScale, leftRot);
        return { x: leftCenterX + r.x, y: leftCenterY + r.y };
      });

      // Render Left Glass Body with Shifting Gradient
      ctx.beginPath();
      ctx.moveTo(leftTransformed[0].x, leftTransformed[0].y);
      for (let i = 1; i < leftTransformed.length; i++) {
        ctx.lineTo(leftTransformed[i].x, leftTransformed[i].y);
      }
      ctx.closePath();

      const leftGrad = ctx.createLinearGradient(
        leftTransformed[0].x, leftTransformed[0].y,
        leftTransformed[2].x, leftTransformed[2].y
      );
      leftGrad.addColorStop(0, 'rgba(147, 197, 253, 0.18)');
      leftGrad.addColorStop(0.4, 'rgba(37, 99, 255, 0.12)');
      leftGrad.addColorStop(0.8, 'rgba(11, 18, 32, 0.6)');
      leftGrad.addColorStop(1, 'rgba(96, 165, 250, 0.15)');
      ctx.fillStyle = leftGrad;
      ctx.fill();

      // Left Glass Polished Bevel (Silver-Cyan Sheen)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Interior Refractive facet line
      ctx.beginPath();
      ctx.moveTo(leftTransformed[0].x, leftTransformed[0].y);
      ctx.lineTo(leftTransformed[2].x, leftTransformed[2].y);
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.35)';
      ctx.lineWidth = 1;
      ctx.stroke();


      // --- RIGHT GLASS PRISM / ARCHITECTURAL SLAB ---
      // Moves up and tilts in opposition to create dynamic parallax
      const rightCenterX = (width < 768 ? width + 20 : width * 0.94) - Math.cos(time + p) * 12;
      const rightCenterY = height * 0.65 - p * (height * 0.35) + Math.sin(time * 0.7) * 15;
      const rightRot = -0.5 - p * 1.6 + time * 0.12;
      const rightScale = (width < 768 ? 0.7 : 1.0) * (1 + Math.cos(p * Math.PI) * 0.18);

      const rawSlab = [
        { x: -50, y: -130 },
        { x: 50, y: -90 },
        { x: 40, y: 120 },
        { x: -45, y: 100 },
      ];

      const rightTransformed = rawSlab.map(v => {
        const r = rotate2D(v.x * rightScale, v.y * rightScale, rightRot);
        return { x: rightCenterX + r.x, y: rightCenterY + r.y };
      });

      // Render Right Glass Body
      ctx.beginPath();
      ctx.moveTo(rightTransformed[0].x, rightTransformed[0].y);
      for (let i = 1; i < rightTransformed.length; i++) {
        ctx.lineTo(rightTransformed[i].x, rightTransformed[i].y);
      }
      ctx.closePath();

      const rightGrad = ctx.createLinearGradient(
        rightTransformed[0].x, rightTransformed[0].y,
        rightTransformed[2].x, rightTransformed[2].y
      );
      rightGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
      rightGrad.addColorStop(0.3, 'rgba(96, 165, 250, 0.14)');
      rightGrad.addColorStop(0.7, 'rgba(30, 58, 138, 0.45)');
      rightGrad.addColorStop(1, 'rgba(37, 99, 255, 0.2)');
      ctx.fillStyle = rightGrad;
      ctx.fill();

      // Right Glass Polished Bevel (Silver-Cyan Sheen)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Secondary internal facet
      ctx.beginPath();
      ctx.moveTo(rightTransformed[1].x, rightTransformed[1].y);
      ctx.lineTo(rightTransformed[3].x, rightTransformed[3].y);
      ctx.strokeStyle = 'rgba(147, 197, 253, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Subtle Secondary Floating Glass Shard (Mid-Right)
      if (width > 768) {
        const shardX = width * 0.92;
        const shardY = height * 0.2 + p * (height * 0.5);
        const shardRot = p * 2.5 + time * 0.2;
        const rawShard = [{ x: 0, y: -40 }, { x: 30, y: 0 }, { x: 0, y: 40 }, { x: -25, y: 10 }];
        const st = rawShard.map(v => {
          const r = rotate2D(v.x * 0.8, v.y * 0.8, shardRot);
          return { x: shardX + r.x, y: shardY + r.y };
        });

        ctx.beginPath();
        ctx.moveTo(st[0].x, st[0].y);
        for (let i = 1; i < st.length; i++) ctx.lineTo(st[i].x, st[i].y);
        ctx.closePath();
        ctx.fillStyle = 'rgba(96, 165, 250, 0.12)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // ==========================================
      // 4. FLOATING CONSTELLATION NETWORK
      // ==========================================
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        const displayY = (n.y - p * 120 + height) % height;

        ctx.beginPath();
        ctx.arc(n.x, displayY, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${n.baseAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const displayY2 = (n2.y - p * 120 + height) % height;
          const dx = n.x - n2.x;
          const dy = displayY - displayY2;
          const dist = Math.hypot(dx, dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(n.x, displayY);
            ctx.lineTo(n2.x, displayY2);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 110) * 0.15})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // ==========================================
      // 5. TECHNICAL CORNER HUD
      // ==========================================
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      ctx.lineWidth = 1;

      const drawCross = (cx, cy) => {
        ctx.beginPath();
        ctx.moveTo(cx - 5, cy);
        ctx.lineTo(cx + 5, cy);
        ctx.moveTo(cx, cy - 5);
        ctx.lineTo(cx, cy + 5);
        ctx.stroke();
      };

      drawCross(40, 40);
      drawCross(width - 40, 40);
      drawCross(40, height - 40);
      drawCross(width - 40, height - 40);

      ctx.font = '10px "Space Grotesk", monospace';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
      ctx.fillText(`SYS // ${(p * 100).toFixed(0).padStart(3, '0')}% DEPTH`, 55, 43);

      ctx.restore();

      animId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
