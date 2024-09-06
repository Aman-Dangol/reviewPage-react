import { create } from "zustand";

const useaddToCart = create((set) => ({
  items: new Map(),
  addToCart: (item, quantity, price) =>
    set((state) => {
      let NewItems = state.items;
      console.log("new item", NewItems.get(item)?.quantity || 0);

      NewItems.set(item, {
        quantity: (NewItems.get(item)?.quantity || 0) + parseInt(quantity),
        price: price,
      });

      return NewItems;
    }),
}));

export default useaddToCart;
