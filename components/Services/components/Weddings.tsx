/** @format */

import React from "react";
import style from "../Services.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { iPackageProps } from "../Services";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Weddings = ({ selectPackage, btnRef, onOpen }: iPackageProps) => {
   return (
      <div className={style.weddings}>
         <div className={style.heading}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
               <h1 className="">Weddings</h1>
            </AnimationOnScroll>
         </div>
         <div className={style.categories}>
            <div className={style.category}>
               <div className={style.item}>
                  <AnimationOnScroll animateIn="animate__fadeInLeft">
                     <h2 className="">Photography</h2>
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
                                 <ul className="">
                                    <li>2 photographers</li>
                                    <li>
                                       Coverage of preparations (Bride, Groom,
                                       Church)
                                    </li>
                                    <li>
                                       Photoshoots(Bridal team, Bride and Groom,
                                       Reception)
                                    </li>
                                    <li>
                                       Organized online gallery, Google drive
                                       link for backup
                                    </li>
                                    <li>Two A3 size mounted photo</li>
                                    <li>
                                       A4 Photobook of 20 pages(wedding day
                                       photos)
                                    </li>
                                 </ul>
                                 <div className={style.price}>
                                    <p className="">ksh 33000</p>
                                    <button
                                       ref={btnRef}
                                       onClick={() => {
                                          onOpen();
                                          selectPackage({
                                             nature: "PHOTOGRAHY",
                                             category: "SILVER",
                                             type: "WEDDING",
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
                                 <ul className="">
                                    <li>2 photographers</li>
                                    <li>Pre-wedding shoot (before D-day)</li>
                                    <li>
                                       Coverage of preparations (Bride, Groom,
                                       Church)
                                    </li>
                                    <li>
                                       Photoshoots(Bridal team, Bride and Groom,
                                       Reception)
                                    </li>
                                    <li>
                                       Organized online gallery, Google drive
                                       link for backup
                                    </li>
                                    <li>
                                       20 printed photos of pre-wedding shoot
                                    </li>
                                    <li>One A3 size mounted photo</li>
                                    <li>
                                       A4 Photobook of 20 pages(wedding day
                                       photos)
                                    </li>
                                    <li>
                                       Additional photo book pages can be added
                                       upon request
                                    </li>
                                 </ul>
                                 <div className={style.price}>
                                    <p className="">ksh 51000</p>
                                    <button
                                       ref={btnRef}
                                       onClick={() => {
                                          onOpen();
                                          selectPackage({
                                             nature: "PHOTOGRAHY",
                                             category: "GOLD",
                                             type: "WEDDING",
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
                                 <ul className="">
                                    <li>2 photographers</li>
                                    <li>
                                       Coverage of preparations (Bride, Groom,
                                       Church)
                                    </li>
                                    <li>
                                       Unlimited photos of action throughout the
                                       day&apos;s event
                                    </li>
                                    <li>
                                       Organized online gallery, Google drive
                                       link for backup
                                    </li>
                                    <li>One A3 size mounted photo</li>
                                    <li>100 printed photos</li>
                                 </ul>
                                 <div className={style.price}>
                                    <p className="">ksh 25000</p>
                                    <button
                                       ref={btnRef}
                                       onClick={() => {
                                          onOpen();
                                          selectPackage({
                                             nature: "PHOTOGRAHY",
                                             category: "BRONZE",
                                             type: "WEDDING",
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
               <div className={style.item}>
                  <AnimationOnScroll animateIn="animate__fadeInLeft">
                     <h2>Videography</h2>
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
                                 <ul className="">
                                    <li>2 videographers</li>
                                    <li>
                                       Coverage of preparations (Morning,
                                       Wedding, Reception)
                                    </li>
                                    <li>Interviews (Bride, Groom)</li>
                                    <li>Cinematic highlight video (2-3 min)</li>
                                    <li>
                                       8 GB flash disk with edited videos (60
                                       min)
                                    </li>
                                 </ul>
                                 <div className={style.price}>
                                    <p className="">ksh 30000</p>
                                    <button
                                       ref={btnRef}
                                       onClick={() => {
                                          onOpen();
                                          selectPackage({
                                             nature: "VIDEOGRAPHY",
                                             category: "SILVER",
                                             type: "WEDDING",
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
                                 <ul className="">
                                    <li>2 videographers</li>
                                    <li>1 drone pilot</li>
                                    <li>
                                       Coverage of preparations (Morning,
                                       Wedding, Reception)
                                    </li>
                                    <li>
                                       Interviews (Bride, Groom, Family, Bridal
                                       Team)
                                    </li>
                                    <li>Cinematic highlight video (3-5 min)</li>
                                    <li>
                                       16 GB flash disk with edited videos
                                       (60-105 min)
                                    </li>
                                 </ul>
                                 <div className={style.price}>
                                    <p className="">ksh 50000</p>
                                    <button
                                       ref={btnRef}
                                       onClick={() => {
                                          onOpen();
                                          selectPackage({
                                             nature: "VIDEOGRAPHY",
                                             category: "GOLD",
                                             type: "WEDDING",
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
                                 <ul className="">
                                    <li>1 videographer</li>
                                    <li>
                                       Coverage of wedding ceremony and
                                       reception
                                    </li>
                                    <li>Cinematic highlight video (2-3 min)</li>
                                    <li>Edited video (45 min)</li>
                                 </ul>
                                 <div className={style.price}>
                                    <p className="">ksh 20000</p>
                                    <button
                                       ref={btnRef}
                                       onClick={() => {
                                          onOpen();
                                          selectPackage({
                                             nature: "VIDEOGRAPHY",
                                             category: "BRONZE",
                                             type: "WEDDING",
                                          });
                                       }}
                                    >
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
         </div>
      </div>
   );
};

export default Weddings;
