import Link from "next/link";

const Navbar_weatherApp = () => {

  return (
    <nav>
      <section className="ltr mt-50">
        <h1>Weather App</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link href="/app/todo_app">
              <a dideo-checked="true">Todo App</a>
            </Link>
            <Link href="/app/post_app">
              <a dideo-checked="true">Post App</a>
            </Link>
          </div>

          <Link href="/app">
            <a dideo-checked="true">Home</a>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar_weatherApp;
