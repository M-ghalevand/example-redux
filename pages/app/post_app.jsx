import Head from "next/head";
import { useDispatch } from "react-redux";

import Navbar_postApp from "../../features/NavBar/Navbar_postApp";
import PostList from "../../features/post/components/posts/PostList";
import { fetchusers } from "../../features/post/components/users/users.Slice";

const PostApp = () => {
  const dispatch = useDispatch();
  dispatch(fetchusers());
  return (
    <div className="ltr bg-withe">
      <Head>
        <title>Post App</title>
      </Head>

      <Navbar_postApp />
      <PostList />
    </div>
  );
};

export default PostApp;
