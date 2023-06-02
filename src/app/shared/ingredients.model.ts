
// export class Ingredients {
//   public name: string;
//   public quantity: number;
//   constructor(name, quantity) {
//     this.name = name;
//     this.quantity = quantity;
//   }
// }

// this can be done shortcut way like below 👇

export class Ingredients{
  constructor(public name: string, public quantity: number) {
  }
}
