/** @format */

import { Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
} from "@chakra-ui/react";
import { Client } from "../../types";
import style from './Clients.module.scss'
import {MdDeleteOutline} from 'react-icons/md'

function Clients() {
   const fetchClients = async () => {
      const response = await axios.get("http://localhost:8000/api/clients");
      return response.data;
   };

   const {
      data: clients,
      isError,
      error,
      isLoading,
   } = useQuery(["clients"], fetchClients);

   if (isLoading) return <Spinner color="red.500" />;
   if (isError) return <div>Something went wrong. Try again later</div>;
   console.log(clients)
   return (
      <div className={style.clients}>
         <TableContainer>
            <Table variant="simple">
               <TableCaption>Clients list</TableCaption>
               <Thead>
                  <Tr>
                     <Th>First name</Th>
                     <Th>Last name</Th>
                     <Th>Email</Th>
                     <Th>Phone</Th>
                     <Th>Delete</Th>
                  </Tr>
               </Thead>
               <Tbody>
                  {clients.map((client: Client, index: number) => (
                     <Tr key={index}>
                        <Td>{client.first_name}</Td>
                        <Td>{client.last_name}</Td>
                        <Td>{client.email}</Td>
                        <Td>{client.phone}</Td>
                        <Td><MdDeleteOutline /></Td>
                     </Tr>
                  ))}
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

export default Clients;
