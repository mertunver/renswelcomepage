import React from 'react';
import { CheckIcon } from 'lucide-react';
import './PricingSection.css';

const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "Kısa süreliğine ücretsiz!",
      description: "Beta sürümüne erişim için bizimle iletişime geçin.",
      features: [
        "RENS Market'e erişim",
        "Kullanıcı dostu dashboard üzerinden anlık veri takibi",
        "Rens.CO2 modülü ile karbon yönetimi",
        "Atık ve sürdürülebilir hammadde envanter yönetimi",
        "ISO 14064 standardına uygun, AI entegrasyonlu anlık raporlama"
      ],
      services: ["Karbon Ayak İzi", "Atık Yönetimi", "İkincil Hammadde", "Veri Analizi"],
      isPopular: true,
      isSecondRow: false
    },
    {
      title: "Flexium",
      price: "Çok yakında!",
      description: "Beta sürümün ek hizmet paketlerine erişim ve çoklu tesis yönetimi modülleri için bizi takip edin.",
      features: [
        "Tüm Basic Plan özelliklerine ek olarak:",
        "Rens.CO2 üzerinde genişletilmiş karbon raporlama ve analiz paketleri (4 kullanım - 2 tesis)",
        "Kapsamlı veri görselleştirme ve rapor özelleştirme seçenekleri",
        "Karbon ve atık yönetimi danışmanlığı için sınırlı uzman desteği",
        "Gelişmiş kullanıcı yönetimi"
      ],
      services: ["Karbon Raporlama", "Veri Görselleştirme", "Danışmanlık", "Çoklu Tesis Yönetimi"],
      isPopular: false,
      isSecondRow: false
    },
    {
      title: "Premium",
      price: "Çok yakında!",
      description: "Büyük ölçekli firmalara özgün abonelik yapımız için bizimle iletişime geçebilirsiniz.",
      features: [
        "Tüm Flexium Plan özelliklerine ek olarak:",
        "Rens.CO2 üzerinde sınırsız kullanım",
        "ERP/SAP entegrasyonu ile tam uyumluluk",
        "Atık ve karbon yönetimi süreçlerine özel olarak atanmış bir müşteri danışmanı",
        "Ek işlevsellikler ve özel API entegrasyonları"
      ],
      services: ["ERP Entegrasyonu", "Özel API", "Tam Danışmanlık", "Sınırsız Kullanım"],
      isPopular: false,
      isSecondRow: false
    },
    {
      title: "Tesis Basic",
      price: "Kısa süreliğine ücretsiz!",
      description: "Geri dönüşüm ve bertaraf tesisleri için özel beta sürümüne erişim.",
      features: [
        "RENS Market'e özel erişim",
        "Tesis bazlı dashboard ve veri takibi",
        "Atık alım ve işleme süreçleri yönetimi",
        "Temel raporlama ve analiz araçları",
        "Sınırlı sayıda kullanıcı hesabı"
      ],
      services: ["Atık Takibi", "Tesis Yönetimi", "Temel Raporlama", "RENS Market Erişimi"],
      isPopular: true,
      isSecondRow: true
    },
    {
      title: "Tesis Pro",
      price: "Çok yakında!",
      description: "Gelişmiş tesis yönetimi ve analiz araçları için hazırlanın.",
      features: [
        "Tüm Tesis Basic özelliklerine ek olarak:",
        "Gelişmiş atık işleme ve geri dönüşüm süreç optimizasyonu",
        "Detaylı performans analizi ve raporlama",
        "Çoklu tesis yönetimi ve karşılaştırma",
        "Özelleştirilebilir dashboard ve raporlar"
      ],
      services: ["Süreç Optimizasyonu", "Detaylı Analiz", "Çoklu Tesis Yönetimi", "Özel Raporlama"],
      isPopular: false,
      isSecondRow: true
    },
    {
      title: "Tesis Enterprise",
      price: "Çok yakında!",
      description: "Büyük ölçekli tesisler ve tesis zincirleri için özel çözümler.",
      features: [
        "Tüm Tesis Pro özelliklerine ek olarak:",
        "Sınırsız tesis ve kullanıcı yönetimi",
        "Tam entegre ERP ve IoT cihaz desteği",
        "Yapay zeka destekli tahminleme ve optimizasyon",
        "7/24 özel destek ve danışmanlık hizmetleri"
      ],
      services: ["AI Optimizasyonu", "IoT Entegrasyonu", "Özel Destek", "Tam Entegrasyon"],
      isPopular: false,
      isSecondRow: true
    }
  ];

  const firstRowPlans = pricingPlans.filter(plan => !plan.isSecondRow);
  const secondRowPlans = pricingPlans.filter(plan => plan.isSecondRow);

  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Paketlerimizi <span>inceleyebilirsiniz</span></h2>
      <p className="pricing-subtitle">KOBİ veya büyük ölçekli firmaların ihtiyaçlarına ve bütçelerine uygun tüm seçeneklerimizi inceleyebilirsiniz.</p>
      
      <div className="pricing-row">
        <h3 className="row-title">Atık üreten herkese uygun paketler</h3>
        <div className="pricing-grid">
          {firstRowPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isFirstCard={index === 0} />
          ))}
        </div>
      </div>

      <div className="pricing-row">
        <h3 className="row-title">Geri dönüşüm ve bertaraf tesisi paketleri</h3>
        <div className="pricing-grid">
          {secondRowPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isFirstCard={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, isFirstCard }) => (
  <div className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
    {plan.isPopular && <span className="popular-badge">Popüler</span>}
    <h3 className="plan-title">{plan.title}</h3>
    <p className="plan-price">{plan.price}</p>
    <p className="plan-description">{plan.description}</p>
    <ul className="feature-list">
      {plan.features.map((feature, featureIndex) => (
        <li key={featureIndex}>
          <CheckIcon className="check-icon" />
          {feature}
        </li>
      ))}
    </ul>
    <button className="primary-button">
      {isFirstCard ? "Demo Talebi" : "Çok Yakında"}
    </button>
    <div className="service-tags">
      {plan.services.map((service, serviceIndex) => (
        <span key={serviceIndex} className="service-tag">{service}</span>
      ))}
    </div>
  </div>
);

export default PricingSection;