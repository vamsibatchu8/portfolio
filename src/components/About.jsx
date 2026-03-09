// import React, { useRef, useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Grid,
//   Chip,
// } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import SchoolIcon from '@mui/icons-material/School';

// const infoItems = [
//   { icon: <PersonIcon sx={{ fontSize: 16 }} />, label: 'Name', value: 'Vamsi Batchu' },
//   { icon: <EmailIcon sx={{ fontSize: 16 }} />, label: 'Email', value: 'vamsibatchu12@gmail.com' },
//   { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, label: 'Location', value: 'Chennai, India' },
//   { icon: <SchoolIcon sx={{ fontSize: 16 }} />, label: 'Degree', value: 'M.TECH – VIT' },
// ];

// export default function About() {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setVisible(true); },
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <Box
//       id="about"
//       ref={sectionRef}
//       sx={{
//         py: { xs: 10, md: 16 },
//         px: { xs: 3, md: 8 },
//         background: '#0a0a0a',
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Background label */}
//       <Typography
//         sx={{
//           position: 'absolute',
//           right: 1219,
//           top: '50%',
//           transform: 'translateY(-50%) rotate(90deg)',
//           fontFamily: "'Rajdhani', sans-serif",
//           fontSize: { xs: '3rem', md: '5rem' },
//           fontWeight: 800,
//           color: 'rgba(255,255,255,0.03)',
//           letterSpacing: '0.3em',
//           userSelect: 'none',
//           whiteSpace: 'nowrap',
//         }}
//       >
//         ABOUT ME
//       </Typography>

//       {/* Decorative dots */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 80,
//           left: { xs: 20, md: 60 },
//           display: 'grid',
//           gridTemplateColumns: 'repeat(8, 1fr)',
//           gap: 1,
//           opacity: 0.15,
//         }}
//       >
//         {Array.from({ length: 48 }).map((_, i) => (
//           <Box
//             key={i}
//             sx={{ width: 3, height: 3, borderRadius: '50%', background: '#ff2d55' }}
//           />
//         ))}
//       </Box>

//       <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
//         {/* Left: Photo */}
//         <Grid item xs={12} md={4}>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               opacity: visible ? 1 : 0,
//               transform: visible ? 'translateX(0)' : 'translateX(-40px)',
//               transition: 'all 0.8s ease',
//             }}
//           >
//             <Box sx={{ position: 'relative' }}>
//               {/* Outer decorative ring */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   inset: -12,
//                   borderRadius: '50%',
//                   border: '2px dashed rgba(255,45,85,0.3)',
//                   animation: 'spin 20s linear infinite',
//                   '@keyframes spin': {
//                     '0%': { transform: 'rotate(0deg)' },
//                     '100%': { transform: 'rotate(360deg)' },
//                   },
//                 }}
//               />
//               {/* Photo circle */}
//               <Box
//                 sx={{
//                   width: { xs: 220, md: 260 },
//                   height: { xs: 220, md: 260 },
//                   borderRadius: '50%',
//                   background: 'linear-gradient(135deg, #1a1a1a, #2a0a10)',
//                   border: '3px solid rgba(255,45,85,0.5)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   overflow: 'hidden',
//                   boxShadow: '0 0 40px rgba(255,45,85,0.2)',
//                   position: 'relative',
//                 }}
//               >
//                 {/* Placeholder for profile photo */}
//                 <Box
//                   sx={{
//                     width: '100%',
//                     height: '100%',
//                     background: 'linear-gradient(135deg, #1c0a10 0%, #2d0015 50%, #1a1a1a 100%)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexDirection: 'column',
//                     gap: 1,
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontFamily: "'Rajdhani', sans-serif",
//                       fontSize: '4rem',
//                       fontWeight: 700,
//                       color: '#ff2d55',
//                       lineHeight: 1,
//                     }}
//                   >
//                     VB
//                   </Typography>
//                   <Typography sx={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
//                     PHOTO
//                   </Typography>
//                 </Box>
//               </Box>

//               {/* Badge */}
//               <Box
//                 sx={{
//                   position: 'absolute',
//                   bottom: 10,
//                   right: -10,
//                   background: 'linear-gradient(135deg, #ff2d55, #c0001e)',
//                   borderRadius: '30px',
//                   px: 2,
//                   py: 0.7,
//                   boxShadow: '0 4px 20px rgba(255,45,85,0.4)',
//                 }}
//               >
//                 <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
//                   3+ Yrs Exp
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Grid>

//         {/* Right: Content */}
//         <Grid item xs={12} md={8}>
//           <Box
//             sx={{
//               opacity: visible ? 1 : 0,
//               transform: visible ? 'translateX(0)' : 'translateX(40px)',
//               transition: 'all 0.8s ease 0.2s',
//             }}
//           >
//             {/* Section label */}
//             <Typography
//               sx={{
//                 fontFamily: "'Space Mono', monospace",
//                 fontSize: '0.75rem',
//                 color: '#ff2d55',
//                 letterSpacing: '0.3em',
//                 textTransform: 'uppercase',
//                 mb: 1,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//               }}
//             >
//               <Box component="span" sx={{ width: 25, height: 1, background: '#ff2d55', display: 'inline-block' }} />
//               Get to Know
//             </Typography>

