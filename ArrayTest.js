const studentList = ['김우진', '김현', '방승희', '변호녕', '소사무엘', '송영준', '신동현', '오승민', '유승민', '윤준현', '이민구', '이유안', '김영식', '이영식', '홍승민', '이은정', '정영식', '최성민', '최은철', '홍문기']
const pokemonList = ['피카츄', '라이츄', '파이리', '꼬북이']

//? 1. 전체 명단을 문자열로 출력하여, 모든 학생의 이름이 쉼표로 구분되도록 하려고 합니다. 이를 구현하는 코드를 작성하세요.
// console.log(studentList.join())

//? 2. 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.
// console.log(studentList.pop())

//? 3. 명단 중 세 번째 학생이 전학을 갔고, 새 학생이 그 자리에 왔습니다. 기존 학생을 제거하고 새 학생을 추가하는 코드를 작성하세요.
// console.log(studentList.splice(2,1,'새학생'))
// console.log(studentList)

//? 4. 명단의 순서를 역순으로 바꾸고자 합니다. 이를 위한 코드를 작성하세요.
// console.log(studentList.reverse())

//? 5. 임의의 학생(본인이름) 명단에서 몇 번째에 있는지 찾아서 그 위치를 출력하는 코드를 작성하세요.
// console.log(studentList.indexOf('홍문기'))

//? 6. 명단에 같은 이름(성씨제외)을 가진 학생이 두 명 있습니다. 이 중 마지막에 있는 학생의 위치를 찾아 출력하는 코드를 작성하세요.
//* 아직 못품. 해결해야함
//* 바닐라식으로 이해하기
const arrayOfArrays = [
  [7, 8, 14],
  [7, 8, 14],
  [12, 13, 16],
  [12, 13, 16],
  [7, 8, 14],
  [12, 13, 16]
];

// 중복된 값을 제거할 배열
const uniqueArrays = [];

// 배열을 돌면서 중복된 배열을 제거
for (const arr of arrayOfArrays) {
  if (!uniqueArrays.some((uniqueArr) => JSON.stringify(uniqueArr) === JSON.stringify(arr))) {
    uniqueArrays.push(arr);
  }
}

console.log(uniqueArrays);


//* 성이 한글자인 경우만 해당됨.
//* 이름만 뽑아서 배열에 넣기.
let nameArray = []

studentList.forEach((element) => {
  nameArray.push(element.slice(1))
})
// console.log(nameArray)

//* 선택한 index를 본래 배열에서 빼는 함수를 제작.
// function createArrayWithoutIndex(originalArray, indexToRemove) {
//   let newArray = [];

//   for (let i = 0; i < originalArray.length; i++) {
//     // index를 제외하고 모든 것을 newArray에 push한다.
//     if (i !== indexToRemove) {
//       newArray.push(originalArray[i])
//     }
//   }
//   return newArray
// }

//* 모든 중복된 값을 찾는 함수
function findDuplicateNames(array) {
  let duplicateIndexes = [];

  for (let i = 0; i < array.length; i++) {
    // 현재 요소를 제외한 배열에서 같은 값의 모든 인덱스를 찾음
    let indexes = nameArray.reduce(
      (acc, element, index) => {
        if (element === array[i]) {
          // element가 array[i]와 같을 때의 index를 배열로 만들어준다.
          // ...스프레드 연산자를 사용해 여러 겹의 배열이 아닌 하나의 배열로 만들어준다.
          // accumulator의 속성을 활용해 같은 값의 index를 추가로 뽑아 낼 수 있다.
          return [...acc, index];
        } else {
          return acc;
        }
      }, [])
    // console.log(indexes)

    // 중복된 값이 있다면 현재 인덱스와 찾은 인덱스를 기록
    if (indexes.length > 1) {
      duplicateIndexes.push(indexes);
    }
  }

  // 중복된 배열 제거하기

  // 배열안의 값끼리 비교할 때는 Set을 써서 중복을 없앨 수 있지만 배열간의 비교는 불가능 하여 배열을 문자화시켜서 비교를 해준다. 비교후에 다시 객체로 파싱해서 배열을 만들어준다.
  const uniqueArrays = Array.from(new Set(duplicateIndexes.map(JSON.stringify)), JSON.parse);

  return uniqueArrays

}

