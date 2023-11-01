import information from "@/lib/details";
import styles from "@/styles/Profile.module.css";
import Socials from "@/components/Socials.jsx";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.ImgandTextConatiner}>
        <img
          src="/me.jpeg"
          alt={information.name}
          className={styles.profileImg}
        />

        <div className={styles.profileTextContainer}>
          <div>
            <div className={styles.profileTitle}>{information.name}</div>
            <div className={styles.profileSubtitle}>
              {information.occupation}
            </div>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.profileDetail}>
              <div className={styles.profileDetailTitle}>Student Email: </div>
              {information.studentEmail}
            </div>

            <div className={styles.profileDetail}>
              <div className={styles.profileDetailTitle}>Email: </div>
              {information.email}
            </div>
            <div className={styles.profileDetail}>
              <div className={styles.profileDetailTitle}>Date of Birth: </div>
              {information.dob}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.socialsContainer}>
        <Socials />
      </div>
    </div>
  );
}

export default Profile;
