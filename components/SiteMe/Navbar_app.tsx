import Link from "next/link";

const Navbar_app = () => {
  return (
    <nav>
      <section className="ltr mt-50">
        <h1>App Example</h1>
        <div className="navContent">
          <div className="navLinks ">
            <Link href="/app/todo_app">
              <a dideo-checked="true">Todo App</a>
            </Link>
            <Link href="/app/post_app">
              <a dideo-checked="true">Post App</a>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar_app;
