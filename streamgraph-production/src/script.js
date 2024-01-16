var colors = Highcharts.getOptions().colors;
Highcharts.chart('container', {

    chart: {
        type: 'streamgraph',
        marginBottom: 30,
        zoomType: 'x'
    },

    // Make sure connected countries have similar colors
    colors: [
        colors[0],
        colors[1],
        colors[2],
        colors[3],
        colors[4],
        // East Germany, West Germany and Germany
        Highcharts.color(colors[5]).brighten(0.2).get(),
        Highcharts.color(colors[5]).brighten(0.1).get(),

        colors[5],
        colors[6],
        colors[7],
        colors[8],
        colors[9],
        colors[0],
        colors[1],
        colors[3],
        // Soviet Union, Russia
        Highcharts.color(colors[2]).brighten(-0.1).get(),
        Highcharts.color(colors[2]).brighten(-0.2).get(),
        Highcharts.color(colors[2]).brighten(-0.3).get()
    ],

    title: {
        floating: true,
        align: 'center',
        text: 'Production Budgets of Studios (1977-2023)'
    },
    subtitle: {
        floating: true,
        align: 'center',
        y: 30,
        text: 'Average production budget of box office weekend winners per year'
    },

    xAxis: {
        maxPadding: 0,
        type: 'category',
        crosshair: true,
        categories: [
'1977',
 '1978',
 '1979',
 '1980',
 '1981',
 '1982',
 '1983',
 '1984',
 '1985',
 '1986',
 '1987',
 '1988',
 '1989',
 '1990',
 '1991',
 '1992',
 '1993',
 '1994',
 '1995',
 '1996',
 '1997',
 '1998',
 '1999',
 '2000',
 '2001',
 '2002',
 '2003',
 '2004',
 '2005',
 '2006',
 '2007',
 '2008',
 '2009',
 '2010',
 '2011',
 '2012',
 '2013',
 '2014',
 '2015',
 '2016',
 '2017',
 '2018',
 '2019',
 '2020',
 '2021',
 '2022',
 '2023'
        ],
        labels: {
            align: 'left',
            reserveSpace: false,
            rotation: 270
        },
        lineWidth: 0,
        margin: 20,
        tickWidth: 0
    },

    yAxis: {
        visible: false,
        startOnTick: false,
        endOnTick: false
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        series: {
            label: {
                minFontSize: 5,
                maxFontSize: 15,
                style: {
                    color: 'rgba(255,255,255,0.75)'
                }
            },
            accessibility: {
                exposeAsGroupOnly: true
            }
        }
    },

    // Data parsed with olympic-medals.node.js
    series: [
    {
        name: '20th Century Fox',
        data: [11000000.0, 10400000.0, 11000000.0, 18000000.0, 5000000.0, 4000000.0, 32350000.0, 27344444.444444444, 22338888.888888888, 17333333.333333332, 42500000.0, 16000000.0, 26000000.0, 24500000.0, 20125000.0, 34000000.0, 25000000.0, 30000000.0, 90000000.0, 67500000.0, 160000000.0, 37333333.333333336, 115000000.0, 114500000.0, 100000000.0, 104750000.0, 99333333.33333333, 70000000.0, 114750000.0, 106250000.0, 92500000.0, 82500000.0, 184800000.0, 213142857.14285713, 90750000.0, 95000000.0, 101333333.33333333, 139500000.0, 108000000.0, 103285714.28571428, 114666666.66666667, 70000000.0, 145866666.66666666, 250577777.7777778, 355288888.8888889, 460000000.0, 460000000.0]
    },
    {
        name: 'Columbia',
        data: [9000000.0, 11400000.0, 13800000.0, 16200000.0, 18600000.0, 21000000.0, 20250000.0, 144000000.0, 81250000.0, 18500000.0, 55000000.0, 29000000.0, 11000000.0, 26000000.0, 28000000.0, 30000000.0, 14450000.0, 40000000.0, 29500000.0, 47000000.0, 80833333.33333333, 95000000.0, 49600000.0, 83800000.0, 35000000.0, 86750000.0, 65400000.0, 109625000.0, 60500000.0, 46500000.0, 139000000.0, 36666666.666666664, 84000000.0, 40000000.0, 127500000.0, 215000000.0, 154000000.0, 93000000.0, 58000000.0, 116500000.0, 175000000.0, 181250000.0, 187500000.0, 193750000.0, 200000000.0, 200000000.0, 200000000.0]
    },
    {
        name: 'Paramount',
        data: [20000000.0, 3500000.0, 23200000.0, 9425000.0, 8083333.333333333, 18076923.076923076, 13807692.307692308, 20575000.0, 23360000.0, 15851851.851851853, 18869565.217391305, 22523076.923076924, 29690360.0, 38294117.64705882, 30571428.57142857, 31818181.818181816, 37866666.666666664, 50636363.63636363, 39941176.47058824, 85566666.66666667, 78666666.66666667, 148461538.46153846, 80000000.0, 81500000.0, 49800000.0, 48687500.0, 57666666.666666664, 65142857.14285714, 113000000.0, 84500000.0, 53909090.90909091, 95909090.9090909, 103759285.71428572, 101625000.0, 128454545.45454545, 74000000.0, 80824145.14285715, 127166666.66666667, 124666666.66666667, 136666666.66666666, 201000000.0, 97500000.0, 142500000.0, 82500000.0, 87571428.57142857, 134285714.2857143, 202566666.66666666]
    },
    {
        name: 'Other',
        data: [0, 3500000.0, 4500050.0, 5932745.0, 7100000.0, 25666666.666666668, 13500000.0, 1200000.0, 12566666.666666666, 14857142.857142856, 16000000.0, 15333333.333333334, 8083333.333333333, 12591666.666666668, 17100000.0, 15300000.0, 13500000.0, 20000000.0, 47666666.666666664, 56666666.666666664, 65666666.666666664, 50333333.33333333, 35000000.0, 22500000.0, 10000000.0, 79000000.0, 18000000.0, 42000000.0, 38000000.0, 36500000.0, 180000000.0, 140000000.0, 100000000.0, 20000000.0, 33000000.0, 13500000.0, 62250000.0, 44125000.0, 26000000.0, 9900000.0, 25950000.0, 42000000.0, 28500000.0, 15000000.0, 79333333.33333333, 83000000.0, 122892857.14285715]
    },
    {
        name: 'Universal',
        data: [0, 20000000.0, 3677500.0, 21250000.0, 11250000.0, 12080000.0, 10500000.0, 14750000.0, 19000000.0, 21500000.0, 13875000.0, 14035714.285714285, 23850000.0, 27250000.0, 70538461.53846154, 24880000.0, 49812500.0, 31958333.333333332, 75142857.14285715, 44200000.0, 59000000.0, 47400000.0, 55000000.0, 62680000.0, 58642857.14285714, 61600000.0, 86333333.33333333, 73500000.0, 46500000.0, 77333333.33333333, 86065000.0, 88333333.33333333, 89625000.0, 89666666.66666667, 103500000.0, 71545454.54545455, 96166666.66666667, 27555555.555555556, 104235294.11764705, 58625000.0, 104611111.1111111, 82760714.28571428, 104000000.0, 44222222.222222224, 124727272.72727273, 125000000.0, 340000000.0]
    },
    {
        name: 'Warner Brothers',
        data: [0, 51000000.0, 25000000.0, 9166666.666666666, 42800000.0, 17833333.333333332, 24775000.0, 13411111.111111112, 9050000.0, 12000000.0, 18750000.0, 11285714.285714285, 29571428.57142857, 11062500.0, 28666666.666666668, 33718181.81818182, 39300000.0, 38133333.333333336, 43000000.0, 50555555.55555555, 81000000.0, 65857142.85714286, 84666666.66666667, 56650000.0, 92000000.0, 94636363.63636364, 103200000.0, 121800000.0, 123583333.33333333, 126000000.0, 110000000.0, 105416666.66666667, 62909090.90909091, 153000000.0, 86363636.36363636, 227166666.66666666, 131846153.84615384, 114742857.14285715, 92185714.28571428, 150818181.8181818, 124416666.66666667, 121666666.66666667, 75100000.0, 185714285.7142857, 119142857.14285715, 143250000.0, 97428571.42857143]
    },
    {
        name: 'Disney',
        data: [0, 0, 0, 0, 20000000.0, 16000000.0, 12000000.0, 8000000.0, 17500000.0, 35000000.0, 52500000.0, 70000000.0, 8045760.0, 47000000.0, 70000000.0, 51333333.333333336, 113857142.85714285, 141000000.0, 31153846.153846152, 57000000.0, 67000000.0, 124000000.0, 68333333.33333333, 82500000.0, 130000000.0, 70600000.0, 71000000.0, 92000000.0, 117333333.33333333, 131428571.42857143, 131733333.33333333, 82181818.18181819, 84285714.28571428, 124250000.0, 217250000.0, 202000000.0, 187777777.7777778, 213333333.33333334, 197536363.63636363, 168444444.44444445, 174736842.10526314, 217105263.15789473, 201372000.0, 179250000.0, 104312500.0, 177562500.0, 210444444.44444445]
    },
    {
        name: 'Lionsgate',
        data: [0, 0, 0, 0, 0, 15000000.0, 8775000.0, 2550000.0, 16500000.0, 15333333.333333334, 14166666.666666666, 13000000.0, 18000000.0, 18500000.0, 26916666.666666668, 35333333.333333336, 70000000.0, 23000000.0, 30125000.0, 15125000.0, 17000000.0, 16500000.0, 58000000.0, 16500000.0, 34000000.0, 42500000.0, 28187500.0, 48750000.0, 42500000.0, 27311111.111111112, 20903571.42857143, 27875000.0, 37500000.0, 38014285.71428572, 51000000.0, 65045454.54545455, 86250000.0, 98000000.0, 118200000.0, 14950000.0, 47000000.0, 31162500.0, 42500000.0, 30000000.0, 70000000.0, 4500000.0, 90000000.0]
    },
    {
        name: 'Sony',
        data: [0, 0, 0, 0, 0, 0, 0, 144000000.0, 136818181.8181818, 129636363.63636364, 122454545.45454545, 115272727.27272728, 108090909.0909091, 100909090.9090909, 93727272.72727272, 86545454.54545455, 79363636.36363637, 72181818.18181819, 65000000.0, 55000000.0, 45000000.0, 89000000.0, 133000000.0, 119333333.33333333, 105666666.66666667, 92000000.0, 80000000.0, 10000000.0, 47500000.0, 85000000.0, 50666666.666666664, 56293333.33333333, 61920000.0, 60000000.0, 71500000.0, 140333333.33333334, 78000000.0, 50000000.0, 145500000.0, 73000000.0, 84277777.77777778, 95555555.55555555, 148333333.33333334, 90000000.0, 200000000.0, 131666666.66666667, 100000000.0]
    },
    {
        name: 'DreamWorks',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50000000.0, 60000000.0, 75000000.0, 96500000.0, 58000000.0, 77500000.0, 35200000.0, 89500000.0, 62500000.0, 108750000.0, 155000000.0, 150000000.0, 154000000.0, 158000000.0, 67500000.0, 93333333.33333333, 119166666.66666666, 145000000.0, 124000000.0, 103000000.0, 82000000.0, 78500000.0, 75000000.0, 65000000.0, 65000000.0, 65000000.0, 65000000.0]
    }
],

    exporting: {
        sourceWidth: 800,
        sourceHeight: 600
    }

});
