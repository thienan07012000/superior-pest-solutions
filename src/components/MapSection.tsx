import React from 'react';

export function MapSection() {
  return (
    <section className="w-full relative py-0 overflow-hidden bg-background">
      <div className="w-full h-[500px] md:h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.1862786707393!2d-94.15625059999999!3d36.088946899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c96ffe464f2bd7%3A0x5923f08718bbcd2f!2sSuperior%20Pest%20Solutions!5e0!3m2!1sen!2sus!4v1775402843366!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Superior Pest Solutions Location"
          className="grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </section>
  );
}
