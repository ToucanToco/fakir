var app = new Vue({
  el: '#app',
  data:{
      columns:[{"name":"index", "display":true, "type":"Numeric", 
                "Settings":{
                    "Numeric":{"structure":"None", "min":0, "max":100000, "digit":0},
                    "Label":{"structure":"Breakdown", "labelsList":[], "dateExtraction":"%m", "parentColumn":""},
                    "Date":{"startDate":"", "endDate":"", "granularity":"Month", "step":1, "format":"%Y-%m-%d"},
                },
                }],
      data:[[1], [2], [3]]
  },

  methods:{
    addColumn:function(){
        console.log("addColumn")
        var defaultColumnSettings = {"name":"New column", "display":true, "type":"Numeric", 
        "Settings":{
            "Numeric":{"structure":"None", "min":0, "max":100, "digit":0},
            "Label":{"structure":"Breakdown", "labelsList":[], "dateExtraction":"%m", "parentColumn":""},
            "Date":{"startDate":"", "endDate":"", "granularity":"Month", "step":1, "format":"%Y-%m-%d"},},
        }
        
        _.map(app.columns, function(c){c.display =  false})
        app.columns.push(defaultColumnSettings)
    },
    remove: function(index){
        console.log(index)
        app.columns.splice(index, 1)
    },
    displaySettings:function(column){
        console.log("displaySettings")
        _.map(_.filter(app.columns, function(c){return c != column}), function(c){c.display =  false})
        column.display = !column.display
    },
    apply:function(){
        console.log("apply")
    }
  }
})


// Date
// Label
    // Breakdown
    // Date extraction
    // Children of :

// Numeric
    // None
    // YTD
    // Percentage