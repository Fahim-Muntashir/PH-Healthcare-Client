import HeroSection from "@/components/Ui/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/Ui/HomePage/Specialist/Specialist";
import TopRatedDoctors from "@/components/Ui/HomePage/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/Ui/HomePage/WhyUs/WhyUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist></Specialist>
      <TopRatedDoctors></TopRatedDoctors>
      <WhyUs></WhyUs>
    </>
  );
};

export default HomePage;