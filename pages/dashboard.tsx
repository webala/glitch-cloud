/** @format */

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CreateService from "../components/CreateService/CreateService";
import Upload from "../components/UploadImage/Upload";
import Shoots from "../components/Shoots/Shoots";
import Navbar from "../components/Navbar/Navbar";
import DashHome from "../components/DashHome/DashHome";
import {BiHome} from 'react-icons/bi'
import Clients from "../components/Clients/Clients";
import Transactions from "../components/Transactions/Transactions";

function Dashboard() {
   return (
      <div className="dashboard">
         <Navbar />
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
                     <Clients />
                  </TabPanel>
               </div>
               <div className="tab">
                  <TabPanel>
                     <Transactions />
                  </TabPanel>
               </div>
            </TabPanels>
         </Tabs>
      </div>
   );
}

export default Dashboard;
