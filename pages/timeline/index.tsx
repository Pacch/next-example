import Link from "next/link";
export default function Timeline({ userName }) {
  return (
    <>
      <div>
        <h1>soy timeline {userName}</h1>
        <Link href="/">
          <a href="">Go home</a>
        </Link>
      </div>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  );
}

Timeline.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((response) => {
      const { userName } = response;
      return { userName };
    });
};
