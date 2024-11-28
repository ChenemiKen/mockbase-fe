import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>MockBase</h1>

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/base"
          > Launch </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          &copy; built by&nbsp;
          <a
            href="https://github.com/chenemiken"
            target="_blank"
            rel="noopener noreferrer"
          > ChenemiKen </a>
        </p>
      </footer>
    </div>
  );
}
