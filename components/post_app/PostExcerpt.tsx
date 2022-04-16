import Link from "next/link";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

import { PostAuthor, PostReaction, TimeAge } from "./";
import { selectPostById } from "./postsSlice";


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
      <article className="mx-auto w-fit mt-10 px-10 text-gray-600 border-2 rounded-lg overflow-hidden md:w-3/5 sm:w-4/5">
        <h3 className="text-3xl font-black mt-4">{title.substring(0, 20)}...</h3>
        <div>
          <PostAuthor userId={userId} />
          <TimeAge postId={id} />
        </div>
        <p className="post-content text-xl font-bold">{body.substring(0, 50)}....</p>
        <PostReaction postId={id} reaction={reactions} />
        <Link href={`post_app/post/${id}`}>
          <a>
              <Button
                  variant="contained"
                  className="bg-sky-900 font-bold my-4"
                  color="info"
              >
                  View Post
              </Button>
          </a>
        </Link>
      </article>
    </div>
  );
};

export default PostExcerpt;
