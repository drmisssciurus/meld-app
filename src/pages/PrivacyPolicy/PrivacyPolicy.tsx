import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/meld-logo.png';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={styles.policyWrapper}>
        <div className={styles.titleWrapper}>
          <div>
            <p className={styles.dateModified}>
              Last Modified on December 9, 2025
            </p>
            <h1>Privacy Policy</h1>
          </div>
          <img
            width="100px"
            height="100px"
            src={logo}
            alt="logo"
            onClick={() => navigate('/')}
          />
        </div>
        <p className={styles.description}>
          Meld, Inc. (“MELD,” “we,” “our,” and/or “us”) values the privacy of
          individuals who use our applications, website,{' '}
          <a href="https://meld-ai.com/">https://meld-ai.com/</a>, or any
          services that link to this Privacy Policy (collectively, our
          “Services”). This privacy policy (“Privacy Policy”) explains how we
          collect, use, and share Personal Information from or about Meld users
          or their devices. As used in this Privacy Policy, “Personal
          Information” means any information relating to an identified or
          identifiable individual. By using our Services, you agree to the
          collection, use, disclosure, sharing, and procedures this Privacy
          Policy describes. Beyond the Privacy Policy, your use of our Services
          is also subject to our <Link to="/terms">Terms of Service</Link>.
        </p>
        <div className={styles.pointsWrapper}>
          <div className={styles.points}>
            <h2>INFORMATION WE COLLECT</h2>
            <p>
              We may collect a variety of Personal Information from or about you
              or your devices from various sources, as described below.
            </p>
          </div>
          <div className={styles.points}>
            <h3>A. Information You Provide to Us</h3>
            <p>
              <b>Registration and Account Information.</b> When you sign up for
              an account or register to use our Services, we will ask you for
              your Personal Information to create your account, including your
              email address, password and Region.
            </p>
            <p>
              <b>Video Content.</b> We will collect the Personal Information
              that is included in any video content you provide or otherwise
              make available to us in connection with your use of our Services.
            </p>
            <p>
              <b>Communications.</b> If you contact us directly, we may receive
              other Personal Information about you. For example, when you
              contact us to learn more about Meld via our website, we will
              receive your full name, email address, and any Personal
              Information you include in the contents of your message. If you
              subscribe to our newsletter, we will collect your email address.
              When we send you emails, we may track whether you open them to
              learn how to deliver a better customer experience and to improve
              our Services.
            </p>
          </div>
          <div className={styles.points}>
            <h3>B. Information We Collect When You Use Our Services</h3>
            <p>
              <b>Location Information.</b> When you use our Services, we may
              receive your location information (for example, your IP address
              may indicate your general geographic region).
            </p>
            <p>
              <b>Device Information.</b> We may receive information about the
              device and software you use to access our Services, such as
              internet protocol (IP) address, operating system version, phone
              carrier and manufacturer, application installations, device
              identifiers, mobile advertising identifiers, and push notification
              tokens.
            </p>
            <p>
              <b>Usage Information.</b> To help us understand how you use our
              Services and to help us improve them, we automatically receive
              information about your interactions with our Services, like the
              pages or other content you view and the dates and times of your
              visits.
            </p>
            <p>
              <b>Information from Cookies and Similar Technologies.</b> We use
              cookies that are strictly necessary to enable the basic operation
              and security of our Services. Cookies are small files of letters
              and numbers that are stored on your browser or device and allow us
              to provide core functionality, such as maintaining a temporary
              session identifier during your visit. We do not use cookies for
              analytics, advertising, tracking, or profiling purposes, and we do
              not use third-party cookies. We also do not use pixel tags, web
              beacons, or similar tracking technologies. The cookies we use do
              not collect information that directly identifies you as an
              individual. Their sole purpose is to support the technical
              operation of the Services and ensure a stable and secure user
              experience. Any personal information you choose to provide (for
              example, through contact or waitlist forms) is collected directly
              through those forms and not via cookies. Such information is
              processed in accordance with this Privacy Policy. Because the
              cookies used on our Services are strictly necessary for
              functionality, user consent is not required under applicable data
              protection regulations.
            </p>
          </div>

          <div className={styles.points}>
            <h3> C. Information We Receive from Third Parties</h3>
            <p>
              <b>Third Parties.</b> We may receive additional Personal
              Information about you from third parties such as data or marketing
              partners and combine it with other information we have about you.
              If you choose to submit information to social media websites
              operated by us, such as Facebook or X, we may receive Personal
              Information about you, including your profile information and your
              use of the third-party account. If you wish to limit the Personal
              Information available to us from third-party services, you should
              visit the privacy settings of your third-party accounts to learn
              about your options.
            </p>
          </div>
          <div className={styles.points}>
            <h3>HOW WE USE THE INFORMATION WE COLLECT</h3>
            <p>We use the Personal Information we collect:</p>
            <ul>
              <li>To track user engagement with our Services;</li>
              <li>
                To provide, maintain, improve, debug, support, and enhance our
                Services;
              </li>
              <li>
                To communicate with you, provide you with updates and other
                information relating to our Services, provide information that
                you request, respond to comments and questions, and otherwise
                provide customer support;
              </li>
              <li>
                For marketing purposes, such as developing and providing
                promotional and advertising materials that may be useful,
                relevant, valuable, or otherwise of interest to you;
              </li>
              <li>
                To generate de-identified and aggregated data and use it for any
                lawful purpose;
              </li>
              <li>
                To find and prevent fraud, and respond to trust and safety
                issues that may arise;
              </li>
              <li>
                For compliance purposes, including enforcing our Terms of
                Service or other legal rights, or as may be required by
                applicable laws and regulations or requested by any judicial
                process or governmental agency;
              </li>
              <li>
                For other purposes for which we provide specific notice at the
                time the information is collected.
              </li>
            </ul>
          </div>

          <div className={styles.points}>
            <h3>LEGAL BASES FOR PROCESSING EUROPEAN INFORMATION</h3>
            <p>
              If you are located in the European Economic Area (“EEA”) or the
              United Kingdom (“UK”), we only process your Personal Information
              when we have a valid “legal basis,” including as set forth below.
            </p>
            <ul>
              <li>
                <b>Consent.</b> We may process your Personal Information where
                you have consented to certain processing of your Personal
                Information. For example, we may process your Personal
                Information to send you marketing communications or to use
                Cookies where you have consented to such use.
              </li>
              <li>
                <b>Contractual Necessity.</b> We may process your Personal
                Information where required to provide you with our Services. For
                example, we may need to process your Personal Information to
                respond to your inquiries or requests.
              </li>
              <li>
                <b>Compliance with a Legal Obligation.</b> We may process your
                Personal Information where we have a legal obligation to do so.
                For example, we may process your Personal Information to comply
                with tax and accounting obligations.
              </li>
              <li>
                <b>Legitimate Interests.</b> We may process your Personal
                Information where we or a third party have a legitimate interest
                in processing your Personal Information. Specifically, we have a
                legitimate interest in using your Personal Information for
                product development and internal analytics purposes, and
                otherwise to improve the safety, security, and performance of
                our Services. We only rely on our or a third party’s legitimate
                interests to process your Personal Information when these
                interests are not overridden by your rights and interests.
              </li>
            </ul>
          </div>
          <div className={styles.points}>
            <h3>HOW WE SHARE THE INFORMATION WE COLLECT</h3>
            <p>
              <b>Affiliates.</b> We may share any information we receive with
              our affiliates for any of the purposes described in this Privacy
              Policy.
            </p>
            <p>
              <b>Vendors and Service Providers.</b> We may share any information
              we receive with vendors and service providers retained in
              connection with the provision of our Services.
            </p>
            <p>
              <b>Marketing.</b> We do not rent, sell, or share information about
              you with nonaffiliated companies for their direct marketing
              purposes unless we have your permission.
            </p>
            <p>
              <b>As Required by Law and Similar Disclosures.</b> We may access,
              preserve, and disclose your Personal Information if we believe
              doing so is required or appropriate to: (a) comply with law
              enforcement requests and legal process, such as a court order or
              subpoena; (b) respond to your requests; or (c) protect your, our,
              or others’ rights, property, or safety. For the avoidance of
              doubt, the disclosure of your Personal Information may occur if
              you post any objectionable content on or through our Services.
            </p>
            <p>
              <b>Merger, Sale, or Other Asset Transfers.</b> We may disclose and
              transfer your Personal Information to service providers, advisors,
              potential transactional partners, or other third parties in
              connection with the consideration, negotiation, or completion of a
              corporate transaction in which we are acquired by or merged with
              another company, or we sell, liquidate, or transfer all or a
              portion of our business or assets.{' '}
            </p>
            <p>
              <b>Consent.</b> We may also disclose Personal Information from or
              about you or your devices with your permission.
            </p>
          </div>

          <div className={styles.points}>
            <h2> YOUR RIGHTS AND CHOICES</h2>
            <p>
              <b>Marketing Communications.</b> You can unsubscribe from our
              promotional emails via the link provided in the emails. Even if
              you opt out of receiving promotional messages from us, you will
              continue to receive administrative messages from us.
            </p>
            <p>
              <b> Do Not Track.</b> There is no accepted standard on how to
              respond to Do Not Track signals, and we do not respond to such
              signals.{' '}
            </p>
            <p>
              <b>Your European Privacy Rights.</b> If you are located in the EEA
              or the UK, you have additional rights described below.
            </p>

            <ul>
              <li>
                You may request access to the Personal Information we maintain
                about you, update, and correct inaccuracies in your Personal
                Information, restrict or object to the processing of your
                Personal Information, have your Personal Information anonymized
                or deleted, as appropriate, or exercise your right to data
                portability to easily transfer your Personal Information to
                another company.
              </li>
              <li>
                You may withdraw any consent you previously provided to us
                regarding the processing of your Personal Information at any
                time and free of charge. We will apply your preferences going
                forward and this will not affect the lawfulness of the
                processing before you withdrew your consent.
              </li>
            </ul>
            <p>
              You may exercise these rights by contacting us using the contact
              details at the end of this Privacy Policy. Before fulfilling your
              request, we may ask you to provide reasonable information to
              verify your identity. Please note that there are exceptions and
              limitations to each of these rights, and that while any changes
              you make will be reflected in active user databases instantly or
              within a reasonable period of time, we may retain Personal
              Information for backups, archiving, prevention of fraud and abuse,
              analytics, satisfaction of legal obligations, or where we
              otherwise reasonably believe that we have a legitimate reason to
              do so.
            </p>
            <p>
              <b>How to Block Cookies.</b> You can block Cookies by setting your
              internet browser to block some or all Cookies. However, if you use
              your browser settings to block all Cookies (including essential
              Cookies) you may not be able to access all or parts of our
              Services. By using our Services, you consent to our use of Cookies
              in accordance with this Privacy Policy. You can withdraw your
              consent at any time by deleting placed Cookies and disabling
              Cookies in your browser. You can change your browser settings to
              block or notify you when you receive a Cookie, delete Cookies or
              browse our Services using your browser&apos;s anonymous usage
              setting. Please refer to your browser instructions or help screen
              to learn more about how to adjust or modify your browser settings.
            </p>
          </div>

          <div className={styles.points}>
            <h3>THIRD PARTIES</h3>
            <p>
              Our Services may contain links to other websites, products, or
              services that we do not own or operate (“Third-Party Services”).
              We are not responsible for the privacy practices of these
              Third-Party Services. Please be aware that this Privacy Policy
              does not apply to your activities on these Third-Party Services or
              any information you disclose to these Third-Party Services. We
              encourage you to read the privacy policies of these Third-Party
              Services before providing them with your Personal Information.
            </p>
          </div>
          <div className={styles.points}>
            <h3>RETENTION</h3>
            <p>
              When you request that we do so, we take measures to delete your
              Personal Information or keep it in a form that does not permit
              identifying you when this information is no longer necessary for
              the purposes for which we process it, unless we are required by
              law to keep this information for a longer period. When we process
              Personal Information for our own purposes, we determine the
              retention period taking into account various criteria, such as the
              type of services provided to you, the nature and length of our
              relationship with you, possible re-enrollment with our Services,
              the impact on our Services we provide to you if we delete some
              information from or about you, and mandatory retention periods
              provided by law and the statute of limitations.
            </p>
          </div>
          <div className={styles.points}>
            <h3>SECURITY</h3>
            <p>
              We make reasonable efforts to protect your Personal Information by
              using physical and electronic safeguards designed to improve the
              security of the Personal Information we maintain. As our Services
              are hosted electronically, however, we can make no guarantees as
              to the security or privacy of your Personal Information.
            </p>
          </div>
          <div className={styles.points}>
            <h3>INTERNATIONAL USERS AND VISITORS</h3>
            <p>
              Our Services are intended for customers and visitors located
              within the U.S. If you choose to use our Services from the EEA,
              the UK, or other regions of the world with laws governing data
              collection and use that may differ from U.S. law, then please note
              that you are transferring your Personal Information outside of
              those regions. Also, we may transfer your data from the U.S. to
              other countries or regions in connection with storage and
              processing of data, fulfilling your requests, and operating our
              Services. By providing any information, including Personal
              Information, on or to our Services, you consent to such transfer,
              storage, and processing.
            </p>
          </div>
          <div className={styles.points}>
            <h2>CHANGES TO THIS PRIVACY POLICY</h2>
            <p>
              We will post any adjustments to the Privacy Policy on this page,
              and the revised version will be effective when it is posted. If we
              materially change the ways in which we use or share Personal
              Information previously collected from you through our Services, we
              will attempt to notify you through our Services, by email, or
              other means.
            </p>
          </div>

          <div className={styles.points}>
            <h2>CONTACT INFORMATION</h2>
            <p>
              If you have any questions, comments, or concerns about our
              processing activities, please email us at{' '}
              <a href="mailto:info@meld-ai.com">info@meld-ai.com</a>.
            </p>
          </div>
          <button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
