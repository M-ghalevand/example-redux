import { useSelector } from "react-redux";
import { selectUsersById } from "../users/users.Slice";

const PostAuthor = ({ userId }) => {
  const Author = useSelector((state) => selectUsersById(state, userId));

  return <span>by name: {Author ? Author.name : "unknown Author"} </span>;
};

export default PostAuthor;
