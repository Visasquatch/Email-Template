import React from 'react';
import OtpDisplay from 'src/app/otp.tsx';

interface EmailContentProps {
  otp: string;
}

const EmailContent: React.FC<EmailContentProps> = ({ otp }) => {
  return (
    <div>
      <h1 className="bold-head mb-4">
        Confirm Verification Code
      </h1>
      <p className="custom-paragraph mb-4">
        Hi Jack,
      </p>
      <p className="custom-paragraph mb-9">
        This is your verification code:
      </p>
      <p className="custom-paragraph mb-9" id="otp">
        <OtpDisplay otp={otp} />
      </p>
      <p className="custom-paragraph mb-2">
        Whether you're here for your brand, for a cause, or just for fun-<br />
        welcome!<br/>
        This code will only be valid for the next 5 minutes. If the code does not <br/>
        work, you can use this login verification link:
      </p>
      <p className="custom-paragraph mb-6">
        Thanks,<br/>Notable Team
      </p>
      <p className="custom-paragraph mb-6">
        Notable at the touch of a button! Download our app for Google & Mac.
      </p>
      <div id="buttons" className="flex space-x-4">
        <a href="https://play.google.com/store/apps/details?id=ng.mtn.android.psb.momo&hl=en"
           target="_blank"
           rel="noopener noreferrer"
           className="flex text-white rounded"
        >
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            style={{ width: '150px' }}
          />
        </a>
        <a href="https://apps.apple.com/us/app/mtn-momo/id1474080783"
           target="_blank"
           rel="noopener noreferrer"
           className="flex text-white rounded"
        >
          <img
            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg"
            alt="Download on Mac App Store"
            style={{ width: '150px' }}
          />
        </a>
      </div>
      <br/>
      <div className="custom-paragraph">
        <p>
          Questions or faq? Contact us at <a href="#" id="faq" className="text-cyan-600 underline">faq@momo.com.</a> If you'd rather not<br/>
          receive this kind of email, Don't want any more emails from Notable? <br/>
          <a href="#" className="text-cyan-600 underline">Unsubscribe</a>
        </p>
      </div>
    </div>
  );
}

export default EmailContent;
