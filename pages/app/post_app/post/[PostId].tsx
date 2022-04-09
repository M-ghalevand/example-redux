import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import {
  EditPost,
  PostAuthor,
  PostReaction,
  TimeAge,
} from "../../../../components/post_app";
import { Nav, Navba_postApp_user } from "../../../../components/SiteMe";
import { selectPostById } from "../../../../components/post_app/postsSlice";
import jsonplaceholder from "../../../../services/jsonplaceholder";

const PostId = ({ data }) => {
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

  const { title, body, userId, id } = post1 ? post1 : data;
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
        <Navba_postApp_user users={"Post"} />
        <section>
          <article className="post">
            <h2>{title}</h2>
            <div>
              <PostAuthor userId={userId} />
              <TimeAge postId={id} />
            </div>
            <p className="post-content">{body}</p>
            <PostReaction postId={id} reaction={reactions} />
            <EditPost title={title} body={body} id={id} />
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
    let postData = await jsonplaceholder.get(`/posts/${postId}`);
    data = postData.data;
  } else {
    data = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nnostrum rerum est autem sunt rem eveniet architecto",
    };
  }
  return {
    props: { data },
  };
}

export default PostId;
