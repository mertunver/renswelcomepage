import React, { useState, useRef } from 'react';
import axios from 'axios';
import './DemoRequestPage.css';
import emailjs from '@emailjs/browser';


function DemoRequestPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    message: '',
  });

  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/send-email', {
        ...formData,
        to: 'info@rens.co',
        subject: 'Yeni Demo Talebi',
      });
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        position: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('service_de2y80g', 'template_f291wzp', form.current, {
      publicKey: 'DhZiyRMoTD54q9-1V',
    })
    .then(
      () => {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          position: '',
          phone: '',
          message: '',
        });
      },
      (error) => {
        setSubmitStatus('error');
      },
    );
    setIsSubmitting(false);
   
  };

  return (
    <div className="page-container">
     
      <main className="main-content with-header-space">
        <div className="form-container">
          <img src="/images/rens_logo.svg" alt="rens logo" className="form-logo" />
          <h1>Demo Talebi</h1>
          <p>Ürünümüzün demosunu talep etmek için aşağıdaki formu doldurun.</p>
          
          <form ref={form} onSubmit={sendEmail} className="demo-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Şirket</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="position">Pozisyon</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Gönderiliyor...' : 'Demo Talebi Gönder'}
            </button>
          </form>

          {submitStatus === 'success' && (
            <p className="success-message">Demo talebiniz başarıyla gönderildi!</p>
          )}
          {submitStatus === 'error' && (
            <p className="error-message">Talebiniz gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</p>
          )}
        </div>
      </main>
      
    </div>
  );
}

export default DemoRequestPage;