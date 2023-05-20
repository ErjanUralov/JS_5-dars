/* Data types in JS: undefined,boolean,object */
/*let matn = "JavaScript";*/                 /* string */
/*let raqam = 45;*/                          /* number */
/*let soz;*/                                 /* undefined */
/*let rost = 45==45?true:false;*/            /* boolean */
/*let arrayObject = [45,12,"text","matn",true,false];*/
/*let oddiyObject = {ismi:"Natasha",familiyasi:"Koroleva",yoshi:17};*/
/*console.log(oddiyObject.ismi,oddiyObject.familiyasi);*/

/* Functions in JS */
/*function savatchaniTekshir(uzatilganMalumot=[12,"text",true]){
    if (uzatilganMalumot.length == 0){
        document.write("Savatchaning ichida " + uzatilganMalumot.length + " ta ma'lumot bor");
    }
    else{
        document.write("Savatchaning ichida " + uzatilganMalumot.length + " dona ma'lumot bor");
    }
}*/
/*let container = [12,"text",true];
savatchaniTekshir();*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2010);

let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust",
            "sentyabr","oktyabr","noyabr","dekabr"];
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba",
            "juma","shanba"];

document.write("Bugun " + yil + "-yil " + kun + "-" + oylar[oy] +
                ", haftaning " + kunlar[haftaKuni] + " kuni.");






