import Header from "../features/Todo/components/header/Header";
import TodoList from "../features/Todo/components/todos/TodoList";
import Footer from "../features/Todo/components/footer/Footer";

const todoApp = () => {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Example</h1>
        </section>
      </nav>
      <main>
        <section className="medium-container">
          <h2>Todos</h2>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
};

export default todoApp;
