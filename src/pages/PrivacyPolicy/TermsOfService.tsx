import { useNavigate } from 'react-router-dom';
import logo from '../../assets/meld-logo.png';
import styles from './PrivacyPolicy.module.css';

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className={styles.policyWrapper}>
        <div className={styles.titleWrapper}>
          <div>
            <p className={styles.dateModified}>
              Last Modified on December 9, 2025
            </p>
            <h1>Terms of Service</h1>
          </div>
          <img width="100px" height="100px" src={logo} alt="" />
        </div>

        <p className={styles.description}>
          Welcome, and thank you for your interest in MELD, Inc. (“MELD,” “we,”
          or “us”) and our website at meld-ai.com, along with our related
          websites, networks, applications, firmware, and other products and
          services provided by us (collectively, the “Service”). These Terms of
          Service are a legally binding contract between you and MELD regarding
          your use of the Service.
        </p>
        <p className={styles.description}>
          PLEASE READ THE FOLLOWING TERMS CAREFULLY.
        </p>
        <p className={styles.description}>
          BY CLICKING “I ACCEPT,” OR BY DOWNLOADING, INSTALLING, OR OTHERWISE
          ACCESSING OR USING ANY PART OF THE SERVICE, YOU AGREE THAT YOU HAVE
          READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE,
          YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND CONDITIONS,
          INCLUDING MELD’S PRIVACY POLICY (“TERMS”). IF YOU ARE NOT ELIGIBLE, OR
          DO NOT AGREE TO THESE TERMS, THEN YOU DO NOT HAVE OUR PERMISSION TO
          USE THE SERVICE. YOUR USE OF THE SERVICE, AND MELD’S PROVISION OF THE
          SERVICE TO YOU, CONSTITUTES AN AGREEMENT BY MELD AND BY YOU TO BE
          BOUND BY THESE TERMS.
        </p>
        <p className={styles.description}>
          <b>ARBITRATION NOTICE.</b> Except for certain kinds of disputes
          described in Section 17, you agree that disputes arising under these
          Terms will be resolved by binding, individual arbitration, and BY
          ACCEPTING THESE TERMS, YOU AND MELD ARE EACH WAIVING THE RIGHT TO A
          TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE
          PROCEEDING. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO COURT to assert
          or defend your rights under this contract (except for matters that may
          be taken to small claims court). Your rights will be determined by a
          NEUTRAL ARBITRATOR and NOT a judge or jury. (See Section 17.)
        </p>

        <div className={styles.pointsWrapper}>
          {/* 1. MELD Service Overview */}
          <div className={styles.points}>
            <h2>1. MELD Service Overview.</h2>
            <p>
              MELD provides tools that analyze visual, audio, and related data
              (for example, from cameras in and around your home) to generate
              insights about your pet’s behavior and likely states (such as
              stress, play, or rest) and to help you better understand and care
              for your animals.
            </p>
            <p>
              MELD’s outputs are AI-generated interpretations and predictions
              based on probabilistic models. They are intended for informational
              and educational purposes only and are not veterinary advice,
              medical advice, emergency guidance, or a substitute for
              professional behavior or training services. You remain solely
              responsible for decisions you make about your pets and your
              environment.
            </p>
          </div>

          {/* 2. Free or Trial Versions */}
          <div className={styles.points}>
            <h2>2. Free or Trial Versions.</h2>
            <p>
              From time to time, MELD may offer free, beta, or trial versions or
              features of the Service (each, a “Trial Service”) for evaluation
              or limited use.
            </p>
            <ul>
              <li>
                MELD will determine, at its sole discretion, the availability,
                duration, and scope of any Trial Service (the “Trial Period”).
              </li>
              <li>
                Trial Services are provided “AS IS,” with no warranties, and may
                be changed, limited, or discontinued at any time.
              </li>
              <li>
                MELD will not be liable for any damages or losses arising out of
                or related to a Trial Service or its modification, suspension,
                or termination.
              </li>
              <li>
                At the end of a Trial Period, you may lose access to the Trial
                Service and any data or settings associated with it, unless you
                upgrade to a paid version if available.
              </li>
            </ul>
            <p>
              {' '}
              Except as specifically modified by this Section 2, these Terms
              apply to your use of any Trial Service as part of the Service.
            </p>
          </div>

          {/* 3. Eligibility */}
          <div className={styles.points}>
            <h2>3. Eligibility.</h2>
            <p>
              You must be at least 18 years old to use the Service. By agreeing
              to these Terms, you represent and warrant to us that: (a) you are
              at least 18 years old; (b) you have not previously been suspended
              or removed from the Service; and (c) your registration and your
              use of the Service is in compliance with any and all applicable
              laws and regulations. If you are an entity, organization, or
              company, the individual accepting these Terms on your behalf
              represents and warrants that they have authority to bind you to
              these Terms and you agree to be bound by these Terms.
            </p>
          </div>

          {/* 4. Accounts and Registration */}
          <div className={styles.points}>
            <h2>4. Accounts and Registration.</h2>
            <p>
              To access most features of the Service, you must register for an
              account. When you register for an account, you may be required to
              provide us with some information about yourself, such as your
              name, email address, or other contact information. You agree that
              the information you provide to us is accurate and that you will
              keep it accurate and up-to-date at all times. When you register,
              you will be asked to provide a password. You are solely
              responsible for maintaining the confidentiality of your account
              and password, and you accept responsibility for all activities
              that occur under your account. If you believe that your account is
              no longer secure, then you must immediately notify us at{' '}
              <a href="mailto:info@meld-ai.com">info@meld-ai.com</a>. .
            </p>
          </div>

          {/* 5. General Payment Terms */}
          <div className={styles.points}>
            <h2>5. General Payment Terms.</h2>
            <p>
              Certain features of the Service may require you to pay fees.
              Before you pay any fees, you will have an opportunity to review
              and accept the fees that you will be charged. All fees are in U.S.
              Dollars and are non-refundable (except for the refunds set forth
              in Section 5.3).
            </p>
            <p>
              <b>Price.</b> MELD reserves the right to determine pricing for the
              Service. MELD will make reasonable efforts to keep pricing
              information published on the website up to date. We encourage you
              to check our website [meld-ai.com] periodically for current
              base-pricing information. MELD may change the fees for any feature
              of the Service on a going-forward basis, including additional fees
              or charges, and MELD will use reasonable efforts to give you
              advance notice of changes before they apply. MELD, at its sole
              discretion, may make promotional offers with different features
              and different pricing to any of MELD’s customers. These
              promotional offers, unless made to you, will not apply to your
              offer or these Terms.
            </p>
            <p>
              <b>Authorization.</b> You authorize MELD and its third party
              payment processors to charge all sums for the orders that you make
              and any level of Service you select as described in these Terms or
              published by MELD, including all applicable taxes, to the payment
              method specified in your account. If you pay any fees with a
              credit card, MELD or its third party payment processors may seek
              pre-authorization of your credit card account prior to your
              purchase to verify that the credit card is valid and has the
              necessary funds or credit available to cover your purchase.
            </p>
            <p>
              <b>Subscription Service.</b> The Service may include offerings
              subject to automatically recurring payments for periodic charges (
              <b>“Subscription Service”</b>). If you activate a Subscription
              Service, you authorize MELD or its third party payment processors
              to periodically charge, on a going-forward basis and until
              cancellation of either the recurring payments or your account, all
              accrued sums on or before the payment due date for the accrued
              sums. The <b>“Subscription Billing Date”</b> is the date when you
              purchase your first subscription to the Service. Your account will
              be charged automatically on the Subscription Billing Date all
              applicable fees and taxes for the next subscription period (
              <b>“Subscription Fees”</b>). Unless earlier terminated in
              accordance with these Terms, the Subscription Service will
              continue for the initial term specified on [link to subscription
              page] (<b>“Initial Subscription Term”</b>) and will automatically
              renew for successive terms (each, a “Renewal Term” and, together
              with the Initial Subscription Term, the{' '}
              <b>“Subscription Service Term”</b>) unless you provide MELD with
              written notice of non-renewal of the Subscription Service at least
              30 days prior to the end of the Initial Subscription Term or
              then-current Renewal Term, as applicable. You may cancel the
              Subscription Service by contacting us at: info@meld-ai.com. MELD
              may cancel your Subscription Service for any cause or no cause,
              with or without notice. All Subscription Fees paid by you are
              non-refundable and are considered up-front payments for the
              Subscription Service; provided that, in the event MELD terminates
              your Subscription Service without cause, MELD will refund you a
              pro-rata portion of any unused Subscription Fees paid by you. MELD
              or its third party payment processor will bill the periodic
              Subscription Fee to the payment method you provide to us during
              registration (or to a different payment method if you change your
              payment information).
            </p>
            <p>
              <b>Delinquent Accounts.</b> MELD may suspend or terminate access
              to the Service, including fee-based portions of the Service, for
              any account for which any amount is due but unpaid. In addition to
              the amount due for the Service, a delinquent account will be
              charged with fees or charges that are incidental to any chargeback
              or collection of any of the unpaid amount, including collection
              fees.
            </p>
          </div>

          {/* 6. Licenses */}
          <div className={styles.points}>
            <h2>6. Licenses.</h2>
            <p>
              <b>Limited License.</b> Subject to your complete and ongoing
              compliance with these Terms and payment of all applicable fees,
              MELD grants you a limited, worldwide, non-exclusive,
              non-transferable, non-sublicensable, revocable license to access
              and use the Service for your personal, non-commercial use in
              connection with your own pets and households.
            </p>
            <p>
              <b>License Restrictions.</b> Except as otherwise explicitly
              provided in the Terms or as may be expressly permitted by
              applicable law, you will not, and will not permit or authorize
              third parties to: reproduce, distribute, publicly display, or
              publicly perform the Service; rent, lease, or otherwise permit
              third parties (or other persons not authorized by these Terms) to
              use the Service; use the Service for any benchmarking activity or
              in connection with the development of a competitive product;
              circumvent or disable any security or other technological features
              or measures of the Service or use the Service in a manner that
              MELD reasonably believes poses a threat to the security of
              MELD-controlled computer systems; modify, translate, reverse
              engineer, decompile, disassemble, or otherwise derive the source
              code or the underlying ideas, algorithms, structure, or
              organization from the Service (except to the extent that
              applicable law prevents the prohibition of such activities); or
              use or access the Service in a manner that materially impacts or
              burdens MELD or MELD’s servers and other computer systems,
              interferes with MELD’s ability to make available the Service to
              any third party, or otherwise breaches MELD’s Acceptable Use
              Policy.
            </p>
            <p>
              <b>Feedback.</b> If you choose to provide input and suggestions
              regarding problems with or proposed modifications or improvements
              to the Service (<b>“Feedback”</b>), then you hereby grant MELD an
              unrestricted, perpetual, irrevocable, non-exclusive, fully-paid,
              royalty-free right to exploit the Feedback in any manner and for
              any purpose, including to improve the Service and create other
              products and services.
            </p>
          </div>

          {/* 7. Ownership */}
          <div className={styles.points}>
            <h2>7. Ownership; Proprietary Rights.</h2>
            <p>
              The Service is owned and operated by MELD. The visual interfaces,
              graphics, design, compilation, information, data, computer code
              (including source code or object code), products, software,
              services, and all other elements of the Service (
              <b>“Materials”</b>) provided by MELD are protected by intellectual
              property and other laws. All Materials included in the Service are
              the property of MELD or its third party licensors. Except as
              expressly authorized by MELD, you may not make use of the
              Materials. MELD reserves all rights to the Materials not granted
              expressly in these Terms.
            </p>
          </div>

          {/* 8. Third Party Terms */}
          <div className={styles.points}>
            <h2>8. Third Party Terms.</h2>
            <p>
              <b>Third Party Services and Linked Websites.</b> MELD may provide
              tools through the Service that enable you to export information,
              including Customer Materials, to third party services (such as
              Google Sheets or various data reporting tools). By using one of
              these tools, you agree that MELD may transfer that information to
              the applicable third party service. Third party services are not
              under MELD’s control, and, to the fullest extent permitted by law,
              MELD is not responsible for any third party service’s use of your
              exported information. The Service may also contain links to third
              party websites. Linked websites are not under MELD’s control, and
              MELD is not responsible for their content.
            </p>
            <p>
              <b>Third Party Software.</b> The Service may include or
              incorporate third party software components that are generally
              available free of charge under licenses granting recipients broad
              rights to copy, modify, and distribute those components (“
              <b>Third Party Components</b>”). Although the Service is provided
              to you subject to these Terms, nothing in these Terms prevents,
              restricts, or is intended to prevent or restrict you from
              obtaining Third Party Components under the applicable third party
              licenses or to limit your use of Third Party Components under
              those third party licenses.
            </p>
          </div>

          {/* 9. Customer Materials */}
          <div className={styles.points}>
            <h2>9. Customer Materials.</h2>
            <p>
              <b>Customer Materials Generally.</b> Certain features of the
              Service may permit users to upload or input content to the
              Service, including photos, video, images, folders, data, text, and
              other types of works (“<b>Customer Materials</b>”). You retain any
              copyright and other proprietary rights that you may hold in the
              Customer Materials that you post to the Service or otherwise make
              available to MELD.
            </p>
            <p>
              <b>Limited License Grant to MELD.</b> By providing Customer
              Materials to or via the Service, you grant MELD a worldwide,
              non-exclusive, irrevocable, royalty-free, fully-paid,
              fully-transferable right and license (with the right to
              sublicense) to host, store, transfer, display, perform, reproduce,
              modify for the purpose of formatting for display, and distribute
              your Customer Materials, in whole or in part, in any media formats
              and through any media channels now known or hereafter developed
              (a) for the purpose of exercising MELD’s rights and performing its
              obligations under these Terms and (b) in perpetuity, in an
              aggregated form that does not identify you as the source thereof,
              for MELD’s business purposes, including to develop and improve
              MELD’s and its affiliates’ products and services.
            </p>
            <p>
              <b>Customer Materials Representations and Warranties.</b> MELD
              disclaims any and all liability in connection with Customer
              Materials. You are solely responsible for your Customer Materials
              and the consequences of providing Customer Materials via the
              Service. By providing Customer Materials via the Service, you
              affirm, represent, and warrant that:
            </p>
            <ul>
              <li>
                you are the creator and owner of the Customer Materials or have
                the necessary licenses, rights, consents, and permissions to
                authorize MELD and users of the Service to use and distribute
                your Customer Materials as necessary to exercise the licenses
                granted by you in this Section, in the manner contemplated by
                MELD, the Service, and these Terms;
              </li>
              <li>
                your Customer Materials, and the use of your Customer Materials
                as contemplated by these Terms, does not and will not: (i)
                infringe, violate, or misappropriate any third party right,
                including any copyright, trademark, patent, trade secret, moral
                right, privacy right, right of publicity, or any other
                intellectual property or proprietary right; (ii) slander,
                defame, libel, or invade the right of privacy, publicity or
                other property rights of any other person; or (iii) cause MELD
                to violate any law or regulation;
              </li>
              <li>
                your Customer Materials could not be deemed by a reasonable
                person to be objectionable, profane, indecent, pornographic,
                harassing, threatening, embarrassing, hateful, or otherwise
                inappropriate.
              </li>
            </ul>
            <p>
              <b>Customer Materials Disclaimer.</b> We are under no obligation
              to edit or control Customer Materials that you or other users post
              or publish, and will not be in any way responsible or liable for
              Customer Materials. MELD may, however, at any time and without
              prior notice, screen, remove, edit, or block any Customer
              Materials that in our sole judgment violates these Terms or is
              otherwise objectionable. You understand that when using the
              Service you will be exposed to Customer Materials from a variety
              of sources and acknowledge that Customer Materials may be
              inaccurate, offensive, indecent, or objectionable. You agree to
              waive, and do waive, any legal or equitable right or remedy you
              have or may have against MELD with respect to Customer Materials.
              If notified by a user or content owner that Customer Materials
              allegedly does not conform to these Terms, we may investigate the
              allegation and determine in our sole discretion whether to remove
              the Customer Materials, which we reserve the right to do at any
              time and without notice. For clarity, MELD does not permit
              copyright-infringing activities on the Service.
            </p>
            <p>
              <b>Monitoring Content.</b> MELD does not control and does not have
              any obligation to monitor: (a) Customer Materials; (b) any content
              made available by third parties; or (c) the use of the Service by
              its users. You acknowledge and agree that MELD reserves the right
              to, and may from time to time, monitor any and all information
              transmitted or received through the Service for operational and
              other purposes. If at any time MELD chooses to monitor the
              content, MELD still assumes no responsibility or liability for
              content or any loss or damage incurred as a result of the use of
              content. During monitoring, information may be examined, recorded,
              copied, and used in accordance with our Privacy Policy.
            </p>
          </div>

          {/* 10. Emails */}
          <div className={styles.points}>
            <h2>10. Emails.</h2>
            <p>
              We may send you emails concerning our products and services, as
              well as those of third parties. You may opt out of promotional
              emails by following the unsubscribe instructions in the
              promotional email itself.
            </p>
          </div>

          {/* 11. Prohibited Conduct */}
          <div className={styles.points}>
            <h2>11. Prohibited Conduct.</h2>
            <p>
              IN ADDITION TO ANY LIMITATIONS DESCRIBED IN OUR ACCEPTABLE USE
              POLICY, BY USING THE SERVICE YOU AGREE NOT TO:
            </p>
            <ul>
              <li>
                use the Service for any illegal purpose or in violation of any
                local, state, national, or international law. Such laws include,
                without limitation, laws pertaining to the collection, use,
                disclosure, and retention of biometric identifiers and biometric
                information to the extent you use Product features that analyze
                biometric information, such as face recognition features. You
                are solely responsible for making any required disclosures and
                obtaining any required consents under applicable laws in
                connection with your use of the Products. You are prohibited
                from using Product features that analyze biometric information
                in circumstances where obtaining consent is required but
                impossible to obtain, such as in connection with monitoring
                public spaces in the states of Illinois, Texas, or Washington.;
              </li>
              <li>
                harass, threaten, demean, embarrass, or otherwise harm any other
                user of the Service;
              </li>
              <li>
                violate, or encourage others to violate, any right of a third
                party, including by infringing or misappropriating any third
                party intellectual property right;
              </li>
              <li>
                interfere with security-related features of the Service,
                including by: (i) disabling or circumventing features that
                prevent or limit use or copying of any content; or (ii) reverse
                engineering or otherwise attempting to discover the source code
                of any portion of the Service except to the extent that the
                activity is expressly permitted by applicable law;
              </li>
              <li>
                interfere with the operation of the Service or any user’s
                enjoyment of the Service, including by: (i) uploading or
                otherwise disseminating any virus, adware, spyware, worm, or
                other malicious code; (ii) making any unsolicited offer or
                advertisement to another user of the Service; (iii) collecting
                personal information about another user or third party without
                consent; or (iv) interfering with or disrupting any network,
                equipment, or server connected to or used to provide the
                Service;
              </li>
              <li>
                perform any fraudulent activity including impersonating any
                person or entity, claiming a false affiliation, accessing any
                other Service account without permission, or falsifying your age
                or date of birth;
              </li>
              <li>
                sell or otherwise transfer the access granted under these Terms
                or any Materials (as defined in Section 7) or any right or
                ability to view, access, or use any Materials;
              </li>
              <li>
                attempt to do any of the acts described in this Section 11 or
                assist or permit any person in engaging in any of the acts
                described in this Section 11.
              </li>
            </ul>
          </div>

          {/* 12. Modification of these Terms */}
          <div className={styles.points}>
            <h2>12. Modification of these Terms.</h2>
            <p>
              We reserve the right to change these Terms on a going-forward
              basis at any time upon 7 days’ notice. Please check these Terms
              periodically for changes. If a change to these Terms materially
              modifies your rights or obligations, we may require that you
              accept the modified Terms in order to continue to use the Service.
              Material modifications are effective upon notice to you or your
              acceptance of the modified Terms. Immaterial modifications are
              effective upon publication. Except as expressly permitted in this
              Section 12, these Terms may be amended only by a written agreement
              signed by authorized representatives of the parties to these
              Terms. Disputes arising under these Terms will be resolved in
              accordance with the version of these Terms that was in effect at
              the time the dispute arose.
            </p>
          </div>

          {/* 13. Term, Termination and Modification of the Service */}
          <div className={styles.points}>
            <h2>13. Term, Termination and Modification of the Service.</h2>
            <p>
              <b>Term.</b> These Terms are effective beginning when you accept
              the Terms or first download, install, access, or use the Service,
              and ending when terminated as described in Section 13.2 (or
              section 5.3 if you are purchasing a Subscription Service).
            </p>
            <p>
              <b>Termination.</b> If you violate any provision of these Terms,
              your authorization to access the Service, including a Subscription
              Service, and these Terms automatically terminate. In addition,
              MELD may, at its sole discretion, terminate these Terms or your
              account on the Service, or suspend or terminate your access to the
              Service, at any time for any reason or no reason, with or without
              notice. Except for termination of a Subscription Service (which
              can be terminated in accordance with Section 5.3), you may
              terminate your account and these Terms at any time by contacting
              customer service at info@meld-ai.com.
            </p>
            <p>
              <b>Effect of Termination.</b> Upon termination of these Terms: (a)
              your license rights will terminate and you must immediately cease
              all use of the Service; (b) you will no longer be authorized to
              access your account or the Service; (c) you must pay MELD any
              unpaid amount that was due prior to termination; and (d) all
              payment obligations accrued prior to termination and Sections 6.3,
              7, 9.2, 13.3, 14, 15, 16, 17, and 18 will survive.
            </p>
            <p>
              <b>Modification of the Service.</b> MELD reserves the right to
              modify or discontinue the Service at any time (including by
              limiting or discontinuing certain features of the Service),
              temporarily or permanently, without notice to you. MELD will have
              no liability for any change to the Service or any suspension or
              termination of your access to or use of the Service, except for
              the refunds set forth in Section 5.3.
            </p>
          </div>

          {/* 14. Indemnity */}
          <div className={styles.points}>
            <h2>14. Indemnity.</h2>
            <p>
              To the fullest extent permitted by law, you are responsible for
              your use of the Service, and you will defend and indemnify MELD
              and its officers, directors, employees, consultants, affiliates,
              subsidiaries and agents (together, the “<b>MELD Entities</b>”)
              from and against every claim brought by a third party, and any
              related liability, damage, loss, and expense, including reasonable
              attorneys’ fees and costs, arising out of or connected with: (a)
              your unauthorized use of, or misuse of, the Service; (b) your
              violation of any portion of these Terms, any representation,
              warranty, or agreement referenced in these Terms, or any
              applicable law or regulation; (c) your violation of any third
              party right, including any intellectual property right or
              publicity, confidentiality, other property, or privacy right; or
              (d) any dispute or issue between you and any third party. We
              reserve the right, at our own expense, to assume the exclusive
              defense and control of any matter otherwise subject to
              indemnification by you (without limiting your indemnification
              obligations with respect to that matter), and in that case, you
              agree to cooperate with our defense of those claims.
            </p>
          </div>

          {/* 15. Disclaimers; No Warranties */}
          <div className={styles.points}>
            <h2>15. Disclaimers; No Warranties.</h2>
            <p>
              THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE
              SERVICE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS. MELD
              DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
              RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE
              THROUGH THE SERVICE, INCLUDING: (A) ANY IMPLIED WARRANTY OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
              ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY ARISING OUT
              OF COURSE OF DEALING, USAGE, OR TRADE. MELD DOES NOT WARRANT THAT
              THE SERVICE OR ANY PORTION OF THE SERVICE, OR ANY MATERIALS OR
              CONTENT OFFERED THROUGH THE SERVICE, WILL BE UNINTERRUPTED,
              SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS,
              AND MELD DOES NOT WARRANT THAT ANY OF THOSE ISSUES WILL BE
              CORRECTED.
            </p>
            <p>
              NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU
              FROM THE SERVICE OR MELD ENTITIES OR ANY MATERIALS OR CONTENT
              AVAILABLE THROUGH THE SERVICE WILL CREATE ANY WARRANTY REGARDING
              ANY OF THE MELD ENTITIES OR THE SERVICE THAT IS NOT EXPRESSLY
              STATED IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR ANY DAMAGE THAT
              MAY RESULT FROM THE SERVICE AND YOUR DEALING WITH ANY OTHER
              SERVICE USER. YOU UNDERSTAND AND AGREE THAT YOU USE ANY PORTION OF
              THE SERVICE AT YOUR OWN DISCRETION AND RISK, AND THAT WE ARE NOT
              RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR
              COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE
              SERVICE) OR ANY LOSS OF DATA, INCLUDING CUSTOMER MATERIALS.
            </p>
            <p>
              THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS SECTION APPLY
              TO THE FULLEST EXTENT PERMITTED BY LAW. MELD does not disclaim any
              warranty or other right that MELD is prohibited from disclaiming
              under applicable law.
            </p>
          </div>

          {/* 16. Limitation of Liability */}
          <div className={styles.points}>
            <h2>16. Limitation of Liability.</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE MELD
              ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES FOR LOSS OF
              PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF OR
              RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR INABILITY TO ACCESS
              OR USE, THE SERVICE OR ANY MATERIALS OR CONTENT ON THE SERVICE,
              WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE),
              STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ANY MELD
              ENTITY HAS BEEN INFORMED OF THE POSSIBILITY OF DAMAGE.
            </p>
            <p>
              EXCEPT AS PROVIDED IN SECTION 17.5 AND TO THE FULLEST EXTENT
              PERMITTED BY LAW, THE AGGREGATE LIABILITY OF THE MELD ENTITIES TO
              YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR ANY
              INABILITY TO USE ANY PORTION OF THE SERVICE OR OTHERWISE UNDER
              THESE TERMS, WHETHER IN CONTRACT, TORT, OR OTHERWISE, IS LIMITED
              TO THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO MELD FOR ACCESS
              TO AND USE OF THE SERVICE IN THE 12 MONTHS PRIOR TO THE EVENT OR
              CIRCUMSTANCE GIVING RISE TO CLAIM; OR (B) $100.
            </p>
            <p>
              EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF
              LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS
              INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER
              THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS
              OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS
              SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS.
              THE LIMITATIONS IN THIS SECTION 16 WILL APPLY EVEN IF ANY LIMITED
              REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </p>
          </div>

          {/* 17. Dispute Resolution and Arbitration */}
          <div className={styles.points}>
            <h2>17. Dispute Resolution and Arbitration.</h2>
            <p>
              <b>Generally.</b> In the interest of resolving disputes between
              you and MELD in the most expedient and cost effective manner, and
              except as described in Section 17.2 and 17.3, you and MELD agree
              that every dispute arising in connection with these Terms will be
              resolved by binding arbitration. Arbitration is less formal than a
              lawsuit in court. Arbitration uses a neutral arbitrator instead of
              a judge or jury, may allow for more limited discovery than in
              court, and can be subject to very limited review by courts.
              Arbitrators can award the same damages and relief that a court can
              award. This agreement to arbitrate disputes includes all claims
              arising out of or relating to any aspect of these Terms, whether
              based in contract, tort, statute, fraud, misrepresentation, or any
              other legal theory, and regardless of whether a claim arises
              during or after the termination of these Terms. YOU UNDERSTAND AND
              AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND MELD ARE EACH
              WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS
              ACTION.
            </p>
            <p>
              <b>Exceptions.</b> Despite the provisions of Section 17.1, nothing
              in these Terms will be deemed to waive, preclude, or otherwise
              limit the right of either party to: (a) bring an individual action
              in small claims court; (b) pursue an enforcement action through
              the applicable federal, state, or local agency if that action is
              available; (c) seek injunctive relief in a court of law in aid of
              arbitration; or (d) to file suit in a court of law to address an
              intellectual property infringement claim.
            </p>
            <p>
              <b>Opt-Out.</b> If you do not wish to resolve disputes by binding
              arbitration, you may opt out of the provisions of this Section 17
              within 30 days after the date that you agree to these Terms by
              sending a letter to MELD, Inc., Attention: Legal Department –
              Arbitration Opt-Out, 66 Franklin Street, Suite 300, Oakland, CA
              94607 that specifies: your full legal name, the email address
              associated with your account on the Service, and a statement that
              you wish to opt out of arbitration (“Opt-Out Notice”). Once MELD
              receives your Opt-Out Notice, this Section 17 will be void and any
              action arising out of these Terms will be resolved as set forth in
              Section 18.2. The remaining provisions of these Terms will not be
              affected by your Opt-Out Notice.
            </p>
            <p>
              <b>Arbitrator.</b> Any arbitration between you and MELD will be
              settled under the Federal Arbitration Act and administered by the
              American Arbitration Association (“AAA”) under its Consumer
              Arbitration Rules (collectively, “AAA Rules”) as modified by these
              Terms. The AAA Rules and filing forms are available online at
              www.adr.org, by calling the AAA at 1-800-778-7879, or by
              contacting MELD. The arbitrator has exclusive authority to resolve
              any dispute relating to the interpretation, applicability, or
              enforceability of this binding arbitration agreement.
            </p>
            <p>
              <b>Notice of Arbitration; Process.</b> A party who intends to seek
              arbitration must first send a written notice of the dispute to the
              other party by certified U.S. Mail or by Federal Express
              (signature required) or, only if that other party has not provided
              a current physical address, then by electronic mail (“Notice of
              Arbitration”). MELD’s address for Notice is: MELD, Inc., 66
              Franklin Street, Suite 300, Oakland, CA 94607. The Notice of
              Arbitration must: (a) describe the nature and basis of the claim
              or dispute; and (b) set forth the specific relief sought
              (“Demand”). The parties will make good faith efforts to resolve
              the claim directly, but if the parties do not reach an agreement
              to do so within 30 days after the Notice of Arbitration is
              received, you or MELD may commence an arbitration proceeding. All
              arbitration proceedings between the parties will be confidential
              unless otherwise agreed by the parties in writing. During the
              arbitration, the amount of any settlement offer made by you or
              MELD must not be disclosed to the arbitrator until after the
              arbitrator makes a final decision and award, if any. If the
              arbitrator awards you an amount higher than the last written
              settlement amount offered by MELD in settlement of the dispute
              prior to the award, MELD will pay to you the higher of: (i) the
              amount awarded by the arbitrator; or (ii) $10,000.
            </p>
            <p>
              <b>Fees.</b> If you commence arbitration in accordance with these
              Terms, MELD will reimburse you for your payment of the filing fee,
              unless your claim is for more than $10,000, in which case the
              payment of any fees will be decided by the AAA Rules. Any
              arbitration hearing will take place at a location to be agreed
              upon in Alameda County, California, but if the claim is for
              $10,000 or less, you may choose whether the arbitration will be
              conducted: (a) solely on the basis of documents submitted to the
              arbitrator; (b) through a non-appearance based telephone hearing;
              or (c) by an in-person hearing as established by the AAA Rules in
              the county (or parish) of your billing address. If the arbitrator
              finds that either the substance of your claim or the relief sought
              in the Demand is frivolous or brought for an improper purpose (as
              measured by the standards set forth in Federal Rule of Civil
              Procedure 11(b)), then the payment of all fees will be governed by
              the AAA Rules. In that case, you agree to reimburse MELD for all
              monies previously disbursed by it that are otherwise your
              obligation to pay under the AAA Rules. Regardless of the manner in
              which the arbitration is conducted, the arbitrator must issue a
              reasoned written decision sufficient to explain the essential
              findings and conclusions on which the decision and award, if any,
              are based. The arbitrator may make rulings and resolve disputes as
              to the payment and reimbursement of fees or expenses at any time
              during the proceeding and upon request from either party made
              within 14 days of the arbitrator’s ruling on the merits.
            </p>
            <p>
              <b>No Class Actions.</b> YOU AND MELD AGREE THAT EACH MAY BRING
              CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY
              AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
              REPRESENTATIVE PROCEEDING. Further, unless both you and MELD agree
              otherwise, the arbitrator may not consolidate more than one
              person’s claims, and may not otherwise preside over any form of a
              representative or class proceeding.
            </p>
            <p>
              <b>Modifications to this Arbitration Provision.</b> If MELD makes
              any future change to this arbitration provision, other than a
              change to MELD’s address for Notice of Arbitration, you may reject
              the change by sending us written notice within 30 days of the
              change to MELD’s address for Notice of Arbitration, in which case
              your account with MELD will be immediately terminated and this
              arbitration provision, as in effect immediately prior to the
              changes you rejected will survive.
            </p>
            <p>
              <b>Enforceability.</b> If Section 17.7 or the entirety of this
              Section 17 is found to be unenforceable, or if MELD receives an
              Opt-Out Notice from you, then the entirety of this Section 17 will
              be null and void and, in that case, exclusive jurisdiction and
              venue described in Section 18.2 will govern any action arising out
              of or related to these Terms.
            </p>
          </div>

          {/* 18. Miscellaneous */}
          <div className={styles.points}>
            <h2>18. Miscellaneous.</h2>
            <p>
              <b>General Terms.</b> These Terms, together with the Privacy
              Policy and any other agreements expressly incorporated by
              reference into these Terms, are the entire and exclusive
              understanding and agreement between you and MELD regarding your
              use of the Service. You may not assign or transfer these Terms or
              your rights under these Terms, in whole or in part, by operation
              of law or otherwise, without our prior written consent. We may
              assign these Terms at any time without notice or consent. The
              failure to require performance of any provision will not affect
              our right to require performance at any other time after that, nor
              will a waiver by us of any breach or default of these Terms, or
              any provision of these Terms, be a waiver of any subsequent breach
              or default or a waiver of the provision itself. Use of section
              headers in these Terms is for convenience only and will not have
              any impact on the interpretation of any provision. Throughout
              these Terms the use of the word “including” means “including but
              not limited to”. If any part of these Terms is held to be invalid
              or unenforceable, the unenforceable part will be given effect to
              the greatest extent possible, and the remaining parts will remain
              in full force and effect.
            </p>
            <p>
              <b>Governing Law.</b> These Terms are governed by the laws of the
              State of California without regard to conflict of law principles.
              You and MELD submit to the personal and exclusive jurisdiction of
              the state courts and federal courts located within Alameda County,
              California for resolution of any lawsuit or court proceeding
              permitted under these Terms. We operate the Service from our
              offices in California, and we make no representation that
              Materials included in the Service are appropriate or available for
              use in other locations.
            </p>
            <p>
              <b>Privacy Policy.</b> Please read the MELD Privacy Policy
              [meld-ai.com/privacy] carefully for information relating to our
              collection, use, storage, disclosure of your personal information.
              The MELD Privacy Policy is incorporated by this reference into,
              and made a part of, these Terms.
            </p>
            <p>
              <b>Additional Terms.</b> Your use of the Service is subject to all
              additional terms, policies, rules, or guidelines applicable to the
              Service or certain features of the Service that we may post on or
              link to from the Service (the “Additional Terms”). All Additional
              Terms are incorporated by this reference into, and made a part of,
              these Terms.
            </p>
            <p>
              <b>
                Consent to Electronic Communications. By using the Service, you
                consent to receiving certain electronic communications from us
                as further described in our Privacy Policy. Please read our
                Privacy Policy to learn more about our electronic communications
                practices. You agree that any notices, agreements, disclosures,
                or other communications that we send to you electronically will
                satisfy any legal communication requirements, including that
                those communications be in writing.
              </b>
            </p>
            <p>
              <b>Contact Information.</b> The Service is offered by MELD, Inc.
              You may contact us by sending correspondence to that address or by
              emailing us at{' '}
              <a href="mailto:info@meld-ai.com">info@meld-ai.com</a>.
            </p>
            <p>
              <b>Notice to California Residents.</b> If you are a California
              resident, under California Civil Code Section 1789.3, you may
              contact the Complaint Assistance Unit of the Division of Consumer
              Services of the California Department of Consumer Affairs in
              writing at 1625 N. Market Blvd., Suite S-202, Sacramento,
              California 95834, or by telephone at (800) 952-5210 in order to
              resolve a complaint regarding the Service or to receive further
              information regarding use of the Service.
            </p>
            <p>
              <b>No Support.</b> We are under no obligation to provide support
              for the Service. In instances where we may offer support, the
              support will be subject to published policies.
            </p>
            <p>
              <b>International Use.</b> The Service is intended for visitors
              located within the United States. We make no representation that
              the Service is appropriate or available for use outside of the
              United States. Access to the Service from countries or territories
              or by individuals where such access is illegal is prohibited.
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

export default TermsOfService;
