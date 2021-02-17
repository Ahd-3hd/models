import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import Header from "../components/Header";

const World = dynamic(import("../World"), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <World />
      <Header />
    </div>
  );
}
