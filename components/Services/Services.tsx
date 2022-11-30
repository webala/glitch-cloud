import React from 'react'
import Portrait from './components/Portrait'
import Ruracio from './components/Ruracio'
import Weddings from './components/Weddings'
import style from './Services.module.scss'

function Services() {
  return (
    <div className={style.services}>
        <h1 className={style.services_heading}>Services</h1>
        <Weddings />

        <div className={style.micro_service}>
          <Ruracio />
          <Portrait />
        </div>
    </div>
  )
}

export default Services