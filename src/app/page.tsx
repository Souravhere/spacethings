import ALLCARE from "@/components/ALL-CARE";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Appdownload from "@/components/Appdownload";
// import Appshowcomp from "@/components/Appshow";
import Caresection from "@/components/Caresections";
import Hersosection from "@/components/Hersosection";
import ServicesPage from "@/components/Servicespage";
import StoreOperation from "@/components/StoreOperation";

export default function Home() {
  return (
      <>
        <Hersosection/>
        <ServicesPage/>
        <AnalyticsDashboard/>
        <StoreOperation/>
        <Caresection/>
        <ALLCARE/>
        {/* <Appshowcomp/>  this comp is removed due to new ui update*/}
        <Appdownload/>
      </>
  );
}
