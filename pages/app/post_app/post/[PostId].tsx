import Head from "next/head";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

import {
    EditPost,
    PostAuthor,
    PostReaction,
    TimeAge,
} from "../../../../components/post_app";
import {Nav, Navba_postApp_user} from "../../../../components/siteMe";
import {selectPostById} from "../../../../components/post_app/postsSlice";
import {post} from "../../../../services/url";

const PostId = ({data}) => {
    // @ts-ignore
    const postId: number = parseInt(useRouter().query.PostId);
    const post1: {
        title: string;
        body: string;
        userId: number;
        id: number;
        reaction: {
            thumbsUp: number;
            heart: number;
            hooray: number;
            rocket: number;
            eyes: number;
        };
    } = useSelector((state) => selectPostById(state, postId));

    const {title, body, userId, id} = post1 ? post1 : data;
    let reactions: {
        thumbsUp: number;
        heart: number;
        hooray: number;
        rocket: number;
        eyes: number;
    } = {
        thumbsUp: 0,
        heart: 0,
        hooray: 0,
        rocket: 0,
        eyes: 0,
    };
    if (post1) {
        if (typeof post1.reaction === "object") {
            reactions = post1.reaction;
        }
    }

    return (
        <div>
            <Head>
                <title>post: {title.substring(0, 20)}</title>
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
                <Navba_postApp_user users={"Post"}/>
                <section className="bg-white min-h-screen p-10">
                    <article className="ml-16 w-mx md:w-7/12 p-10 text-gray-600 border-2 rounded-lg">
                        <h3 className="text-3xl font-black mt-4">{title}</h3>
                        <div>
                            <PostAuthor userId={userId}/>
                            <TimeAge postId={id}/>
                        </div>
                        <p className="post-content text-xl font-bold">{body}</p>
                        <PostReaction postId={id} reaction={reactions}/>
                        <EditPost title={title} body={body} id={id}/>
                    </article>
                </section>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const postId: number = parseInt(context.query.PostId);
    let data;
    if (postId <= 100) {
        let postData = await post.get(`/posts/${postId}`);
        data = postData.data;
    } else {
        data = {
            userId: 1,
            id: 1,
            title: "Test",
            body: "Test",
        };
    }
    return {
        props: {data},
    };
}

export default PostId;
