function AdditionNum(Num1, Num2 = 20) {
    return Num1 + Num2;
}
// You Can't Set Number Then Default Value Is Work.
// let total = AdditionNum(15);


let total = AdditionNum(15, 10);
console.log(total);
