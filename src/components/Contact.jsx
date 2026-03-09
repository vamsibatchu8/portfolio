import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Button, Grid, TextField, Alert, Snackbar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'vamsibatchu12@gmail.com',
    href: 'mailto:vamsibatchu12@gmail.com',
    color: '#ff2d55',
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+91 8886987618',
    href: 'tel:+918886987618',
    color: '#ff6b81',
  },
  {
    icon: <LocationOnIcon />,
    label: 'Location',
    value: 'Chennai, India',
    href: null,
    color: '#ff9a9e',
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'vamsikrishna-batchu',
    href: 'https://www.linkedin.com/in/vamsikrishna-batchu/',
    color: '#0077b5',
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [snack, setSnack] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSnack(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      background: 'rgba(255,255,255,0.03)',
      borderRadius: '8px',
      '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
      '&:hover fieldset': { borderColor: 'rgba(255,45,85,0.4)' },
      '&.Mui-focused fieldset': { borderColor: '#ff2d55' },
    },
    '& .MuiInputLabel-root': { color: '#666' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#ff2d55' },
    '& .MuiOutlinedInput-input': { color: '#fff' },
  };

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 3, md: 8 },
        background: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* CTA Banner */}
      <Box
        sx={{
          textAlign: 'center',
          mb: 12,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease',
        }}
      >
        <Typography
          sx={{
            color: '#555',
            fontSize: '0.9rem',
            mb: 1,
            letterSpacing: '0.1em',
          }}
        >
          Want to start a project?
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '5rem', md: '7rem' },
            background: 'linear-gradient(135deg, #ff2d55 0%, #ff6b81 50%, #ff9a9e 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 0.9,
            mb: 4,
          }}
        >
          Let's Talk
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            borderRadius: '50px',
            px: 5,
            py: 1.5,
            borderWidth: 2,
            '&:hover': { borderWidth: 2 },
          }}
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </Button>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          width: '100%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,45,85,0.3), transparent)',
          mb: 10,
        }}
      />

      {/* Contact Form + Info */}
      <Box id="contact-form">
        <Box
          sx={{
            mb: 6,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.3s',
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
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Send a{' '}
            <Box component="span" sx={{ color: '#ff2d55' }}>Message</Box>
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.7s ease 0.4s',
              }}
            >
              <Typography sx={{ color: '#999', lineHeight: 1.8, fontSize: '0.9rem', mb: 4 }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part
                of your visions. Feel free to reach out through any of the channels below.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactInfo.map((info) => (
                  <Box
                    key={info.label}
                    component={info.href ? 'a' : 'div'}
                    href={info.href || undefined}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: info.href ? 'pointer' : 'default',
                      '&:hover': info.href ? {
                        borderColor: `${info.color}40`,
                        background: `${info.color}08`,
                        transform: 'translateX(6px)',
                      } : {},
                    }}
                  >
                    <Box
                      sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '10px',
                        background: `${info.color}15`,
                        border: `1px solid ${info.color}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: info.color,
                        flexShrink: 0,
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography sx={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                        {info.label}
                      </Typography>
                      <Typography sx={{ color: '#ddd', fontSize: '0.85rem' }}>
                        {info.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(30px)',
                transition: 'all 0.7s ease 0.5s',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    sx={inputSx}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Your Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                sx={inputSx}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={5}
                value={form.message}
                onChange={handleChange}
                sx={inputSx}
              />

              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                onClick={handleSubmit}
                sx={{ alignSelf: 'flex-start', px: 4, py: 1.5 }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Snackbar
        open={snack}
        autoHideDuration={4000}
        onClose={() => setSnack(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" onClose={() => setSnack(false)} sx={{ background: '#1a3a1a' }}>
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
