import Head from "next/head";

import { Footer, TodoList, Header } from "../../components/Todo_app";
import { Navbar_todoApp, Nav } from "../../components/siteMe";

const myFunc1 = () => {
    const x = document.getElementById("mynav");
    if (x.classList.item(2) === "XsBlock") {
        x.classList.remove("XsBlock");
        x.classList.add("XsHidden");
    }
};

const todoApp = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Nav app="active" nav={undefined} about={undefined} resume={undefined} blog={undefined} conteact={undefined} />
      <div className="mr-200" onClick={myFunc1}>
        <Navbar_todoApp />
        <main>
          <section className=" w-9/12 medium-container ltr md:mr-56 my-10 sm:mx-auto">
            <div className="todoapp">
              <Header />
              <TodoList />
              <Footer />
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default todoApp;
