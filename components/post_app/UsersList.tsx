import Link from "next/link";
import { useSelector } from "react-redux";

import { selectUserAll } from "./users.Slice";

const UsersList = () => {
  const users = useSelector(selectUserAll);
  const userList = users.map((user) => (
    <li key={user.id} className="text-lg font-bold my-1 hover:text-sky-700">
      <Link href={`users/${user.id}`}>
        <a dideo-checked="true">{user.name}</a>
      </Link>
    </li>
  ));
  return (
    <section className="bg-white min-h-screen ">
      <div className="ml-32 pt-5">
          <h2 className="text-3xl font-black my-5">Users</h2>
          <ul className="list-disc">{userList}</ul>
      </div>
    </section>
  );
};

export default UsersList;
