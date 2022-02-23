import Head from "next/head";
import { useDispatch } from "react-redux";

import PostList from "../features/post/components/posts/PostList";


const PostApp = () => {
  

  return (
    <>
      <Head>
        <title>Post App</title>
      </Head>
      <PostList />
    </>
  );
};

export default PostApp;
