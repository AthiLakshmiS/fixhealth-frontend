// TestimonialsSection.js - Updated TestimonialsSection component

import React, { useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
  {
    name: 'John',
    organization: 'ABC Inc.',
    content:
      "My experience at HealthCare Haven has been exceptional. The staff's dedication and compassion exceeded my expectations. The state-of-the-art facilities and skilled medical professionals made my recovery swift and comfortable. HealthCare Haven is not just a hospital; it's a place of healing and care. I'm grateful for the personalized attention and support I received. It truly is a beacon of health and wellness in our community.",
  },
  {
    name: 'John Doe',
    organization: 'ABC Inc.',
    content:
      "HealthCare Haven is a beacon of hope and healing. The medical team's expertise and compassionate care created a reassuring environment during my recent surgery. The hospital's commitment to patient well-being is evident in every aspect of their service. From cutting-edge technology to friendly staff, HealthCare Haven sets a new standard for healthcare excellence. I'm grateful for their unwavering support, making my journey to recovery smoother and more positive.",
  },
  {
    name: 'John',
    organization: 'ABC Inc.',
    content:
      "Choosing HealthCare Haven for my healthcare needs was the best decision I made. The hospital's commitment to patient-centric care is evident in every interaction. The skilled medical professionals, coupled with advanced technology, provide a level of healthcare excellence that is truly commendable. The compassionate staff and patient-friendly atmosphere make HealthCare Haven stand out. My heartfelt thanks to the entire team for their dedication to ensuring optimal health and well-being.",
  },
  {
    name: 'John Doe',
    organization: 'ABC Inc.',
    content:
      "HealthCare Haven is more than a hospital; it's a place where care meets excellence. My recent stay for a medical procedure was marked by unparalleled support and attention. The medical team's expertise and commitment to patient comfort were evident throughout. The hospital's focus on holistic well-being, from advanced medical treatments to personalized patient care, makes it a trusted healthcare partner. I'm grateful for the exceptional service and compassionate approach I experienced at HealthCare Haven.",
  },
  {
    name: 'Benz',
    organization: 'Abc',
    content: 
      "HealthCare Haven is a healthcare haven indeed. My recent experience at the hospital surpassed all expectations. The medical professionals exhibited exceptional skills, and the state-of-the-art facilities contributed to my smooth recovery. The hospital's commitment to patient well-being and safety is commendable. The warm and caring staff made me feel like family. I'm thankful for the outstanding healthcare services provided by HealthCare Haven, setting a new benchmark for excellence in the healthcare industry."
  }
  // Add more testimonials as needed
];

const TestimonialsSection = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Move to the next testimonial
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentTestimonialIndex]);

  return (
    <div className="testimonials-section">
      <h2>Testimonials Section</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            {...testimonial}
            isVisible={index === currentTestimonialIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