//             <Typography
//               variant="h2"
//               sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 3, color: '#ffffff' }}
//             >
//               Bit about{' '}
//               <Box component="span" sx={{ color: '#ff2d55' }}>me</Box>
//             </Typography>

//             <Typography
//               sx={{
//                 color: '#999999',
//                 lineHeight: 1.8,
//                 fontSize: '0.95rem',
//                 mb: 4,
//                 maxWidth: 580,
//               }}
//             >
//               Passionate frontend developer with over 3 years of expertise in React.js and JavaScript,
//               creating scalable, responsive web applications. I work closely with cross-functional teams
//               — product managers, designers, and backend engineers — to convert intricate UI/UX designs
//               into high-quality, maintainable code. Strong proficiency in RESTful API integration, state
//               management (Redux/Context API), and performance optimization.
//             </Typography>

//             {/* Info Grid */}
//             <Grid container spacing={2} sx={{ mb: 4 }}>
//               {infoItems.map((item) => (
//                 <Grid item xs={12} sm={6} key={item.label}>
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 1.5,
//                       p: 1.5,
//                       background: 'rgba(255,255,255,0.02)',
//                       borderRadius: '8px',
//                       border: '1px solid rgba(255,255,255,0.05)',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         borderColor: 'rgba(255,45,85,0.3)',
//                         background: 'rgba(255,45,85,0.04)',
//                       },
//                     }}
//                   >
//                     <Box sx={{ color: '#ff2d55' }}>{item.icon}</Box>
//                     <Box>
//                       <Typography sx={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
//                         {item.label}
//                       </Typography>
//                       <Typography sx={{ color: '#ddd', fontSize: '0.85rem', fontWeight: 500 }}>
//                         {item.value}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </Grid>
//               ))}
//             </Grid>

//             {/* Tech chips */}
//             <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
//               {['React.js', 'TypeScript', 'Redux', 'Context API', 'Node.js', 'C# / .NET'].map((tech) => (
//                 <Chip
//                   key={tech}
//                   label={tech}
//                   size="small"
//                   sx={{
//                     background: 'rgba(255,45,85,0.08)',
//                     color: '#ff6b81',
//                     border: '1px solid rgba(255,45,85,0.2)',
//                     fontFamily: "'Space Mono', monospace",
//                     fontSize: '0.68rem',
//                     '&:hover': { background: 'rgba(255,45,85,0.15)' },
//                   }}
//                 />
//               ))}
//             </Box>

//             {/* Buttons */}
//             <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 startIcon={<DownloadIcon />}
//                 href="/Vamsi_Resume_2026.pdf"
//                 download
//                 sx={{ px: 3.5 }}
//               >
//                 Download CV
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="primary"
//                 size="large"
//                 onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
//                 sx={{ px: 3.5 }}
//               >
//                 Know More
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }




