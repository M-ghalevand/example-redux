import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

import { seletPostByUser } from "../../../features/post/components/posts/postsSlice";
import Navbar from "../../../features/Navbar";
import jsonplaceholder from "../../../features/post/components/api/jsonplaceholder";

const UserId = ({ user }) => {
  const userId = user.id;
  const userPost = useSelector((state) => seletPostByUser(state, userId));
  const postLink = userPost.map((post) => (
    <li key={post.id}>
      <Link href={`/post_app/post/${post.id}`}>
        <a dideo-checked="true">{post.title}</a>
      </Link>
    </li>
  ));

  return (
    <div>
      <Head>
        <title>User: {user.name.substring(0, 20)}</title>
      </Head>
      <Navbar />
      <section>
        <h2>{user.name}</h2>
        <ul>{postLink}</ul>
      </section>
    </div>
  );
};

export default UserId;

export async function getStaticPaths() {
  const users = await jsonplaceholder.get("/users");

  const paths = users.data.map((user) => ({
    params: { UserId: user.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const user = await jsonplaceholder.get(`/users/${params.UserId}`);

  return {
    props: {
      user: user.data,
    },
  };
}
