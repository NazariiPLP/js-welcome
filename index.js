const monitor = {
  sizes: {
    height: {
      value: 30,
      scale: "cm // 1",
    },
    width: {
      value: 50,
      scale: "cm // 2",
    },
  },
  brightness: 750,
  refresh: {
    value: 144,
    scale: "Ggrc",
  },
  color: "black",
  resolution: "4k",
};

// const height = monitor.sizes.height.value;

// const { resolution, color: monitorColor } = monitor;

// console.log(resolution);
// console.log(monitorColor);

// Задача: витягнути value для висоти та ширини монітору

const {sizes: {height: {value: heightValue, scale: heightSale}, width: {value: widthValue, scale: widthScale}}, refresh: {value: refreshValue}} = monitor;

console.log(heightValue);
console.log(widthValue);
console.log(refreshValue);
console.log(heightSale);
console.log(widthScale);

const {color, brightness, resolution, ...restOfMonitor } = monitor;
