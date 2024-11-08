import Hersosection from "@/components/Hersosection";
import Techinfo from "@/components/Techinfo";
import Wassusection from "@/components/Wassu-section";

export default function Home() {
  return (
      <>
        <Hersosection/>
        <Techinfo/>
        <Wassusection/>
        <div className="h-screen w-full"></div>
      </>
  );
}
