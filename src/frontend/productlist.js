import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = ''; // Get JWT token from local storage or other source
        const response = await axios.get('https://fakestoreapi.com/products', {
          headers: {
            'Authorization': token
          }
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
        const results = products.filter(product =>{
            const productTitle = product.title ? product.title.toLowerCase() : '';
            const searchTermLower = searchTerm.toLowerCase();
            return productTitle.includes(searchTermLower) || product.id.toString().includes(searchTerm);
        });
        setSearchResults(results);
      }
    }, [searchTerm, products]);
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2 style={{marginLeft:"45%"}}>Product List</h2>
      <input style={{padding:"10px",marginLeft:"45%"}}
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul style={{ display: 'flex', flexWrap: 'wrap', padding: 0, listStyleType: 'none',}}>
      {searchResults.map(product => (
    <li key={product.id} style={{ flex: '0 0 25%', margin: '30px', border: '2px solid #ccc', borderRadius: '8px', padding: '10px' }}>
      <p>{product.id}</p>
      <h4 style={{width:'100%'}}>{product.title}</h4>
      <p>{product.image && <img style={{ width: '50%',justifyContent:"center",alignContent:"center", marginBottom: '5px'}} src={product.image} alt={product.name} />}</p> {/* Render image if available */}
      
     
      <p style={{width:'100%'}}>{product.description}</p>
      <p style={{width:'100%'}}>Price: ${product.price}</p>
    </li>
  ))}
      </ul>
    </div>
  );
};

export default ProductList;
