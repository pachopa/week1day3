var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function calculateSalesTax(salesData, salesTax) {
  var output = {};
  //console.log(salesData.length);
  //console.log(salesData[0].sales.length);
  for(var i = 0; i < salesData.length; i++) {
    var companySales = salesData[i].sales;
    var companyName = salesData[i].name;
    var companyProvince = salesData[i].province;
    var provinceTax = salesTax[companyProvince];
    for(var a = 0; a < companySales.length; a++) {
      if(output[companyName]) {
        output[companyName].totalSales += companySales[a];
        output[companyName].totalTaxes += companySales[a] * provinceTax;
      } else {
        output[companyName] = { "totalSales":  companySales[a], "totalTaxes": companySales[a] * provinceTax };
      }
    }
    // for(var b = 0; b < companySales.length; b++) {
    //   if(output[companyProvince]) {
    //     output[companyName].totalTaxes += companySales[b] * provinceTax;
    //   } else {
    //     output[companyName] = { totalTaxes: companySales[b] * provinceTax };
    //   }
    // }
  }
  return output;
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));
