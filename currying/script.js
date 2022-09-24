// function somar(item1) {
//   return (item2) => {
//     return (item3) => {
//       return item1 + item2 + item3;
//     };
//   };
// }

// console.log(somar(3)(1)(1));

const li = Array.from(document.querySelectorAll('li'));

const getElementAttr = (key) => {
  return (el) => {
    return el.getAttribute(key);
  };
};

const getAttrDataSlide = getElementAttr('data-slide');
const getAttrId = getElementAttr('id');

const dataSlideList = li.map(getAttrDataSlide);
const idList = li.map(getAttrId);

console.log(dataSlideList);
console.log(idList);
