import Appdownload from "@/components/Appdownload";
import Appshowcomp from "@/components/Appshow";
import Caresection from "@/components/Caresections";
import Hersosection from "@/components/Hersosection";
import ServicesPage from "@/components/Servicespage";
import Storemanagement from "@/components/Storemanagement";
// import Techinfo from "@/components/Techinfo";
import Wassusection from "@/components/Wassu-section";

export default function Home() {
  return (
      <>
        <Hersosection/>
        {/* <Techinfo/> */} this comp is removed due new ui
        <ServicesPage/>
        <Wassusection/>
        <Caresection/>
        <Appshowcomp/>
        <Storemanagement/>
        <Appdownload/>
      </>
  );
}
