import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Grid, Chip, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

const projects = [
  {
    title: 'SaaS Documentation Portal',
    category: 'Web Development',
    description:
      'Custom documentation portal built from scratch using Docusaurus on AWS Amplify, reducing documentation update cycle time by 60% and improving developer onboarding efficiency.',
    tags: ['Docusaurus', 'AWS Amplify', 'React.js', 'CI/CD'],
    gradient: 'linear-gradient(135deg, #0a2a2a 0%, #0d3d3d 100%)',
    accent: '#00d4aa',
    icon: '📄',
  },
  {
    title: 'Cloud SaaS Platform',
    category: 'UI/UX Development',
    description:
      'Architected 5 user-friendly React.js modules for cloud SaaS platform with Redux state management, ensuring responsive design across desktop and mobile.',
    tags: ['React.js', 'Redux', 'REST APIs', 'Figma'],
    gradient: 'linear-gradient(135deg, #1a0a2a 0%, #2d1050 100%)',
    accent: '#9b59b6',
    icon: '☁️',
  },
  {
    title: 'E-Commerce Application',
    category: 'Full Stack',
    description:
      'Full-stack e-commerce web application using Angular with component architecture, reactive forms, and 9+ RESTful APIs with C#/.NET Core backend.',
    tags: ['Angular', 'C#', '.NET Core', 'SQL Server'],
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2d2d10 100%)',
    accent: '#f39c12',
    icon: '🛒',
  },
  {
    title: 'Performance Dashboard',
    category: 'Data Visualization',
    description:
      'Optimized data-heavy dashboard using React virtualization (react-window) and memoization techniques, reducing large-dataset render times by 40%.',
    tags: ['React.js', 'react-window', 'TypeScript', 'Webpack'],
    gradient: 'linear-gradient(135deg, #0a1a2a 0%, #0d2d4d 100%)',
    accent: '#3498db',
    icon: '📊',
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Sideways label */}
      <Typography
        sx={{
          position: 'absolute',
          left: -30,
          top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: { xs: '2rem', md: '4rem' },
          fontWeight: 800,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '0.3em',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        PROJECTS
      </Typography>

      {/* Section Header */}
      <Box
        sx={{
          mb: 8,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            color: '#ff2d55',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box component="span" sx={{ width: 25, height: 1, background: '#ff2d55', display: 'inline-block' }} />
          Portfolio
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
        >
          Featured{' '}
          <Box component="span" sx={{ color: '#ff2d55' }}>Projects</Box>
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Box
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${idx * 0.1 + 0.2}s`,
                border: `1px solid ${hovered === idx ? project.accent + '40' : 'rgba(255,255,255,0.06)'}`,
                background: project.gradient,
                height: 280,
              }}
            >
              {/* Background pattern */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.15,
                  backgroundImage: `radial-gradient(${project.accent}33 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                  transition: 'opacity 0.3s ease',
                  ...(hovered === idx && { opacity: 0.25 }),
                }}
              />

              {/* Glow on hover */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${project.accent}15 0%, transparent 70%)`,
                  opacity: hovered === idx ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Content */}
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.65rem',
                          color: project.accent,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          mb: 0.5,
                        }}
                      >
                        {project.category}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ color: '#ffffff', fontSize: '1.15rem' }}
                      >
                        {project.title}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                      <IconButton
                        size="small"
                        sx={{
                          color: '#666',
                          border: '1px solid rgba(255,255,255,0.1)',
                          width: 32,
                          height: 32,
                          transition: 'all 0.2s ease',
                          '&:hover': { color: project.accent, borderColor: project.accent, background: `${project.accent}15` },
                        }}
                      >
                        <OpenInNewIcon sx={{ fontSize: 14 }} />
                      </IconButton>
                      <IconButton
                        size="small"
                        sx={{
                          color: '#666',
                          border: '1px solid rgba(255,255,255,0.1)',
                          width: 32,
                          height: 32,
                          transition: 'all 0.2s ease',
                          '&:hover': { color: project.accent, borderColor: project.accent, background: `${project.accent}15` },
                        }}
                      >
                        <CodeIcon sx={{ fontSize: 14 }} />
                      </IconButton>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      color: '#999999',
                      fontSize: '0.82rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, mt: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        background: `${project.accent}15`,
                        color: project.accent,
                        border: `1px solid ${project.accent}30`,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: '0.62rem',
                        height: 22,
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
