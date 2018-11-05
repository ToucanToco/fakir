product= function(args) {
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


dateRange = function(start, end, step, granularity, format){

  var d = new Date(start),
      endDate = new Date(end),
      dates = [],
      formatF = d3.timeFormat(format);
      
  while(d < endDate){
      dates.push(formatF(d))
      d = addTimeToDate(d, step, granularity)
  }
  return dates
}


addTimeToDate = function(date, step, granularity){

  if (granularity=='Minutes'){
      date.setMinutes(date.getMinutes() + step);
      return date
  }

  if (granularity=='Year'){
      date.setYear(date.getYear() + step);
      return date
  }

  if (granularity=='Month'){
      date.setMonth(date.getMonth() + step);
      return date
  }

  if (granularity=='Day'){
      date.setDate(date.getDate() + step);
      return date
  }

}