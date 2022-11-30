import React from "react";
import style from "../Services.module.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function Ruracio() {
  return (
    <div className={style.ruracio}>
      <div className={style.heading}>
        <h1>Ruracio</h1>
      </div>

      <Tabs>
        <div className={style.tab_list}>
          <TabList>
            <Tab>Photography</Tab>
          </TabList>
          <TabList>
            <Tab>Videography</Tab>
          </TabList>
        </div>

        <TabPanels>
          <TabPanel>
            <div className={style.package}>
              <ul className="">
                <li>1 Photographer</li>
                <li>Full event photography</li>
                <li>A3 Photomount (1 piece)</li>
                <li>A4 Photobook (20 pages)</li>
              </ul>
              <div className={style.price}>
                <p className="">ksh 11000</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={style.package}>
              <ul className="">
                <li>1 videographer</li>
                <li>Drone pilot</li>
                <li>Full event video coverage</li>
                <li>1 YouTube teaser</li>
                <li>Flash drive with photos and edited video</li>
                <li>Drone services</li>
              </ul>
              <div className={style.price}>
                <p className="">ksh 22000</p>
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
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Ruracio;
