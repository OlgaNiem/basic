import React from 'react'
import style from '../styles/Home.module.css'
import Image from 'next/image'

const about = () => {
  return (
    <div>
      <h1>Three fun facts about cats and dogs</h1>
        <ul>
          <li>The nose print of dogs, cats and other animals is unique – much like a human fingerprint.</li>
          <li>Cats can rotate their ears 180 degrees.</li>
          <li>Dogs have ~1700 taste buds as compared to humans who have ~9000. They can taste sweet, sour, salty and bitter.</li>
        </ul>

      {
        ['1', '2', '3'].map(path =>{
          return(
            <div key={path}>
              <Image src={`/${path}.jpg`} alt='pet' width='420' height='280'/>        
            </div>
          )
        })
      }

      </div>
    
  )
}

export default about