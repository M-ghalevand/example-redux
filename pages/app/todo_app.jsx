import Head from "next/head";

import { Footer, TodoList, Header } from "../../components/Todo_app";
import { Navbar_todoApp, Nav } from "../../components/SiteMe";

const todoApp = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Nav app="active" />
      <div className="mr-200">
        <Navbar_todoApp />
        <main>
          <section className="medium-container ltr">
            <h2>Todos</h2>
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
