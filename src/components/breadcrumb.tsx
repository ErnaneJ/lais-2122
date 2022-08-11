interface BreadcrumbParams {
  path: string[];
}

export const Breadcrumb = ({ path }:BreadcrumbParams) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <div className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1 inline-flex gap-2">
            {path.map((crumb:string, index:number) => {
              if(path.length - 1 === index) {
                return (<>/<span key={`last-item-${crumb}-${index}`} className="text-gray-700 font-bold" >{crumb}</span></>)
              }else{
                return (<>/<span key={`item-${crumb}-${index}`}>{crumb}</span></>)
              }
            })
          }</div>
        </div>
      </div>
    </section>
  );
}