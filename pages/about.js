import Seo from "@/components/SEO";

export default function About() {
  return (
    <>
      <div>
        <Seo title="About" />
        <div className="about-container">
          <h1 className="title">About us</h1>
          <p className="about-text">
            Welcome to the official exploer for The New York Times Best Seller
            list explorer;
          </p>
          <p className="company">Company : Newyork Times</p>
          <p className="phone-nunmber">Phone Number : 02-321-2421</p>
        </div>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 60px 0px;
        }
        .title {
          color: #304352;
          font-weight: 800;
        }
        .about-container {
          background-color: white;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-radius: 10px;
          padding: 50px 20px;
          width: 50%;
          box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 12px;
        }
        .about-text {
          color: #304352;
          font-weight: 800;
        }
        .company,
        .phone-nunmber {
          color: #304352;
          font-weight: 800;
        }
      `}</style>
    </>
  );
}
