import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function ProductCritics() {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <section className="grid grid-cols-3 w-[50%]">
      <Link className={`focus:font-bold `} to="/">
        <h3
          className={`${
            location.pathname == "/" ? "font-bold" : "font-normal"
          }`}
        >
          Details
        </h3>
      </Link>
      <Link to="/reviews" className="focus:font-bold">
        <h3
          className={`${
            location.pathname == "/reviews" ? "font-bold" : "font-normal"
          }`}
        >
          Reviews
        </h3>
      </Link>
      <Link to="/Discussion" className="focus:font-bold">
        <h3
          className={`${
            location.pathname == "/Discussion" ? "font-bold" : "font-normal"
          }`}
        >
          Discussion
        </h3>
      </Link>
    </section>
  );
}
