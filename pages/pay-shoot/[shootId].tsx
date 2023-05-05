/** @format */

import { Progress } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Payment from "../../components/Payment/Payment";

function PayShoot() {
   const [loading, setLoading] = useState<boolean>(false);
   

   return (
      <div className="">
         {loading && (
            <Progress
               size="xs"
               isIndeterminate
               colorScheme={`orange`}
               bg={`slateblue`}
            />
         )}
         <Payment setLoading={setLoading} />
      </div>
   );
}

export default PayShoot;
