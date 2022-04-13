import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

import {seletPostByUser} from "../../../../components/post_app/postsSlice";
import {Navba_postApp_user, Nav} from "../../../../components/siteMe";
import {post} from "../../../../services/url";

const UserId = ({user}) => {
    const userId: number = parseInt(useRouter().query.UserId as string);
    // @ts-ignore
    const userPost: [] = useSelector((state) => seletPostByUser(state, userId));
    const postLink = userPost.map(({id, title}) => (
        <li key={id} className="text-lg font-bold my-1 hover:text-sky-700">
            <Link href={`/app/post_app/post/${id}`}>
                <a dideo-checked="true">{title}</a>
            </Link>
        </li>
    ));

    return (
        <div>
            <Head>
                <title>User: {user.name.substring(0, 20)}</title>
            </Head>
            <Nav
                app="active"
                nav={undefined}
                about={undefined}
                resume={undefined}
                blog={undefined}
                conteact={undefined}
            />
            <div className="ltr mr-200">
                <Navba_postApp_user users={user.name.substring(0, 6) + " User"}/>
                <section className="bg-white min-h-screen">
                    <div className="ml-32 pt-5">
                        <h2 className="text-3xl font-black my-5">{user.name}</h2>
                        <ul className="list-disc">{postLink}</ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UserId;

export async function getStaticPaths() {
    const users = await post.get("/users");

    const paths = users.data.map((user) => ({
        params: {UserId: user.id.toString()},
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const user = await post.get(`/users/${params.UserId}`);

    return {
        props: {
            user: user.data,
        },
    };
}
