import React from 'react'
import {listData} from "../../data/data"
import Card from "../Card/Card"
import "./List.scss"

const List = () => {
  return (
    <div className="list">
      {
        listData.map((item) => {
          return (
            <Card
            item={item}
            key={item.id}
            />
          )
        })    
      }
    </div>
  ) 
}

export default List