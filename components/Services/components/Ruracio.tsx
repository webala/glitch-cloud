import React from 'react'
import style from '../Services.module.scss'

function Ruracio() {
  return (
    <div className={style.ruracio}>
        <div className={style.heading}>
             <h1 >Ruracio</h1>
        </div>
    <div className={style.categories}>
        <div className={style.photography}>
            <h2 className="">Photography</h2>
            <div className={style.packages}>
            <div className={style.package}>
                <ul className="">
                    <li>1 Photographer</li>
                    <li>Full event photography</li>
                    <li>A3 Photomount (1 piece)</li>
                    <li>A4 Photobook (20 pages)</li>
                </ul>
                <div className={style.price}>
                    <p className="">ksh 11000</p>
                </div>
            </div>
            </div>
        </div>
        <div className={style.videography}>
            <h2 className="">Videography</h2>
            <div className={style.packages}>
            <div className={style.package}>
                <ul className="">
                    <li>1 videographer</li>
                    <li>Drone pilot</li>
                    <li>Full event video coverage</li>
                    <li>1 YouTube teaser</li>
                    <li>Flash drive with photos and edited video</li>
                    <li>Drone services</li>
                </ul>
                <div className={style.price}>
                    <p className="">ksh 22000</p>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Ruracio