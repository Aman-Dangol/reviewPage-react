import { create } from "zustand";

const useaddToCart = create((set) => ({
  items: new Map(),
  addToCart: (id, item, quantity, price) =>
    set((state) => {
      let NewItems = state.items;

      NewItems.set(item, {  
        id: id,
        quantity: (NewItems.get(item)?.quantity || 0) + parseInt(quantity),
        price:
          parseInt(quantity) * parseInt(price) +
          (NewItems.get(item)?.price || 0),
      });

      return NewItems;
    }),
}));

export default useaddToCart;
