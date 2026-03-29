//40 -si ==========================================================
// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//   }
//   return 1 + uzunlik(str.substring(1));
// }
// console.log(uzunlik("apple"));

//41 -si ==============================================================
// let son = [35, 5];
// function tobolish(n, m) {
//   if (n % m === 0 ){
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// tobolish(son[0], son[1]);

//42 -si ==========================================================
function tobolish(n) {
  let natija= Number(n);
}
console.log(tobolish("75"));



//43-si ===============================================================
// let son = [90, 5];
// function tobolish(n, m) {
//   if(n<0)return "-1";
//   return n * m;
// }
// let javob = tobolish(son[0], son[1]);
// console.log(javob);


//44-si =============================================================
let ism = ["Ali", "Muhammaddov"];
function topls(s, m) {
  return s + " " + m;
}
console.log(topls(ism[0],ism[1] ));



//45-si =============================================================
// function bug(holat) {
//   if (holat) {
//     return "sad days";
//   } else {
//     return "it's a good day";
//   }
// }


// 45. Bug
function bug(holat) {
  return holat ? "sad days" : "it's a good day";
}
console.log(bug(true));

// // 46. TushurMassiv
// function tushirMassiv(arr, n) {
//   return arr.slice(n);
// }
// console.log(tushirMassiv([1, 2, 3], 1));

// // 47. Ovozlar
// function ovozlar(ovoz) {
//   return ovoz.upvotes - ovoz.downvotes;
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));

// // 48. Negativ
// function negativ(son) {
//   return son <= 0 ? son : -son;
// }
// console.log(negativ(4));

// // 49. Almash (Reverse)
// function almash(arr) {
//   return arr.reverse();
// }
// console.log(almash([1, 2, 3, 4]));

// // 50. Kinoga kirish
// function kinogaKirish(yosh, otaOna) {
//   return yosh >= 15 || otaOna;
// }
// console.log(kinogaKirish(14, true));

// // 51. Oshir 1ga
// function oshir1ga(arr) {
//   return arr.map(x => x + 1);
// }
// console.log(oshir1ga([0, 1, 2, 3]));

// // 52. Template string
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija = `${ism} ${familiya}`;
// console.log(natija);

// // 53. Ternary operator
// var holatiYaxshimi = true;
// var holati = holatiYaxshimi ? "yaxshi" : "yaxshi emas";
// console.log(holati);

// // 54. So'z uzunligi
// function sozUzunligi(str) {
//   return str.length % 2 === 0;
// }
// console.log(sozUzunligi("apples"));

// // 55. Daraja
// function daraja(x, y) {
//   return Math.pow(x, y);
// }
// console.log(daraja(5, 5));

// // 56. Songi element
// function songiElement(arr) {
//   return arr[arr.length - 1];
// }
// console.log(songiElement([1, 2, 3]));

// // 57. Kabisa yili
// function kabisa(yil) {
//   return (yil % 4 === 0 && yil % 100 !== 0) || (yil % 400 === 0);
// }
// console.log(kabisa(2020));

// // 58. Birinchi harfsiz
// function soz(word) {
//   return word.substring(1);
// }
// console.log(soz("apple"));

// // 59. Teskari Bool
// function teskariBool(bool) {
//   return !bool;
// }
// console.log(teskariBool(true));

// // 60. Juft yoki Toq
// function juftMiToqmi(son) {
//   return son % 2 === 0 ? "juft" : "toq";
// }
// console.log(juftMiToqmi(3));
