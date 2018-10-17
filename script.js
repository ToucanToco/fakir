var app = new Vue({
  el: '#app',

  data: {
    dateFormat: '%Y-%m-%d',
    dateStep: 1,
    columnNameDate: 'Date',
    granularity: '',
    isDateColumnVisible: true,
    labelsInput: [],
    labelsInputValue: [],
    numericInput: [],
    startDate: null,
    endDate: null,
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

    addTimeToDate: function(date, increase, time) {
      if (time === 'Minutes'){
        date.setMinutes(date.getMinutes() + increase);
        return date
      }

      if (time === 'Year'){
        date.setFullYear(date.getYear() + increase);
        return date
      }

      if (time === 'Month'){
        date.setMonth(date.getMonth() + increase);
        return date
      }

      if (time === 'Day'){
        date.setDate(date.getDate() + increase);
        return date
      }
    },

    generateAndDownloadFakir: function() {
      var rows = this.generateFakir();
      var csvContent = "data:text/csv;charset=utf-8,";

      rows.forEach(function(rowArray) {
        var row = rowArray.join(",");
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
      this.labelsInputValue = this.labelsInput.map(function(e) { return e.columnLabelValue.split("/") });

      this.transformDateInLabel();

      var fakir;
      fakir = this.product(this.labelsInputValue)

      // numeric
      for(i = 0; i < this.numericInput.length; i++){

          var min = parseFloat(this.numericInput[i].columnNumericMinValue),
              max = parseFloat(this.numericInput[i].columnNumericMaxValue),
              decimal = Math.pow(10, parseFloat(this.numericInput[i].columnNumericDecimal));

        fakir.map(function(e){ return e.push(Math.round((min+(Math.random() * max)) * decimal) / decimal)});
      }

      // column
      var columnsName = [];

      if (this.labelsInput.length) {
        columnsName = _.concat(columnsName, _.map(this.labelsInput, 'columnLabelName'))
      }

      if (this.numericInput.length) {
        columnsName = _.concat(columnsName, _.map(this.numericInput, 'columnLabelName'))
      }

      if (this.isDateColumnVisible) {
        columnsName.push(this.columnNameDate)
      }

      fakir.unshift(columnsName)
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
      this.isDateColumnVisible = !this.isDateColumnVisible
    },

    transformDateInLabel: function() {
      var dateInputValue = [];

      if (this.isDateColumnVisible) {
        var format;

        format = d3.timeFormat(this.dateFormat);

        if(_.isNull(this.startDate) || _.isNull(this.endDate)) {
          console.log("Date input not valid !")
        }
        else {
          var d = new Date(_.clone(this.startDate));

          while(d < new Date(this.endDate)) {
            dateInputValue.push(format(d))
            d = this.addTimeToDate(d, parseFloat(this.dateStep), this.granularity)
          }
          this.labelsInputValue.push(dateInputValue)
        }
      }
    }
  }
})