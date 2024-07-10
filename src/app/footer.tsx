import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-6" id="footer">
      <p className="custom-paragraph">
        12, Akin Adesola. Victoria Island.<br />
        &copy; {new Date().getFullYear()} MoMo PSB
      </p>
    </footer>
  );
}

export default Footer;
