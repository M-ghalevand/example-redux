import Head from "next/head";

import Navbar from "../../features/Navbar";
import UsersList from "../../features/post/components/users/UsersList";

const users = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Navbar />
      <UsersList />
    </>
  );
};

export default users;
