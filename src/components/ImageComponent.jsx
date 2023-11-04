import styles from "@/styles/ImageComponent.module.css";

export default function ImageComponent(props) {
  return (
    <img className={styles.imgContainer} src={props.src} alt={props.alt} />
  );
}
