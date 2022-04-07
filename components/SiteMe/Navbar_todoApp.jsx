import Link from "next/link";

const Navbar_todoApp = () => {
  return (
    <nav>
      <section className="ltr mt-50">
        <h1>Todos App</h1>

        <div className="navContent">
          <div className="navLinks"></div>

          <Link href="/app">
            <a dideo-checked="true">Home</a>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar_todoApp;
