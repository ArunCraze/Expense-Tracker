import React, { useState } from 'react';
import './HomePage.css';
import f1 from './todd-kent-178j8tJrNlc-unsplash.jpg';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);

  const addProduct = (productName, expense) => {
    const newProduct = { id: Date.now(), name: productName, expense: expense };
    setProducts([...products, newProduct]);
    setTotalExpense(totalExpense + expense);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    const deletedProduct = products.find((product) => product.id === productId);

    if (deletedProduct) {
      setTotalExpense(totalExpense - deletedProduct.expense);
    }

    setProducts(updatedProducts);
  };

  return (
    <div style={{ backgroundImage: `url(${f1})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="expense-container">
        <h1>Family Expense Tracker</h1>

        
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Product Name:
            <input type="text" id="productName" />
          </label>
          <label>
            Expense:
            <input type="number" id="expense" />
          </label>
          <button
            onClick={() => {
              const productName = document.getElementById('productName').value;
              const expense = parseFloat(document.getElementById('expense').value);
              addProduct(productName, expense);
            }}
          >
            Add Product
          </button>
        </form>

        {/* Display product details */}
        <div>
          <h2>Product Details:</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {`${product.name}: ₹${product.expense.toFixed(2)}`}
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Display total expense */}
        <div>
          <h2>Total Expense:</h2>
          <p>{`₹${totalExpense.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
