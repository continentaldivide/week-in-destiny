import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import ThisWeek from "./src/ThisWeek";
import NextWeek from "./src/NextWeek";

export default function Home() {
  const [weekClass, setWeekClass] = useState("");

  const displayWeek = weekClass === styles.thisWeek ? <ThisWeek /> : <NextWeek />;

  const handleClick = (button) => {
    if (button === "nextButton") {
      setWeekClass(styles.nextWeek);
    } else {
      setWeekClass(styles.thisWeek);
    }
  };

  return (
    <>
      <Head>
        <title>This Week in Destiny</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${weekClass}`}>
        <h1>hi</h1>
        <div>
          <button onClick={() => handleClick("thisButton")}>
            show this week
          </button>
          <button onClick={() => handleClick("nextButton")}>
            show next week
          </button>
          {displayWeek}
        </div>
      </main>
    </>
  );
}
