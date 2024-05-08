
import ApplicationInfoComponent from "../molecules/ApplicationInfoComponent";
import AssesmentDetailComponents from "../molecules/AssesmentDetailComponents";
import EventsComponents from "../organisms/EventsComponents";
import HeaderComponent from "../organisms/HeaderComponents";
import InsightComponents from "../organisms/InsightComponents";
import SidebarComponent from "../organisms/SidebarComponent";
import WelcomeBoardComponent from "../organisms/WelcomeBoardComponent";

const DashboardPage = () => {

    return (<>
    <div>
        <HeaderComponent />
        </div>
        <div className="flex mt-12">
            <SidebarComponent />
            <div className="w-full px-8">
                <div className="mb-8">
                    <WelcomeBoardComponent />
                </div>
                <div className="h-80 flex gap-4" >
                    <div className="w-7/12 h-full">
                        <ApplicationInfoComponent />
                    </div>
                    <div className="w-5/12">
                        <AssesmentDetailComponents/>
                    </div>
                </div>
                <div className="flex my-8">
                <div className="w-full h-full ">
                    <InsightComponents/>
                    </div>
                    <div className="w-96 h-full">
                    <EventsComponents/>
                    </div>
                </div>
            </div>
        </div>
    </>)

}

export default DashboardPage;