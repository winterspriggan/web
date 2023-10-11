Highcharts.chart('container', {
    title: {
        text: '집에 제일 가고싶은 시간',
        align: 'left'
    },
    subtitle: {
        text: '봅시다.',
        align: 'left'
    },
    yAxis: {
        title: {
            text: '집에 가고싶은 정도'
        }
    },
    xAxis: {
        categories: ['9','10','11','12','13','14','15','16','17','18','19','20','21','22']
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    series: [{
        name: 'cy',
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
    }, {
        name: 'sj',
        data: [99,99,99,99,99,99,99,99,99,99,99,99,99,99]
        }]
});