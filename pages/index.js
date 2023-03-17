import Seo from "@/components/SEO";
import Link from "next/link";

export default function Home({ results }) {
  return (
    <div>
      <Seo title="Home" />
      <div className="category__container">
        <h1>The New York Times Best Seller</h1>
        <ul className="seller__list">
          {results.map((seller, id) => (
            <li className="seller__item" key={id}>
              <Link href={`/list/${seller.list_name}`} legacyBehavior>
                <a>{seller.list_name} ➡️</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }
        h1 {
          padding: 60px 0px;
          color: black;
          opacity: 0.5;
          font-weight: bold;
        }
        .category__container {
          display: flex;
          align-items: center;
        }
        .seller__list {
          display: flex;
          flex-wrap: wrap;
          background-color: #fdfcfb;
          width: 50%;
          height: 70%;
          border-radius: 10px;
          padding: 10px 20px;
        }
        .seller__item {
          cursor: pointer;
          background-color: #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          padding: 0px 20px;
          border: 2px solid black;
          border-radius: 15px;
          height: 50px;
          font-size: 18px;
          color: black;
          transition: transform 0.3s ease-in-out;
        }
        .seller__item:hover {
          transform: scale(1.03);
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/newyorktimes`)
  ).json();

  return {
    props: {
      results,
    },
  };
}
