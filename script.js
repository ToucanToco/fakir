var app = new Vue({
  el: '#app',

  data: {
    isDateColumnVisible: true,
    labelsInput: [],
    numericInput: []
  },

  methods: {
    addNewLabelColumn: function() {
      this.labelsInput.push({
        columnLabelName: '',
        columnLabelValue: ''
      })
    },

    addNewNumericColumn: function() {
      this.numericInput.push({
        columnNumericName: '',
        columnNumericMinValue: '',
        columnNumericMaxValue: '',
        columnNumericDecimal: ''
      })

    },

    addTimeToDate: function(date,increase,time){
      if (time=='Minutes'){
        date.setMinutes(date.getMinutes() + increase);
        return date
      }
      if (time=='Year'){
        date.setFullYear(date.getYear() + increase);
        return date
      }
      if (time=='Month'){
        date.setMonth(date.getMonth() + increase);
        return date
      }
      if (time=='Day'){
        date.setDate(date.getDate() + increase);
        return date
      }
    },

    generateAndDownloadFakir: function() {
      const rows = this.generateFakir();
      let csvContent = "data:text/csv;charset=utf-8,";
      rows.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
      });

      var encodedUri = encodeURI(csvContent);
      var link = document.createElement("a")
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "fakir_data.csv");
      link.click();
    },

    generateFakir: function() {

      // label
      labelsInputValue = this.labelsInput.map(function(e){return e.columnLabelValue.split("/")});
      var dateInputValue = [];

      if(this.isDateColumnVisible) {
        var start = document.getElementById("start").valueAsDate,
            end = document.getElementById("end").valueAsDate,
            granularity = document.querySelector("#granularity").value,
            format;

        if(document.getElementById("format").value=="" ){
          format = d3.timeFormat("%Y-%m-%d");
        }
        else{
          format = d3.timeFormat(document.getElementById("format").value);
        }

        if(start == null || end == null){
          console.log("Date input not valid !")
        }
        else {
          var d = start;
          while(d < end){
              dateInputValue.push(d)
              d = addTimeToDate(d, parseFloat(document.getElementById("step").value), granularity)
          }
          labelsInputValue.push(dateInputValue.map(function(e){return format(e)}))
        }
      }

      var fakir;
      fakir = this.product(labelsInputValue)

    // numeric
      for(i = 0; i < this.numericInput.length; i++){

          var min = parseFloat(this.numericInput[i].columnNumericMinValue),
              max = parseFloat(this.numericInput[i].columnNumericMaxValue),
              decimal = Math.pow(10, parseFloat(this.numericInput[i].columnNumericDecimal));

        fakir.map(function(e){return e.push( Math.round((min+(Math.random()*max))*decimal)/decimal )});
      }

      // column
      var columnName = Array.prototype.slice.call( document.getElementsByClassName("columnNamesInput") ).map(function(e){return e.value});
      if(document.getElementById("dateCheckbox").checked){
        columnName.shift()
      }

      fakir.unshift(columnName)
      return fakir;
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
      }, [[]])
    },

    removeLabelColumn: function(index) {
      this.labelsInput.splice(index, 1)
    },

    removeNumericColumn: function(index) {
      this.numericInput.splice(index, 1)
    },

    toggleDateColumn: function() {
      return this.isDateColumnVisible = !this.isDateColumnVisible
    }
  }
})