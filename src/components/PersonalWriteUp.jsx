import "@/styles/PersonalWriteUp.module.css";
import information from "@/lib/details.js";
import styles from "@/styles/PersonalWriteUp.module.css";

function PersonalWriteUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.PersonalWriteUph1}>
        Hello! I'm {information.name}
      </h1>
      <p className={styles.PersonalWriteUpp}>{information.introduction}</p>
    </div>
  );
}

export default PersonalWriteUp;
