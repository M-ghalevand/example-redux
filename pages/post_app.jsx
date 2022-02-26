import Head from "next/head";
import { useDispatch } from "react-redux";
import Navbar from "../features/Navbar";

import PostList from "../features/post/components/posts/PostList";
import { fetchusers } from "../features/post/components/users/users.Slice";

const PostApp = () => {
  const dispatch = useDispatch();
  dispatch(fetchusers());
  return (
    <>
      <Head>
        <title>Post App</title>
      </Head>
      <Navbar />
      <PostList />
    </>
  );
};

export default PostApp;
