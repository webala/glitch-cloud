import React from 'react'
import style from '../Services.module.scss'

function Weddings() {
  return (
    
    <div className={style.weddings}>
        <div className={style.heading}>
            <h1 className="">Weddings</h1>
        </div>
        <div className={style.categories}>
            <div className={style.photography}>
                <h2 className="">Photography</h2>
                <div className={style.packages}>
                    <div className={style.package}>
                        <h3 className="">Gold</h3>
                        <div>
                            <ul className="">
                                <li>2 photographers</li>
                                <li>Pre-wedding shoot (before D-day)</li>
                                <li>Coverage of preparations (Bride, Groom, Church)</li>
                                <li>Photoshoots(Bridal team, Bride and Groom, Reception)</li>
                                <li>Organized online gallery, Google drive link for backup</li>
                                <li>20 printed photos of pre-wedding shoot</li>
                                <li>One A3 size mounted photo</li>
                                <li>A4 Photobook of 20 pages(wedding day photos)</li>
                                <li>Additional photo book pages can be added upon request</li>
                            </ul>
                            <div className={style.price}>
                                <p className="">ksh 51000</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.package}>
                        <h3 className="">Silver</h3>
                        <div>
                            <ul className="">
                                <li>2 photographers</li>
                                <li>Coverage of preparations (Bride, Groom, Church)</li>
                                <li>Photoshoots(Bridal team, Bride and Groom, Reception)</li>
                                <li>Organized online gallery, Google drive link for backup</li>
                                <li>Two A3 size mounted photo</li>
                                <li>A4 Photobook of 20 pages(wedding day photos)</li>
                            </ul>
                            <div className={style.price}>
                                <p className="">ksh 33000</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.package}>
                        <h3 className="">Bronze</h3>
                        <div>
                            <ul className="">
                                <li>2 photographers</li>
                                <li>Coverage of preparations (Bride, Groom, Church)</li>
                                <li>Unlimited photos of action throughout the day's event</li>
                                <li>Organized online gallery, Google drive link for backup</li>
                                <li>One A3 size mounted photo</li>
                                <li>100 printed photos</li>
                            </ul>
                            <div className={style.price}>
                                <p className="">ksh 25000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.videography}>
                <h2 className="">Videography</h2>
                <div className={style.packages}>
                    <div className={style.package}>
                        <h3 className="">Gold</h3>
                        <div>
                            <ul className="">
                                <li>2 videographers</li>
                                <li>1 drone pilot</li>
                                <li>Coverage of preparations (Morning, Wedding, Reception)</li>
                                <li>Interviews (Bride, Groom, Family, Bridal Team)</li>
                                <li>Cinematic highlight video (3-5 min)</li>
                                <li>16 GB flash disk with edited videos (60-105 min)</li>
                            </ul>
                            <div className={style.price}>
                                <p className="">ksh 50000</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.package}>
                        <h3 className="">Silver</h3>
                        <div>
                            <ul className="">
                                <li>2 videographers</li>
                                <li>Coverage of preparations (Morning, Wedding, Reception)</li>
                                <li>Interviews (Bride, Groom)</li>
                                <li>Cinematic highlight video (2-3 min)</li>
                                <li>8 GB flash disk with edited videos (60 min)</li>
                            </ul>
                            <div className={style.price}>
                                <p className="">ksh 30000</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.package}>
                        <h3 className="">Bronze</h3>
                        <div>
                            <ul className="">
                                <li>1 videographer</li>
                                <li>Coverage of wedding ceremony and reception</li>
                                <li>Cinematic highlight video (2-3 min)</li>
                                <li>Edited video (45 min)</li>
                            </ul>
                            <div className={style.price}>
                                <p className="">ksh 20000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Weddings