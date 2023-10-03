export default function PrivacyPolicy() {
  const Heading = ({ text }) => (
    <h2 className="mt-10 text-xl font-semibold md:text-3xl">{text}</h2>
  );

  const Point = ({ text }) => <p className="mt-3 font-light">{text}</p>;

  const SubPoint = ({ text }) => (
    <p className="ml-6 mt-3 font-light md:ml-12">{text}</p>
  );

  return (
    <main className="m-auto my-28 max-w-7xl px-4 text-lg xs:px-9 md:text-2xl">
      <h1 className="text-center text-2xl font-bold md:text-4xl">
        PRIVACY POLICY
      </h1>

      {/* 1. Introduction */}
      <Heading text="1. Introduction" />
      <Point
        text="1.1. REFORMR HEALTH LIMITED (“Reformr”, “the Company”, “we”, “us”, or
        “our”) is an online platform, committed to providing health services."
      />
      <Point
        text="1.2. Reformr is committed to protecting the privacy of individuals who
        use our website and services, including any applications. This Privacy
        Policy (“Policy”) sets forth the protocol of Reformr for the collection,
        use, disclosure, protection, and amendment of personal information."
      />
      <Point
        text="1.3. This Policy intends to comply with the Health Information Privacy
        Code 2020 (“HIPC”), the New Zealand Privacy Act 2020, the Health Act
        1956, and any other applicable codes or regulations created pursuant to
        this legislation. We are committed to act in accordance with relevant
        New Zealand legislation, as it relates to the protection of personal
        information."
      />

      {/* 2. Definitions */}
      <Heading text="2. Definitions" />
      <Point
        text="2.1. Any reference to “Personal Information” made in this Policy
        includes, but is not limited to, your name, gender, date of birth,
        contact details, and your medical history."
      />
      <Point
        text="2.2. When this Policy refers to “De-Identified Information”, it is
        referring to information that is not intended to be used to personally
        identify an individual."
      />
      <Point
        text="2.3. Reformr’s “Care Team” includes, but is not limited to, our doctors,
        pharmacists, and other staff dedicated to provided health services to
        you."
      />

      {/* 3. Children Under Age 16 */}
      <Heading text="3. Children Under Age 16" />
      <Point
        text="3.1. Reformr does not knowingly collect information from children under
        the age of 16."
      />
      <Point text="3.2. You must be over the age of 18 to use Reformr’s services." />

      {/* 4. Collection of Personal Information */}
      <Heading text="4. Collection of Personal Information" />
      <Point
        text="4.1. Where reasonably practicable to do so, Reformr collects your
        personal information directly from you."
      />
      <Point text="4.2. Collection of your personal information occurs when you:" />
      <SubPoint text="4.2.1. Sign up as a subscriber to Reformr’s content;" />
      <SubPoint text="4.2.2. Participate in an online consultation, whether by messaging service, email, telephone, or video;" />
      <SubPoint text="4.2.3. Message our Care Team;" />
      <SubPoint text="4.2.4. Create an online account on our website or on any application operated by us;" />
      <SubPoint text="4.2.5. Make a payment to Reformr – your account name, number, type, balance and address may by disclosed to us;" />
      <SubPoint text="4.2.6. Complete a Customer Satisfaction or Market Research Survey;" />
      <SubPoint text="4.2.7. Make an inquiry or order;" />
      <SubPoint text="4.2.8. Correspond with us, through the form of writing to us, emailing us, completing online quizzes or forms, or similar platforms; or" />
      <SubPoint text="4.2.9. Participate in any of Reformr’s health services." />

      {/* 5. Types of Personal Information Collected */}
      <Heading text="5. Types of Personal Information Collected" />
      <Point text="5.1. Contact Information" />
      <SubPoint text="5.1.1. This includes, but is not limited to, your name, postal address, residential address, email address, contact phone numbers, date of birth, and identification documents such as passport or driver’s licence details." />
      <Point text="5.2. Health Information" />
      <SubPoint text="5.2.1. This includes, but is not limited to, your medical history and health records, health status and test results, laboratory testing results, diagnostic images, and other health-related information." />
      <Point text="5.3. Billing Information" />
      <SubPoint text="5.3.1. This includes, but is not limited to, your bank account number, account holder name(s), bank account type, bank account balance, address, online banking security credentials." />
      <SubPoint text="5.3.2. Your payment information is collected, but not stored, unless you give Reformr express consent to do so. This may happen if you wish to set up recurring payments for a subscription service. In that case, only information necessary to transact payments will be stored." />
      <Point text="5.4. Message Information" />
      <SubPoint text="5.4.1. This includes, but is not limited to, any information sent via Reformr’s online messaging platforms." />
      <Point text="5.5. Device Information" />
      <SubPoint text="5.5.1. This includes, but is not limited to, your location, IP address, session information and cookies." />
      <Point text="5.6. Online Analytics" />
      <SubPoint text="5.6.1. This includes, but is not limited to, analytics from your activities on our website and any application Reformr operates." />

      {/* 6. Purposes of Collecting Personal Information */}
      <Heading text="6. Purposes of Collecting Personal Information" />
      <Point text="6.1. Reformr collects, stores, uses and discloses personal information for the purpose of:" />
      <SubPoint text="6.1.1. Offer and providing online health services;" />
      <SubPoint text="6.1.2. Communicating with users and potential users of our services;" />
      <SubPoint text="6.1.3. Complying with any legal or regulatory obligations, exercise and defend our legal rights, and review and resolve complaints or disputes;" />
      <SubPoint text="6.1.4. Facilitate and authorise payment and processing via third party gateways;" />
      <SubPoint text="6.1.5. Facilitate third parties communicating with you;" />
      <SubPoint text="6.1.6. Anything relating to a merger, acquisition, organisational restructure, financing, sale of assets, bankruptcy or insolvency event;" />
      <SubPoint text="6.1.7. Applications for employment; or" />
      <SubPoint text="6.1.8. Otherwise for general business management, including, but not limited to, notifying medical defence organisations, our insurers, quality assurance and data processing and handling." />

      {/* 7. Disclosure of Personal Information */}
      <Heading text="7. Disclosure of Personal Information" />
      <Point text="7.1. Subject to any applicable legal or regulatory restrictions, we may disclose Personal Information that we have collected:" />
      <SubPoint text="7.1.1. As required by law, which can include any information as required by subpoena or court order;" />
      <SubPoint text="7.1.2. To our employees, contractors, service providers and third parties that are used to assist in the provision of our services; " />
      <SubPoint text="7.1.3. To our subsidiaries and affiliates;" />
      <SubPoint text="7.1.4. Where we have a sincere belief that disclosing information is required to protect your safety or the safety of others, to uphold our own rights, to investigate fraud, or to comply with a government request;" />
      <SubPoint text="7.1.5. To a buyer or successor in the event of a merger, acquisition, divestiture, organisation restructure, dissolution or other sale or transfer of some or all of Reformr’s assets, whether as part of bankruptcy, liquidation or similar proceeding or sale, in which Personal Information is among the assets transferred; and" />
      <SubPoint text="7.1.6. For any other purpose disclosed when the information is collected." />

      {/* 8. Notifications */}
      <Heading text="8. Notifications" />
      <Point text="8.1. Reformr will conduct itself pursuant to Section 74 of the Health Act 1956, whereby health practitioners are required to report to the medical officer of health any patient they have ‘reasonable suspicion’ is suffering from a notifiable disease." />
      <SubPoint text="8.1.1. Reformr will not conduct specific testing in relation to this legal obligation but will fulfil its requirements to report may the situation arise." />

      {/* 9. Cookies, Device IDs, and other Tracking Information */}
      <Heading text="9. Cookies, Device IDs, and other Tracking Information" />
      <Point text="9.1. Reformr may use cookies, device IDs and other tracking technologies to improve the use experience and personalise content, including advertisements." />
      <SubPoint text="9.1.1. A “cookie” is a small piece of information stored on your device for a pre-determined time period." />
      <Point text="9.2. Reformr uses cookies to help keep track of items uses place in their shopping carts, including when users abandon their carts. This information is used to determine when to sen cart reminder messages via SMS." />
      <Point text="9.3. Users may disable cookies or other tracking technologies via their browser settings." />

      {/* 10. De-Identified Information */}
      <Heading text="10. De-Identified Information" />
      <Point text="10.1. Reformr may use De-Identified Information collected by us without restriction." />

      {/* 11. Information Shared With Third Parties */}
      <Heading text="11. Information Shared With Third Parties" />
      <Point text="11.1. This Privacy Policy applies to Personal Information collected in accordance with this Policy." />
      <Point text="11.2. Links present on our website, email correspondence, chat messages or elsewhere may lead you to platforms run by third parties. We are not responsible for the security practices of third parties, and we encourage you to read their privacy policies. " />
      <Point text="11.3. The above excludes text messaging originator opt-in data and consent; this information will not be shared with any third parties." />

      {/* 12. Information Shared With Us About Third Parties */}
      <Heading text="12. Information Shared With Us About Third Parties" />
      <Point text="12.1. In the case that you disclose the Personal Information of a third party, you are personally responsible for ensuring you have the authority and consent to do so and that that consent extends to our collection and use of their Personal Information in accordance with this Policy." />

      {/* 13. Accessing and Amending Personal Information */}
      <Heading text="13. Accessing and Amending Personal Information" />
      <Point text="13.1. As per the Privacy Act 2020, and Rules 6 and 7 of the HIPC, you have the right to access and amend the Personal Information held by us." />
      <Point text="13.2. You may request access to your Personal Information by contacting us. As required by law, we will respond to any such requests. " />
      <Point text="13.3. Where applicable, we may charge a fee for responding to a request for access." />
      <Point text="13.4. Where applicable, we may charge a fee for the disclosure of Personal Information." />

      {/* 14. Retention of Personal Information */}
      <Heading text="14. Retention of Personal Information" />
      <Point text="14.1. Reformr is required by the Health (Retention of Health Information) Regulations 1996 to retain Health Information for a minimum of 10 years beginning on the day after the date shown in the health information as the most recent date on which a provider provided services to the individual." />
      <Point text="14.2. When Reformr deletes Personal Information, it will be deleted from the active database, but may remain in archives insofar as to comply with legal requirements." />
      <SubPoint text="14.2.1. Reformr may also retain De-Identified Information about your use of the services." />
      <Point text="14.3. Personal Information that has been disclosed to third parties in accordance with this Policy may not be able to be accessed, deleted, or modified by Reformr." />

      {/* 15. Security */}
      <Heading text="15. Security" />
      <Point text="15.1. Reformr takes reasonable precautions and measures to keep your Personal Information secure. " />
      <Point text="15.2. By using our services, you acknowledge that you hold full responsibility for the security of any online accounts you hold with us, as well as the security of your computer, mobile phone, tablet or any other device. It is important to note that internet is inherently insecure, and you therefore acknowledge that any Personal Information shared with us carries a risk of interception, unauthorised access or fraudulent behaviour by any third party." />
      <Point text="15.3. Reformr cannot guarantee the security of any information you disclose to us, and you acknowledge that you are responsible for the risk associated with doing so." />

      {/* 16. Questions, Complaints and Concerns */}
      <Heading text="16. Questions, Complaints and Concerns" />
      <Point text="16.1. Any questions, complaints or concerns about this Privacy Policy should be directed to:" />
      <SubPoint text="The Privacy Officer" />
      <SubPoint text="REFORMR HEALTH LIMITED" />
      <SubPoint text="PO Box 111" />
      <SubPoint text="11 Auckland Street" />
      <SubPoint text="Auckland 1023" />

      {/* 17. Changes to This Privacy Policy */}
      <Heading text="17. Changes to This Privacy Policy" />
      <Point text="17.1. Reformr reserves the right to make amendments of the terms of this Policy, without notice. A current copy of our Privacy Policy will be available on our website and periodic checking of our website will ensure you are aware of the up-to-date Policy." />
      <Point text="17.2. This Policy was updated on 5 March 2023." />
    </main>
  );
}
