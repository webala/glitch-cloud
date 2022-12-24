/** @format */

import React from "react";
import style from "../Services.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Portrait() {
     return (
          <div className={style.portraits}>
               <div className={style.heading}>
                    <h1 className="">Portraits</h1>
               </div>

               <div className={style.item}>
                    <h2>Photography</h2>
                    <Tabs defaultIndex={1}>
                         <div className={style.tab_list}>
                              <TabList>
                                   <Tab>Silver</Tab>
                              </TabList>
                              <TabList>
                                   <Tab>Gold</Tab>
                              </TabList>
                              <TabList>
                                   <Tab>Bronze</Tab>
                              </TabList>
                         </div>

                         <TabPanels>
                              <TabPanel>
                                   <div>
                                        <ul className="list-disc">
                                             <li>15 images</li>
                                             <li>Make Up</li>
                                             <li>One instagram reels</li>
                                        </ul>
                                        <div className={style.price}>
                                             <p className="text-textSecondary">
                                                  ksh 4000
                                             </p>
                                        </div>
                                   </div>
                              </TabPanel>
                              <TabPanel>
                                   <div>
                                        <ul className="list-disc">
                                             <li>20 images</li>
                                             <li>Make Up</li>
                                             <li>A3 Photomount</li>
                                             <li>Two instagram reels</li>
                                        </ul>
                                        <div className={style.price}>
                                             <p className="text-textSecondary">
                                                  ksh 6000
                                             </p>
                                        </div>
                                   </div>
                              </TabPanel>
                              <TabPanel>
                                   <div>
                                        <ul className="list-disc">
                                             <li>10 retoruched images</li>
                                             <li>Make Up</li>
                                        </ul>
                                        <div className={style.price}>
                                             <p className="text-textSecondary">
                                                  ksh 2500
                                             </p>
                                        </div>
                                   </div>
                              </TabPanel>
                         </TabPanels>
                    </Tabs>
               </div>
          </div>
     );
}

export default Portrait;
