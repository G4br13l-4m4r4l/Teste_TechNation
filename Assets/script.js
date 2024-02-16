const data = [
  { tipo: "notas emitidas", count: 10 },
  { tipo: "notas emitidas sem cobrança", count: 20 },
  { tipo: "notas vencidas - Inadimplência", count: 15 },
  { tipo: "notas a vencer", count: 25 },
  { tipo: "notas pagas", count: 25 },
];
const data_2 = [
  { mes: "Janeiro", count: 10 },
  { mes: "Fevereiro", count: 20 },
  { mes: "Março", count: 15 },
  { mes: "Abril", count: 25 },
  { mes: "Maio", count: 50 },
  { mes: "Junho", count: 35 },
  { mes: "Julho", count: 65 },
  { mes: "Agosto", count: 25 },
  { mes: "Setembro", count: 15 },
  { mes: "Outubro", count: 64 },
  { mes: "Novembro", count: 44 },
  { mes: "Dezembro", count: 22 },

];
const data_3 = [
  { mes: "Janeiro", count: 80 },
  { mes: "Fevereiro", count: 76 },
  { mes: "Março", count: 60 },
  { mes: "Abril", count: 35 },
  { mes: "Maio", count: 50 },
  { mes: "Junho", count: 45 },
  { mes: "Julho", count: 61 },
  { mes: "Agosto", count: 15 },
  { mes: "Setembro", count: 79 },
  { mes: "Outubro", count: 44 },
  { mes: "Novembro", count: 33 },
  { mes: "Dezembro", count: 42 },

];



let graf_1 = new Chart(
  document.getElementById('dash'),
  {
    type: 'bar',
    options: {
      animation: true,
      responsive: true,
      backgroundColor: [
        'rgb(185, 51, 91)'
      ],
      borderColor: [
        'rgb(185, 51, 91)'
      ],
      maintainAspectRatio:true,
      
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        x: {
          max: 100
        },
        y: {
          max: 100
        }
      }
    },
    data: {
      labels: data.map(row => row.tipo),
      datasets: [
        {
          label: 'Valor Total',
          data: data.map(row => row.count)
        }
      ]
    }
  }
);
let graf_2 = new Chart(
  document.getElementById('dash_3'),
  {
    type: 'line',
    options: {
      animation: true,
      responsive: true,
      maintainAspectRatio:true,
      backgroundColor: [
        'rgb(185, 51, 91)'
      ],
      borderColor:'rgb(185, 51, 91)',
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        x: {
          max: 100
        },
        y: {
          max: 100
        }
      }
    },
    data: {
      labels: data_2.map(row => row.mes),
      datasets: [
        {
          label: 'Evolução da inadimplência',
          data: data_2.map(row => row.count)
        }
      ]
    }
  }
);
let graf_3 = new Chart(
  document.getElementById('dash_2'),
  {
    type: 'line',
    options: {
      animation: true,
      responsive: true,
      maintainAspectRatio:true,
      backgroundColor: [
        'rgb(185, 51, 91)'
      ],
      borderColor:'rgb(185, 51, 91)',
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          enabled: true
        }
      },
      scales: {
        x: {
          max: 100
        },
        y: {
          max: 100
        }
      }
    },
    data: {
      labels: data_3.map(row => row.mes),
      datasets: [
        {
          label: 'Evolução da receita recebida',
          data: data_3.map(row => row.count)
        }
      ]
    }
  }
);

