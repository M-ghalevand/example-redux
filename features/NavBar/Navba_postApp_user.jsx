import Link from "next/link";
import { useRouter } from "next/router";

const Navba_postApp_user = ({ users }) => {
  const user = users ? users : "Users App";
  const router = useRouter();
  return (
    <nav>
      <section className="ltr mt-50">
        <h1>{user}</h1>
        <div className="navContent">
          <div className="navLinks">
            <Link href="/app/post_app">
              <a dideo-checked="true">Post App</a>
            </Link>
            <Link href="/app/post_app/users">
              <a dideo-checked="true">Users</a>
            </Link>
          </div>
          <a
            dideo-checked="true"
            className="back"
            onClick={() => router.back()}
          >
            Back
          </a>
          <Link href="/">
            <a dideo-checked="true">Home</a>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navba_postApp_user;
