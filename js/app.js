var ctx = document.getElementsByClassName("bar-chart")

var ChartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Leitos Ocupados - 2023",
                data: [5, 9, 5, 4, 9, 7, 3, 2, 8, 4, 0, 0],
                borderWidth: 6,
                borderColor: 'RGBA( 165, 42, 42, 1 )',
                backgroundColor: 'RGBA( 165, 42, 42, 1 )',
            },
            {
                label: "Leitos Disponiveis - 2023",
                data: [4, 0, 4, 5, 0, 2, 6, 7, 1, 4, 0, 0],
                borderWidth: 6,
                borderColor: 'RGBA( 0, 100, 0, 1 )',
                backgroundColor: 'RGBA( 0, 100, 0, 1 )',
            },
            {
                label: "Leitos Aguardadndo Limpeza - 2023",
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
                borderWidth: 6,
                borderColor: 'RGBA( 255, 140, 0, 1 )',
                backgroundColor: 'RGBA( 255, 140, 0, 1 )',
            },
        ]

    }
})