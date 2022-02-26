import Head from "next/head";
import Link from "next/link";

import Navbar from "../features/Navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Example react,redux-toolkit,next</title>
      </Head>
      <Navbar />
      <div className="rootApp">
        <Link href="/todo_app">
          <a className="app left">
            <span>Todo APP</span>
          </a>
        </Link>

        <Link href="/post_app">
          <a className="app right">
            <span>Post APP</span>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Home;
