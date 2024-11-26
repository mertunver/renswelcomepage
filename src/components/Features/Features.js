import React, { useEffect, useRef, useState } from 'react';
import './Features.css';

const featureData = [
  {
    logo: "/images/rens.co2logo.png",
    description: "Rens.CO2, işletmenizin karbon yönetimini dijitalleştiren ve modern süreçlerle entegre eden yenilikçi bir platformdur. Bu modül, karbon ayak izinizi ayrıntılı bir şekilde ölçerek ISO 14064-1 standartlarına uygun raporlar üretir. Karbon emisyonlarınızı dijital olarak izleyip yönetirken, çevresel performansınızı sürekli geliştirmek için gerekli tüm araçları sunar.\n\nDijital dönüşüm sürecinde karbon yönetimini sadeleştirir, otomatik raporlama sistemleriyle manuel süreçleri ortadan kaldırır. Rens.CO2, işletmelerin karbon ayak izlerini daha verimli bir şekilde izleyip azaltmalarına olanak tanır. Verilerinizi tek bir dijital platformda toplayarak, sürdürülebilirlik hedeflerinize ulaşmanızı hızlandırır.\n\nAyrıca, Rens.CO2 ile dijital analiz araçları sayesinde gelecekteki karbon emisyonlarınızı öngörebilir, emisyon azaltım stratejilerinizi oluşturabilirsiniz. Bu modül, sürdürülebilirlik hedeflerinize dijital bir perspektif kazandırarak işletmenizin karbon yönetimi yolculuğunu kolaylaştırır.",
    buttonColor: "green",
    featureImages:  ["/images/co2_1.png", "/images/co2_2.png", "/images/co2_3.png", "/images/co2_4.png"]
  },
  {
    logo: "/images/rensmarketlogo.png",
    description: "Rens Market, sürdürülebilir hammadde ve atık ticaretini dijitalleştiren ve bu sayede karbon emisyonlarını azaltan güçlü bir platformdur. Özellikle Scope 3 emisyonlarını yönetme ve azaltma konusunda büyük avantajlar sağlar. Düşük emisyonlu ve ikincil hammaddelerle ticaret yaparak, döngüsel ekonomiye katkıda bulunurken, karbon ayak izinizi minimize edebilirsiniz.\n\nBu dijital pazar yeri, işletmelerin sürdürülebilir malzemelere hızlı ve kolay bir şekilde erişim sağlamasına olanak tanır. Rens Market'in sunduğu dijital çözümler sayesinde, sürdürülebilir tedarik zincirini güçlendirebilir ve maliyetlerinizi optimize edebilirsiniz. Dijital ticaret süreçleri, hammadde tedariğini hızlandırırken, karbon azaltımı konusunda önemli bir adım atmanızı sağlar.\n\nRens Market ile atıklarınızı gelir kaynağına çevirirken, sürdürülebilir hammaddeye ulaşarak Scope 3 emisyonlarını önemli ölçüde azaltabilirsiniz. Dijitalleşen atık yönetimi ve ticaret süreçleri, çevreye duyarlı bir iş modeli geliştirmenize katkı sağlar.",
    buttonColor: "purple",
    featureImages: ["/images/market_1.png", "/images/market_2.png", "/images/market_3.png", "/images/market_4.png"]
  },
  {
    logo: "/images/rens_exchange_logo.png",
    description: "Rens Exchange, dijital dönüşüm sürecinde atık ve karbon kredisi fiyatlarını takip etmenin en modern yolunu sunar. Piyasalardaki atık ve karbon fiyatlarını gerçek zamanlı olarak izleyerek, ticari kararlarınızı hızla alabilir ve sürdürülebilirlik stratejinizi bu verilere göre optimize edebilirsiniz. Dijital takip sistemleri sayesinde piyasa dalgalanmalarına proaktif yanıtlar verebilirsiniz.\n\nYakın zamanda Rens Exchange platformuna karbon kredisi piyasası da entegre edilecektir. Bu sayede, karbon kredisi ticareti yaparak hem çevresel yükümlülüklerinizi yerine getirebilir hem de ticari fırsatlar yaratabilirsiniz. Dijitalleşen karbon kredisi piyasası, işletmenizin sürdürülebilirlik stratejisine önemli bir katkı sağlar.\n\nRens Exchange'in sunduğu piyasa analiz araçları, karbon ve atık ticaretinde daha bilinçli ve verimli kararlar almanıza yardımcı olur. Dijital platformun sağladığı fiyat trend analizleri, sürdürülebilirlik yatırımlarınızı doğru zamanlama ile yapmanıza olanak tanır.",
    buttonColor: "blue",
    featureImages:  ["/images/exchange_1.png", "/images/exchange_2.png", "/images/exchange_3.png", "/images/exchange_4.png"]
  }
];

const FeatureCard = ({ logo, description, buttonColor, images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`feature-card ${isVisible ? 'visible' : ''}`}>
      <div className="feature-content">
        <img src={logo} alt="Feature logo" className="feature-logo" />
        <p className="feature-description">
          {description.split('\n\n').map((paragraph, index) => (
            <React.Fragment key={index}>
              {paragraph}
              {index < description.split('\n\n').length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </p>
        <button className={`feature-cta ${buttonColor}`}>Çok yakında!</button>
      </div>
      <div className="feature-images">
        {images.map((image, index) => (
          <div key={index} className="feature-image-wrapper">
            <img src={image} alt={`Feature ${index + 1}`} className="feature-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">RENS <span>modülleri</span></h2>
      <div className="features-container">
        {featureData.map((feature, index) => (
          <FeatureCard 
            key={index} 
            {...feature} 
            images={feature.featureImages}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;