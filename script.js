var app = new Vue({
  el: '#app',
  data:{
  charts:[
    {
      type:"Linechart",
      settings:{
        "value":{
          isActive:true,
          isMandatory:true,
          type:"numeric",
          settings:{
            "name":{value:"value", type:"text", text:"column name"}, 
            "type":{value:"Between min and max", type:"select", options:["Between min and max", "YTD from min to max"]},
            "min":{value:0, type:"number"},
            "max":{value:100, type:"number"},
            "digits":{value:0, type:"number"},}, 
        },
        "date":{
          isActive:true,
          isMandatory:true,
          type:"date",
          settings:{
            "name":{value:"date", type:"text", text:"column name"}, 
            "start":{value:"2018-01-01", type:"date"},
            "end":{value:"2018-01-30", type:"date"},
            "granularity":{value:"Day", type:"select", options:["Day", "Month", "Year"]},
            "step":{value:1, type:"number"},
            "format":{value:"%Y-%m-%d", type:"text"}}
        },
        "groups": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"groups", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-bottom-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_bottom_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-middle": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_middle", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          },
        },
        "reports": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"reports", type:"text", text:"column name"}, 
            "values":{value:"reportA/reportB/reportC", type:"textarea"}, 
          }
        }
      }
    },
    {
      type:"Horizontalbarchart",
      settings:{
        "value":{
          isActive:true,
          isMandatory:true,
          type:"numeric",
          settings:{
            "name":{value:"value", type:"text"}, 
            "type":{
              value:"Sum of values = total", 
              type:"select", 
              master:true,
              options:["Between min and max","Sum of values = total"],
              subsettings:{
                "Between min and max":{
                  "min":{value:0, type:"number"}, 
                  "max":{value:100, type:"number"},
                },
                "Sum of values = total":{
                  "total":{value:100, type:"number"},
                  "Sum of sublabel = label (with drill)":{value:true, type:"checkbox"},
                },
              }
            },
            "digits":{value:0, type:"number"}
          }, 
        },
        "label":{
          isActive:true,
          isMandatory:true,
          type:"depend",
          settings:{
            "name":{value:"label", type:"text", text:"column name"}, 
            "values":{value:"LabelA/LabelB/LabelC", type:"textarea"},
            "type":{
              value:"No drill", 
              type:"select", 
              master:true,
              options:["No drill","With drill"],
              subsettings:{
                "No drill":{
                },
                "With drill":{
                  "sublabel of ":{value:{
                    "LabelA":"i/o",
                    "LabelB":"r/y/u",
                    "LabelC":"a/d"
                  }, type:"childOfLabel", parent:"label"}
                },
              }
            },
          }
        },
        "optionalbutton":{isMandatory:true, isActive:true},
        "variation":{
          isActive:false,
          isMandatory:false,
          type:"numeric",
          settings:{
            "name":{value:"variation", type:"text", text:"column name"}, 
            "min":{value:0, type:"number"},
            "max":{value:10, type:"number"},
            "digits":{value:0, type:"number"},}, 
        },
        "groups": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"groups", type:"text", text:"column name"}, 
            "values":{value:"IndicateurA/IndicateurB/IndicateurC", type:"textarea"}, 
          }
        },
        "filter-bottom-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_bottom_right", type:"text"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-middle": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_middle", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          },
        },
        "reports": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"reports", type:"text", text:"column name"}, 
            "values":{value:"reportA/reportB/reportC", type:"textarea"}, 
          }
        },
        "dateRequester": {
          isActive:false,
          isMandatory:false,
          type:"date",
          settings:{
            "name":{value:"dateRequester", type:"text", text:"column name"}, 
            "start":{value:"2018-01-01", type:"date"},
            "end":{value:"2018-01-30", type:"date"},
            "granularity":{value:"Day", type:"select", options:["Day", "Month", "Year"]},
            "step":{value:1, type:"number"},
            "format":{value:"%Y-%m-%d", type:"text"}
          }
        }
      }
    },
    {
      type:"Bubblechart",
      settings:{
        "cx":{
          isActive:true,
          isMandatory:true,
          type:"numeric",
          settings:{
            "name":{value:"cx", type:"text", text:"column name"}, 
            "min":{value:0, type:"number"},
            "max":{value:100, type:"number"},
            "digits":{value:0, type:"number"},}, 
        },
        "cy":{
          isActive:true,
          isMandatory:true,
          type:"numeric",
          settings:{
            "name":{value:"cy", type:"text", text:"column name"}, 
            "min":{value:0, type:"number"},
            "max":{value:100, type:"number"},
            "digits":{value:0, type:"number"},}, 
        },
        "label":{
          isActive:true,
          isMandatory:true,
          type:"depend",
          settings:{
            "name":{value:"label", type:"text", text:"column name"}, 
            "values":{value:"LabelA/LabelB/LabelC", type:"textarea"},
            "type":{
              value:"No drill", 
              type:"select", 
              master:true,
              options:["No drill","With drill"],
              subsettings:{
                "No drill":{
                },
                "With drill":{
                  "sublabel of ":{value:{
                    "LabelA":"sublabelA1/sublabelA2",
                    "LabelB":"sublabelB1/sublabelB2/sublabelB3",
                    "LabelC":"sublabelC1/sublabelC1"
                  }, type:"childOfLabel", parent:"label"}
                },
              }
            },
          }
        },
        "optionalbutton":{isMandatory:true, isActive:true},
        "r":{
          isActive:false,
          isMandatory:false,
          type:"numeric",
          settings:{
            "name":{value:"value", type:"text", text:"column name"}, 
            "min":{value:0, type:"number"},
            "max":{value:100, type:"number"},
            "digits":{value:0, type:"number"},}, 
        },
        "filter-bottom-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_bottom_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-middle": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_middle", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          },
        },
        "reports": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"reports", type:"text", text:"column name"}, 
            "values":{value:"reportA/reportB/reportC", type:"textarea"}, 
          }
        },
        "dateRequester": {
          isActive:false,
          isMandatory:false,
          type:"date",
          settings:{
            "name":{value:"dateRequester", type:"text", text:"column name"}, 
            "start":{value:"2018-01-01", type:"date"},
            "end":{value:"2018-01-30", type:"date"},
            "granularity":{value:"Day", type:"select", options:["Day", "Month", "Year"]},
            "step":{value:1, type:"number"},
            "format":{value:"%Y-%m-%d", type:"text"}
          }
        }
      }
    },
    {
      type:"Waterfall",
      settings:{
        "value":{
          isActive:true,
          isMandatory:true,
          type:"numeric",
          settings:{
            "name":{value:"value", type:"text", text:"column name"},
            "From value":{value:0, type:"number"},
            "To value":{value:100, type:"number"},
            "Variation always of same sign":{value:false, type:"checkbox"},
            "digits":{value:0, type:"number"},}, 
        },
        "label":{
          isActive:true,
          isMandatory:true,
          type:"depend",
          settings:{
            "name":{value:"label", type:"text", text:"column name"}, 
            "From label":{value:"From", type:"text"}, 
            "To label":{value:"To", type:"text"}, 
            "values":{value:"LabelA/LabelB/LabelC", type:"textarea"},
            "type":{
              value:"No drill", 
              type:"select", 
              master:true,
              options:["No drill","With drill"],
              subsettings:{
                "No drill":{
                },
                "With drill":{
                  "sublabel of ":{value:{
                    "LabelA":"sublabelA1/sublabelA2",
                    "LabelB":"sublabelB1/sublabelB2/sublabelB3",
                    "LabelC":"sublabelC1/sublabelC1"
                  }, type:"childOfLabel", parent:"label"}
                },
              }
            },
          }
        },
        "optionalbutton":{isMandatory:true, isActive:true},
        "filter-bottom-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_bottom_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-right": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_right", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          }
        },
        "filter-upper-middle": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"filter_upper_middle", type:"text", text:"column name"}, 
            "values":{value:"GroupeA/GroupeB/GroupeC", type:"textarea"}, 
          },
        },
        "reports": {
          isActive:false,
          isMandatory:false,
          type:"label",
          settings:{
            "name":{value:"reports", type:"text", text:"column name"}, 
            "values":{value:"reportA/reportB/reportC", type:"textarea"}, 
          }
        },
        "dateRequester": {
          isActive:false,
          isMandatory:false,
          type:"date",
          settings:{
            "name":{value:"dateRequester", type:"text", text:"column name"}, 
            "start":{value:"2018-01-01", type:"date"},
            "end":{value:"2018-01-30", type:"date"},
            "granularity":{value:"Day", type:"select", options:["Day", "Month", "Year"]},
            "step":{value:1, type:"number"},
            "format":{value:"%Y-%m-%d", type:"text"}
          }
        }
      }
    }
  ],
  activeType:"Waterfall",
  seeOptionalParam:false
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
    link.setAttribute("download", "fakir_"+app.activeType+".csv");
    link.click(); 
  },

  generateLinechart: function(settings){
    
    var fakir,
        columns = _.filter(settings, function(e){return e.isActive }),
        labels = _.filter(columns, function(e){return _.includes(['date', 'label'], e.type)}),
        value = _.filter(columns, function(e){return e.type == "numeric"})[0],
        _dateRange;
    
    labelList = _.map(labels, function(e){
      if(e.type == "label"){
        return e.settings.values.value.split("/")
      }
      if(e.type == "date"){
        _dateRange = dateRange( 
          e.settings.start.value, 
          e.settings.end.value, 
          e.settings.step.value, 
          e.settings.granularity.value, 
          e.settings.format.value)
        return _dateRange
      }
    })
    
    fakir = product(labelList)
    if(value.settings.type.value == "Between min and max"){
      fakir = _.map(fakir, function(e){
        var new_value = _.round(_.random(value.settings.min.value, value.settings.max.value, true), value.settings.digits.value)
        return _.concat(e, new_value)
      })
    }

    if(value.settings.type.value == "YTD from min to max"){
      var meanStep = (value.settings.max.value - value.settings.min.value)/_dateRange.length,
          v = value.settings.min.value,
          values = {};
      _.map(_dateRange, function(d){values[d] = v; v += meanStep});

      fakir = _.map(fakir, function(e, i){
        var new_value = _.clamp(values[e[0]]+_.random(-meanStep, meanStep, true)*.5, value.settings.min.value, value.settings.max.value)
        new_value = _.round(new_value, value.settings.digits.value)

        new_value = e[0] == _.first(_dateRange) ? value.settings.min.value : e[0] == _.last(_dateRange)  ? value.settings.max.value : new_value

        return _.concat(e, new_value)
      })
    }
    

    // add column Names
    colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        value.settings.name.value)
    fakir = _.concat( [colNames] , fakir)
  
    console.log(fakir)
    return fakir
  },

  generateHorizontalbarchart: function(settings){
    
    var fakir,
        columns = _.filter(settings, function(e){return e.isActive }),
        labels = _.filter(columns, function(e){return _.includes(['date', 'label', 'depend'], e.type)}),
        values = _.filter(columns, function(e){return e.type == "numeric"}),
        labelList,
        _dateRange;
    
    labelList = _.map(labels, function(e){
      if(e.type == "depend"){
        if(e.settings.type.value == "No drill"){ return e.settings.values.value.split("/") }
        if(e.settings.type.value == "With drill"){
          r = _.flatMap(e.settings.type.subsettings["With drill"]["sublabel of "].value, function(v, k){
            if(_.includes( e.settings.values.value.split("/") , k)){
              return _.map(v.split("/"), function(w){return k+'-'+w}) 
            }
            else{
              return []
            }
          })

          r = _.concat(r, _.map(e.settings.values.value.split("/"), function(w){return "root-"+w}) )
          return r
        }
      }
      if(e.type == "label"){
        return e.settings.values.value.split("/")
      }
      if(e.type == "date"){
        _dateRange = dateRange( 
          e.settings.start.value, 
          e.settings.end.value, 
          e.settings.step.value, 
          e.settings.granularity.value, 
          e.settings.format.value)
        return _dateRange
      }
    })
    
    fakir = product(labelList)
    console.log(labelList)
    console.log(product(labelList))

    _.map(values ,function(value){
      if(value.settings.type){
        if(value.settings.type.value == "Between min and max"){
          fakir = _.map(fakir, function(e){
            var new_value = _.round(_.random(
              value.settings.type.subsettings["Between min and max"].min.value, 
              value.settings.type.subsettings["Between min and max"].max.value, true), value.settings.digits.value)
            return _.concat(e, new_value)
          })
        }
        if(value.settings.type.value == "Sum of values = total"){
          if(settings.label.settings.type.value=="No drill"|!value.settings.type.subsettings["Sum of values = total"]["Sum of sublabel = label (with drill)"].value){

            var refLabel = labels[0].settings.values.value.split("/")[0]
                total = value.settings.type.subsettings["Sum of values = total"].total.value,
                meanValue = total/labels[0].settings.values.value.split("/").length;
            
            refLabel = settings.label.settings.type.value=="No drill" ? refLabel : 'root-'+refLabel

            fakir = _.map(fakir, function(row){
              var new_value = _.round(meanValue + _.random(-meanValue, meanValue, true)*.5, value.settings.digits.value)
              return _.concat(row, new_value)
            })

            fakir = _.map(fakir, function(row){
              if(row[0] == refLabel){
                var f = _.filter(fakir, function(r){return _.isEqual( _.slice(r,1,-1), _.slice(row,1,-1)) });
                row[row.length-1] += total - _.sumBy(f, function(r){return _.last(r)})
              }
              return row
            })

          }

          if(settings.label.settings.type.value=="With drill" & value.settings.type.subsettings["Sum of values = total"]["Sum of sublabel = label (with drill)"].value){
            var parent = {},
                meanValue = {},
                total = value.settings.type.subsettings["Sum of values = total"].total.value,
                totalChild = {};
              
            _.map(fakir, function(row){parent[row[0].split("-")[0]]=row[0]; meanValue[row[0].split("-")[0]]=0})
            _.map(fakir, function(row){meanValue[row[0].split("-")[0]]+=1})
            meanValue['root'] = total/meanValue['root']
                        
            // on parents
            fakir = _.map(fakir, function(row){
              if( _.includes(row[0],"root-") ){
                var new_value = _.round(meanValue['root'] + _.random(-meanValue['root'], meanValue['root'], true)*.5, value.settings.digits.value)
                totalChild[row[0]] = new_value
                return _.concat(row, new_value)
              }
              else{
                return row
              }
            })

            fakir = _.map(fakir, function(row){
              if( row[0] == parent[row[0].split("-")[0]] & _.includes(row[0],"root-")  ){
                var f = _.filter(fakir, function(r){
                  return _.includes(r[0],"root-") & _.isEqual( _.slice(r,1,-1), _.slice(row,1,-1)) 
                  });
                totalChild[row[0]] += total - _.sumBy(f, function(r){return _.last(r)})
                row[row.length-1] += total - _.sumBy(f, function(r){return _.last(r)})
              }
              return row
            })
            
            // on child
            _.map(labels[0].settings.values.value.split("/"), function(l){meanValue[l] =  totalChild['root-'+l]/meanValue[l]})

            fakir = _.map(fakir, function(row){
              if( !_.includes(row[0],"root-") ){
                var new_value = _.round(meanValue[row[0].split("-")[0]] + _.random(-meanValue[row[0].split("-")[0]], meanValue[row[0].split("-")[0]], true)*.5, value.settings.digits.value)
                return _.concat(row, new_value)
              }
              else{
                return row
              }
            })

            fakir = _.map(fakir, function(row){
              if( row[0] == parent[row[0].split("-")[0]] & !_.includes(row[0],"root-")  ){
                var f = _.filter(fakir, function(r){
                  return (r[0].split("-")[0]==row[0].split("-")[0]) & _.isEqual( _.slice(r,1,-1), _.slice(row,1,-1) ) 
                  });
                row[row.length-1] += totalChild['root-'+row[0].split("-")[0]] - _.sumBy(f, function(r){return _.last(r)})
              }
              return row
            })

            console.log(fakir)

          }
        }
      }
      else{
        fakir = _.map(fakir, function(e){
          var new_value = _.round(_.random(
            value.settings.min.value, 
            value.settings.max.value, true), value.settings.digits.value)
          return _.concat(e, new_value)
        })
      }
    })
    
    // add column name
    if(settings.label.settings.type.value=="With drill"){
      fakir = _.map(fakir, function(row){
        return _.concat(_.replace(row[0],"root-",''), _.slice(row, 1), row[0].split("-"))})
      colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        _.map(values, function(e){return e.settings.name.value}), 
        ["parent", labels[0].settings.name.value] )
      colNames[0] = "id"
    }
    else{
      colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        _.map(values, function(e){return e.settings.name.value}))
    }
    fakir = _.concat( [colNames] , fakir)

    return fakir
  },

  generateBubblechart: function(settings){
    
    var fakir,
        columns = _.filter(settings, function(e){return e.isActive }),
        labels = _.filter(columns, function(e){return _.includes(['date', 'label', 'depend'], e.type)}),
        values = _.filter(columns, function(e){return e.type == "numeric"}),
        labelList,
        _dateRange;
    
    labelList = _.map(labels, function(e){
      if(e.type == "depend"){
        if(e.settings.type.value == "No drill"){ return e.settings.values.value.split("/") }
        if(e.settings.type.value == "With drill"){
          r = _.flatMap(e.settings.type.subsettings["With drill"]["sublabel of "].value, function(v, k){
            if(_.includes( e.settings.values.value.split("/") , k)){
              return _.map(v.split("/"), function(w){return k+'-'+w}) 
            }
            else{
              return []
            }
          })

          r = _.concat(r, _.map(e.settings.values.value.split("/"), function(w){return w+"-"+w}) )
          return r
        }
      }
      if(e.type == "label"){
        return e.settings.values.value.split("/")
      }
      if(e.type == "date"){
        _dateRange = dateRange( 
          e.settings.start.value, 
          e.settings.end.value, 
          e.settings.step.value, 
          e.settings.granularity.value, 
          e.settings.format.value)
        return _dateRange
      }
    })
    
    fakir = product(labelList)

    //values
    _.map(values ,function(value){
      fakir = _.map(fakir, function(e){
        var new_value = _.round(_.random(
          value.settings.min.value, 
          value.settings.max.value, true), value.settings.digits.value)
        return _.concat(e, new_value)
      })
    })

    
    // separation and add column name
    if(settings.label.settings.type.value=="With drill"){
      fakir = _.map(fakir, function(row){
        g = row[0].split("-")[0]
        l = row[0].split("-")[1]
        lev = g==l ? 'main' : 'sub'
        return _.concat( g, _.slice(row, 1), l, lev)})
      colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        _.map(values, function(e){return e.settings.name.value}), 
        ["label", "level"] )
      colNames[0] = "group"
    }
    else{
      colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        _.map(values, function(e){return e.settings.name.value}))
    }
    fakir = _.concat( [colNames] , fakir)

    return fakir
  },

  generateWaterfall: function(settings){
    
    var fakir,
        columns = _.filter(settings, function(e){return e.isActive }),
        labels = _.filter(columns, function(e){return _.includes(['date', 'label', 'depend'], e.type)}),
        value = _.filter(columns, function(e){return e.type == "numeric"})[0],
        labelList,
        _dateRange;
    
    labelList = _.map(labels, function(e){
      if(e.type == "depend"){
        if(e.settings.type.value == "No drill"){ return e.settings.values.value.split("/") }
        if(e.settings.type.value == "With drill"){
          r = _.flatMap(e.settings.type.subsettings["With drill"]["sublabel of "].value, function(v, k){
            if(_.includes( e.settings.values.value.split("/") , k)){
              return _.map(v.split("/"), function(w){return k+'-'+w}) 
            }
            else{
              return []
            }
          })

          r = _.concat(r, _.map(e.settings.values.value.split("/"), function(w){return w+"-"+w}) )
          return r
        }
      }
      if(e.type == "label"){
        return e.settings.values.value.split("/")
      }
      if(e.type == "date"){
        _dateRange = dateRange( 
          e.settings.start.value, 
          e.settings.end.value, 
          e.settings.step.value, 
          e.settings.granularity.value, 
          e.settings.format.value)
        return _dateRange
      }
    })
    
    fakir = product(labelList)

    filtersColumns = _.uniqWith(_.map(fakir, function(row){return  _.slice(row,1) }), _.isEqual)

    // contrainte
    if(settings.label.settings.type.value=="No drill"){
        var refLabel = labels[0].settings.values.value.split("/")[0]
            total = value.settings['To value'].value - value.settings['From value'].value,
            meanValue = total/labels[0].settings.values.value.split("/").length,
            m = value.settings["Variation always of same sign"].value ? 0.5:2;
        
        fakir = _.map(fakir, function(row){
          var new_value = _.round(meanValue + _.random(-meanValue, meanValue, true)*m, value.settings.digits.value)
          return _.concat(row, new_value)
        })

        fakir = _.map(fakir, function(row){
          if(row[0] == refLabel){
            var f = _.filter(fakir, function(r){return _.isEqual( _.slice(r,1,-1), _.slice(row,1,-1)) });
            row[row.length-1] += total - _.sumBy(f, function(r){return _.last(r)})
          }
          return row
        })
    }

    if(settings.label.settings.type.value=="With drill"){
      var parent = {},
          meanValue = {},
          total = value.settings['To value'].value - value.settings['From value'].value,
          totalChild = {},
          m = value.settings["Variation always of same sign"].value ? 0.5:2;;
        
      _.map(fakir, function(row){parent[row[0].split("-")[0]]=row[0]; meanValue[row[0].split("-")[0]]=0})
      _.map(fakir, function(row){meanValue[row[0].split("-")[0]]+=1} )
      meanValue['root'] = total/labels[0].settings.values.value.split("/").length

      // on parents
      fakir = _.map(fakir, function(row){
        if( _.includes(_.values(parent), row[0]) ){
          var new_value = _.round(meanValue['root'] + _.random(-meanValue['root'], meanValue['root'], true)*m, value.settings.digits.value)
          totalChild[row[0]] = new_value
          return _.concat(row, new_value)
        }
        else{
          return row
        }
      })

      fakir = _.map(fakir, function(row){
        if( row[0] == parent[row[0].split("-")[0]] & _.includes(_.values(parent), row[0])  ){
          var f = _.filter(fakir, function(r){
            return _.includes(_.values(parent), r[0]) & _.isEqual( _.slice(r,1,-1), _.slice(row,1,-1)) 
            });
          totalChild[row[0]] += total - _.sumBy(f, function(r){return _.last(r)})
          row[row.length-1] += total - _.sumBy(f, function(r){return _.last(r)})
        }
        return row
      })

      // on child
      console.log(totalChild)
      console.log(meanValue)

      _.map(labels[0].settings.values.value.split("/"), function(l){meanValue[l] =  totalChild[l+'-'+l]/(meanValue[l]-1) })

      console.log(meanValue)

      fakir = _.map(fakir, function(row){
        if( !_.includes(_.values(parent), row[0]) ){
          var new_value = _.round(meanValue[row[0].split("-")[0]] + _.random(-meanValue[row[0].split("-")[0]], meanValue[row[0].split("-")[0]], true)*m, value.settings.digits.value)
          return _.concat(row, new_value)
        }
        else{
          return row
        }
      })

      fakir = _.map(fakir, function(row){
        if( !_.includes(_.values(parent), row[0]) ){
          var f = _.filter(fakir, function(r){
            return (r[0].split("-")[0]==row[0].split("-")[0]) & _.isEqual( _.slice(r,1,-1), _.slice(row,1,-1) ) 
            });
          row[row.length-1] += 2*totalChild[row[0].split("-")[0]+'-'+row[0].split("-")[0]] - _.sumBy(f, function(r){return _.last(r)})
        }
        return row
      })
    }

    // separation and add column name
    if(settings.label.settings.type.value=="With drill"){
      fakir = _.map(fakir, function(row){
        g = row[0].split("-")[0]
        l = row[0].split("-")[1]
        lev = g==l ? 'parent' : 'child'
        return _.concat( g, _.slice(row, 1), l, lev)})
      colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        value.settings.name.value, 
        ["label", "type"] )
      colNames[0] = "group"

      fakir = _.concat(
        [colNames],
        _.map(filtersColumns, function(f){
          return _.concat(labels[0].settings['From label'].value, f, value.settings['From value'].value, labels[0].settings['From label'].value, "-1") } ), 
        fakir, 
        _.map(filtersColumns, function(f){
          return _.concat(labels[0].settings['To label'].value, f, value.settings['To value'].value, labels[0].settings['To label'].value, "-1") } ))
    }
    if(settings.label.settings.type.value=="No drill"){
      colNames = _.concat(
        _.map(labels, function(e){return e.settings.name.value}),
        value.settings.name.value,
        "type"
        )

      fakir = _.concat(
        [colNames],
        _.map(filtersColumns, function(f){return _.concat(labels[0].settings['From label'].value, f, value.settings['From value'].value, "-1") } ), 
        fakir, 
        _.map(filtersColumns, function(f){return _.concat(labels[0].settings['To label'].value, f, value.settings['To value'].value, "-1") } ))
    }

    console.log(fakir)
    return fakir
  },

  }
})

