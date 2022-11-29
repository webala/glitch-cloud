import React from 'react'
import style from '../Services.module.scss'

function Portrait() {
  return (
   
<div className={style.portraits}>
    <div className={style.heading}>
        <h1 className="text-3xl text-textSecondary my-5  font-bold">Portraits</h1>
    </div>
    <div className={style.categories}>
        <div className={style.packages}>
        <div className={style.package}>
            <h3 className="text-textSecondary font-semibold text-xl">Gold</h3>
            <div>
                <ul className="list-disc">
                    <li>20 images</li>
                    <li>Make Up</li>
                    <li>A3 Photomount</li>
                    <li>Two instagram reels</li>
                </ul>
                <div className={style.price}>
                    <p className="text-textSecondary">ksh 6000</p>
                </div>
            </div>
        </div>
        <div className={style.package}>
            <h3 className="text-textSecondary font-semibold text-xl">Silver</h3>
            <div>
                <ul className="list-disc">
                    <li>15 images</li>
                    <li>Make Up</li>
                    <li>One instagram reels</li>
                </ul>
                <div className={style.price}>
                    <p className="text-textSecondary">ksh 4000</p>
                </div>
            </div>
        </div>
        <div className={style.package}>
            <h3 className="text-textSecondary font-semibold text-xl">Bronze</h3>
            <div>
                <ul className="list-disc">
                    <li>10 retoruched images</li>
                    <li>Make Up</li>
                </ul>
                <div className={style.price}>
                    <p className="text-textSecondary">ksh 2500</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Portrait