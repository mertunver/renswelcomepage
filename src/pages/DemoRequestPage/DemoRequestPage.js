import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './DemoRequestPage.css';

const DemoRequestPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    message: '',
  });

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
        subject: 'New Demo Request',
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

  return (
    <div className="demo-request-page">
      <div className="background-logos">
        {[...Array(10)].map((_, index) => (
          <motion.img
            key={index}
            src="/images/rens_logo.svg"
            alt="Rens Logo"
            className="background-logo"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.1, 
              scale: 1, 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        ))}
      </div>
      <div className="content">
        <h1>Request a Demo</h1>
        <p>Fill out the form below to request a demo of our product.</p>
        <form onSubmit={handleSubmit} className="demo-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="company">Company</label>
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
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
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
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="success-message">Your demo request has been submitted successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="error-message">There was an error submitting your request. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default DemoRequestPage;