const allSameNameArrayIndex = findDuplicateNames(nameArray);
console.log(allSameNameArrayIndex);

// const newArray = createArrayWithoutIndex(nameArray, 0)
// console.log(newArray)

//* 1try

// let sameNameArray = []

// for (i = 0; i < nameArray.length; i++) {
//   if (createArrayWithoutIndex(nameArray, i).includes(nameArray[i]) === true) {
//     sameNameArray.push(i);
//   }
// }
// console.log(sameNameArray)


//* 2try
//for(i=0; i<nameArray.length; i++){
//   if(createArrayWithoutIndex(nameArray,i).includes(nameArray[i])===true){
//     sameNameArray.push(nameArray[i])
//   }
// }

//* 3try
// for(i=0; i<nameArray.length; i++){
//   if(createArrayWithoutIndex(nameArray,i).findIndex((element)=>{element ===nameArray[i]})
//   ){

//   }
// }

  //* 4try
  //* reduce메서드는 문자열은 return을 줘야하고, 숫자는 return을 쓰면 안됨.






//? 7. 명단에서 성씨가 ‘김’씨인 학생의 이름을 찾아 출력하는 코드를 작성하세요

// console.log(studentList.filter(element=>element[0]==="김"))

//? 8. 기초데이터(studentList, pokemonList) 두 개의 명단을 합쳐 전체 학생 명단을 만들려고 합니다. 두 명단을 결합하는 코드를 작성하세요.

// console.log(studentList.concat(pokemonList))

//? 9. 모든 학생의 이름 앞에 '학생_'을 붙여 새로운 형식으로 명단을 만드는 코드를 작성하세요.

// let newArray = []

// studentList.forEach(element=>newArray.push('학생_'+element))
// console.log(newArray)

//? 10. 명단에 있는 모든 학생들의 이름을 하나의 문자열로 연결하여 출력하는 코드를 작성하세요.
// console.log(studentList.join())

//? 11. 모든 학생들의 이름이 세 글자인지 확인하는 코드를 작성하세요.
// console.log(studentList.every(element=>element.length===3))

//? 12. 명단에서 마지막 학생이 전학을 갔습니다. 이 학생을 명단에서 제거하고, 그 학생의 이름을 출력하는 코드를 작성하세요.
// same with Question2

//? 13. 명단 중에서 두 번째부터 네 번째 학생까지만 따로 명단을 만들려고 합니다. 이 부분 명단을 복사하여 새로운 배열을 만드는 코드를 작성하세요.
// console.log(studentList.slice(1,4))

//? 14.명단에서 이름에 '승'을 포함하는 모든 학생들의 이름을 찾아 새로운 명단을 만드는 코드를 작성하세요.
//* 좀더 생각해보기
// let nameSeung = []
// for(i=0; i<studentList.length; i++){
//   for(j=0; j<studentList[i].length; j++){
//     if(studentList[i][j]==="승"){
//       nameSeung.push(studentList[i])
//     }
//   }
// }

// console.log(nameSeung)

//*메서드로? 이름이 3글자가 아닐경우에는 문제가 됨.
// let nameSueungwithMethod = []
// studentList.filter((element)=>{
//   if(element[1]==="승"||element[2]==="승"){
//   nameSueungwithMethod.push(element)}})

//   console.log(nameSueungwithMethod)


//*좀더 정확하게 이름이 3글자가 아닐 경우를 생각.
// let nameSueungwithMethod = []
// studentList.filter((element) => {
//   for (i = 1; i < element.length; i++) {
//     if(element[i] === '승'){
//       nameSueungwithMethod.push(element)
//     }
//   }
// })

// console.log(nameSueungwithMethod)

//? 15. 명단에 '홍'으로 시작하는 학생이 한 명이라도 있는지 확인하는 코드를 작성하세요.
//* return을 빼먹지 말자!
// let firstNameHong = []

// console.log(studentList.some((element) => {
//   return element[0] === '홍'
// }
// ))