import useaddToCart from "../utilities/useAddToCart";
export default function Mycart() {
  let { items } = useaddToCart();
  let element = <h1>No items found</h1>;
  console.log(items);

  items.size != 0
    ? (element = (
        <div className="mx-auto my-0 ">
          <table className="mx-auto my-2 ">
            <thead>
              <tr>
                <th className="">ITEM</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            {items <= 0 && <p>no items found</p>}
            <tbody>
              {[...items.entries()].map((obj, index) => (
                <tr key={index}>
                  <td>{obj[0]}</td>
                  <td>{obj[1].quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))
    : "";

  return element;
}
