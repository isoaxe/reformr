export default function TermsOfService() {
  const Heading = ({ text }) => (
    <h2 className="mt-10 text-xl font-bold md:text-3xl">{text}</h2>
  );

  const Point = ({ text }) => <p className="mt-3">{text}</p>;

  const SubPoint = ({ text }) => <p className="ml-6 mt-3 md:ml-12">{text}</p>;

  return (
    <main className="m-auto my-28 max-w-7xl px-4 text-lg xs:px-9 md:text-2xl">
      <h1 className="text-center text-2xl font-bold md:text-4xl">
        TERMS OF SERVICE
      </h1>

      <p className="mt-10">
        By using Reformr’s sites, applications, and services, and in
        consideration of Reformr providing you with access to same, you agree to
        the following Terms of Use, which, together with the Privacy Policy,
        govern your access to and use of Reformr’s sites, applications and
        services.
      </p>
      <p className="my-10">
        Reformr reserves the right to amend these Terms of Use (“Terms”) from
        time to time. An updated version will be available on our website.
      </p>

      {/* 1. Introduction */}
      <Heading text="1. Introduction" />
      <Point text="1.1. REFORMR HEALTH LIMITED (“Reformr”, “the Company”, “we”, “us” or “our”) owns and operates the websites located at www.reformr.com, www.reformr.co.nz and other related websites and mobile applications with links to these Terms of Use (collectively, the “Site”)." />
      <Point text="1.2. Reformr is an online health platform that provides and facilitates confidential consultations with New Zealand registered doctors (“Partner Doctors”). Additionally, Reformr sells healthcare products, including medications, and facilitates the supply of these products with cooperation with independent pharmacies (“Pharmacies”)." />
      <Point text="1.3.  Content on Reformr’s Site and any communication you have with Reformr representatives (other than our Partner Doctors) does not constitute medical advice. You should always obtain medical advice from a Partner Doctor or your regular doctor to ensure a treatment is suitable for you." />
      <Point text="1.4. No endorsement, representation or warranty should be taken as medical advice that a particular product, medication, or treatment is suitable for you." />
      <Point text="1.5. Neither Reformr nor any third parties affiliated with our Site shall be liable for any professional advice you obtain from a Partner Doctor." />

      {/* 2. Registration */}
      <Heading text="2. Registration" />
      <Point text="2.1. You must become a registered user to make orders through the Reformr Site or participate in consultations with our Partner Doctors. An individual is entitled to make a maximum of one registered member account. You should not create an account on behalf of someone else. In order to become a member, you must:" />
      <SubPoint text="(a) Be 18 years or over." />
      <SubPoint text="(b) Be a New Zealand Resident." />
      <SubPoint text="(c) Be capable of entering into a legally binding agreement with Reformr." />
      <SubPoint text="(d) Agree to these Terms of Use." />
      <Point text="2.2. Registered users will be required to create a password for their account. Users are responsible for keeping their password secure and are responsible for all use and activity under their account. If you suspect your account has been compromised, you must notify Reformr and create a new password." />
      <Point text="2.3. When creating an account, users will supply Reformr with personal information including name, age, date of birth, gender and contact details. Reformr will handle this information in accordance with our Privacy Policy." />
      <Point text="2.4. By creating the account, you agree that all information provided to Reformr, Partner Doctors and other affiliates will be accurate, complete and up-to-date (including a full list of the current medication you are taking), and you will not omit any information that a reasonable person would consider potentially relevant to the services Reformr provides. It is your responsibility to advise your regular doctor of any medications or treatments that a Partner Doctor prescribes to you." />

      {/* 3. Services */}
      <Heading text="3. Services" />
      <Point text="3.1. Reformr takes no responsibility and makes no warranties, implied or express, in relation to the content of any consultation between you and a Partner Doctor or pharmacist. You and your Partner Doctor, or pharmacist, are responsible for the conduct of the consultation and all information or communication made. This provision includes through the chat feature of the website, or any phone or video call." />
      <Point text="3.2. Partner Doctors have the same obligations to you as if they were consulting in person. They will make notes of the consultation and it is their responsibility to hold and maintain your health records as required by law. Reformr may store copies of notes made by your Partner Doctor in order to facilitate continuity of care." />
      <Point text="3.3. Reformr makes no warranties that an online consultation with a Partner Doctor is suitable for you." />
      <Point text="3.4. You agree that should you suffer from any noticeable side-effects, you will contact Reformr (as applicable to your membership) to facilitate further consultation with a Partner Doctor." />

      {/* 4. Intellectual Property */}
      <Heading text="4. Intellectual Property" />
      <Point text="4.1. “Reformr” and its logo are trademarks of REFORMR HEALTH LIMITED." />
      <Point text="4.2. Unless otherwise specified, Reformr owns or licenses from third parties all material on the Site, including the copyright, designs, patents, trademarks, graphics, text, information, layout, downloads, products, services and any other intellectual property." />
      <Point text="4.3. Use of this Site does not transfer any rights, title or interest in relation to this Site or its content." />
      <Point text="4.4. Any reproduction, distribution, sale, modification, adaptation or transmission of this Site or its content is strictly prohibited and may result in civil and criminal penalties." />
      <Point text="4.5. Any trademark used on this Site to describe a third party and their products and services are trademarks of that third party." />

      {/* 5. Linked Sites and Third Party Content */}
      <Heading text="5. Linked Sites and Third Party Content" />
      <Point text="5.1. This Site may contain links to, or content from, websites operated by third parties. These are provided for convenience and may not remain current. Unless otherwise specified, Reformr does not endorse and is not responsible for the content on Third Party Websites. Reformr does not have control over, nor any rights in, Third Party websites. Using, or relying upon, Third Party content is done so entirely at the user’s risk." />

      {/* 6. User Conduct */}
      <Heading text="6. User Conduct" />
      <Point text="6.1. Users are prohibited from any conduct that Reformr would deem inappropriate, including but not limited to:" />
      <SubPoint text="(a) Using the Site in breach of any applicable laws or regulations;" />
      <SubPoint text="(b) Providing false, misleading or deceptive information;" />
      <SubPoint text="(c) Using the Site for commercial purposes;" />
      <SubPoint text="(d) Using the Site to harm, abuse, harass, stalk, threaten, or otherwise offend others, including our employees and affiliates;" />
      <SubPoint text="(e) Any act that would constitute a breach of the privacy or legal rights of others;" />
      <SubPoint text="(f) Interfering with, disrupting, or creating an undue burden on the Site;" />
      <SubPoint text="(g) Any conduct that Reformr would reasonably consider to be non-authorised, including but not limited to material that, in Reformr’s opinion, is likely to cause annoyance, or is defamatory, offensive, threatening, obscene, racist, pornographic, indecent or otherwise, or any other material that Reformr would consider to be in violation of our systems or a third party’s systems and security." />
      <SubPoint text="(h) Any conduct which will or may damage, disrupt access to or otherwise interfere with the proper operation of the Site." />
      <Point text="6.2. A user must contact Reformr if they believe another person has or is going to breach any condition of these Terms." />
      <Point text="6.3. Reformr reserves the right to block or disable any account if any of the above conditions are broken, or for any other reason. " />
      <Point text="6.4. By uploading material onto the Site, you grant Reformr a worldwide, non-exclusive, royalty-free, transferable, perpetual license to use, reproduce, edit and exploit the material in any form and for any purpose, and unconditionally we wave all moral rights as defined by Part 4 of the New Zealand Copyright Act 1994." />
      <Point text="6.5. Reformr reserves the right to remove, or modify, any material uploaded by users on the Site." />
      <Point text="6.6. Reformr accepts no liability with respect to, and is not responsible for, any material made available on the Site by any person or entity other than Reformr." />
      <Point text="6.7. Reformr does not endorse any opinion, advice or statement made by any person or entity other than Reformr." />
      <Point text="6.8. Users of the Site agree to indemnify, defend, and hold harmless Reformr and its officers, staff, contractors, suppliers and licensors, or any other affiliates of Reformr, in respect of any claim, actions, demands, liabilities and settlements, arising from your violation of, or failure to comply with, these Terms. Additionally, you agree to indemnify, defend and hold harmless Partner Doctors from any claims resulting from your lack of adherence to their advice or recommendations." />
      <Point text="6.9. Users agree that the Partner Pharmacy will be unable to dispense and dispatch their order unless and until the user has completed the following Required Actions:" />
      <SubPoint text="(a) Consultation with a Partner Doctor;" />
      <SubPoint text="(b) Provision of full and correct contact information, as well as subsequent identification verification;" />
      <SubPoint text="(c) Any consent and agreement documentation; and" />
      <SubPoint text="(d) Payment in full." />

      {/* 7. Cookies */}
      <Heading text="7. Cookies" />
      <Point text="7.1. Reformr may use cookies, device IDs and other tracking technologies to improve the use experience and personalise content, including advertisements." />
      <SubPoint text="7.1.1. A “cookie” is a small piece of information stored on your device for a pre-determined time period. They allow a computer to be identified, but hold no personal information about a specific individual. You can visit the settings in your browser to adjust your cookie settings." />
      <Point text="7.2. Reformr may use third-party vendors and analytics data supplied by these vendors to show our advertisements on websites and optimise these advertisements to users that have previously visited the Site, or based on other characteristics, such as your internet usage and sites you have visited." />

      {/* 8. Liability */}
      <Heading text="8. Liability" />
      <Point text="8.1. To the extent permitted by law, Reformr will not be liable in any event for any indirect loss, damage or expense – irrespective of the manner caused – incurred by your use or failure to use the Site." />
      <Point text="8.2. To the extent permitted by law, Reformr will not be liable from any action arising from its Partner Doctors or Pharmacies. Liabilities shall rest with the practicing doctor or pharmacy. All doctors and pharmacies are solely responsible for the clinical services they perform, including the supply of medications." />

      {/* 9. Warranties and Disclaimers */}
      <Heading text="9. Warranties and Disclaimers" />
      <Point text="9.1. Users agree that use of the Site is at your sole risk. Reformr disclaims all warranties of any kind, whether express or implied, arising out of or in any way connected to the Site, or good and services accessed through the Site." />
      <Point text="9.2. All products and services available through the Site are on an ‘as is’ basis." />
      <Point text="9.3. By accessing the Site, you assume all risks relating to the damage of your computer, software or data by a virus transmitted by the Site or a third-party website." />

      {/* 10. Mobile Terms of Service */}
      <Heading text="10. Mobile Terms of Service" />
      <Point text="10.1 Your use of our mobile message service constitutes your agreement to these terms and conditions. We may modify or cancel the mobile service or any of its features without notice. To the extent permissible by law, we may also modify these terms at any time and your continued use of the mobile service following the effective date of any such changes shall constitute your acceptance of same." />
      <Point text="10.2. By consenting to Reformr’s SMS/text messaging service, you agree to to receive recurring SMS/text messages from and on behalf of Reformr through your wireless provider to the mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call list. Text messages may be sent using an automatic telephone dialling system or other technology. Service-related messages may include updates, alerts, and information (e.g., order updates, account alerts, etc.). Promotional messages may include promotions, specials, and other marketing offers (e.g., cart reminders)." />
      <Point text="10.3 You understand that you do not have to sign up for this program in order to make any purchases, and your consent is not a condition of any purchase with Reformr. Your participation in this program is completely voluntary." />
      <Point text="10.4 We do not charge for the mobile service, but you are responsible for all charges and fees associated with text messaging imposed by your wireless provider. Message frequency varies. Message and data rates may apply. Check your mobile plan and contact your wireless provider for details. You are solely responsible for all charges related to SMS/text messages, including charges from your wireless provider." />
      <Point text="10.5 You may opt-out of the mobile service at any time. Text the single keyword command STOP to the sending phone number or click the unsubscribe link (where available) in any text message to cancel. You will receive a one-time opt-out confirmation text message. No further messages will be sent to your mobile device, unless initiated by you. If you have subscribed to other Reformr mobile message programs and wish to cancel, except where applicable law requires otherwise, you will need to opt out separately from those programs by following the instructions provided in their respective mobile terms." />
      <Point text="10.6 For mobile service support or assistance, email greta@reformr.co.nz." />
      <Point text="10.7 We may change any short code or telephone number we use to operate the mobile service at any time and will notify you of these changes. You acknowledge that any messages, including any stop requests, you send to a short code or telephone number we have changed may not be received and we will not be responsible for honouring requests made in such messages." />
      <Point text="10.8 The wireless carriers supported by the mobile service are not liable for delayed or undelivered messages. You agree to provide us with a valid mobile number. If you obtain a new mobile number, you will need to sign up for the program with your new number." />
      <Point text="10.9 To the extent permitted by applicable law, you agree that we will not be liable for failed, delayed, or misdirected delivery of any information sent through the mobile service, any errors in such information, and/or any action you may or may not take in reliance on the information or mobile service." />

      {/* 11. Privacy Policy */}
      <Heading text="11. Privacy Policy" />
      <Point text="11.1. By using the Site, you acknowledge Reformr’s Privacy Policy." />

      {/* 12. Refunds */}
      <Heading text="12. Refunds" />
      <Point text="12.1. As per rights that cannot be waived under New Zealand law, a subscription charge may only be refunded in the following situations:" />
      <SubPoint text="(a) A user notifies Reformr of their desire to cancel their subscription and the user has not yet completed a consultation with a Partner Doctor;" />
      <SubPoint text="(b) An ordered product is out of stock; " />
      <SubPoint text="(c) An ordered product is faulty; or" />
      <SubPoint text="(d) There has been a product or pricing error (in which case Reformr will administer a refund to correct the amount);" />
      <Point text="12.2. In the case that an order has been processed and is awaiting shipment with a Pharmacy, no refund or credit can be administered." />
      <Point text="12.3. Reformr is only able to process refunds to the payment method and card used for the initial payment." />

      {/* 13. Subscription Service */}
      <Heading text="13. Subscription Service" />
      <Point text="13.1. By using the service, users agree that Reformr is a subscription-based service. Once a user has subscribed and supplied their payment information, that payment method will be charged at regular intervals unless and until the membership is terminated." />
      <Point text="13.2. At the elapse of six months after initial signup, a medical review shall be completed to ensure the user remains eligible. At the completion of a successful medical review, another six-month subscription will become available for a user to commence." />
      <Point text="13.3. Users may cancel their subscription at any time via their member account, or by emailing greta@reformr.co.nz." />
      <SubPoint text="13.3.1 Users will not be charged for future orders after a cancellation." />
      <SubPoint text="13.3.2 Should users cancel after an order has been billed, Reformr may, at its discretion, provide credit to the user towards any Reformr service, subject to Doctor approval." />

      {/* 14. Dispatch */}
      <Heading text="14. Dispatch" />
      <Point text="14.1. Following completion of the Required Actions in subsection 6.9, a Partner Pharmacy will dispense the prescription within 5 business days of successful payment. " />
      <Point text="14.2. Deliveries are completed via Courier Post. Delivery times are subject to the provided shipping address." />

      {/* 15. Prohibition and Severance */}
      <Heading text="15. Prohibition and Severance" />
      <Point text="15.1. If any term in these Terms is determined to be illegal, invalid, or otherwise unenforceable by reasons of applicable law, then to the extent and within the jurisdiction that term is unenforceable, it shall be deleted and severed form the agreement and the remaining Terms shall survive and remain in full force, continuing to be binding and enforceable." />

      {/* 16. Jurisdiction and Governing Law */}
      <Heading text="16. Jurisdiction and Governing Law" />
      <Point text="16.1. These Terms and your use of the Site are governed by the laws of New Zealand, without giving effect to the principles of conflict of laws." />
      <Point text="16.2. Any dispute arising out of or related to these Terms will be resolved exclusively in the courts of New Zealand." />
    </main>
  );
}
