import Head from "next/head";

import Navba_postApp_user from "../../../features/NavBar/Navba_postApp_user";
import UsersList from "../../../features/post/components/users/UsersList";

const users = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <div className="ltr">
        <Navba_postApp_user />
        <UsersList />
      </div>
    </>
  );
};

export default users;
