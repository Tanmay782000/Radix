import React from "react"
import  Data  from "./data"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
export default function About(){

  let param = useParams()
  return(
      <div>
      <h1>asdasdsad{param.id}</h1>
      {
        Data().map((p) => (
          <Link to={`/about/${p.id}`}><li>{p.name}</li></Link>        
        ))
      }
      </div>
    )
}