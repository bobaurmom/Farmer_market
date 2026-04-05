import riceImg from '../assets/rice.png';
import mangoImg from '../assets/mango.jpg';
import cornImg from '../assets/corn.jpg';
import eggImg from '../assets/egg.jpg';
import tomatoImg from '../assets/tomato.jpg';
import potatoImg from '../assets/potato.jpg';
import cucumberImg from '../assets/cucumber.jpg';
import garlicImg from '../assets/garlic.jpg';
import gingerImg from '../assets/ginger.jpg';
import watermelonImg from '../assets/watermelon.jpg';
import cocabgeImg from '../assets/cocabge.jpg';
import duranImg from '../assets/duran.jpg';
import beanLongImg from '../assets/bean_long.jpg';
import rambutanImg from '../assets/Rambutan.jpg';
import eggplantImg from '../assets/eggplant.jpg';
import longanImg from '../assets/longan.jpg';
const PRODUCT_IMAGES = [
  { keywords: ["rice", "ស្រូវ", "អង្ករ"],          image: riceImg },
  { keywords: ["mango", "មាន់ហ្គោ", "ស្វាយ"],     image: mangoImg },
  { keywords: ["corn", "ពោត"],                image: cornImg },
  { keywords: ["eggplant", "ត្រប់","ត្រប់ក្តគោ"],  image: eggplantImg },
  { keywords: ["egg", "ពង"],                  image: eggImg },
  { keywords: ["tomato", "ប៉េងប៉ោះ"],  image: tomatoImg },
  { keywords: ["potato", "ដំឡូង"],     image: potatoImg },
  { keywords: ["cucumber", "ត្រសក់"],  image: cucumberImg },
  { keywords: ["garlic", "ខ្ទឹម"],      image: garlicImg },
  { keywords: ["ginger", "ខ្ញី"],        image: gingerImg },
  { keywords: ["watermelon", "ត្របែក"], image: watermelonImg },
  { keywords: ["cabbage", "cocabge", "ស្ពៃ"],image: cocabgeImg },
  { keywords: ["durian", "duran", "ទុរេន"],  image: duranImg },
  { keywords: ["bean", "bean long", "សណ្តែក"], image: beanLongImg },
  { keywords: ["longan", "មាន","មៀន"], image: longanImg },
  { keywords: ["rambutan", "សាវម៉ាវ","សាម៉ូវ"], image: rambutanImg },
];

export function getProductImage(type) {
  if (!type) return riceImg;
  const lower = type.toLowerCase().trim();

  // exact match first
  const exactMatch = PRODUCT_IMAGES.find(item =>
    item.keywords.some(k => k === lower)
  );
  if (exactMatch) return exactMatch.image;

  // partial match second
  const partialMatch = PRODUCT_IMAGES.find(item =>
    item.keywords.some(k => lower.includes(k) || k.includes(lower))
  );
  const randomImage = PRODUCT_IMAGES[Math.floor(Math.random() * PRODUCT_IMAGES.length)].image;
  return partialMatch ? partialMatch.image : randomImage;
}