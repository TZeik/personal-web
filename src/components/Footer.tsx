import React from "react";
import Styles from "../styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.contactInfo}>
          <h3>Contact Info</h3>
          <p>Dominican Republic, Santiago</p>
          <p>alexgermosen@gmail.com</p>
          <p>+1809 742 0101</p>
        </div>
        <div className={Styles.copyright}>
          <p>© {new Date().getFullYear()} Randy Germosén. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;