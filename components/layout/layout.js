import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../../styles/utils.module.css";

export const siteTitle = "To-Do App";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Simple to-do using nextjs" />

        <meta name="og:title" content={siteTitle} />
      </Head>

      {/* header */}
      <header className={styles.header}>
        <h2 className={utilStyles.headingLg}>Todo List</h2>
      </header>

      {/* body */}
      <main className={styles.main}>{children}</main>

      {/* footer */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
