import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addReactions } from "./postsSlice";

const reactionIcons = {
  thumbsUp: "👍",
  heart: "❤️",
  hooray: "🎉",
  rocket: "🚀",
  eyes: "👀",
};
const PostReaction = ({ postId }) => {
  const dispatch = useDispatch();
  const [reactionNumber, setReactionNumber] = useState({
    thumbsUp: 0,
    heart: 0,
    hooray: 0,
    rocket: 0,
    eyes: 0,
  });

  useEffect(() => {
    dispatch(addReactions(postId, reactionNumber));
  }, [reactionNumber]);

  const handlClick = (target, numberTarget) => {
    setReactionNumber({ ...reactionNumber, [target]: (numberTarget += 1) });
  };

  const reactionBtn = Object.keys(reactionIcons).map((reaction) => (
    <button
      type="button"
      key={reaction}
      className="muted-button reaction-button"
      onClick={() => handlClick(reaction, reactionNumber[reaction])}
    >
      {reactionIcons[reaction]} {reactionNumber[reaction]}
    </button>
  ));

  return <div>{reactionBtn}</div>;
};
export default PostReaction;
