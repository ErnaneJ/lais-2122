import { useLocation } from 'react-router-dom'
import { translateCrumb } from '../utils/helpers'

export const Breadcrumb = () => {
  const location = useLocation();
  let crumbs = location.pathname.split('/')
  crumbs = crumbs.splice(1, crumbs.length - 2);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <div className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1 inline-flex gap-2">
            <span>Início</span>
            {crumbs.map((crumb:string, index:number) => {
              const item = crumb.replace(/\//g, '');
              if(crumbs.length - 2 === index) {
                return (<>/<span key={`item-${crumb}-${index}`}>{translateCrumb(item as string)} - {`item-${crumb}`}</span></>)
              }else{
                return (<>/<span key={`item-${crumb}-${index}`} className="text-gray-700 font-bold" >{translateCrumb(item as string)} - {`item-${crumb}`}</span></>)
              }
            })
          }</div>
        </div>
      </div>
    </section>
  );
}