/** @format */

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CreateService from "../components/CreateService/CreateService";
import Upload from "../components/UploadImage/Upload";
import Shoots from "../components/Shoots/Shoots";
import Navbar from "../components/Navbar/Navbar";
import DashHome from "../components/DashHome/DashHome";
import {BiHome} from 'react-icons/bi'

function Dashboard() {
   return (
      <div className="dashboard">
         <Navbar />
         {/* <Upload />
         <CreateService />
         <Shoots /> */}
         <Tabs
            colorScheme={`orange`}
            size={`lg`}
            isLazy={true}
            isFitted={true}
            variant={`line`}
         >
            <TabList>
               <Tab><BiHome /></Tab>
               <Tab>Shoots</Tab>
               <Tab>Clients</Tab>
               <Tab>Transactions</Tab>
            </TabList>
            <TabPanels>
               <div className="tab">
                  <TabPanel>
                     <DashHome />
                  </TabPanel>
               </div>
               <div className="tab">
                  <TabPanel>
                     <Shoots />
                  </TabPanel>
               </div>
               <div className="tab">
                  <TabPanel>
                     <p>Transactins</p>
                  </TabPanel>
               </div>
               <div className="tab">
                  <TabPanel>
                     <p>Transactins</p>
                  </TabPanel>
               </div>
            </TabPanels>
         </Tabs>
      </div>
   );
}

export default Dashboard;
