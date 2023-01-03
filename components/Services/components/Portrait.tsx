/** @format */

import React from "react";
import style from "../Services.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { iPackageProps } from "../Services";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Portrait({ selectPackage, btnRef, onOpen }: iPackageProps) {
   return (
      <div className={style.portraits}>
         <div className={style.heading}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
               <h1 className="">Portraits</h1>
            </AnimationOnScroll>
         </div>

         <div className={style.item}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
               <h2>Photography</h2>
            </AnimationOnScroll>

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

               <AnimationOnScroll
                  animateIn="animate__fadeInBottomLeft"
                  delay={500}
               >
                  <TabPanels>
                     <TabPanel>
                        <div>
                           <ul className="list-disc">
                              <li>15 images</li>
                              <li>Make Up</li>
                              <li>One instagram reels</li>
                           </ul>
                           <div className={style.price}>
                              <p className="text-textSecondary">ksh 4000</p>
                              <button
                                 ref={btnRef}
                                 onClick={() => {
                                    onOpen();
                                    selectPackage({
                                       nature: "PHOTOGRAHY",
                                       category: "SILVER",
                                       type: "PORTRAIT",
                                    });
                                 }}
                              >
                                 <p>Book now</p>
                                 <BsFillBookmarkPlusFill />
                              </button>
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
                              <p className="text-textSecondary">ksh 6000</p>
                              <button
                                 ref={btnRef}
                                 onClick={() => {
                                    onOpen();
                                    selectPackage({
                                       nature: "PHOTOGRAHY",
                                       category: "GOLD",
                                       type: "PORTRAIT",
                                    });
                                 }}
                              >
                                 <p>Book now</p>
                                 <BsFillBookmarkPlusFill />
                              </button>
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
                              <p className="text-textSecondary">ksh 2500</p>
                              <button
                                 ref={btnRef}
                                 onClick={() => {
                                    onOpen();
                                    selectPackage({
                                       nature: "PHOTOGRAHY",
                                       category: "BRONZE",
                                       type: "PORTRAIT",
                                    });
                                 }}
                              >
                                 <p>Book now</p>
                                 <BsFillBookmarkPlusFill />
                              </button>
                           </div>
                        </div>
                     </TabPanel>
                  </TabPanels>
               </AnimationOnScroll>
            </Tabs>
         </div>
      </div>
   );
}

export default Portrait;
