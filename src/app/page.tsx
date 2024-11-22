import ALLCARE from "@/components/ALL-CARE";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Appdownload from "@/components/Appdownload";
// import Appshowcomp from "@/components/Appshow";
import Caresection from "@/components/Caresections";
import Hersosection from "@/components/Hersosection";
import ServicesPage from "@/components/Servicespage";
import StoreOperation from "@/components/StoreOperation";
// import Storemanagement from "@/components/Storemanagement";
// import Wassusection from "@/components/Wassu-section";

export default function Home() {
  return (
      <>
        <Hersosection/>
        <ServicesPage/>
        {/* <Wassusection/>  this comp is removed due to new ui update*/}
        <AnalyticsDashboard/>
        <StoreOperation/>
        <Caresection/>
        <ALLCARE/>
        {/* <Appshowcomp/>  this comp is removed due to new ui update*/}
        {/* <Storemanagement/>  this comp is removed due to new ui update*/}
        <Appdownload/>
      </>
  );
}
