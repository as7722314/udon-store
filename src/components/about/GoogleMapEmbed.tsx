"use client";

import React from "react";

interface GoogleMapEmbedProps {
  className?: string;
}

const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ className = "" }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.4767024662788!2d120.29792847530227!3d22.636008479446613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e05006111bb8b%3A0x95d229b9484e23f5!2z5bed5p2J6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1743434133169!5m2!1szh-TW!2stw"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMapEmbed;
