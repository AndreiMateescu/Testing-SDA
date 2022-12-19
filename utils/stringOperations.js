const stringOperation = {
    concat: function (string1, string2) {
      return string1 + string2;
    },
    include: function (string1, string2){
      return string1.includes(string2);
    },
    length: function(string){
      return string.length;
    },
    trim: function(string){
      return string.trim();
    },
    toLowerCase: function(string){
      return string.toLowerCase();
    },
    slice: function(string, startIndex, stopIndex){
      return string.slice(startIndex,stopIndex);
    }
  }

    module.exports = stringOperation;

