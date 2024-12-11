import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Cards() {
  const[value,setvalue] = useState([]) 
  const[load,setload] = useState(true)
  const[page,setpages] = useState(1)
  function fetchdata() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`).
   then((res) => res.json()).
   then((datas) => {
    setload(false);
    setvalue(datas);
    console.log(datas);
    
    
  }).catch((err)=>console.log(err));
  }
  useEffect(() => {
    fetchdata();
  },[page]);

  return (load) ? <h2 style={{placeItems:'center'}}>Loading........</h2> :(
    <div>
       <div className='div'> 
      {value.map((el) => (
       
        <div className='card'key={el.id} >
        <h1>{el.id}</h1>
        <h2 className="card-title">{el.title}</h2>
        <p className="card-body">{el.body}</p>
      </div>
      
      )
      )}
      </div>
      <br/>
      <div className='Adjust'>
          <button onClick={() => {
            (page > 1) ? setpages(page - 1) : ""
          }}>Prev</button>
          <h2 className='style'>{page}</h2>
          <button onClick={() => {
            (page < 10) ? setpages(page + 1) : ""
          }}>Next</button>
      </div>  

    </div>
  )
}

export default Cards
