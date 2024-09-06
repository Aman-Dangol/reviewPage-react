import useaddToCart from "../utilities/useAddToCart";
export default function Mycart() {
  let { items } = useaddToCart();
  let element = <h1>No items found</h1>;
  items.length != 0
    ? (element = (
        <div className="mx-auto my-0 ">
          <table className="mx-auto my-2 ">
            <tHead>
              <th className="">ITEM</th>
              <th>QUANTITY</th>
            </tHead>
            {items <= 0 && <p>no items found</p>}

            {items.map((obj) => (
              <tr>
                <td>{obj.itemName}</td>
                <td>{obj.quantity}</td>
              </tr>
            ))}
          </table>
        </div>
      ))
    : "";

  return element;
}
