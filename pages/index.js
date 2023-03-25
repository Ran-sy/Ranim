import Main from ".././components/main";
import About from ".././components/about";
import Skills from ".././components/skills";
import Head from "next/head";
import Projects from ".././components/projects";
import Contact from ".././components/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ranim | Frontend Developer</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
