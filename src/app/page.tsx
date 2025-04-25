import Landingpage1 from "@/app/LandingPage/landingpage1"
import Landingpage2 from "@/app/LandingPage/landingpage2"
import Landingpage3 from "@/app/LandingPage/landingpage3"
import Landingpage4 from "@/app/LandingPage/landingpage4"
import Landingpage5 from "@/app/LandingPage/landingpage5"

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Landingpage1/>
      <Landingpage2/>
      <Landingpage3/>
      <Landingpage4/>
      <Landingpage5/>
    </div>
  );
}