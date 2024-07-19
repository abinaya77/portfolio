import React from 'react';
import Image from 'next/image';
import './Mypic.css'; // Import the CSS file

function Mypic() {
  return (
    <div className="image-container">
      <Image 
        src="/background/pic.jpg" 
        alt="My Picture" 
        width={500} // Set appropriate width
        height={500} // Set appropriate height
        className="profile-image" // Optionally, add a className if you have styles to apply
      />
    </div>
  );
}

export default Mypic;

