import Link from "next/link";
import {Button} from "@mui/material";

const Navbar_weatherApp = () => {

    return (
        <nav
            className="w-full bg-sky-700 ltr sm:mt-12 md:mt-0 "
            style={{ height: "12.79rem" }}
        >
            <section>
                <h1 className="text-5xl font-black font-bold text-slate-100 left-0 pt-10 ml-5">
                    Weather App
                </h1>
                <div className="navContent flex md:relative ">
                    <div className="navLinks ml-10" style={{marginTop: "4.95rem" }}>

                    </div>
                    <div
                        style={{marginTop: "4.95rem" }}
                        className="md:absolute md:right-52 sm:ml-10"
                    >
                        <Link href="/app">
                            <a dideo-checked="true">
                                <Button
                                    variant="contained"
                                    className="bg-sky-900 font-bold ml-2"
                                    color="info"
                                >
                                    Home
                                </Button>
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar_weatherApp;
