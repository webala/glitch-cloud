import { Progress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react"
import {useSelector} from 'react-redux'
import Payment from "../components/Payment/Payment"


// export async function getServerSideProps() {
//    const response = await fetch('http://localhost')
// }



function PayShoot() {

  const [loading, setLoading] = useState<boolean>(false);

  return (
     <div className="">
        {loading && <Progress size="xs" isIndeterminate colorScheme={`orange`} bg={`slateblue`}/>}
        <Payment setLoading={setLoading}/>
     </div>
  );
}

export default PayShoot
