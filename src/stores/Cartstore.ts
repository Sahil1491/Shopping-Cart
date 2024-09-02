import { makeAutoObservable } from 'mobx';

class CartStore {
  cartItems: { name: string; price: number; image: string }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(item: { name: string; price: number; image: string }) {
    this.cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  get cartCount() {
    return this.cartItems.length;
  }

  loadCartItems() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }
}

export const cartStore = new CartStore();
