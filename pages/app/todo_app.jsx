import Head from "next/head";

import Header from "../../features/Todo/components/header/Header";
import TodoList from "../../features/Todo/components/todos/TodoList";
import Footer from "../../features/Todo/components/footer/Footer";
import Navbar_todoApp from "../../features/NavBar/Navbar_todoApp";

const todoApp = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <div >
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
