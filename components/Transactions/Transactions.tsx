/** @format */

import {
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer,
   Spinner,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdDeleteOutline } from "react-icons/md";
import { Transaction } from "../../types";

function Transactions() {

   const fetchTransactions = async () => {
      const response = await axios.get('http://localhost:8000/api/transactions')
      return response.data
   }

   const {data:transactions, isError, error, isLoading} = useQuery(['transactions'], fetchTransactions)

      if (isLoading) return <Spinner color="red.500" />;
      if (isError) return <div>Something went wrong. Try again later</div>;
   return (
      <div>
         <TableContainer>
            <Table variant="simple">
               <TableCaption>Clients list</TableCaption>
               <Thead>
                  <Tr>
                     <Th>Shoot</Th>
                     <Th>Date</Th>
                     <Th>Payment method</Th>
                     <Th>Amount</Th>
                     <Th>Confirmation code</Th>
                     <Th>Payment status</Th>
                     <Th>Currency</Th>
                     <Th>Delete</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {transactions.map(
                     (transaction: Transaction, index: number) => (
                        <Tr key={index}>
                           <Td>{transaction.shoot?.id}</Td>
                           <Td>{transaction.date.slice(0, 10)}</Td>
                           <Td>{transaction.payment_method}</Td>
                           <Td>{transaction.amount}</Td>
                           <Td>{transaction.confirmation_code}</Td>
                           <Td>{transaction.payment_status}</Td>
                           <Td>{transaction.payment_currency}</Td>
                           <Td>
                              <MdDeleteOutline />
                           </Td>
                        </Tr>
                     )
                  )}
               </Tbody>
               <Tfoot>
                  <Tr>
                     <Th>To convert</Th>
                     <Th>into</Th>
                     <Th isNumeric>multiply by</Th>
                  </Tr>
               </Tfoot>
            </Table>
         </TableContainer>
      </div>
   );
}

export default Transactions;
