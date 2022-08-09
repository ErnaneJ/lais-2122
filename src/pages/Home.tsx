import { Banner } from "../components/home/Banner";
import { EducationalModules } from "../components/home/EducationalModules";
import { Parceiros } from "../components/home/Parceiros";

export const Home = () => {
  return <main>
    <Banner />
    <EducationalModules />
    <Parceiros />
  </main>;
}