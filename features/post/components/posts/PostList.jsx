import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "./AddPost";

import PostExcerpt from "./PostExcerpt";
import { selectPostIds, fetchPosts } from "./postsSlice";

const PostList = () => {
  const dispatch = useDispatch();

  const postId = useSelector(selectPostIds);
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let PostExcerptContent;

  switch (status) {
    case "loading":
      PostExcerptContent = <div className="loader"> loading ...</div>;
      break;
    case "success":
      PostExcerptContent = postId.map((id) => (
        <PostExcerpt key={id} postId={id} />
      ));
      break;
    case "error":
      PostExcerptContent = <div className="loader"> loading ...</div>;
      break;
    default:
      break;
  }

  return (
    <>
      <AddPost />
      <section className="posts-list">
        <h2>Posts</h2>
        {PostExcerptContent}
      </section>
    </>
  );
};

export default PostList;
