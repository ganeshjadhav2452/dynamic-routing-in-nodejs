const db = require('../util/database')

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = Number(price);
    this.id = Math.floor(Math.random() * 1000) + 1
  }

  save() {
    console.log(typeof this.price)
  return  db.execute(`INSERT INTO Products  VALUES(?,?,?,?,?)`,[this.id,this.title,this.price,this.description,this.imageUrl])
  }

  static fetchAll() {
  return  db.execute('SELECT * FROM Products')
  }

  static findById(id) {
  
  }
};
