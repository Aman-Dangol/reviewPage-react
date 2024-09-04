import { useParams } from "react-router-dom";
import { PRODUCT_LIST } from "../constants/ProductLists";
export default function useData() {
  let { id } = useParams();

  let data = PRODUCT_LIST.filter((product) => product.id == id);
  const [data1] = data;
  return data1;
}
