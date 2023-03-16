import Link from "next/link";

export default function Home({ results }) {
  return (
    <div>
      <div className="category__container">
        <h1>The New York Times Best Seller</h1>
        <ul className="seller__list">
          {results.map((seller) => (
            <li className="seller__item">
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
        }
        .category__container {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .seller__list {
          display: flex;
          flex-wrap: wrap;
          background-color: green;
          height: 100%;
          width: 80%;
          border-radius: 10px;
          padding: 10px 20px;
        }
        .seller__item {
          cursor: pointer;
          background-color: tomato;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 10px;
          padding: 0px 20px;
          border: 2px solid black;
          height: 50px;
          font-size: 18px;
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
