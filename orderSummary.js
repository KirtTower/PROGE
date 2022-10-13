var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 

let kaup = 0
var summa = 0 
for (kaubaotsija = 0; kaubaotsija < tellimus.rows.length; kaubaotsija++) {
    kaup = "Kauba nimi: " + tellimus.rows[kaubaotsija].name + "\n" + "kauba hind: " + tellimus.rows[kaubaotsija].price + "€\n" + "Kauba kogus: " + tellimus.rows[kaubaotsija].amount
    summa += tellimus.rows[kaubaotsija].price * tellimus.rows[kaubaotsija].amount
    console.log(kaup) }
summa = summa.toFixed(2)
summaVAT = (summa * 1.2).toFixed(2)
console.log("Summa käibemaksuta 20%: " + summa + "€")
console.log("Summa käibemaksuga: " + summaVAT + "€")