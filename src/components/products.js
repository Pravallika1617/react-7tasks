import React, { useState, useEffect } from 'react';
import Navbar1 from './navbar';
import "./products.css";
import Cart from "./cart";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [cart, setCart] = useState([]);
  const [display, setDisplay] = useState(false);
  const [added, setAdded] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products');
    let productList = await res.json();
    setProducts(productList);
    console.log(productList);
  }

  const srchProducts = products.filter(product => {
    return product.title.toLowerCase().includes(search.toLowerCase()) &&
      (select === '' || product.category === select);
  })

  const categories = Array.from(new Set(products.map(product => product.category)));

  const displayCart = () => {
    setDisplay(!display);
  }

  const addToCart = (productId) => {
    if (added.includes(productId)) {
      setAdded(added.filter(id => id !== productId));
    } else {
      setAdded([...added, productId]);
      const selectedProduct = products.find(product => product.id === productId);
      selectedProduct.quantity = 1;
      setCart([...cart, selectedProduct]);
    }
  }

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const productSelect = (productId) => {
    return added.includes(productId);
  };

  return (
    <div className='one'>
      <Navbar1 />
      <h1>Products</h1>
      <div className='bar'>
        <input type='search' placeholder='🔍Search here...' value={search} onChange={(e) => setSearch(e.target.value)} />

        <select value={select} onChange={(e) => setSelect(e.target.value)}>
          <option value="">All Categories</option>
          {
            categories.map(category => (
              <option value={category} key={category}>{category}</option>
            ))
          }
        </select>

        <button onClick={displayCart}>🛒</button>
      </div>
      <div className='products_list'>
        {!display ?
          srchProducts.map(product => (
            <div key={product.id} className='product' onClick={() => addToCart(product.id)}>
              <img src={product.image} alt={product.title} />
              <h2 className='title'>{product.title}</h2>
              <p className='category'>{product.category}</p>
              <h2 className='price'>${product.price}</h2>
              <p>Rating:{product.rating.rate}⭐</p>
              {productSelect(product.id) ? (
                <button onClick={displayCart}>Go to Cart</button>
              ) : (
                <button>Add to Cart</button>
              )}
            </div>
          )) :
          <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        }
      </div>
    </div>
  );
}

export default Products;
