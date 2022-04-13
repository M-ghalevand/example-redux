import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddPost, PostExcerpt } from "./";
import { fetchPosts, selectPostIds } from "./postsSlice";

const PostList = () => {
  const dispatch = useDispatch();

  const postId = useSelector(selectPostIds);
  // @ts-ignore
  const status = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let PostExcerptContent;

  switch (status) {
    case "loading":
      PostExcerptContent = <div className="loader"></div>;
      break;
    case "success":
      PostExcerptContent = postId.map((id) => (
        <PostExcerpt key={id} postId={id} />
      ));
      break;
    case "error":
      PostExcerptContent = <div className="loader"></div>;
      break;
    default:
      break;
  }

  return (
    <>
      <AddPost />
      <section className="posts-list bg-white">
        <h2 className="text-4xl font-bold mx-auto w-fit  my-10 px-10 text-gray-600" >Posts</h2>
        <div className="min-h-screen bg-white">{PostExcerptContent}</div>
      </section>
    </>
  );
};

export default PostList;
