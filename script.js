
addNewLabelColumn= function(){
    console.log("addNewLabelColumn")
    ga('send', 'event', "addNewLabelColumn", 'click', "addNewLabelColumn", 1)

    var columnEntry = document.createElement("div");
    columnEntry.className = 'labelColumnEntry'
    document.getElementById("label").appendChild(columnEntry)

    // button :: delete
    var _ = document.createElement("button");
    _.innerHTML = "-"
    _.onclick = removeLabelColumn

    columnEntry.appendChild(_)


    // input :: name of column
    var _ = document.createElement("input");
    _.setAttribute("class","columnNamesInput")
    _.setAttribute("placeholder", "Choose column name") 

    columnEntry.appendChild(_)


    // textarea :: labels inpout
    var _ = document.createElement("textarea");
    _.setAttribute("class","labelsInput")
    _.setAttribute("cols", "100 ")
    _.setAttribute("placeholder", "Put here the list of your label separated by '/' Exemple : label 1/label 2/label 3")

    columnEntry.appendChild(_) 

}

removeLabelColumn= function(){
    console.log("removeLabelColumn")
    ga('send', 'event', "removeLabelColumn", 'click', "removeLabelColumn", 1)

    document.getElementById("label").removeChild(this.parentNode)
}

removeNumericColumn= function(){
    console.log("removeNumericColumn")
    ga('send', 'event', "removeNumericColumn", 'click', "removeNumericColumn", 1)

    document.getElementById("numeric").removeChild(this.parentNode)
}

addNewNumericColumn = function(){
    console.log("addNewNumericColumn")
    ga('send', 'event', "addNewNumericColumn", 'click', "addNewNumericColumn", 1)

    var columnEntry = document.createElement("div");
    columnEntry.className = 'numericColumnEntry'
    document.getElementById("numeric").appendChild(columnEntry)

    // button :: delete
    var _ = document.createElement("button");
    _.innerHTML = "-"
    _.onclick = removeNumericColumn

    columnEntry.appendChild(_)


    // input :: column name
    var _ = document.createElement("input");
    _.setAttribute("class","columnNamesInput")
    _.setAttribute("placeholder", "Choose column name") 

    columnEntry.appendChild(_)

    // input :: type
    var _ = document.createElement("span")
    _.innerHTML = "Type :"
    columnEntry.appendChild(_)

    var _ = document.createElement("select");
    _.setAttribute("class","numericType")
    _.innerHTML = "<option>None</option><option>YTD</option><option>Percentage</option>"
    columnEntry.appendChild(_)

    columnEntry.appendChild(document.createElement("div"))

    // input :: min
    var _ = document.createElement("input");
    _.setAttribute("type", "number")
    _.setAttribute("placeholder", "Choose min value") 
    _.setAttribute("class","min")
    columnEntry.appendChild(_)


    // input :: max
    var _ = document.createElement("input");
    _.setAttribute("type", "number")
    _.setAttribute("placeholder", "Choose max value") 

    _.setAttribute("class","max")
    columnEntry.appendChild(_)

    // input :: precision
    var _ = document.createElement("input");
    _.setAttribute("type", "number")
    _.setAttribute("placeholder", "Nb digit after decimal")

    _.setAttribute("class","precision")
    columnEntry.appendChild(_)

}

addTimeToDate = function(date,increase,time){

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

}

toogleDateColumn = function(){
    document.getElementById("dateColumnEntry").classList.toggle('notDisplay')
    document.getElementById("dateColumnName").classList.toggle('columnNamesInput')
    ga('send', 'event', "toogleDateColumn", 'click', "toogleDateColumn", 1)
}

function product(args) {
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

generateFakir = function(){
    //  label
    var labelsInputValue;

    //  date
    var dateInputValue = [];
    if(document.getElementById("dateCheckbox").checked){
        
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


        if(start==null || end==null){
            console.log("Date input not valid !")
        }
        else{
            var d = new Date(start);
            while(d < end){
                dateInputValue.push(d)
                d = new Date(addTimeToDate(d, parseFloat(document.getElementById("step").value), granularity))
            }
            labelsInputValue = [dateInputValue.map(function(e){return format(e)})]
            labelsInputValue = labelsInputValue.concat(Array.prototype.slice.call( document.getElementsByClassName("labelsInput") )
                                        .map(function(e){return e.value.split("/")}))
        }
    }           
    else{
        labelsInputValue = Array.prototype.slice.call( document.getElementsByClassName("labelsInput") )
                                        .map(function(e){return e.value.split("/")})
    }

    var fakir;
    fakir = product(labelsInputValue)
    
    //  numeric
    for(i=0; i<document.getElementsByClassName("min").length; i++){
        var min = parseFloat(document.getElementsByClassName("min")[i].value,)
            max = parseFloat(document.getElementsByClassName("max")[i].value,)
            precision = Math.pow(10, parseFloat(document.getElementsByClassName("precision")[i].value))
            type = document.querySelectorAll(".numericType")[i].value;
        
        if(type == "None"){
            fakir.map(function(e){return e.push( Math.round((min+(Math.random()*max))*precision)/precision )});
        }
        if(type == "Percentage"){
            fakir.map(function(e){return e.push( Math.round((min+(Math.random()*max))*precision)/precision )});
        }
    }
    
    //  columnName
    var columnName = Array.prototype.slice.call( document.getElementsByClassName("columnNamesInput") ).map(function(e){return e.value});
    fakir.unshift(columnName)
    return fakir;
}

generateAndDownloadFakir = function(){

    const rows = generateFakir();
    let csvContent = "data:text/csv;charset=utf-8,";
    rows.forEach(function(rowArray){
    let row = rowArray.join(",");
    csvContent += row + "\r\n";
    }); 

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a")
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "fakir_data.csv");
    link.click(); 

    ga('send', 'event', "generateAndDownloadFakir", 'click', "generateAndDownloadFakir", 1)
}

document.getElementById("dateCheckbox").onclick = toogleDateColumn;
document.getElementById("labelButton").onclick = addNewLabelColumn;
document.getElementById("numericButton").onclick = addNewNumericColumn;
document.getElementById("generateButton").onclick = generateAndDownloadFakir;