import React, { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import Payment from "../components/Payment/Payment"


// export async function getServerSideProps() {
//    const response = await fetch('http://localhost')
// }



function PayShoot() {


  return (
    <div className="">
      <Payment />
    </div>
  )
}

export default PayShoot
