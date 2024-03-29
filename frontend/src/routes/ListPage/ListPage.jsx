import React from 'react'
import Map from '../../components/Map/Map'
import {listData} from "../../data/data"
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import "./ListPage.scss"


const ListPage = () => {
  const data = listData;
  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
          {
            data.map((item) => {
              return (
                <Card  item ={item} key={item.id} />
              )
            })
          }
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
    </div>
  )
}

export default ListPage