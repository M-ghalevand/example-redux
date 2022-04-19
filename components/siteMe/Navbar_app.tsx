import Link from "next/link";
import { Button } from "@mui/material/";

const Navbar_app = () => {
  return (
    <nav
      className="w-full bg-sky-700 ltr sm:mt-12 md:mt-0 "
      style={{ height: "12.79rem" }}
    >
      <section>
        <h1 className="text-5xl font-black font-bold text-slate-100 left-0 pt-10 ml-5">
          App Example
        </h1>
        <div className="navContent flex md:relative ">
          <div className="navLinks ml-10 sm:ml-0 sm:flex flex-row sm:flex-nowrap" style={{ marginTop: "4.95rem" }}>
            <Link href="/app/todo_app">
              <a dideo-checked="true">
                <Button
                  variant="contained"
                  className="bg-sky-900 font-bold ml-2 sm:normal-case  sm:ml-1"
                  color="info"
                >
                  Todo App
                </Button>
              </a>
            </Link>
            <Link href="/app/post_app">
              <a dideo-checked="true">
                <Button
                  variant="contained"
                  className="bg-sky-900 font-bold ml-2 sm:normal-case sm:ml-1"
                  color="info"
                >
                  Post App
                </Button>
              </a>
            </Link>
            <Link href="/app/weather_app">
              <a dideo-checked="true">
                <Button
                  variant="contained"
                  className="bg-sky-900 font-bold ml-2 sm:normal-case sm:ml-1"
                  color="info"
                >
                  Weather App
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar_app;
