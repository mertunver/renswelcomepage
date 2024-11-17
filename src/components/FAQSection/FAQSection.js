import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import './FAQSection.css';

const faqs = [
  {
    question: "RENS nedir ve ne tür hizmetler sunar?",
    answer: "RENS, karbon ve atık yönetimini dijitalleştiren bir platformdur. Atık ve sürdürülebilir malzeme ticareti için bir pazar yeri sunar, ayrıca karbon ayak izi hesaplama ve raporlama hizmetleri sağlar. Endüstri ve geri dönüşüm tesisleri için optimize edilmiş çözümler sunar."
  },
  {
    question: "RENS.CO2 nedir ve nasıl çalışır?",
    answer: "RENS.CO2, şirketlerin karbon ayak izlerini hesaplamalarını ve bu verileri raporlamalarını sağlayan bir araçtır. ISO 14064-1 standartlarına uygun olarak karbon emisyonlarını izler ve analiz eder. Kullanıcılar, tesislerine göre karbon ayak izlerini ölçüp raporlayabilirler."
  },
  {
    question: "RENS'in sunduğu abonelik paketleri nelerdir?",
    answer: "RENS, üç farklı abonelik planı sunar: Basic Plan, Flexium Plan, ve Premium Plan. Her plan, farklı özellikler ve hizmet seviyeleriyle endüstriler ve geri dönüşüm tesisleri için özelleştirilmiştir."
  },
  {
    question: "RENS Marketplace nasıl kullanılır?",
    answer: "RENS Marketplace, şirketlerin atıklarını ticaret yapabileceği ve sürdürülebilir malzemelere erişim sağlayabileceği bir dijital platformdur. Kullanıcılar atıklarını satabilir veya sürdürülebilir malzeme tedarik edebilirler."
  },
  {
    question: "RENS ile karbon ayak izi nasıl hesaplanır?",
    answer: "RENS.CO2 aracı ile karbon ayak izinizi hesaplamak için platformda verilerinizi girmeniz yeterlidir. RENS, emisyon kaynaklarınıza göre hesaplamalar yapar ve size raporlar sunar."
  },
  {
    question: "RENS.CO2 ile kaç tesisin verilerini takip edebilirim?",
    answer: "Seçtiğiniz plana bağlı olarak, Basic Plan'da bir tesis, Flexium Plan'da iki tesis, Premium Plan'da ise dört tesisin verilerini takip edebilirsiniz."
  },
  {
    question: "Atık yönetimi stratejileri nasıl geliştiriliyor?",
    answer: "RENS, atık yönetimi süreçlerinizi optimize etmek için bir veri tabanı sunar. Bu sayede atık akışınızı analiz edebilir, geri kazanım oranlarını artırabilirsiniz."
  },
  {
    question: "RENS ile ERP/SAP entegrasyonu yapılabilir mi?",
    answer: "Evet, ERP ve SAP entegrasyonu mümkündür. Bu entegrasyon sayesinde şirketler, mevcut sistemlerine RENS'i entegre ederek karbon ve atık yönetimi süreçlerini merkezileştirebilirler."
  },
  {
    question: "RENS ile raporlar nasıl özelleştirilir?",
    answer: "Flexium ve Premium Plan kullanıcıları, raporlarını özelleştirebilirler. Geniş raporlama seçenekleri sunulmakta ve bu raporlar firmanızın ihtiyaçlarına göre düzenlenebilmektedir."
  },
  {
    question: "RENS'in sunduğu destek hizmetleri nelerdir?",
    answer: "RENS, 7/24 müşteri desteği sağlar. Ayrıca, Premium Plan kullanıcıları için şirketinize özel bir sürdürülebilirlik uzmanı atanır."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">RENS 101</h2>
        <p className="faq-subtitle">Rens hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz!</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <X className="icon" />
                  ) : (
                    <Plus className="icon" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;