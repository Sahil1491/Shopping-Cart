import { makeAutoObservable } from 'mobx';

class CartStore {
  cartItems: { name: string; price: number; image: string }[] = [];
  cartCount: number = 0;

  constructor() {
    makeAutoObservable(this);
    this.loadItemsFromLocalStorage();
  }

  addToCart(item: { name: string; price: number; image: string }) {
    this.cartItems.push(item);
    this.cartCount = this.cartItems.length;
    this.saveItemsToLocalStorage();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.cartCount = this.cartItems.length;
    this.saveItemsToLocalStorage();
  }

  saveItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  loadItemsFromLocalStorage() {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
      this.cartCount = this.cartItems.length;
    }
  }
}

export const cartStore = new CartStore();
