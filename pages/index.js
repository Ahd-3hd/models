import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

const World = dynamic(import("../World"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <World />
    </div>
  );
}
