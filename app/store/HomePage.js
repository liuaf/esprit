Ext.define('Esprit.store.HomePage', {
    extend: 'Ext.data.Store',
    alias: 'store.homepage',

    fields: ['label', 'span', 't1', 't2', 't3', 't4', 't5', 't6', 'farmpark', 'threadhold'],

    data: [
        {label: 'year', span: 100}, // Corresponds to the sectors of the chart that display a year.

        // Note that most of the records have the span of '100', so that the pie chart sectors that represent them
        // have equal angular span.
        // There are also records with the span of '20' that are represented by the smaller blank sectors
        // that separate one country region from another.

        // The 'label' field stores a short state name that is displayed inside the sectors of the outer ring of the chart.
        // The 'state' field stores a full state name that is displayed by the 'stateName' text sprite
        // on top of the cartesian chart when the user hovers/taps a pie chart sector.

        // Finally, the 't1' - 't6' fields store the percentage change in unemployment from year to year.
        // These are used to determine the color of the pie chart sectors, and also the color and the length
        // of the cartesian chart bars.

        // Northeast region
        {label: 'ST1', span: 100, t1: 21,  t2: 23, t3: 27, t4: 31,  t5: 29, t6: 32, farmpark: '榆树农业局1号大田土壤温度', threadhold: 20},
        {label: 'SH1', span: 100, t1: 41,  t2: 41, t3: 40, t4: 35,  t5: 32, t6: 28, farmpark: '榆树农业局1号大田土壤湿度', threadhold: 25},
        {label: 'AT1', span: 100, t1: 18,  t2: 20, t3: 24, t4: 34,  t5: 34, t6: 24, farmpark: '榆树农业局1号大田空气温度', threadhold: 30},
        {label: 'AH1', span: 100, t1: 42,  t2: 41, t3: 40, t4: 35,  t5: 33, t6: 31, farmpark: '榆树农业局1号大田空气湿度', threadhold: 35},
        

        {label: '', span: 20}, // Corresponds to the empty sectors that divide the chart into regions.

        // Southeast region
        {label: 'ST2', span: 100, t1: 21,  t2: 23, t3: 27, t4: 31,  t5: 29, t6: 32, farmpark: '榆树农业局2号大田土壤温度', threadhold: 20},
        {label: 'SH2', span: 100, t1: 41,  t2: 41, t3: 40, t4: 35,  t5: 32, t6: 28, farmpark: '榆树农业局2号大田土壤湿度', threadhold: 25},
        {label: 'AT2', span: 100, t1: 18,  t2: 20, t3: 24, t4: 34,  t5: 34, t6: 24, farmpark: '榆树农业局2号大田空气温度', threadhold: 30},
        {label: 'AH2', span: 100, t1: 42,  t2: 41, t3: 40, t4: 35,  t5: 33, t6: 31, farmpark: '榆树农业局2号大田空气湿度', threadhold: 35},
        

        {label: '', span: 20},

        // Midwest region
        {label: 'ST3', span: 100, t1: 21,  t2: 45, t3: 42, t4: 21,  t5: 10, t6: 32, farmpark: '榆树农业局3号大田土壤温度', threadhold: 20},
        {label: 'SH3', span: 100, t1: 41,  t2: 20, t3: 40, t4: 35,  t5: 15, t6: 28, farmpark: '榆树农业局3号大田土壤湿度', threadhold: 25},
        {label: 'AT3', span: 100, t1: 18,  t2: 42, t3: 24, t4: 34,  t5: 31, t6: 24, farmpark: '榆树农业局3号大田空气温度', threadhold: 30},
        {label: 'AH3', span: 100, t1: 42,  t2: 41, t3: 16, t4: 35,  t5: 33, t6: 31, farmpark: '榆树农业局3号大田空气湿度', threadhold: 35},
    ]

});