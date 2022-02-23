import Head from "next/head";
import Banner from "../src/components/Banner";
import Team from "../src/components/Team";
import Header from "../src/components/Header";
import RotatingBanner from "../src/components/RotatingBanner";
import Footer from "../src/components/Footer";
import Posts from "../src/components/Posts";
import Podcasts from "../src/components/Podcasts";
import Guest from "../src/components/Guest";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Produtei</title>
        <meta name="description" content="Produtei" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross0rigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700;900&family=Patua+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Header />
        <Banner />
        <RotatingBanner />

        <Podcasts />
        <Team />
        <Guest />
        <Footer />
      </main>
    </div>
  );
}
