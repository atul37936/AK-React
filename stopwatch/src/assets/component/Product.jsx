import React, { useEffect, useState } from 'react'
import Form from './Form'

const Product = () => {

    const [data,setData] = useState([])
    
    const [id,setId] = useState()
    const [price,setPrice] = useState()


    function fetchData(){

        fetch('http://localhost:3000/Products',{
            method: 'GET',
        }).then((res)=>res.json())
        .then((data)=>setData(data))
        .catch((err)=>console.log(err))
    }
    
    const handleDelete = (id)=>{
     fetch(`http://localhost:3000/Products/${id}`,{
         method: 'DELETE',
         }).then((res)=>res.json())
           .then((data)=>Delete(data))
           .catch((err)=>console.log(err))
    }

    const handleEditClick= (id,price)=>{
        setId(id);
        setPrice(price)
        // console.log(price)
    }

    const handleUpdate = (id)=>{
        fetch(`http://localhost:3000/Products/${id}`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({price:price})
        }).then((res)=>res.json())
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err));
    }



useEffect(()=>{
    fetchData();
},[data])

  return (
    <>
     <Form/>

            <input type='text' name='price' value={price} placeholder='updatePrice' onChange={(e)=>setPrice(e.target.value)}/>
            <button onClick={()=>handleUpdate(id)}>Update</button>

        <h1>Product</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'10px'}}>
            {
                data.map((el)=>
                <div key={el.id} style={{border:'1px solid black'}}>
                    <img src={el.image} height={200} width={200}/>
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                    <h1>{el.price}</h1>
                    <i>{el.category}</i>
                    <br/>
                    <button onClick={() => handleEditClick(el.id, el.price)}>Edit</button>&nbsp; &nbsp;
                    <button onClick={()=>handleDelete(el.id)}>Delete</button>

                </div>)
            }
        </div>
    </>
  )
   
}

    
export default Product

