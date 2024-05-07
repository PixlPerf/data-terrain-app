
import ApplicationInfoComponent from "../molecules/ApplicationInfoComponent";
import AssesmentDetailComponents from "../molecules/AssesmentDetailComponents";
import HeaderComponent from "../organisms/HeaderComponents";
import SidebarComponent from "../organisms/SidebarComponent";
import WelcomeBoardComponent from "../organisms/WelcomeBoardComponent";

const DashboardPage = () => {

    return (<>
        <HeaderComponent />
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
            </div>
        </div>
    </>)

}

export default DashboardPage;