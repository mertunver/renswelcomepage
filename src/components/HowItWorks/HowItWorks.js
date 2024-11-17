import React from 'react';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import MemoryIcon from '@mui/icons-material/Memory';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    numberIcon: LooksOneIcon,
    title: 'Abone Ol',
    description: 'İhtiyacınıza uygun planı seçin, 24 saat içinde platformumuza erişin ve atık yönetimi veya karbon emisyon takibinizi başlatın.',
    color: '#DFFFBF',
    icon: ReceiptIcon
  },
  {
    number: '02',
    numberIcon: LooksTwoIcon,
    title: 'Talep ve Teklif Al',
    description: 'Atıklarınızı ya da sürdürülebilir ürünlerinizi hızlıca listeleyin. Pazar yerimizdeki teklifleri anında inceleyin ve en iyi fırsatları yakalayın.',
    color: '#E0DFFB',
    icon: RequestQuoteIcon
  },
  {
    number: '03',
    numberIcon: Looks3Icon,
    title: 'Süreci Yönet',
    description: 'Karbon ayak izi verilerinizi raporlayın, atık ticaretinizi yönetin ve çevresel hedeflerinize emin adımlarla ilerleyin. Her adımda yanınızdayız.',
    color: '#C2E8FF',
    icon: MemoryIcon
  }
];

const HowItWorks = () => {
  return (
    <Box className="how-it-works-container">
      <Container maxWidth="xl">
        <Box className="white-container">
          <Box className="title-container">
            <AutoAwesomeIcon className="auto-awesome-icon" />
            <Typography variant="h2" component="h2" className="main-title">
              RENS <span className="cursive">nasıl kullanılır?</span>
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {steps.map((step, index) => (
              <Grid item xs={12} md={4} key={step.number}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Box className="step-card" style={{ backgroundColor: step.color }}>
                    <Box className="step-content">
                      <Box className="step-icon-container">
                        <step.icon className="step-icon" />
                      </Box>
                      <Box className="number-container">
                        <step.numberIcon className="number-icon" />
                        <Divider orientation="horizontal" className="number-divider" />
                      </Box>
                      <Typography variant="h5" component="h3" className="step-title">
                        {step.title}
                      </Typography>
                      <Typography variant="body1" className="step-description">
                        {step.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;