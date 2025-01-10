import ChoosePlan from "@/components/Home/ChoosePlan";
import Companies from "@/components/Home/Companies";
import DiscoverLearningRoad from "@/components/Home/DiscoverLearningRoad";
import GetCertifications from "@/components/Home/GetCertifications";
import Hero from "@/components/Home/Hero";
import MoreThan from "@/components/Home/MoreThan";
import Professors from "@/components/Home/Professors";
import Schools from "@/components/Home/Schools";
import WeAreAuthority from "@/components/Home/WeAreAuthority";

const Home = async () => {
  
  return (
    <>
      <Hero />
      <Schools />
      <DiscoverLearningRoad />
      <Companies />
      <MoreThan />
      <WeAreAuthority />
      <GetCertifications />
      <Professors />
      <ChoosePlan title="Elige el plan ideal para ti"/>
    </>
  )
}

export default Home;