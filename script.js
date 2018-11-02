var app = new Vue({
  el: '#app',
  data:{
    charts:[{
        type:"Linechart",
        settings:{
            "value":{
                isActive:true,
                isMandatory:true,
                type:"numeric",
                settings:{
                    "name":{value:"value", type:"text"}, 
                    "min":{value:0, type:"number"},
                    "max":{value:100, type:"number"},
                    "structure":{value:"None", type:"select", options:["None", "YTD", "Percentage"]},
                    "digits":{value:0, type:"number"},}, 
            },
            "date":{
                isActive:true,
                isMandatory:true,
                settings:{
                    "name":{value:"value", type:"text"}, 
                    "start":{value:null, type:"date"},
                    "end":{value:null, type:"date"},
                    "granularity":{value:"Month", type:"select", options:["Day", "Month", "Year"]},
                    "step":{value:1, type:"number"},}, 
            },
            "groups": {
                isActive:false,
                isMandatory:false,
                settings:{
                    "name":{value:"value", type:"text"}, 
                    "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
                }
            },
            "filter-bottom-right": {
                isActive:false,
                isMandatory:false,
                settings:{
                    "name":{value:"value", type:"text"}, 
                    "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
                }
            },
            "filter-upper-right": {
                isActive:false,
                isMandatory:false,
                settings:{
                    "name":{value:"value", type:"text"}, 
                    "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
                }
            },
            "filter-upper-middle": {
                isActive:false,
                isMandatory:false,
                settings:{
                    "name":{value:"value", type:"text"}, 
                    "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
                }
            }
        },
    }],
    activeType:"Linechart"
  },

  methods:{
    generateAndDownload:function(){
        console.log("generateAndDownload")
        var settings = _.filter(app.charts, function(c){return c['type']==app.activeType})[0]['settings']
        var fakir = app['generate'+app.activeType](settings)

        csvContent = "data:text/csv;charset=utf-8,";
        fakir.forEach(function(rowArray){
        row = rowArray.join(",");
        csvContent += row + "\r\n";
        }); 

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a")
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "fakir_data.csv");
        link.click(); 
    },

    generateLinechart: function(settings){
        
        var fakir;
        labelsInputValue = 
        fakir = product(labelsInputValue)

        return fakir
    },

    product: function(args) {
        return args.reduce(function tl (accumulator, value) {
            var tmp = [];
            accumulator.forEach(function (a0) {
            value.forEach(function (a1) {
                tmp.push(a0.concat(a1));
            });
            });
            return tmp;
        }, [[]]);
    }

  }
})

