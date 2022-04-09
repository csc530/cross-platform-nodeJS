import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // * NOTE: class member variables are not initialized with let, const, or var

  // ? variable to hold value of the counter
  value = 0;

  constructor() { }

  /**
   * increment the value of the counter
   * and log the new value
   */
  increment() {
    console.log('increment: ' + this.value);
    this.value++;
  }

  /**
   * decrement the value of the counter
   * and log the new value
   */
  decrement() {
    console.log('decrement: ' + this.value);
    this.value--;
  }
}
