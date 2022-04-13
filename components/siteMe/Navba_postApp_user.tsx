import Link from "next/link";
import {useRouter} from "next/router"
import {Button} from "@mui/material";

const Navba_postApp_user = ({users}) => {
    const router = useRouter();
    const user = users ? users : "Users App";
    return (
        <nav
            className="w-full bg-sky-700 ltr sm:mt-12 md:mt-0 "
            style={{height: "11.19rem"}}
        >
            <section>
                <h1 className="text-5xl font-black font-bold text-slate-100 left-0 pt-10 ml-5">
                    {user}
                </h1>
                <div className="navContent flex md:relative ">
                    <div className="navLinks ml-10" style={{marginTop: "3.35rem"}}>
                        <Link href="/app/post_app">
                            <a dideo-checked="true">
                                <Button
                                    variant="contained"
                                    className="bg-sky-900 font-bold ml-2"
                                    color="info"
                                >
                                    Post App
                                </Button>
                            </a>
                        </Link>
                        <Link href="/app/post_app/users">
                            <a dideo-checked="true">
                                <Button
                                    variant="contained"
                                    className="bg-sky-900 font-bold ml-2"
                                    color="info"
                                >
                                    Users
                                </Button>
                            </a>
                        </Link>
                    </div>
                    <div
                        style={{marginTop: "3.35rem"}}
                        className="md:absolute md:right-52 sm:ml-10"
                    >
                        <a onClick={() => router.back()}>
                            <Button
                                variant="contained"
                                className="bg-sky-900 font-bold ml-2"
                                color="info"
                            >
                                Back
                            </Button>
                        </a>
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

export default Navba_postApp_user;
