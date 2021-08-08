import React from 'react';
import fakeData from './../../fakeData';

const Inventory = () => {
    const handelAddProduct = () => {
        const product = {} ;
       fetch('http://localhost:5000/addProduct',{
           method: 'POST',
           headers: { 'Content-Type': 'application/json'},
           body:JSON.stringify(product)
       })  

    }
    return (
        <div>
        <form action="">
         <p><span>name:</span><input type="text"/></p> 
         <p><span>price:</span><input type="text"/></p> 
         <p><span>Quantity</span><input type="text"/></p> 
         <p><span>product img</span><input type="file"/></p> 
          <button onClick={handelAddProduct}>Add Product</button> 
        </form>
           
        </div>
    );
};

export default Inventory;