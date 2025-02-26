type Combinable = number | string; // type alias
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: number | string, // Union type
  input2: Combinable,
  // resultConversation: 'as-number' | 'as-text' // Literal type
  resultConversation: ConversionDescriptor
) {
  // 유니언 타입: 정해진 타입 1개가 아닌 여러개의 타입을 받을 수 있음
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversation === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  // if (resultConversation === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringNames = combine('30', '26', 'as-number');
console.log(combinedStringNames);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
