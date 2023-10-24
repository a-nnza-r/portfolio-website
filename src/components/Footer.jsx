import information from "@/lib/details.js";
import Socials from "./Socials";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.profileTextContainer}>
        <div>
          <div className={styles.profileTitle}>{information.name}</div>
          <div className={styles.profileSubtitle}>{information.occupation}</div>
        </div>

        <div className={styles.profileDetail}>
          <div className={styles.profileDetailTitle}>Student Email: </div>
          {information.studentEmail}
        </div>

        <div className={styles.profileDetail}>
          <div className={styles.profileDetailTitle}>Email: </div>
          {information.email}
        </div>
      </div>
      <Socials />
    </div>
  );
}
