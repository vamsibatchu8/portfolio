import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, IconButton, Button, Tooltip } from '@mui/material';
import * as THREE from 'three';

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vamsikrishna-batchu/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const TECH_STACK = [
  // { label: 'React',      color: '#61dafb', bg: '#061a26', symbol: '⚛',  desc: 'React.js v18' },
  // { label: 'TypeScript', color: '#3178c6', bg: '#060d1a', symbol: 'TS', desc: 'TypeScript' },
  // { label: 'JavaScript', color: '#f7df1e', bg: '#1a1800', symbol: 'JS', desc: 'JavaScript ES6+' },
  // { label: 'Redux',      color: '#764abc', bg: '#0e0618', symbol: '⬡',  desc: 'Redux / Context API' },
  // { label: 'Git',        color: '#f05032', bg: '#1a0600', symbol: '⎇',  desc: 'Git / GitHub Actions' },
  // { label: 'AWS',        color: '#ff9900', bg: '#1a0f00', symbol: '☁',  desc: 'AWS Amplify' },
  // { label: '.NET',       color: '#9b4de0', bg: '#0d0518', symbol: '◈',  desc: 'C# / .NET Core' },
  // { label: 'Figma',      color: '#f24e1e', bg: '#1a0500', symbol: 'F',  desc: 'Figma Design' },
];

