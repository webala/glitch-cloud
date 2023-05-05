import { useRouter } from 'next/router'
import React from 'react'

function PaymentSuccess() {

   const router = useRouter()
   const {transactionId} = router.query
   console.log('tarnsactionId: ', transactionId)
  return (
    <div>
      
    </div>
  )
}

export default PaymentSuccess