interface BreadcrumbParams {
  path: string[];
  textColor?: string;
}

export const Breadcrumb = ({ path, textColor }:BreadcrumbParams) => {
  return (
    <section className={`text-${textColor} body-font pt-5`}>
      <div className="container flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 md:w-auto md:text-left text-center">
        <div className="text-xs overflow-hidden tracking-widest font-normal title-font mb-1 flex fleex-wrap gap-2">
          {path.map((crumb:string, index:number) => {
            if(path.length - 1 === index) {
              return (<>/<span key={Math.random()} className="font-bold w-fit overflow-hidden break-words text-ellipsis truncate" >{crumb}</span></>)
            }else{
              return (<>/<span key={Math.random()} >{crumb}</span></>)
            }
          })
        }</div>
      </div>
    </section>
  );
}