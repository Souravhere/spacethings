import Hersosection from "@/components/Hersosection";
import Techinfo from "@/components/Techinfo";
import Wassusection from "@/components/Wassu-section";

export default function Home() {
  return (
      <>
        <Hersosection/>
        <Techinfo/>
        <div className="px-5 py-5 text-center font-sans">
          here is WATSSUE / DEJANGBU page links added soon
        </div>
        <Wassusection/>
        <div className="h-screen w-full"></div>
      </>
  );
}
