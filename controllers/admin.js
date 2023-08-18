const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',

  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(null,title, imageUrl, description, price);

  product.save().then(data=>  res.redirect('/')).catch(err => console.log(err))

};

exports.getEditProduct = (req, res, next) => {
  const editMod = req.query.edit

  if(!editMod){
   return req.redirect('/')
  }
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/add-product',
    editing:editMod

  })
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

