// INTRODUCTION
// this is a setup which uses next because there are some react v19 features
// that only work in server side rendering(SSR).

import { Suspense } from "react";
import fs from "node:fs/promises";
import path from "path";

import styles from "./page.module.css";

import ServerComponentSample from "./components/ServerComponentSample";
import ClientComponentSample from "./components/ClientComponentSample";
import DataFetchingSample from "./components/DataFetchingSample";
import { IUser } from "./types";

const filePath = path.join(process.cwd(), "src/app/dummy-db.json");

export default function Home() {
  const fetchUsersPromise = new Promise(async (resolve) => {
    const data = await fs.readFile(filePath, "utf-8");
    const users: IUser[] = JSON.parse(data);

    resolve(users);
  });

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* <ServerComponentSample />
        <ClientComponentSample>
          <ServerComponentSample />
        </ClientComponentSample> */}

        {/* component which will take time to load can be wrapped with Suspense 
            to display a fallback until the loading finished.*/}
        <Suspense fallback={<h1>Loading...</h1>}>
          <DataFetchingSample fetchUsersPromise={fetchUsersPromise} />
        </Suspense>
      </main>
    </div>
  );
}
