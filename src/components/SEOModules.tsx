import { Helmet } from "react-helmet"
import { Curso } from "../types/curso";

interface PropsSEOModules {
  curse: Curso;
}

export const SEOModules = ({ curse }:PropsSEOModules) => {
  return (
    <Helmet>
      <title>Elder Book - {curse.titulo}</title>
      <link rel="canonical" href={`https://elderbook.netlify.app/cursos/modulo/${curse.titulo}`}/>
      <meta name="description" content={curse.sobre}/>
      <meta name="keyword" content={curse.parceiros.replace(/\//g, ',')}/>
      <meta name="referrer" content="no-referrer-when-downgrade" />
      
      <meta itemProp="name" content={`Elder Book - ${curse.titulo}`}/>
      <meta itemProp="description" content={curse.sobre}/>
      <meta itemProp="image" content={curse.capa}/>
      
      <script type="application/ld+json">{`{
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
          "@type": "Organization",
          "name": "Elder Book",
          "url": "https://elderbook.netlify.app/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://elderbook.netlify.app/favicon.ico"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Elder Book",
          "url": "https://elderbook.netlify.app/",
          "logo": {
            "@type": "ImageObject",
            "url": "https://elderbook.netlify.app/favicon.ico"
          }
        },
        "headline": "${curse.titulo}",
        "url": "https://elderbook.netlify.app/cursos/modulo/${curse.titulo}",
        "datePublished": "${curse.criado_em}",
        "dateModified": "${curse.criado_em}",
        "image": {
            "@type": "ImageObject",
            "url": "${curse.capa}",
            "width": 1120,
            "height": 528
        },
        "keywords": ${curse.parceiros.replace(/\//g, ',')},
        "description": "${curse.titulo}",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://elderbook.netlify.app/"
        }
      }`}</script>

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Elder Book" />
      <meta property="og:title" content={curse.titulo} />
      <meta property="og:description" content={curse.sobre} />
      <meta property="og:url" content={`https://elderbook.netlify.app/cursos/modulo/${curse.titulo}`} />
      <meta property="og:image" content={curse.capa} />
      <meta property="og:image:width" content="1120" />
      <meta property="og:image:height" content="528" />
      
      <meta property="article:publisher" content="https://elderbook.netlify.app" />
      <meta property="article:published_time" content={curse.criado_em} />
      <meta property="article:modified_time" content={curse.criado_em} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={curse.titulo} />
      <meta name="twitter:description" content={curse.sobre} />
      <meta name="twitter:url" content={`https://elderbook.netlify.app/cursos/modulo/${curse.titulo}`} />
      <meta name="twitter:image" content={curse.capa} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="Elder Book" />
      <meta name="twitter:label2" content="Filed under" />
      <meta name="twitter:data2" content={curse.parceiros.replace(/\//g, ',')} />
      <meta name="twitter:site" content="@ElderBook" />  
    </Helmet>
  );
}