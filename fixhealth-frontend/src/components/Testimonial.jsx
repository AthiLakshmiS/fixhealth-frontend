// Testimonial.js - Updated Testimonial component

import React from 'react';

const Testimonial = ({ name, organization, content, isVisible }) => {
  if (!isVisible) {
    return null; // Render nothing if the testimonial is not visible
  }

  return (
    <div className="testimonial">
      <p className="testimonial-content">{content}</p>
      <p className="testimonial-author">
        {name}, {organization}
      </p>
    </div>
  );
};

export default Testimonial;
