import React from 'react';

const Map = () => {
  return (
    <div className="h-[200px] rounded-lg">
      {/* Placeholder for Google Map */}
      
      <iframe
        className="w-full h-full rounded-lg"
        src="https://maps.google.com/maps?q=Afghanistan&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Map;
