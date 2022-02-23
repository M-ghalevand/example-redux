import Link from "next/link";

const Home = () => {
  return (
    <>
      <Link href="/todo_app">
        <a>
          <span>Todo APP</span>
        </a>
      </Link>
      <br />
      <br />
      <Link href="/post_app">
        <a>
          <span>Post APP</span>
        </a>
      </Link>
    </>
  );
};

export default Home;
