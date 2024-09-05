import useData from "./useData";

export default function ProductDescription() {
  let data = useData();
  return <section>{data.description}</section>;
}
