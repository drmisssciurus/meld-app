import { useNavigate } from 'react-router-dom';
import logo from '../../assets/meld-logo.png';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className={styles.titleWrapper}>
        <div>
          <p className={styles.dateModified}>
            Last Modified on January 20, 2025
          </p>
          <h2>Privacy Policy</h2>
        </div>
        <img width="100px" height="100px" src={logo} alt="" />
      </div>
      <p className={styles.description}>
        This is the privacy policy (“Policy”) of the Multi-animal Ensemble
        Landmark Detector (MELD) website. It describes how the MELD team (“We,”
        “Us,” or “Our”) handles all personal information and related data
        (“Personal Information”) that you (“You,” “Your,” or “User”) share with
        us or that we collect from you through your use of our website
        (“Website”).
      </p>
      <div className={styles.pointsWrapper}>
        <div className={styles.points}>
          <h3>Your Consent</h3>
          <p>
            Before you submit any information to us or use our website, please
            review this Policy in full. By providing Personal Information to us
            and accessing or using our website, you consent to the collection,
            use, disclosure, transfer, and storage of that information according
            to this Policy.
          </p>
        </div>
        <div className={styles.points}>
          <h3>Collection of Information</h3>
          <p>
            We record data generated while you use our service, which includes
            the video you upload (by default, we retain the video unless you
            specifically request otherwise), any CSV files generated through
            processing, the name of the video file, comments you choose to
            include, and any input settings or parameters used to process the
            video. If you prefer that the original video not be stored on our
            servers, you must opt out during upload; in that case, the video
            will be deleted from our servers within 24 hours and not be used for
            any purpose.
          </p>
        </div>
        <div className={styles.points}>
          <h3>How We Use Your Information</h3>
          <p>We use your data for the following purposes:</p>
          <ul>
            <li>To process uploaded videos and deliver results efficiently.</li>
            <li>To improve our AI models and enhance system performance.</li>
            <li>
              To communicate updates, respond to inquiries, and ensure smooth
              operation of the platform.
            </li>
          </ul>
        </div>
        <div className={styles.points}>
          <h3>Use of Data</h3>
          <p>
            The uploaded videos, CSV files, metadata, comments, file names, and
            associated inputs may be used to train or improve our models and may
            be shared in datasets. All rights to these processed data remain
            with us. If your contributions are substantial and you wish to be
            acknowledged, please let us know so we can credit your work.
          </p>
        </div>
        <div className={styles.points}>
          <h3>Updates and Contact</h3>
          <p>
            We may occasionally update this Policy to reflect changes in our
            practices. If you have any questions about this Policy or if you
            wish to inquire about your Personal Information, please contact us
            at{' '}
            <a href="mailto:tech4a.haifa@gmail.com">tech4a.haifa@gmail.com</a>.
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
  );
}

export default PrivacyPolicy;
