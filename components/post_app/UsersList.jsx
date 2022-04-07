import Link from "next/link";
import { useSelector } from "react-redux";

import { selectUserAll } from "./users.Slice";

const UsersList = () => {
  const users = useSelector(selectUserAll);
  const userList = users.map((user) => (
    <li key={user.id}>
      <Link href={`users/${user.id}`}>
        <a dideo-checked="true">{user.name}</a>
      </Link>
    </li>
  ));
  return (
    <section>
      <h2>Users</h2>
      <ul>{userList}</ul>
    </section>
  );
};

export default UsersList;
