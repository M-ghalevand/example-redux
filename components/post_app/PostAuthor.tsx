import { useSelector } from "react-redux";
import Link from "next/link";

import { selectUsersById } from "./users.Slice";

const PostAuthor = ({ userId }) => {
  const Author = useSelector((state) => selectUsersById(state, userId));
  let user;
  if (Author) {
    user = (
      <span className="text-lg ">
        by name:&nbsp;&nbsp;
        <Link href={`/app/post_app/users/${Author.id}`}>
          <a>{Author.name} </a>
        </Link>
      </span>
    );
  }
  return <>{Author ? user : <span>by name: unknown Author </span>}</>;
};

export default PostAuthor;
