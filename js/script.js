
const CHOCOLATE_PRICE = 20;

const WATER_WITH_GAS_PRICE = 10;
const WATER_WITHOUT_GAS_PRICE = 15;

const CHIPS_PRICE = 25;

const WANILLA_ICE_CREAM_PRICE = 1;
const CHOCOLATE_ICE_CREAM_PRICE = 2;
const STRAWBERRY_ICE_CREAM_PRICE = 3;
const VOLUME_CUP_IN_GRAMS = 150;

const COFFEE_CAPPUCCINO_PRICE = 50;
const COFFEE_LATTE_PRICE = 50;
const COFFEE_AMERICANO_PRICE = 40;
const COFFEE_ESPRESSO_PRICE = 40;


function countCoinsСhange(price, coins, productName) {
   let coinsChange = coins - price;
   if (coinsChange >= 0) {
      console.log(`Забери ${productName}, сдача ${coinsChange}`);
   } else {
      console.log(`Недостаточно средств, забери ${coins}`);
   }
}
function countIceCreamWeight(price, coins, productName) {
   let productWeight = coins / price;
   let coinsChange = coins % price;
   if (productWeight <= VOLUME_CUP_IN_GRAMS) {
      console.log(`забери ${productName} мороженое`, parseInt(productWeight), 'грамм', `сдача ${coinsChange}`); // TODO: Перенести console log из этой функции.
   } else {
      console.log(`забери ${productName} мороженое`, VOLUME_CUP_IN_GRAMS, 'грамм', `сдача ${coins - (price * VOLUME_CUP_IN_GRAMS)}`)
   }
}

function getChips(price, coins) {
   let namberOfPackages = coins / price;
   if (namberOfPackages >= 1) {
      console.log('Чипсы', parseInt(namberOfPackages), 'Шт.');
   } else {
      console.log(`Недостаточно средств, забери ${coins}`);
   }
}
function getChocolate(coins) {
   countCoinsСhange(CHOCOLATE_PRICE, coins, "шоколадку");
}
function getWater(coins, isWaterWithGas) {
   if (isWaterWithGas) {
      countCoinsСhange(WATER_WITH_GAS_PRICE, coins, "Воду с газом");
   } else {
      countCoinsСhange(WATER_WITHOUT_GAS_PRICE, coins, "Воду без газа");
   }
}
function getIceCream(coins, productName) {
   if (productName === "ванильное") {
      countIceCreamWeight(WANILLA_ICE_CREAM_PRICE, coins, 'ванильное');
   } else if (productName === "шоколадное") {
      countIceCreamWeight(CHOCOLATE_ICE_CREAM_PRICE, coins, 'шоколадное');

   } else {
      countIceCreamWeight(STRAWBERRY_ICE_CREAM_PRICE, coins, 'клубничное');
   }
}

function getCoffee(coins, productName) {
   if (productName === "капучино") {
      countCoinsСhange(COFFEE_CAPPUCCINO_PRICE, coins, "капучино");
   } else if (productName === "латте") {
      countCoinsСhange(COFFEE_LATTE_PRICE, coins, "латте");
   } else if (productName === "американо") {
      countCoinsСhange(COFFEE_AMERICANO_PRICE, coins, "американо");
   } else {
      countCoinsСhange(COFFEE_ESPRESSO_PRICE, coins, "эспрессо");
   }
}



getChocolate(50);
getChips(CHIPS_PRICE, 100);
getWater(15, true);
getCoffee(10, "эспрессо");
getIceCream(1, "шоколадное");