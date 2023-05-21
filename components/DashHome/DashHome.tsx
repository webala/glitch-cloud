/** @format */

import CreateService from "../CreateService/CreateService";
import Upload from "../UploadImage/Upload";
import style from "./DashHome.module.scss";

function DashHome() {
   return (
      <div className={style.dashHome}>
         <div className={style.overview}>
            <p>
               <span>5</span> pending shoots
            </p>
            <p>
               <span>ksh 5000</span> this week
            </p>
            <p>
               <span>ksh 65000</span> this month
            </p>
            <p>
               <span>100</span> clients served
            </p>
         </div>

         <div className={style.actions}>
            <Upload />
            <CreateService />
         </div>
      </div>
   );
}

export default DashHome;
