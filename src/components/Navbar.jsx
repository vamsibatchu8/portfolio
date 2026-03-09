import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10,10,10,0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,45,85,0.15)' : 'none',
          transition: 'all 0.3s ease',
          zIndex: 1200,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 }, py: 1 }}>
          {/* Logo */}
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '2px solid #ff2d55',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,45,85,0.1)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(255,45,85,0.25)',
                boxShadow: '0 0 20px rgba(255,45,85,0.4)',
              },
            }}
            onClick={() => handleNavClick('#home')}
          >
            <Typography
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: '#ff2d55',
              }}
            >
              VB
            </Typography>
          </Box>

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  sx={{
                    color: activeSection === link.href.replace('#', '') ? '#ff2d55' : '#cccccc',
                    fontWeight: 500,
                    fontSize: '0.85rem',
                    px: 1.5,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 4,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: activeSection === link.href.replace('#', '') ? '20px' : '0px',
                      height: '2px',
                      background: '#ff2d55',
                      transition: 'width 0.3s ease',
                      borderRadius: '2px',
                    },
                    '&:hover': { color: '#ff2d55' },
                    '&:hover::after': { width: '20px' },
                  }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Download CV Button */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {!isMobile && (
              <Button
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
                href="/Vamsi_Resume_2026.pdf"
                download
                sx={{ px: 2.5, py: 0.8, fontSize: '0.8rem' }}
              >
                Download CV
              </Button>
            )}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ color: '#ff2d55' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            background: '#0d0d0d',
            width: 260,
            borderLeft: '1px solid rgba(255,45,85,0.2)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: '#ff2d55' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.href)}
                sx={{
                  color: '#cccccc',
                  '&:hover': { color: '#ff2d55', background: 'rgba(255,45,85,0.08)' },
                  px: 3,
                  py: 1.5,
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: 600,
                    fontSize: '1.1rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ px: 3, pt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<DownloadIcon />}
              href="/Vamsi_Resume_2026.pdf"
              download
            >
              Download CV
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
