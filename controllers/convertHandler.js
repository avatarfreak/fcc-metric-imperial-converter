/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */
const units = {
  gal: { name: "gallons", symbol: "l", si_units: 3.78541 },
  lbs: { name: "pounds", symbol: "kg", si_units: 0.453592 },
  mi: { name: "miles", symbol: "km", si_units: 1.60934 },
  l: { name: "liters", symbol: "gal", si_units: 0.26417 },
  kg: { name: "kilograms", symbol: "lbs", si_units: 2.20462 },
  km: { name: "kilometers", symbol: "mi", si_units: 0.621371 }
};

function ConvertHandler() {
  this.getNum = function(input) {
    let inv = "invalid number";
    const num = input.toLowerCase().split(/[a-zA-Z]/)[0];
    //No number provided, default to 1;
    if (num.length < 1) return 1;

    //check for double fraction
    if (num.split("/").length > 2) return inv;

    //string should be end in number only
    if (!num.match(/^.*\d$/)) return inv;

    //Invalid if slash is first character
    if (num.charAt(0) === "/") return inv;

    //convert to Number if no slash is found
    if (!num.match(/\//)) return Number(num);

    //
    let result = num.split("/").reduce((acc, prev) => acc / prev);

    return Number(result.toFixed(2));
  };

  this.getUnit = function(input) {
    //convert input to lowercase
    //extract only unit
    const unit = input
      .toLowerCase()
      .split(/[0-9/.]/)
      .slice(-1)[0];

    //validate unit in lookup table i.e units
    return Object.keys(units).includes(unit) ? unit : "invalid unit";
  };

  this.getReturnUnit = function(initUnit) {
    return units[initUnit].symbol;
  };

  this.spellOutUnit = function(unit) {
    return units[unit].name;
  };

  this.convert = function(initNum, initUnit) {
    let result = initNum * units[initUnit].si_units;
    return Number(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: `${initNum} ${this.spellOutUnit(
        initUnit
      )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
    };
    return result;
  };
}

module.exports = ConvertHandler;
