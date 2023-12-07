import React, { useEffect, useState } from 'react'
import SinglePerson from './SinglePerson'
import { Blocks } from 'react-loader-spinner'

const FetchData = () => {
    const [loading,setLoading]=useState(false)
    const api="https://api.github.com/users"
    const [people,setPeople]=useState([])

    const fetchUser = async()=>{
        
        setLoading(true)

        const response=await fetch(api)
        
        const data=await response.json()
        setPeople(data)
        setLoading(false)
       // console.log(people)

    }

    useEffect(()=>{
        fetchUser()
    },[])

    if (loading)
    {
      return(
        <div style={{
            height:'100vh',
            width:'100vw'
            }} className="d-flex justify-content-center align-items-center">
           <Blocks
              visible={true}
              height="180"
              width="180"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />

        </div>
       
      ) 
    }

  
    return(
    <>

   
    <div className="container text-start">
    <div className="row">
    {
           
        people.map((person)=> {
                //console.log(person.login)
               return (
                <>
                 <SinglePerson {...person}/>
              
                 
                 
                </>
               

               )        
              
            })
     }


            </div>
           
    </div>
   
    </>
  )
}

export default FetchData