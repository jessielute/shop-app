// SERVER SET UP -- PART 2
// 1. Create express server on por 8081
// 2.1 Create global variable called "cart" which is an empty array
// 2.2 Create app.get(/cart) route that sends back the cart array
// 3. Create app.post('/cart') route that received a single product object, adds it to the 
  // cart array, and res.sends the updated cart back

  // React Set up -- Part 3
  // 1. Add proxy to package.json for localhost:8081
  // 2. In component will mount, make a get request to /cart and get current cart []
  // 2.1 set state of this.state.cart (in shop) to response
  // 3. Make a add item function in shop
  // 3.1 have it POST a single item {} to /cart, and have a .then which takes the result
        // which is a full cart, and sets the state of this.state.cart (in shop) to the response array of objects