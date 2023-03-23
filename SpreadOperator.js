const number1 = [1,2,3,4];
const number2 = [5,6,7,8];
const numbersCombined = [4,3,2,1, ...number2];

const circle = {
  radius: 10,
  style:{
    color: 'blue'
  }
};

const clonedCircle = {
    ...circle
}