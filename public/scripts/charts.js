function translateStates(state){
  return { 
    AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas", BA: "Bahia", CE: "Ceará", DF: "Distrito Federal", 
    ES: "Espírito Santo", GO: "Goiás", MA: "Maranhão", MT: "Mato Grosso", MS: "Mato Grosso do Sul", MG: "Minas Gerais", 
    PA: "Pará", PB: "Paraíba", PR: "Paraná", PE: "Pernambuco", PI: "Piauí", RJ: "Rio de Janeiro", RN: "Rio Grande do Norte", 
    RS: "Rio Grande do Sul", RO: "Rondônia", RR: "Roraima", SC: "Santa Catarina", SP: "São Paulo", SE: "Sergipe", TO: "Tocantins",
  }[state] || "-";
}

function donutChart(dataId, containerId){
  const dataDonutChart = JSON.parse(document.getElementById(dataId).value)
  
  anychart.onDocumentReady(() => {
    let chart = anychart.pie(dataDonutChart.map(data => [data.curso, data.usuarios]));
    const background = chart.background();
    background.fill('transparent');

    chart.palette(['#FFFFFF', '#7DC143', '#D16FFF', '#2F2E41']);
    chart.tooltip().format('Usuários: {%Value} \n Percentual: {%yPercentOfTotal}%');
    var legend = chart.legend();
    legend.enabled(false);

    // legend.positionMode("outside");
    // legend.position("bottom");
    // legend.align("left");
    // legend.itemsLayout("verticalExpandable");

    chart.container(containerId);
    chart.draw();
  });
}

function mapChart(dataId, containerId){
  const rawDataMapChart = JSON.parse(document.getElementById(dataId).value);
  const dataMapChart = rawDataMapChart.map(data => {
    return {
      "id": `BR.${data.estados}`, 
      "title": translateStates(data.estados),
      "usuarios_totais": data.usuarios_totais, 
      "direito_certificacao": data.direito_certificacao,
    }
  });

  const maxNumber = Math.max(...dataMapChart.map(data => data.usuarios_totais)); 
  let dataMapChartGroups = [
    {values: dataMapChart.filter(data => data.usuarios_totais <= (maxNumber / 4)), color: '#FFFFFF'},
    {values: dataMapChart.filter(data => data.usuarios_totais > (maxNumber / 4) && data.usuarios_totais <= 2 * (maxNumber / 4)), color: '#7DC143'},
    {values: dataMapChart.filter(data => data.usuarios_totais > 2 * (maxNumber / 4) && data.usuarios_totais <= 3 * (maxNumber / 4)), color: '#D16FFF'},
    {values: dataMapChart.filter(data => data.usuarios_totais > 3 * (maxNumber / 4)), color: '#2F2E41'}
  ]

  anychart.onDocumentReady(() => {
    const map = anychart.map();
    const background = map.background();

    dataMapChartGroups.reverse().forEach(data => {
      let serie = map.bubble( anychart.data.set(data.values).mapAs({ size: 'usuarios_totais' }) )
      serie.labels(false).selectionMode('none');
      serie.geoIdField('id');
      serie.fill(data.color, 0.8);
      serie.stroke('#898989');
      serie.hovered().fill(data.color, 1.0);
    });

    map
    .tooltip()
    .useHtml(true)
    .fontColor('#fff')
    .format(function () {
      return (
        'Usuários: <span style="color: #d2d2d2; font-size: 12px">' +
        Intl.NumberFormat('pt-BR').format(this.getData('usuarios_totais')) +
        '</span></strong><br/>' +
        'Direito à certificação: <span style="color: #d2d2d2; font-size: 12px">' +
        Intl.NumberFormat('pt-BR').format(this.getData('direito_certificacao')) +
        '</span></strong><br/>'
      );
    });

    background.fill('transparent');

    map.choropleth(dataMapChart).fill('#CDCDCD', 0.8).stroke('white');
    map.maxBubbleSize('5%').minBubbleSize('1%');
    map.geoData(anychart.maps['brazil']);
    map.container(containerId);
    map.draw();
  });
}

function applyCharts() {
  const target = document.querySelector('#root');
  const observer = new MutationObserver(() => {
    if (document.getElementById('charts-transparency')) {
      observer.disconnect();
      donutChart('data-donut-chart', 'donut-chart');
      mapChart('data-map-chart', 'map-chart');
    }
  });  
  const config = { childList: true };
  observer.observe(target, config);
}

applyCharts();