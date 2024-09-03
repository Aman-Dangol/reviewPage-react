import { useParams } from "react-router-dom";
import useData from "./useData";

export default function ProductDescription() {
  let data = useData();
  console.log(data);

  return (
    <section className=" w-[50%]">
      <p>{data.description}n</p>
    </section>
  );
}
