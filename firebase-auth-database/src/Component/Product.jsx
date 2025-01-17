import React from 'react'
import {useEffect , useState} from "react";
import axios from 'axios';

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchData = () => {
    axios
    .get("http://localhost:3000/Products")
    .then((res) => setProducts(res.data))
    .catch((err)=> console.log(err));
  };
  useEffect(() => {
    fetchData();
    }, []);

  return (
   <>
   <h1>Product Page</h1>
   <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap:"10px"
   }}>
    {products.map((el) => 
        console.log(el)
        // <div key={el.id} style={{width:"200px"}}>
        //   <img src={el.img} style={{ height: 200 , width: 200 }}></img>
        //   <h2>{el.name}</h2>
        //   <p>{el.price}</p>
        //   <p>{el.description}</p>
        //   </div>
          )
    }
      </div>
   
   </>

    

  )
}

export default Product