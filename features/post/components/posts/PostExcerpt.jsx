import Link from "next/link";
import { useSelector } from "react-redux";

import PostAuthor from "./PostAuthor";
import PostReaction from "./PostReaction";
import { selectPostById } from "./postsSlice";
import TimeAge from "./TimeAge";

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  const { title, body, userId, id } = post;

  return (
    <div>
      <article className="post-excerpt">
        <h3>{title.substring(0, 20)}...</h3>
        <div>
          <PostAuthor userId={userId} />
          <TimeAge postId={id} />
        </div>
        <p className="post-content">{body.substring(0, 70)}....</p>
        <PostReaction postId={id} />
        <Link href={`/post_app/post/${id}`}>
          <a className="button muted-button" dideo-checked="true">
            View Post
          </a>
        </Link>
      </article>
    </div>
  );
};

export default PostExcerpt;
