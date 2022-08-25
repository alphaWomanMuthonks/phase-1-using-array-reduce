const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((num, sum)=>{
  return sum+=num;
})
console.log(totalBatteries);

// const sumOfTotalBatteries = batteryBatches.reduce(
//   (sum, num) => sum += num 
// );
// console.log =sumOfTotalBatteries
