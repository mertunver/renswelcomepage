import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './MembershipBenefits.css';

const benefits = [
  {
    iconSrc: "https://cdn.lordicon.com/vvqcrgre.json",
    trigger: "hover",
    title: 'Kapsamlı Sürdürülebilirlik Paneli',
    description: 'Karbon emisyonlarınız, atık verileriniz ve sürdürülebilir malzeme kullanımınızı tek bir kullanımı kolay panelde görün. Gerçek zamanlı olarak ilerlemenizi izleyin ve stratejilerinizi gerektiğinde ayarlayın.'
  },
  {
    iconSrc: "https://cdn.lordicon.com/zruuduya.json",
    trigger: "loop",
    colors: "primary:#c7c116,secondary:#109121",
    title: 'Atık & Sürdürülebilir Malzeme Pazarı',
    description: 'Dijital bir pazar yerinden atık ticareti yapın ve sürdürülebilir malzemelere ulaşın. Tedarikçilerle bağlantı kurun, atık bertarafını yönetin ve atıkları değerli kaynaklara dönüştürün.'
  },
  {
    iconSrc: "https://cdn.lordicon.com/fgukiwzj.json",
    trigger: "loop",
    colors: "primary:#3a3347,secondary:#109121",
    title: 'Otomatik Karbon Raporlama',
    description: 'ISO standartlarına dayalı ayrıntılı, özelleştirilebilir karbon raporları oluşturun. Emisyon takibini otomatikleştirin ve uyumluluk ve şeffaflık için raporlarınızı sorunsuz bir şekilde paylaşın.'
  },
  {
    iconSrc: "https://cdn.lordicon.com/fzgrewpn.json",
    trigger: "hover",
    title: 'Atık & Karbon Yönetim Araçları',
    description: 'Karbon ayak izinizi ve atık akışlarınızı verimli bir şekilde yönetmek için gerçek zamanlı araçlar kullanın. RENS, çevresel etkinizi hassasiyetle ölçmenize, takip etmenize ve azaltmanıza yardımcı olur.'
  },
  {
    iconSrc: "https://cdn.lordicon.com/hmqggwrl.json",
    trigger: "hover",
    title: 'Esnek Abonelik Modeli',
    description: 'Şirketinizin ihtiyaçlarına uygun planı seçin, uzun vadeli taahhütler olmadan. RENSin tüm özelliklerine esnek bir abonelik ile erişin, işiniz büyüdükçe kolayca ölçeklendirin.'
  },
  {
    iconSrc: "https://cdn.lordicon.com/jtiihjyw.json",
    trigger: "hover",
    title: 'Sabit Aylık Ücret',
    description: 'Her ay basit ve öngörülebilir bir ücret ödeyin, gizli maliyet yok. İhtiyacınız olan tüm araçlar ve raporlara sınırsız erişim sağlayın, toplam maliyet şeffaflığını garanti edin.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const MembershipBenefits = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      iconRefs.current.forEach((icon, index) => {
        if (icon && benefits[index].trigger === "loop") {
          // For loop animations, we don't need to do anything extra
          // The 'loop' trigger will handle continuous animation
        } else if (icon && benefits[index].trigger === "hover") {
          icon.addEventListener('mouseenter', () => {
            icon.setAttribute('state', 'hover');
          });
          icon.addEventListener('mouseleave', () => {
            icon.removeAttribute('state');
          });
        }
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="membership-benefits">
      <h2 className="title">
        RENS <span className="cursive">nasıl katkı sağlar?</span>
      </h2>
      <p className="subtitle">RENS ile dijital sürdürülebilirlik yolculuğuna adım atın. Karbon ve atık yönetimi çözümlerimizle, işiniz için gerçek zamanlı analizler, kapsamlı raporlar ve sürdürülebilir büyümeye yönelik stratejiler sunuyoruz.</p>
      
      <motion.div 
        className="benefits-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div key={index} className="benefit-item" variants={itemVariants}>
            <div className="icon-container">
              <lord-icon
                ref={el => iconRefs.current[index] = el}
                src={benefit.iconSrc}
                trigger={benefit.trigger}
                colors={benefit.colors}
                style={{width:"80px",height:"80px"}}>
              </lord-icon>
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MembershipBenefits;