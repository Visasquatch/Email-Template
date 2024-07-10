"use client";

import Header from "src/app/header.tsx";
import EmailContent from "./main";
import Footer from "./footer";
import Image from "next/image";
import Link from "next/link";
import OtpDisplay from "src/app/otp.tsx"; 
import React, { useState } from 'react';

const template = () => {
 const otp = "448666";
return (
  <div className="max-w-2xl mx-auto p-4 pt-0 px-0 bg-white shadow-md">
  <Header />
  <main>
    <EmailContent otp={otp} />
  </main>
 <Footer />
</div>
);
};

export default template;