function makeTechTexture(label, color, bg, symbol) {
  const size = 256;
  const c = document.createElement('canvas');
  c.width = size; c.height = size;
  const ctx = c.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 1.5);
  grad.addColorStop(0, bg);
  grad.addColorStop(1, '#050505');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  ctx.strokeStyle = color + '99';
  ctx.lineWidth = 7;
  roundRect(ctx, 5, 5, size - 10, size - 10, 18);
  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  const cs = 22;
  [[6, 6], [size - cs - 6, 6], [6, size - cs - 6], [size - cs - 6, size - cs - 6]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(x + cs, y + 4); ctx.lineTo(x + 4, y + 4); ctx.lineTo(x + 4, y + cs);
    ctx.stroke();
  });
  ctx.shadowColor = color;
  ctx.shadowBlur = 30;
  ctx.fillStyle = color;
  const fSize = symbol.length > 1 ? 78 : 102;
  ctx.font = `bold ${fSize}px monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(symbol, size / 2, size / 2 - 8);
  ctx.shadowBlur = 12;
  ctx.font = 'bold 30px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(label, size / 2, size - 34);
  ctx.shadowBlur = 0;
  return new THREE.CanvasTexture(c);
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function makeShockwave(scene, position, delayFactor) {
  const geo = new THREE.RingGeometry(0.08, 0.14, 64);
  const mat = new THREE.MeshBasicMaterial({ color: 0xff2d55, transparent: true, opacity: 0.9, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(position);
  scene.add(mesh);
  return { mesh, mat, scale: 0.1, delay: delayFactor * 0.14, done: false };
}

export default function Hero() {
  const mountRef    = useRef(null);
  const sceneRef    = useRef({});
  const [loaded,    setLoaded]    = useState(false);
  const [tooltip,   setTooltip]   = useState({ visible: false, x: 0, y: 0, text: '' });
  const [clickHint, setClickHint] = useState(true);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    let W = el.clientWidth, H = el.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, W / H, 0.1, 1000);
    camera.position.z = 6.5;

    const raycaster = new THREE.Raycaster();
    const mouseNDC  = new THREE.Vector2();
    const mouse     = { x: 0, y: 0 };
    const sceneTilt = { x: 0, y: 0 };

    /* ── Neon ring group ── */
    const ringGroup = new THREE.Group();
    scene.add(ringGroup);

    // Core ring only — no outer bloom
    const torusMesh = new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.048, 32, 220),
      new THREE.MeshBasicMaterial({ color: 0xff2d55 })
    );
    // ringGroup.add(torusMesh);

    // Inner thin accent ring
    ringGroup.add(new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.02, 16, 220),
      new THREE.MeshBasicMaterial({ color: 0xff2d55, transparent: true, opacity: 0.15 })
    ));

    // Second tilted decorative ring
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.022, 16, 220),
      new THREE.MeshBasicMaterial({ color: 0xff2d55, transparent: true, opacity: 0.22 })
    );
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 6;
    // ringGroup.add(ring2);

    /* ── Orbit dots ── */
    // const orbitGroup = new THREE.Group();
    // ringGroup.add(orbitGroup);
    // for (let i = 0; i < 10; i++) {
    //   const isMain = i % 2 === 0;
    //   const dot = new THREE.Mesh(
    //     new THREE.SphereGeometry(isMain ? 0.06 : 0.035, 8, 8),
    //     new THREE.MeshBasicMaterial({ color: isMain ? 0xff2d55 : 0xffffff })
    //   );
    //   const a = (i / 10) * Math.PI * 2;
    //   dot.position.set(Math.cos(a) * 2.3, Math.sin(a) * 2.3, 0);
    //   orbitGroup.add(dot);
    // }

    /* ── Central pulsing sphere ── */
    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.09118, 32, 32),
      new THREE.MeshBasicMaterial({ color: '#ffdae1', transparent: true, opacity: 0.85 })
    );
    scene.add(coreSphere);

    // Wireframe sphere
    const wireframe = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xff2d55, wireframe: true, transparent: true, opacity: 0.07 })
    );
    scene.add(wireframe);

    /* ── Tech cubes ── */
    const cubes = [];
    TECH_STACK.forEach((tech, i) => {
      const tex = makeTechTexture(tech.label, tech.color, tech.bg, tech.symbol);
      const faces = [
        new THREE.MeshBasicMaterial({ color: 0x0d0d0d }),
        new THREE.MeshBasicMaterial({ color: 0x0d0d0d }),
        new THREE.MeshBasicMaterial({ color: 0x0d0d0d }),
        new THREE.MeshBasicMaterial({ color: 0x0d0d0d }),
        new THREE.MeshBasicMaterial({ map: tex }),
        new THREE.MeshBasicMaterial({ color: 0x0d0d0d }),
      ];
      const cube = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), faces);
      const baseAngle = (i / TECH_STACK.length) * Math.PI * 2;
      const radius    = 4.0 + (i % 3) * 0.5;
      cube.position.set(
        Math.cos(baseAngle) * radius,
        Math.sin(baseAngle) * radius * 0.5,
        (i % 3 - 1) * 1.4
      );
      cube.userData = {
        tech, baseAngle, radius,
        orbitSpeed:  0.003 + i * 0.0003,
        floatAmp:    0.14  + (i % 3) * 0.06,
        floatFreq:   0.5   + i * 0.13,
        selfSpinY:   0.009 + (i % 4) * 0.003,
        selfSpinX:   0.004 + (i % 3) * 0.002,
        scaleTarget: 1.0,
        scale:       1.0,
        hovered:     false,
      };
      scene.add(cube);
      cubes.push(cube);
    });
    sceneRef.current.cubes = cubes;

    /* ── Particles ── */
    const PC = 3600;
    const pPos = new Float32Array(PC * 3);
    const pVel = [];
    for (let i = 0; i < PC; i++) {
      const ox = (Math.random() - 0.5) * 20;
      const oy = (Math.random() - 0.5) * 16;
      const oz = (Math.random() - 0.5) * 10;
      pPos[i * 3] = ox; pPos[i * 3 + 1] = oy; pPos[i * 3 + 2] = oz;
      pVel.push({ x: 0, y: 0, ox, oy, oz });
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xff2d55, size: 0.028, transparent: true, opacity: 0.5 });
    scene.add(new THREE.Points(pGeo, pMat));

    /* ── Shockwaves ── */
    const shockwaves = [];
    sceneRef.current = { scene, shockwaves, cubes };

    /* ── Grid ── */
    const grid = new THREE.GridHelper(30, 32, 0x181818, 0x0f0f0f);
    grid.position.y = -5;
    grid.rotation.x = Math.PI / 8;
    scene.add(grid);

    /* ── Events ── */
    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouse.x =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      mouse.y = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      mouseNDC.set(mouse.x, mouse.y);
      raycaster.setFromCamera(mouseNDC, camera);
      const hits = raycaster.intersectObjects(cubes);
      cubes.forEach(c => { c.userData.hovered = false; c.userData.scaleTarget = 1.0; });
      if (hits.length > 0) {
        const c = hits[0].object;
        c.userData.hovered = true;
        c.userData.scaleTarget = 1.32;
        setTooltip({ visible: true, x: e.clientX - rect.left, y: e.clientY - rect.top - 48, text: c.userData.tech.desc });
        el.style.cursor = 'pointer';
      } else {
        setTooltip(t => ({ ...t, visible: false }));
        el.style.cursor = 'crosshair';
      }
    };

    const onClick = (e) => {
      setClickHint(false);
      const rect = el.getBoundingClientRect();
      const nx =  ((e.clientX - rect.left) / rect.width)  * 2 - 1;
      const ny = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      raycaster.setFromCamera(new THREE.Vector2(nx, ny), camera);
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const pt = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, pt);
      for (let i = 0; i < 3; i++) shockwaves.push(makeShockwave(scene, pt, i));
      const attr = pGeo.attributes.position;
      for (let i = 0; i < PC; i++) {
        const px = attr.getX(i), py = attr.getY(i);
        const dx = px - pt.x, dy = py - pt.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 16 && d2 > 0.001) {
          const f = (4 - Math.sqrt(d2)) / 4 * 0.18;
          pVel[i].x += (dx / Math.sqrt(d2)) * f;
          pVel[i].y += (dy / Math.sqrt(d2)) * f;
        }
      }
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('click', onClick);
    el.style.cursor = 'crosshair';

    /* ── Animation loop ── */
    let t = 0, raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      t += 0.012;

      sceneTilt.x += (mouse.y * 0.16 - sceneTilt.x) * 0.045;
      sceneTilt.y += (mouse.x * 0.22 - sceneTilt.y) * 0.045;
      scene.rotation.x = sceneTilt.x;
      scene.rotation.y = sceneTilt.y;

      ringGroup.rotation.z = t * 0.16;
      ringGroup.rotation.x = Math.sin(t * 0.28) * 0.08;
      // orbitGroup.rotation.z = t * 0.52;
      ring2.rotation.z = t * 0.08;
      // torusMesh.scale.setScalar(1 + Math.sin(t * 2.4) * 0.018);

      const cp = 1 + Math.sin(t * 3.5) * 0.25;
      coreSphere.scale.setScalar(cp);
      coreSphere.material.opacity = 0.5 + Math.sin(t * 3.5) * 0.35;

      wireframe.rotation.y = t * 0.08;
      wireframe.rotation.x = t * 0.04;

      cubes.forEach((cube) => {
        const d = cube.userData;
        const a = d.baseAngle + t * d.orbitSpeed;
        cube.position.x = Math.cos(a) * d.radius;
        cube.position.y = Math.sin(a) * d.radius * 0.5 + Math.sin(t * d.floatFreq) * d.floatAmp;
        cube.rotation.y += d.selfSpinY;
        cube.rotation.x += d.selfSpinX;
        d.scale += (d.scaleTarget - d.scale) * 0.1;
        cube.scale.setScalar(d.scale);
      });

      const attr = pGeo.attributes.position;
      for (let i = 0; i < PC; i++) {
        let px = attr.getX(i), py = attr.getY(i);
        const mx = mouse.x * 7, my = mouse.y * 5;
        const dx = px - mx, dy = py - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < 5 && d2 > 0.01) { const f = 0.008 / d2; pVel[i].x += dx * f; pVel[i].y += dy * f; }
        pVel[i].x += (pVel[i].ox - px) * 0.0018;
        pVel[i].y += (pVel[i].oy - py) * 0.0018;
        pVel[i].x *= 0.96; pVel[i].y *= 0.96;
        attr.setXY(i, px + pVel[i].x, py + pVel[i].y);
      }
      attr.needsUpdate = true;

      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        if (sw.delay > 0) { sw.delay -= 0.016; continue; }
        sw.scale += 0.2;
        sw.mat.opacity = Math.max(0, 1 - sw.scale / 5.5);
        sw.mesh.scale.setScalar(sw.scale);
        if (sw.scale > 5.5) {
          scene.remove(sw.mesh);
          sw.mesh.geometry.dispose();
          sw.mat.dispose();
          shockwaves.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();
    setLoaded(true);

    const onResize = () => {
      W = el.clientWidth; H = el.clientHeight;
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      renderer.setSize(W, H);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('click', onClick);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 58% 38%, #1c0009 0%, #0a0a0a 62%)',
      }}
    >
      <Box ref={mountRef} sx={{ position: 'absolute', inset: 0, '& canvas': { display: 'block' } }} />

      {/* Floating HTML tech badges */}
      {TECH_STACK.map((tech, i) => {
        const angle  = (i / TECH_STACK.length) * 360;
        const rx     = 34 + (i % 2) * 6;
        const ry     = 28 + (i % 3) * 4;
        const rad    = (angle * Math.PI) / 180;
        const left   = 60 + Math.cos(rad) * rx;
        const top    = 50 + Math.sin(rad) * ry;
        return (
          <Tooltip
            key={tech.label}
            title={tech.desc}
            placement="top"
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  background: 'rgba(15,15,15,0.95)',
                  border: `1px solid ${tech.color}44`,
                  color: tech.color,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  backdropFilter: 'blur(8px)',
                },
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: `${left}%`,
                top: `${top}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 6,
                opacity: loaded ? 1 : 0,
                transition: `opacity 0.8s ease ${i * 0.08}s`,
                animation: `tbFloat${i % 4} ${3.8 + i * 0.35}s ease-in-out ${i * 0.4}s infinite`,
                '@keyframes tbFloat0': { '0%,100%': { marginTop: 0 }, '50%': { marginTop: '-8px' } },
                '@keyframes tbFloat1': { '0%,100%': { marginTop: 0 }, '50%': { marginTop: '-6px' } },
                '@keyframes tbFloat2': { '0%,100%': { marginTop: 0 }, '50%': { marginTop: '-10px' } },
                '@keyframes tbFloat3': { '0%,100%': { marginTop: 0 }, '50%': { marginTop: '-5px' } },
                cursor: 'default',
              }}
            >
              <Box
                sx={{
                  display: 'flex', alignItems: 'center', gap: 0.6,
                  px: 1.3, py: 0.55, borderRadius: '20px',
                  background: `${tech.bg}ee`,
                  border: `1px solid ${tech.color}38`,
                  backdropFilter: 'blur(14px)',
                  boxShadow: `0 0 14px ${tech.color}18, 0 3px 18px rgba(0,0,0,0.6)`,
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    border: `1px solid ${tech.color}cc`,
                    boxShadow: `0 0 22px ${tech.color}55, 0 4px 24px rgba(0,0,0,0.7)`,
                    transform: 'scale(1.15)',
                  },
                }}
              >
                <Typography sx={{ fontSize: '0.72rem', fontFamily: "'Space Mono',monospace", color: tech.color, lineHeight: 1 }}>
                  {tech.symbol}
                </Typography>
                <Typography sx={{ fontSize: '0.66rem', fontFamily: "'Space Mono',monospace", color: '#cccccc', lineHeight: 1 }}>
                  {tech.label}
                </Typography>
              </Box>
            </Box>
          </Tooltip>
        );
      })}

      {/* Three.js cube hover tooltip */}
      {tooltip.visible && (
        <Box
          sx={{
            position: 'absolute', left: tooltip.x, top: tooltip.y, zIndex: 30,
            background: 'rgba(12,12,12,0.96)', border: '1px solid rgba(255,45,85,0.45)',
            borderRadius: '8px', px: 1.5, py: 0.7,
            pointerEvents: 'none', backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(255,45,85,0.25)',
          }}
        >
          <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: '0.7rem', color: '#ff6b81' }}>
            {tooltip.text}
          </Typography>
        </Box>
      )}

      {/* Click hint */}
      {clickHint && (
        <Box
          sx={{
            position: 'absolute', bottom: 88, right: 44, zIndex: 10,
            display: 'flex', alignItems: 'center', gap: 1,
            opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease 2.5s',
            pointerEvents: 'none',
            animation: 'hintPulse 2.2s ease-in-out infinite',
            '@keyframes hintPulse': { '0%,100%': { opacity: 0.45 }, '50%': { opacity: 0.9 } },
          }}
        >
          <Box sx={{
            width: 26, height: 26, borderRadius: '50%', border: '1.5px solid #ff2d55',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', color: '#ff2d55',
          }}>✦</Box>
          <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', color: '#ff2d55', letterSpacing: '0.22em' }}>
            CLICK TO INTERACT
          </Typography>
        </Box>
      )}

      {/* Page content */}
      <Box
        sx={{
          position: 'relative', zIndex: 10, width: '100%',
          display: 'flex', flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center', justifyContent: 'space-between',
          px: { xs: 3, md: 8 }, pt: 12, pb: 8, minHeight: '100vh',
          pointerEvents: 'none',
        }}
      >
        {/* Left content */}
        <Box
          sx={{
            maxWidth: 440, pointerEvents: 'auto',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.35s',
          }}
        >
          <Typography sx={{
            fontFamily: "'Space Mono',monospace", fontSize: '0.73rem', color: '#ff2d55',
            letterSpacing: '0.3em', textTransform: 'uppercase', mb: 1.5,
            display: 'flex', alignItems: 'center', gap: 1,
          }}>
            <Box component="span" sx={{ width: 26, height: 1, background: '#ff2d55', display: 'inline-block' }} />
            Hello, I'm
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3.5rem', md: '5.2rem' }, lineHeight: 0.9, mb: 1.5,
              background: 'linear-gradient(135deg, #ffffff 32%, #ff2d55 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}
          >
            Vamsi<br />Batchu
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
            <Box sx={{ width: 34, height: 2, background: '#ff2d55', borderRadius: 1 }} />
            <Typography sx={{
              fontFamily: "'Outfit',sans-serif", fontWeight: 300, fontSize: '0.88rem',
              color: '#aaaaaa', letterSpacing: '0.12em', textTransform: 'uppercase',
            }}>
              Senior Software Engineer
            </Typography>
          </Box>

          <Typography sx={{ color: '#777', fontSize: '0.87rem', lineHeight: 1.82, mb: 4, maxWidth: 390 }}>
            Passionate frontend developer with 3+ years of expertise in React.js &amp; JavaScript,
            building scalable, responsive web applications with pixel-perfect precision.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 5 }}>
            <Button
              variant="contained" color="primary" size="large"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ px: 4, py: 1.4, fontSize: '0.84rem' }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined" color="primary" size="large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              sx={{ px: 4, py: 1.4, fontSize: '0.84rem' }}
            >
              Let's Talk
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((s) => (
              <IconButton
                key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" size="small"
                sx={{
                  color: '#666', border: '1px solid rgba(255,255,255,0.1)', width: 38, height: 38,
                  transition: 'all 0.3s ease',
                  '&:hover': { color: '#ff2d55', borderColor: '#ff2d55', background: 'rgba(255,45,85,0.1)', transform: 'translateY(-3px)' },
                }}
              >
                {s.icon}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Right: stats */}
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
            flexDirection: 'column',
            gap: 2,
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 1s ease 0.6s',
          }}
        >
          {[
            { num: '3+', label: 'Years Experience' },
            { num: '45+', label: 'APIs Integrated' },
            { num: '50+', label: 'Code Reviews' },
            { num: '40%', label: 'Performance Boost' },
          ].map((stat) => (
            <Box
              key={stat.label}
              sx={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,45,85,0.2)',
                borderRadius: '10px',
                p: 2,
                minWidth: 160,
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'rgba(255,45,85,0.08)',
                  borderColor: '#ff2d55',
                  transform: 'translateX(-4px)',
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#ff2d55',
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </Typography>
              <Typography sx={{ color: '#888', fontSize: '0.75rem', mt: 0.3 }}>
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Scroll indicator */}
      <Box sx={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5,
        zIndex: 10, pointerEvents: 'none',
        animation: 'scrollBounce 2s ease-in-out infinite',
        '@keyframes scrollBounce': {
          '0%,100%': { transform: 'translate(-50%, 0)' },
          '50%':     { transform: 'translate(-50%, 8px)' },
        },
      }}>
        <Typography sx={{ fontFamily: "'Space Mono',monospace", fontSize: '0.58rem', letterSpacing: '0.25em', color: '#555' }}>
          SCROLL
        </Typography>
        <Box sx={{ width: 1, height: 34, background: 'linear-gradient(to bottom, #ff2d55, transparent)' }} />
      </Box>
    </Box>
  );
}