document.getElementById('filter_1').addEventListener('change', function (){
  switch(document.getElementById('filter_1').value){
    case 'mes':
      data[0].count = 10
      data[1].count = 20
      data[2].count = 15
      data[3].count = 25
      data[4].count = 25
      
      data_2[0].count = 10
      data_2[1].count = 20
      data_2[2].count = 15
      data_2[3].count = 25
      data_2[4].count = 50
      data_2[5].count = 35
      data_2[6].count = 65
      data_2[7].count = 25
      data_2[8].count = 15
      data_2[9].count = 64
      data_2[10].count = 44
      data_2[11].count = 22
    
      data_3[0].count = 80
      data_3[1].count = 76
      data_3[2].count = 60
      data_3[3].count = 35
      data_3[4].count = 50
      data_3[5].count = 45
      data_3[6].count = 61
      data_3[7].count = 15
      data_3[8].count = 79
      data_3[9].count = 44
      data_3[10].count = 33
      data_3[11].count = 42      

      updateChart();
      break;
    case 'trimestre':
      data[0].count = 32
      data[1].count = 20
      data[2].count = 45
      data[3].count = 55
      data[4].count = 26
      
      data_2[0].count = 11
      data_2[1].count = 60
      data_2[2].count = 25
      data_2[3].count = 55
      data_2[4].count = 44
      data_2[5].count = 35
      data_2[6].count = 75
      data_2[7].count = 12
      data_2[8].count = 15
      data_2[9].count = 66
      data_2[10].count = 44
      data_2[11].count = 62
    
      data_3[0].count = 90
      data_3[1].count = 96
      data_3[2].count = 100
      data_3[3].count = 65
      data_3[4].count = 20
      data_3[5].count = 41
      data_3[6].count = 49
      data_3[7].count = 35
      data_3[8].count = 89
      data_3[9].count = 24
      data_3[10].count = 53
      data_3[11].count = 12
      updateChart();
      break;
    case 'ano':
      data[0].count = 62
      data[1].count = 30
      data[2].count = 55
      data[3].count = 65
      data[4].count = 76
      
      data_2[0].count = 31
      data_2[1].count = 70
      data_2[2].count = 45
      data_2[3].count = 65
      data_2[4].count = 54
      data_2[5].count = 45
      data_2[6].count = 85
      data_2[7].count = 32
      data_2[8].count = 25
      data_2[9].count = 76
      data_2[10].count = 54
      data_2[11].count = 72
    
      data_3[0].count = 80
      data_3[1].count = 86
      data_3[2].count = 90
      data_3[3].count = 55
      data_3[4].count = 30
      data_3[5].count = 51
      data_3[6].count = 39
      data_3[7].count = 55
      data_3[8].count = 70
      data_3[9].count = 46
      data_3[10].count = 23
      data_3[11].count = 32
      updateChart();
      break;
  }
});


function updateChart() {
  graf_1.data.labels = data.map(row => row.tipo);
  graf_1.data.datasets[0].data = data.map(row => row.count);
  graf_1.update();
  graf_2.data.labels = data.map(row => row.tipo);
  graf_2.data.datasets[0].data = data.map(row => row.count);
  graf_2.update();
  graf_3.data.labels = data.map(row => row.tipo);
  graf_3.data.datasets[0].data = data.map(row => row.count);
  graf_3.update();


  
}

document.getElementById("dash").parentNode.style.height = '400px';
document.getElementById("dash").parentNode.style.width = '800px';

document.getElementById("dash_2").parentNode.style.height = '200px';
document.getElementById("dash_2").parentNode.style.width = '500px';

document.getElementById("dash_3").parentNode.style.height = '200px';
document.getElementById("dash_3").parentNode.style.width = '500px';


//lista
document.getElementById('searchInput').addEventListener('input', function(){
  let filter = this.value.toLowerCase();
  filtragem(filter);
});

document.getElementById('filterType_status').addEventListener('change', function(){
  let filter = document.getElementById('filterType_status').value;
  filtragem(filter);

});

document.getElementById('searchInput').addEventListener('input', function(){
  let filter = this.value.toLowerCase();
  filtragem(filter);
});

document.getElementById('filterType_status').addEventListener('change', function(){
  let filter = document.getElementById('filterType_status').value;
  filtragem(filter);
});

document.getElementById('filterType_pagamento').addEventListener('change', function(){
  let filter = document.getElementById('filterType_pagamento').value;
  filtragem_data(filter, 4); 
});

document.getElementById('filterType_cobranca').addEventListener('change', function(){
  let filter = document.getElementById('filterType_cobranca').value;
  filtragem_data(filter, 3);
});

document.getElementById('filterType_emissao').addEventListener('change', function(){
  let filter = document.getElementById('filterType_emissao').value;
  filtragem_data(filter, 2); 
});


let filtragem = (filter)=>{

  let rows = document.querySelectorAll('#dataTable tbody tr');
  
  rows.forEach(function(row) {
    let cells = row.querySelectorAll('td');
    let found = false;
    cells.forEach(function(cell) {
      let text = cell.textContent.toLowerCase();
      if (text.includes(filter)) {
        found = true;
      }
    });
    if (found) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}


let filtragem_data = (filter, columnIndex = -1) => { 
  let rows = document.querySelectorAll('#dataTable tbody tr');
  
  rows.forEach(function(row) {
    let cells = row.querySelectorAll('td');
    let found = false;
    cells.forEach(function(cell, index) {
      if (columnIndex === index) { 
        let text = cell.textContent.toLowerCase();
        let cellMonth = new Date(text).getMonth() + 1; 
        if (cellMonth == filter) { 
          found = true;
        }
      }
    });
    if (found || filter === '') {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
};
