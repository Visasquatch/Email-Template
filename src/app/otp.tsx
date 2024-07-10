import React from 'react';

interface OtpDisplayProps {
  otp: string;
}

const OtpDisplay: React.FC<OtpDisplayProps> = ({ otp }) => {
  return (
    <div className="flex space-x-2">
      {otp.split('').map((digit, index) => (
        <div
          key={index}
          className="w-10 h-10 text-center border rounded flex items-center justify-center"
        >
          {digit}
        </div>
      ))}
    </div>
  );
};

export default OtpDisplay;
