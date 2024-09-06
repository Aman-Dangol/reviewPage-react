import useaddToCart from "../utilities/useAddToCart";
import { Link } from "react-router-dom";
export default function Mycart() {
  let { items } = useaddToCart();
  let element = <h1>No items found</h1>;

  items.size != 0
    ? (element = (
        <div className="mx-auto my-0 ">
          <table className="mx-auto my-2 ">
            <thead>
              <tr>
                <th className="">ITEM</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
              </tr>
            </thead>
            {items <= 0 && <p>no items found</p>}
            <tbody>
              {[...items.entries()].map((obj, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/product/${obj[1].id}`} className="w-full">
                      {obj[0]}
                    </Link>
                  </td>
                  <td>{obj[1].quantity}</td>
                  <td>${obj[1].price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))
    : "";

  return element;
}
