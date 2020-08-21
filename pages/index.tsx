import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          <a>devter</a>
        </h1>
        <Link href="/timeline">
          <a>timeline</a>
        </Link>
      </main>
    </div>
  );
}
