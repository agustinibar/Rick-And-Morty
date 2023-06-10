import AboutText from "../components/About/AboutText";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me:</h1>
      <AboutText />
    </div>
  );
}