import Head from "next/head";
import {useDispatch} from "react-redux";
import ScrollTop from "react-scrolltop-button";

import {Navbar_postApp, Nav} from "../../../components/siteMe";
import {PostList} from "../../../components/post_app";
import {fetchusers} from "../../../components/post_app/users.Slice";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket} from "@fortawesome/free-solid-svg-icons"
import style from "../../../styles/Scroll.module.scss"

const PostApp = () => {
    const dispatch = useDispatch();
    dispatch(fetchusers());


    return (
        <div className="ltr bg-white mr-200">
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
    );
};

export default PostApp;
