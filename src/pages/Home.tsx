import { Helmet } from "react-helmet";
import { Banner } from "../components/home/Banner";
import { EducationalModules } from "../components/home/EducationalModules";
import { Parceiros } from "../components/home/Parceiros";

export const Home = () => {
  return <main>
    <Helmet>
      <title>Elder Book</title>
      <meta name="description" content="Plataforma para visualização de módulos educacionais, parceiros e indicadores de transparência pública."/>

      <meta itemProp="name" content="Elder Book"/>
      <meta itemProp="description" content="Plataforma para visualização de módulos educacionais, parceiros e indicadores de transparência pública."/>
      <meta itemProp="image" content="%PUBLIC_URL%/logo.png"/>

      <meta property="og:url" content="https://elderbook.netlify.app"/>
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Elder Book"/>
      <meta property="og:description" content="Plataforma para visualização de módulos educacionais, parceiros e indicadores de transparência pública."/>
      <meta property="og:image" content="%PUBLIC_URL%/logo.png"/>

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Elder Book"/>
      <meta name="twitter:description" content="Plataforma para visualização de módulos educacionais, parceiros e indicadores de transparência pública."/>
      <meta name="twitter:image" content="%PUBLIC_URL%/logo.png"/>
    </Helmet>
    <Banner />
    <EducationalModules />
    <Parceiros />
  </main>;
}