import useaddToCart from "../utilities/useAddToCart";
export default function Mycart() {
  let cartItems = useaddToCart().items;

  return (
    <div>
      {cartItems.length <= 0 && <p>no items found</p>}
      {cartItems.map((obj) => (
        <p>{obj.itemName} </p>
      ))}
    </div>
  );
}
