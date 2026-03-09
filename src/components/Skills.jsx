import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '⚛️',
    color: '#61dafb',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'Redux / Context API', level: 88 },
      { name: 'Angular', level: 72 },
    ],
  },
  {
    category: 'Backend & Database',
    icon: '🗄️',
    color: '#ff6b35',
    skills: [
      { name: 'RESTful API Design', level: 85 },
      { name: 'C# / .NET Core', level: 70 },
      { name: 'SQL Server', level: 65 },
      { name: 'MySQL', level: 65 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: '#f39c12',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'GitHub Actions / CI/CD', level: 82 },
      { name: 'AWS Amplify', level: 75 },
      { name: 'Figma', level: 78 },
      { name: 'Webpack', level: 72 },
      { name: 'Postman', level: 85 },
    ],
  },
  {
    category: 'Methodologies',
    icon: '📋',
    color: '#2ecc71',
    skills: [
      { name: 'Agile / Scrum', level: 92 },
      { name: 'Code Reviews', level: 90 },
      { name: 'TDD (Basic)', level: 65 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
];

function SkillBar({ name, level, color, visible, delay }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setWidth(level), delay);
      return () => clearTimeout(timer);
    }
  }, [visible, level, delay]);

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography sx={{ color: '#cccccc', fontSize: '0.82rem' }}>{name}</Typography>
        <Typography
          sx={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.72rem',
            color: color,
          }}
        >
          {level}%
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            borderRadius: 2,
            transition: 'width 1s ease',
            boxShadow: `0 0 6px ${color}44`,
          }}
        />
      </Box>
    </Box>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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
      id="skills"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0508 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,45,85,0.04) 0%, transparent 70%)',
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
          Expertise
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
          Technical{' '}
          <Box component="span" sx={{ color: '#ff2d55' }}>Skills</Box>
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {skillGroups.map((group, gIdx) => (
          <Grid item xs={12} sm={6} key={group.category}>
            <Box
              sx={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '14px',
                p: 3,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s ease ${gIdx * 0.15}s`,
                '&:hover': {
                  borderColor: `${group.color}30`,
                  background: `${group.color}05`,
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '10px',
                    background: `${group.color}15`,
                    border: `1px solid ${group.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                  }}
                >
                  {group.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ color: group.color, fontFamily: "'Rajdhani', sans-serif", fontSize: '1.1rem' }}
                >
                  {group.category}
                </Typography>
              </Box>

              {group.skills.map((skill, sIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  visible={visible}
                  delay={gIdx * 100 + sIdx * 80 + 300}
                />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
