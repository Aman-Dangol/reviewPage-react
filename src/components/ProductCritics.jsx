import { Link, useLocation } from "react-router-dom";
export default function ProductCritics({ id }) {
  let location = useLocation();

  return (
    <section className="grid grid-cols-3  w-[50%]">
      <Link className={`focus:font-bold `} to={`/product/${id}`}>
        <h3
          className={`${
            location.pathname == `/product/${id}` ? "font-bold" : "font-normal"
          }`}
        >
          Description
        </h3>
      </Link>
      <Link to={`/product/${id}/reviews`} className="focus:font-bold">
        <h3
          className={`${
            location.pathname == `/product/${id}/reviews`
              ? "font-bold"
              : "font-normal"
          }`}
        >
          Reviews
        </h3>
      </Link>
      <Link to={`/product/${id}/Discussion`} className="focus:font-bold">
        <h3
          className={`${
            location.pathname == `/product/${id}/Discussion`
              ? "font-bold"
              : "font-normal"
          }`}
        >
          Discussion
        </h3>
      </Link>
    </section>
  );
}
