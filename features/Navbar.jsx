import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux Essentials Example</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link href="/todo_app">
              <a dideo-checked="true">Todo App</a>
            </Link>
            <Link href="/post_app">
              <a dideo-checked="true">Post App</a>
            </Link>
            <Link href="/post_app/users">
              <a dideo-checked="true">Users</a>
            </Link>
          </div>
          <Link href="/">
            <a dideo-checked="true">Home</a>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
