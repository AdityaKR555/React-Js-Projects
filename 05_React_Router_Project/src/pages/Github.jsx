import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px"}}>
        <h2>Name : {data.name}</h2>
        <img style={{border: "4px solid darkOrange", borderRadius: "20px"}} src={data.avatar_url} alt="Git picture" width={300} />
         <h2>Github following: {data.following}</h2>
         <h2>Github followers: {data.followers}</h2>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AdityaKR555')
    return response.json()
}