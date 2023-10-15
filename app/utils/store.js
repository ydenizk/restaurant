//bu sayfa zustand sayfası

import { create } from "zustand";
import {persist} from "zustand/middleware"

const INITIAL_STATE = {
  //başlangıç state leri
  products: [],
  totalItems: 0,
  totalPrice: 0,
};
//burdakı persist i sonradan ekledsik,sayfa yenılenince cart dakkı adetler gitmsin die,
//saedec bunu yapınca hydration error verıor onun içinde persist ın objesine skiphydration true ekledik.
export const useCartStore = create(persist((set, get) => ({
  products: INITIAL_STATE.products,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,

//aşağodakı ıkısı de action lar


 
addToCart(item) {
  const products = get().products;
  const productInState = products.find(
    (product) => product.id === item.id
  );

  if (productInState) {
    const updatedProducts = products.map((product) =>
      product.id === productInState.id
        ? {
            ...item,
            quantity: item.quantity + product.quantity,
            price: item.price + product.price,
          }
        : item
    );
    set((state) => ({
      products: updatedProducts,
      totalItems: state.totalItems + item.quantity,
      totalPrice: state.totalPrice + item.price,
    }));
  } else {
    set((state) => ({
      products: [...state.products, item],
      totalItems: state.totalItems + item.quantity,
      totalPrice: state.totalPrice + item.price,
    }));
  }
},
  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter((product) => product.id != item.id),
     totalItems: state.totalItems - item.quantity,
      totalPrice: state.totalPrice - item.price,
    }));
  },
}),{name:"cart",skipHydration:true}));
