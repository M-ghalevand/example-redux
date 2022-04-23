import Head from "next/head";

import { Navba_postApp_user, Nav } from "../../../../components/siteMe";
import { UsersList } from "../../../../components/post_app";
const myFunc1 = () => {
    const x = document.getElementById("mynav");
    if (x.classList.item(2) === "XsBlock") {
        x.classList.remove("XsBlock");
        x.classList.add("XsHidden");
    }
};
const Index = () => {
  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Nav app="active" />
      <div className="ltr mr-200" onClick={myFunc1}>
        <Navba_postApp_user />
        <UsersList />
      </div>
    </>
  );
};

export default Index;
