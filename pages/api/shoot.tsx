/** @format */
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
     if (req.method === "POST") {
          const body = req.body;

          try {

               const response = await fetch(
                    "http://localhost:8000/shoot/book",
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body,
                    }
               );

               const savedShoot = await response.json()
               res.status(response.status).json(savedShoot)
          } catch (error) {
               console.log("Error: ", error);
               res.status(500).json({ message: "something went wrong" });
          }
     }
}
