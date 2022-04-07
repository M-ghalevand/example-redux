import Head from "next/head";

export default function Header({ title }) {
  return (
    <div>
      <Head>
        <title>Manouchehr Ghalevand</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#00a3e1" />
        <meta name="Background-color" content="#2c2d2f" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="منوچهر قلعه وند طراج سایت و برنامه نویس هستم /Web Developer / Graphics Designer / Front-End / Freelancer"
        />
        <meta
          name="Keywords"
          content="manouchehr Ghalevand, منوچهر قلعه وند, Web Developer, Graphics Designer, Front-End, Freelancer"
        />
        <meta property="title" content={`${title}, منوچهر قلعه وند `} />
        <meta name="author" content="Manouchehr Ghalevand" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title}, منوچهر قلعه وند `} />
        <meta property="og:image" content="/img/profile-img.jpg" />
        <meta property="og:url" content="https://www.M-ghalevand.ir" />
        <meta property="og:site_name" content="Manouchehr Ghalevand" />
        <meta
          property="og:description"
          content="منوچهر قلعه وند طراج سایت و برنامه نویس هستم /Web Developer / Graphics Designer / Front-End / Freelancer"
        />
      </Head>
    </div>
  );
}
