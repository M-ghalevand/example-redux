import Link from "next/link";
import { useSelector } from "react-redux";

import { PostAuthor, PostReaction, TimeAge } from "./";
import { selectPostById } from "./postsSlice";
import { Button } from "@mui/material";

const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  const { title, body, userId, id, reaction } = post;
  const reactions = reaction
    ? reaction
    : {
        thumbsUp: 0,
        heart: 0,
        hooray: 0,
        rocket: 0,
        eyes: 0,
      };
  return (
    <div>
      <article className="post-excerpt">
        <h3>{title.substring(0, 20)}...</h3>
        <div>
          <PostAuthor userId={userId} />
          <TimeAge postId={id} />
        </div>
        <p className="post-content">{body.substring(0, 70)}....</p>
        <PostReaction postId={id} reaction={reactions} />
        <Link href={`post_app/post/${id}`}>
          <a>
            <Button variant="contained" className="mt-2">
              View Post
            </Button>
          </a>
        </Link>
      </article>
    </div>
  );
};

export default PostExcerpt;
