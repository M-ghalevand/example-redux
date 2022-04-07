import Head from "next/head";
import { useDispatch } from "react-redux";

import { Navbar_postApp, Nav } from "../../../components/SiteMe";
import { PostList } from "../../../components/post_app";
import { fetchusers } from "../../../components/post_app/users.Slice";

const PostApp = () => {
  const dispatch = useDispatch();
  dispatch(fetchusers());
  return (
    <div className="ltr bg-withe mr-200">
      <Head>
        <title>Post App</title>
      </Head>

      <Nav
        app="active"
        nav={undefined}
        about={undefined}
        resume={undefined}
        blog={undefined}
        conteact={undefined}
      />
      <Navbar_postApp />

      <PostList />
    </div>
  );
};

export default PostApp;
