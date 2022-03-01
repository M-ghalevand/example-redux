import Link from "next/link";
import Head from "next/head";

import PostAuthor from "../../../../features/post/components/posts/PostAuthor";
import PostReaction from "../../../../features/post/components/posts/PostReaction";
import TimeAge from "../../../../features/post/components/posts/TimeAge";
import Navba_postApp_user from "../../../../features/NavBar/Navba_postApp_user";
import jsonplaceholder from "../../../api/jsonplaceholder";

const PostId = ({ post }) => {
  const { title, body, userId, id } = post;

  return (
    <div>
      <Head>
        <title>post: {title.substring(0, 20)}</title>
      </Head>
      <div className="ltr">
        <Navba_postApp_user users={"Post"} />
        <section>
          <article className="post">
            <h2>{title}</h2>
            <div>
              <PostAuthor userId={userId} />
              <TimeAge postId={id} />
            </div>
            <p className="post-content">{body}</p>
            <PostReaction postId={id} />
            <Link href={`${id}`}>
              <a className="button" dideo-checked="true">
                Edit Post
              </a>
            </Link>
          </article>
        </section>
      </div>
    </div>
  );
};

export default PostId;

export async function getStaticPaths() {
  const posts = await jsonplaceholder.get("/posts");
  const paths = posts.data.map((post) => ({
    params: { PostId: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await jsonplaceholder.get(`/posts/${params.PostId}`);

  return {
    props: {
      post: post.data,
    },
  };
}
