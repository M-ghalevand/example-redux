import Head from "next/head";

import { Navba_postApp_user, Nav } from "../../../../components/SiteMe";
import { UsersList } from "../../../../components/post_app";

const index = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Nav app="active" />
      <div className="ltr mr-200">
        <Navba_postApp_user />
        <UsersList />
      </div>
    </>
  );
};

export default index;
