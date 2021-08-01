import React,{useState,useEffect} from 'react';

import Products from '../Products';

import axios from 'axios';


function Container(){
        
    const [productos,setProductos]=useState([]);
    
    useEffect(()=>{
        axios("https://my-json-server.typicode.com/FranciscoEscobar97/api/lista").then((res)=>setProductos(res.data));
    },[]);

    return(
        <>
                    
         <Products productos={productos}/>
         
         
        </>
    )

}

export default Container;