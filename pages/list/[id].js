import Link from "next/link";

export default function Detain({ id, results }) {
  const { books } = results;

  return (
    <>
      <h1>{id}</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book">
            <img src={book.book_image} />
            <h3 className="book__title">{book.title}</h3>
            <h4 className="book__author">{book.author}</h4>
            <div className="buy-now__btn">
              <Link href={book.amazon_product_url} legacyBehavior>
                <a className="buy-now__link">Buy Now</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        h1 {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 0px;
        }
        .books {
          display: grid;
          grid-template-columns: repeat(4, minmax(50px, 1fr));
          gap: 10px;
          padding: 0px 20px;
        }
        .book {
          background-color: green;
          border-radius: 10px;
        }
        .book img {
          width: 100%;
          height: 60%;
          border-radius: 10px;
        }
        .book__title {
          font-size: 20px;
          padding: 10px;
        }
        .book__author {
          padding: 5px 10px;
          color: #6f86d6;
        }
        .buy-now__btn {
          display: flex;
          align-items: center;
          background-color: #fdfbfb;
          width: 120px;
          height: 30px;
          margin: 5px 10px;
          border-radius: 10px;
          font-weight: 800;
          transition: transform 0.3s ease-in-out;
        }
        .buy-now__btn:hover {
          transform: translateY(3px);
        }
        .buy-now__link {
          width: 100%;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/newyorktimes/list/${id}`)
  ).json();
  return {
    props: {
      id,
      results,
    },
  };
}
