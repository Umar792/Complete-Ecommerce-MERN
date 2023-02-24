import React from 'react'
import HomeApicallData from './HomeApicallData'
import HomeMenAPI from './HomeCatageoryApi'
import "./HomeMenDressing.css"


const HomeCatetgoryDressing = () => {
  return (
    <>
      {
        HomeMenAPI.map((curElem, index) => {
          return (
            <div key={index}>
              <HomeApicallData link={curElem.link} imgsrc={curElem.imgsrc} title={curElem.title} />
            </div>

          )
        })
      }


    </>
  )
}

export default HomeCatetgoryDressing
