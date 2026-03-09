import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Psiog Digital',
    location: 'Chennai',
    period: 'June 2024 – Present',
    color: '#ff2d55',
    highlights: [
      'Led frontend development team of 3 engineers, conducting 50+ code reviews and reducing post-merge defects by 20% across 13 Agile sprints.',
      'Architected and delivered 5 user-friendly React.js modules for cloud SaaS platform, implementing Redux for state management.',
      'Optimized application performance using React virtualization (react-window) and memoization, reducing large-dataset render times by 40%.',
      'Integrated 15+ RESTful APIs using async/await and Axios, implementing optimistic UI patterns that decreased perceived load time by 20%.',
      'Established CI/CD pipelines using GitHub Actions, cutting manual release effort by 50% and enabling zero-downtime deployments.',
      'Resolved 30+ production bugs, reducing open defect backlog by 45% within one quarter.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Psiog Digital',
    location: 'Chennai',
    period: 'Jan 2023 – Jun 2024',
    color: '#ff6b81',
    highlights: [
      'Developed and deployed custom documentation portal from scratch using Docusaurus on AWS Amplify, reducing update cycle time by 60%.',
      'Built 10+ responsive React.js UI components from Figma designs, achieving 100% cross-browser compatibility (Chrome, Firefox, Safari, Edge).',
      'Implemented Context API state management for SaaS platform, eliminating prop-drilling across 10+ components.',
      'Debugged critical asynchronous race condition in SaaS dashboard, deployed fix within 24 hours, eliminating data inconsistency for 500+ users.',
      'Delivered 100% of sprint commitments on time across 6 consecutive Agile sprints.',
    ],
  },
  {
    title: 'Graduate Engineering Trainee',
    company: 'Psiog Digital',
    location: 'Chennai',
    period: 'Jun 2022 – Jan 2023',
    color: '#999999',
    highlights: [
      'Built full-stack e-commerce web application from scratch using Angular with component architecture, reactive forms, and responsive design.',
      'Developed and integrated 9+ RESTful APIs using C#/.NET Core, enabling asynchronous request handling and dynamic content rendering.',
      'Applied version control best practices using Git, managing branches and resolving merge conflicts.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeExp, setActiveExp] = useState(0);

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
      id="experience"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0508 50%, #0a0a0a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,45,85,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
          Work History
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          <Box component="span" sx={{ color: '#ff2d55' }}>EXPERIE</Box>NCE
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left: Tab Selector */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            {experiences.map((exp, idx) => (
              <Box
                key={idx}
                onClick={() => setActiveExp(idx)}
                sx={{
                  cursor: 'pointer',
                  p: 2.5,
                  mb: 1.5,
                  borderRadius: '10px',
                  border: `1px solid ${activeExp === idx ? exp.color : 'rgba(255,255,255,0.06)'}`,
                  background: activeExp === idx ? `rgba(255,45,85,0.06)` : 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    borderColor: exp.color,
                    background: 'rgba(255,45,85,0.04)',
                  },
                  '&::before': activeExp === idx ? {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: exp.color,
                    borderRadius: '3px 0 0 3px',
                  } : {},
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                  <WorkOutlineIcon sx={{ fontSize: 16, color: activeExp === idx ? exp.color : '#555' }} />
                  <Typography
                    sx={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: activeExp === idx ? '#ffffff' : '#888',
                    }}
                  >
                    {exp.title}
                  </Typography>
                </Box>
                <Typography sx={{ color: '#555', fontSize: '0.78rem', pl: 3.5 }}>
                  {exp.company} · {exp.period}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Right: Detail Panel */}
        <Grid item xs={12} md={8}>
          <Box
            key={activeExp}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.5s ease',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '14px',
              p: { xs: 3, md: 4 },
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent line */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, ${experiences[activeExp].color}, transparent)`,
              }}
            />

            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3, flexWrap: 'wrap', gap: 1 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontSize: '1.5rem', color: '#fff', mb: 0.3 }}
                >
                  {experiences[activeExp].title}
                </Typography>
                <Typography
                  sx={{
                    color: experiences[activeExp].color,
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  {experiences[activeExp].company} · {experiences[activeExp].location}
                </Typography>
              </Box>
              <Box
                sx={{
                  background: 'rgba(255,45,85,0.1)',
                  border: '1px solid rgba(255,45,85,0.2)',
                  borderRadius: '20px',
                  px: 2,
                  py: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#ff6b81',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {experiences[activeExp].period}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {experiences[activeExp].highlights.map((point, i) => (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'flex-start',
                    opacity: 0,
                    animation: `fadeIn 0.4s ease ${i * 0.08}s forwards`,
                    '@keyframes fadeIn': {
                      from: { opacity: 0, transform: 'translateX(10px)' },
                      to: { opacity: 1, transform: 'translateX(0)' },
                    },
                  }}
                >
                  <FiberManualRecordIcon
                    sx={{
                      fontSize: 8,
                      color: experiences[activeExp].color,
                      mt: 0.8,
                      flexShrink: 0,
                    }}
                  />
                  <Typography sx={{ color: '#aaaaaa', fontSize: '0.88rem', lineHeight: 1.7 }}>
                    {point}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