import React, { useRef, useEffect, useState } from 'react';
import {
  Box, Typography, Button, Grid, Chip,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';

const infoItems = [
  { icon: <PersonIcon sx={{ fontSize: 16 }} />, label: 'Name',     value: 'Vamsi Batchu' },
  { icon: <EmailIcon  sx={{ fontSize: 16 }} />, label: 'Email',    value: 'vamsibatchu12@gmail.com' },
  { icon: <LocationOnIcon sx={{ fontSize: 16 }} />, label: 'Location', value: 'Chennai, India' },
  { icon: <SchoolIcon sx={{ fontSize: 16 }} />, label: 'Degree',   value: 'M.TECH – VIT' },
];

export default function About() {
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
      id="about"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background label */}
      <Typography
        sx={{
          position: 'absolute', right: 1290, top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 800,
          color: 'rgba(255,255,255,0.03)', letterSpacing: '0.3em',
          userSelect: 'none', whiteSpace: 'nowrap',
        }}
      >
        ABOUT ME
      </Typography>

      {/* Decorative dot grid */}
      <Box
        sx={{
          position: 'absolute', top: 80, left: { xs: 20, md: 60 },
          display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 1, opacity: 0.15,
        }}
      >
        {Array.from({ length: 48 }).map((_, i) => (
          <Box key={i} sx={{ width: 3, height: 3, borderRadius: '50%', background: '#ff2d55' }} />
        ))}
      </Box>

      <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

        {/* ── Left: Profile photo ── */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex', justifyContent: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s ease',
            }}
          >
            <Box sx={{ position: 'relative' }}>

              {/* Spinning dashed orbit */}
              <Box
                sx={{
                  position: 'absolute', inset: -14, borderRadius: '50%',
                  border: '2px dashed rgba(255,45,85,0.3)',
                  animation: 'orbitSpin 20s linear infinite',
                  '@keyframes orbitSpin': {
                    '0%':   { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                  },
                }}
              />

              {/* Photo circle */}
              <Box
                sx={{
                  width:  { xs: 220, md: 260 },
                  height: { xs: 220, md: 260 },
                  borderRadius: '50%',
                  border: '3px solid rgba(255,45,85,0.5)',
                  overflow: 'hidden',
                  boxShadow: '0 0 50px rgba(255,45,85,0.2), 0 0 100px rgba(255,45,85,0.08)',
                  position: 'relative',
                  background: '#111',
                }}
              >
                {/*
                  ─── HOW TO USE ────────────────────────────────────────────
                  Place your profile photo at:  public/profile.jpg
                  Then this <img> will render it automatically.
                  ────────────────────────────────────────────────────────── */}
                <Box
                  component="img"
                  src="/profile.jpg"
                  alt="Vamsi Batchu"
                  onError={(e) => {
                    // Fallback to initials if image missing
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.04)' },
                  }}
                />

                {/* Fallback initials (hidden unless image fails to load) */}
                <Box
                  sx={{
                    display: 'none',
                    position: 'absolute', inset: 0,
                    alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: 0.5,
                    background: 'linear-gradient(135deg, #1c0a10 0%, #2d0015 50%, #1a1a1a 100%)',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Rajdhani', sans-serif", fontSize: '4rem',
                      fontWeight: 700, color: '#ff2d55', lineHeight: 1,
                    }}
                  >
                    VB
                  </Typography>
                  <Typography sx={{ color: '#555', fontSize: '0.65rem', letterSpacing: '0.2em' }}>
                    ADD PHOTO
                  </Typography>
                </Box>

                {/* Subtle bottom gradient overlay */}
                <Box
                  sx={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
                    background: 'linear-gradient(to top, rgba(10,10,10,0.55), transparent)',
                    pointerEvents: 'none',
                  }}
                />
              </Box>

              {/* Experience badge */}
              <Box
                sx={{
                  position: 'absolute', bottom: 12, right: -12,
                  background: 'linear-gradient(135deg, #ff2d55, #c0001e)',
                  borderRadius: '30px', px: 2, py: 0.7,
                  boxShadow: '0 4px 20px rgba(255,45,85,0.45)',
                }}
              >
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
                  3+ Yrs Exp
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* ── Right: Content ── */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(40px)',
              transition: 'all 0.8s ease 0.2s',
            }}
          >
            <Typography
              sx={{
                fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: '#ff2d55',
                letterSpacing: '0.3em', textTransform: 'uppercase', mb: 1,
                display: 'flex', alignItems: 'center', gap: 1,
              }}
            >
              <Box component="span" sx={{ width: 25, height: 1, background: '#ff2d55', display: 'inline-block' }} />
              Get to Know
            </Typography>

            <Typography variant="h2" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, mb: 3 }}>
              Bit about{' '}
              <Box component="span" sx={{ color: '#ff2d55' }}>me</Box>
            </Typography>

            <Typography sx={{ color: '#999999', lineHeight: 1.8, fontSize: '0.95rem', mb: 4, maxWidth: 580 }}>
              Passionate frontend developer with over 3 years of expertise in React.js and JavaScript,
              creating scalable, responsive web applications. I work closely with cross-functional teams
              — product managers, designers, and backend engineers — to convert intricate UI/UX designs
              into high-quality, maintainable code. Strong proficiency in RESTful API integration, state
              management (Redux/Context API), and performance optimization.
            </Typography>

            {/* Info grid */}
            <Grid container spacing={2} sx={{ mb: 4 }}>
              {infoItems.map((item) => (
                <Grid item xs={12} sm={6} key={item.label}>
                  <Box
                    sx={{
                      display: 'flex', alignItems: 'center', gap: 1.5, p: 1.5,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px',
                      transition: 'all 0.3s ease',
                      '&:hover': { borderColor: 'rgba(255,45,85,0.3)', background: 'rgba(255,45,85,0.04)' },
                    }}
                  >
                    <Box sx={{ color: '#ff2d55' }}>{item.icon}</Box>
                    <Box>
                      <Typography sx={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                        {item.label}
                      </Typography>
                      <Typography sx={{ color: '#ddd', fontSize: '0.85rem', fontWeight: 500 }}>
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Tech chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {['React.js', 'TypeScript', 'Redux', 'Context API', 'C# / .NET', 'Angular'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    background: 'rgba(255,45,85,0.08)', color: '#ff6b81',
                    border: '1px solid rgba(255,45,85,0.2)',
                    fontFamily: "'Space Mono', monospace", fontSize: '0.68rem',
                    '&:hover': { background: 'rgba(255,45,85,0.15)' },
                  }}
                />
              ))}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained" color="primary" size="large"
                startIcon={<DownloadIcon />}
                href="/Vamsi_Resume_2026.pdf"
                download
                sx={{ px: 3.5 }}
              >
                Download CV
              </Button>
              <Button
                variant="outlined" color="primary" size="large"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                sx={{ px: 3.5 }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}