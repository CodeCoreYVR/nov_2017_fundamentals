// one class per file
// the file name should be the same as the class

// OreoCookies
// oreo_cookies.js
// oreoCookies.js


class Cookie {
  constructor(sugar, flour, glutten) {
    this.sugar = sugar;
    this.flour = flour;
    this.glutten = glutten;
  }

  eat() { console.log(`I am eating a cookie with ${this.sugar}g of sugar.`) }
  bake() { console.log(`I am baking a cookie with ${this.flour}g of flour.`) }
  garbage() { console.log(`I am throwing away a glutten-${this.glutten} cookie.`) }
}

// Test
let cookie = new Cookie(10, 15, false);
//let oreo = new Cookie(20, 10, false);
let oatmeal = new Cookie(5, 5, true);

// TDD
cookie.bake();
//oreo.eat();
oatmeal.garbage();

// allows up to extend cookie class in external file
module.exports = Cookie;
