export const translateCrumb = (crumb: string):string => {
  return {
    'parceiros': 'Parceiros',
  }[crumb] as string;
}

export const applyDonutChart = (container:string) => {
  window.anychart.onDocumentReady(() => {
    window.anychart.theme('darkBlue');
    const chart = window.anychart.pie([
      ['Department Stores', 6371664],
      ['Discount Stores', 7216301],
      ['Men\'s/Women\'s Stores', 1486621],
      ['Juvenile Specialty Stores', 786622],
      ['All other outletssss', 900000]
    ]);

    chart
      .title('ACME Corp. apparel sales through different retail channels')
      .radius('43%')
      .innerRadius('30%');
    chart.container(container);
    chart.draw();
  });
}