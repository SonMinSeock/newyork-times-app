import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <>
      <nav>
        <div>
          <Link href="/" legacyBehavior>
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </div>
      </nav>
      <style jsx>{`
        nav {
          position: fixed;
          width: 100%;
          z-index: 1;
          background-color: #ebedee;
        }
        nav div {
          display: flex;
          justify-content: space-between;
          padding: 10px 20px;
        }
        a {
          font-size: 18px;
          font-weight: 600;
          color: black;
        }
        .active {
          border-bottom: 3px solid;
        }
      `}</style>
    </>
  );
}
