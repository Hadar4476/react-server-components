// INTRODUCTION
// this is a setup which uses next because there are some react v19 features
// that only work in server side rendering(SSR).

import styles from "./page.module.css";

import ServerComponentSample from "./components/ServerComponentSample";
import ClientComponentSample from "./components/ClientComponentSample";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ServerComponentSample />
        <ClientComponentSample>
          <ServerComponentSample />
        </ClientComponentSample>
      </main>
    </div>
  );
}
