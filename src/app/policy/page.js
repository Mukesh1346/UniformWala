"use client";

import React from "react";
import "./PrivacyPolicy.css"; // External CSS file

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-policy-page">
      <div className="container">
        <div className="privacy-policy-card">
          <h1 className="mb-3">Privacy Policy</h1>
          <p className="mb-4">Uniform Vala — Effective date: October 1, 2025</p>

          <hr />

          <h5 className="mt-4">1. Introduction</h5>
          <p>
            Welcome to <strong>Uniform Vala</strong>. We are committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and safeguard your data when you visit our website or interact with our services.
          </p>

          <h5 className="mt-4">2. Information We Collect</h5>
          <p>We may collect the following types of information from you:</p>
          <ul className="custom-list">
            <li>Personal details such as name, email address, phone number, and postal address.</li>
            <li>Company or institutional details when requesting bulk orders for uniforms.</li>
            <li>Payment and billing information for processing your purchases.</li>
            <li>Technical information such as IP address, browser type, device identifiers, and usage data.</li>
          </ul>

          <h5 className="mt-4">3. How We Use Your Information</h5>
          <p>Your information may be used for the following purposes:</p>
          <ul className="custom-list">
            <li>To fulfill orders and deliver uniforms to you.</li>
            <li>To provide customer support and respond to your inquiries.</li>
            <li>To send important updates about our products and services.</li>
            <li>To improve our website and tailor content to your needs.</li>
            <li>For compliance with legal obligations and dispute resolution.</li>
          </ul>

          <h5 className="mt-4">4. Sharing of Information</h5>
          <p>
            We do not sell or trade your information. However, we may share your data with trusted third-party providers such as payment processors, delivery partners, and IT service providers who assist us in operating our business.
          </p>

          <h5 className="mt-4">5. Cookies and Tracking Technologies</h5>
          <p>
            Our website uses cookies and similar technologies to enhance user experience, analyze site traffic, and personalize content. You may disable cookies in your browser settings, but some features of our site may not function properly without them.
          </p>

          <h5 className="mt-4">6. Data Retention</h5>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
          </p>

          <h5 className="mt-4">7. Security of Your Information</h5>
          <p>
            We implement reasonable security measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
          </p>

          <h5 className="mt-4">8. Your Rights</h5>
          <p>You have the right to:</p>
          <ul className="custom-list">
            <li>Access and request a copy of the personal information we hold about you.</li>
            <li>Request corrections to your personal information.</li>
            <li>Request deletion of your data, subject to legal obligations.</li>
            <li>Withdraw consent for data processing where applicable.</li>
          </ul>

          <h5 className="mt-4">9. Children's Privacy</h5>
          <p>
            Our services are not directed to individuals under the age of 13, and we do not knowingly collect data from children. If we learn that we have collected personal information from a child, we will delete it immediately.
          </p>

          <h5 className="mt-4">10. Changes to This Privacy Policy</h5>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review this policy periodically.
          </p>

          <h5 className="mt-4">11. Contact Us</h5>
          <p>
            If you have any questions or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@uniformvala.com <br />
            <strong>Address:</strong> Uniform Vala Headquarters, Industrial Area, New Delhi, India
          </p>
        </div>
      </div>
    </main>
  );
}
