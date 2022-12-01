function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}
