import Head from "next/head";
import {useDispatch} from "react-redux";
import ScrollTop from "react-scrolltop-button";

import {Navbar_postApp, Nav} from "../../../components/siteMe";
import {PostList} from "../../../components/post_app";
import {fetchusers} from "../../../components/post_app/users.Slice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons"
import style from "../../../styles/Scroll.module.scss"

const myFunc1 = () => {
    const x = document.getElementById("mynav");
    if (x.classList.item(2) === "XsBlock") {
        x.classList.remove("XsBlock");
        x.classList.add("XsHidden");
    }
};

const Index = () => {
    const dispatch = useDispatch();
    dispatch(fetchusers());


    return (
        <>
            <Head>
                <title>Post App</title>
            </Head>

            <Nav
                app="active"
                nav={undefined}
                about={undefined}
                resume={undefined}
                blog={undefined}
                conteact={undefined}
            />
            <div className="ltr bg-white mr-200" onClick={myFunc1}>
                <Navbar_postApp/>

                <PostList/>
                <ScrollTop
                    text={<FontAwesomeIcon icon={faRocket}/>}
                    distance={100}
                    breakpoint={768}
                    className={style.scroll}
                    speed={1100}
                    target={10}
                    icon={<FontAwesomeIcon icon={faRocket}/>}
                />

            </div>
        </>
    );
};

export default Index;
