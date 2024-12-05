import React, { useState } from 'react'

const Form = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch('http://localhost:3000/Products',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res)=>res.json())
            .then((data)=>setData(data))
            .catch((err)=>console.error(err))
        
    }

    const iniitalState = {
        image : '',
        title : '',
        description :' ',
        category:'',
        price :''
    }
    const [data,setData] = useState(iniitalState)


    const handleChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }



  return (
    <div>
      
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' name='image' placeholder='image' onChange={(e)=>handleChange(e)}/>
            <input type='text' name='title' placeholder='title' onChange={(e)=>handleChange(e)}/>
            <input type='text' name='description' placeholder='description' onChange={(e)=>handleChange(e)}/>
            <input type='text' name='category' placeholder='category' onChange={(e)=>handleChange(e)}/>
            <input type='text' name='price' placeholder='price' onChange={(e)=>handleChange(e)}/>
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Form


