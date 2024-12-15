import DiscoverLearningRoad from "@/components/Home/DiscoverLearningRoad";
import GetCertifications from "@/components/Home/GetCertifications";
import Hero from "@/components/Home/Hero";
import MoreThan from "@/components/Home/MoreThan";
import Schools from "@/components/Home/Schools";
import WeAreAuthority from "@/components/Home/WeAreAuthority";

const Home = () => {
  return (
    <>
      <Hero />
      <Schools />
      <DiscoverLearningRoad />
      <MoreThan />
      <WeAreAuthority />
      <GetCertifications/>
    </>
  )
}

export default Home;