import Carousal from "@/components/Carousal";
import CreditCard from "@/components/CreditCard";
import Pending from "@/components/Pending";
import PopularProjects from "@/components/PopularProjects";
import Projects from "@/components/Projects";
import Projects1 from "@/components/Projects1";
import SocialMedia from "@/components/SocialMedia";
import Testimonial from "@/components/Testimonial";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <div className="px-1 overflow-auto h-[46rem] scrollbar-hide">
        {/* <Carousal/> */}
        <Navbar/>
        <CreditCard/>
        <Pending/>
        <h1 className="mt-4">POPULAR PROJECTS</h1>
        <PopularProjects/>
        <h1 className="mt-4"> PROJECTS</h1>
        <Projects/>
        <h1 className="mt-4"> RECHARGE & BILL PAYMENTS</h1>
        <Projects1/>
        <Testimonial/>
        <SocialMedia/>
    </div>
  )
}

export default page