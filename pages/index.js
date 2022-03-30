import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "../flow/config";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FCL Quickstart with NextJS</title>
        <meta name="description" content="My first web3 app on Flow!" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>Hello World! I am Leo</main>
    </div>
  );
}
