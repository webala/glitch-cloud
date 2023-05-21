/** @format */

import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import CreateService from "../components/CreateService/CreateService";
import Upload from "../components/UploadImage/Upload";
import Shoots from "../components/Shoots/Shoots";

function Dashboard() {
   return (
      <div className="dashboard">
         <Upload />
         <CreateService />
         <Shoots />
         <Tabs
            colorScheme={`orange`}
            size={`lg`}
            isLazy={true}
            isFitted={true}
            variant={`line`}
         >
            <TabList>
               <Tab>Shoots</Tab>
               <Tab>Transactions</Tab>
               
            </TabList>
            <TabPanels>
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
            </TabPanels>
         </Tabs>
      </div>
   );
}

export default Dashboard;
