"use strict";
// enum
// numeric enums
// enum Month {
//     JANUARY = 1,
//     FEBRUARY = 100,
//     MARC,
//     APRIL,
//     MAY,
//     JUNE,
//     JULY,
//     AUGUST,
//     SEPTEMBER,
//     OKTOBER,
//     NOVEMBER,
//     DECEMBER
// }
// console.log(Month.MARC);
// string enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEBRUARY"] = "Februari";
    Month["MARC"] = "Maret";
    Month["APRIL"] = "April";
    Month["MAY"] = "Mei";
    Month["JUNE"] = "Juni";
    Month["JULY"] = "Juli";
    Month["AUGUST"] = "Agustus";
    Month["SEPTEMBER"] = "September";
    Month["OKTOBER"] = "Oktober";
    Month["NOVEMBER"] = "November";
    Month["DECEMBER"] = "Desember";
})(Month || (Month = {}));
console.log(Month.JAN);
