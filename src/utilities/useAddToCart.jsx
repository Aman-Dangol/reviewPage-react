import { create } from "zustand";

const useaddToCart = create((set) => ({
  items: [],
  // addToCart takes item and quantity as parameters
  addToCart: (item, quantity) =>
    set((state) => {
      let items = {
        items: [...state.items, { itemName: item, quantity: quantity }],
      };
      return items;
    }),
}));

export default useaddToCart;
