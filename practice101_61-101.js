//61번. Date 객체를 사용해 현재 시간을 출력하는 코드를 작성하세요.
  // const currentdate = new Date();
  // console.log(currentdate)

//62번. Json 객체를 사용해 객체를 JSON 문자열로 변환하는 코드를 작성하세요.
  // JavaScript 객체 생성
    // const person = {
      // firstName: "John",
      // lastName: "Doe",
      // age: 30,
      // email: "john.doe@example.com"
    // };
    // console.log(person)
  // JavaScript 객체를 JSON 문자열로 변환
    // const jsonString = JSON.stringify(person);
    // console.log(jsonString);

//63번. Json객체를 사용해 JSON 문자열을 객체로 변환하는 코드를 작성하세요.
  // const person = JSON.parse(jsonString)

//64번. Set 객체를 사용해 중복을 허용하지 않는 컬렉션을 생성하는 코드를 작성하세요.
  // const uniqueNumbers = new Set();
  // uniqueNumbers.add(5)
  // console.log(uniqueNumbers)
  // uniqueNumbers.add(10)
  // console.log(uniqueNumbers)
  // uniqueNumbers.add(5)
  // console.log(uniqueNumbers)

//65번. Map객체를 사용해 키-값 쌍의 컬렉션을 생성하는 코드를 작성하세요.
  // // 빈 Map 객체 생성
  // const personInfo = new Map();

  // // 키-값 쌍 추가
  // personInfo.set('firstName', 'John');
  // personInfo.set('firstName', 'hong')
  // personInfo.set('lastName', 'Doe');
  // personInfo.set('age', 30);

  // // Map 객체 내용 확인
  // console.log(personInfo);
  // // 특정 키를 사용하여 값을 가져오기
  // const firstName = personInfo.get('firstName');
  // console.log(firstName);
  // // Map 객체에서 키-값 쌍 제거
  // personInfo.delete('age');
  // console.log(personInfo);

//66번. 동기와 비동기에 대해 비유를 들어 차이점을 설명하세요.

  // 비유: 레스토랑에서 주문하기
  // 
  // 동기 (Synchronous):
  // 상황: 레스토랑에서 주문한 음식을 기다리는 고객
  // 설명: 고객은 주문한 음식을 주문하는 즉시 기다려야 합니다. 주문한 음식이 준비될 때까지 다른 일을 하거나 대화를 나누기 어려워요. 음식이 나오기 전까지 대기해야 합니다. 이것이 동기적인 동작과 유사합니다.
  // 
  // 비동기 (Asynchronous):
  // 상황: 레스토랑에서 주문하고 나서 다른 고객과 대화하거나 책을 읽는 고객
  // 설명: 고객은 주문을 한 후에 주문한 음식이 준비될 때까지 다른 일을 할 수 있습니다. 주문한 음식이 준비되면 고객에게 알림이 오고 음식을 수령합니다. 고객은 주문한 작업(음식 준비)이 완료될 때까지 다른 작업을 수행할 수 있으며, 이것이 비동기적인 동작과 유사합니다.
  // 
  // 비동기 프로그래밍은 일반적으로 네트워크 요청, 파일 읽기/쓰기, 타이머 이벤트 등과 같은 작업을 다룰 때 유용하며, 애플리케이션의 응답성을 향상시키고 블로킹을 피하기 위해 사용됩니다.
  
//67번. setTimeout을 사용해 1초 후에 ' hello,world!'를 출력하는 코들르 작성하세요.
  // setTimeout(function() {
    // console.log('Hello, World!');
    // }, 1000); // 1000 밀리초 (1초) 후에 함수를 실행
    
    //68번. promise를 선언하고 사용하는 코드를 작성하세요.
    // // Promise 생성
    //   const myPromise = new Promise((resolve, reject) => {
      //     // 비동기 작업을 수행
      //     setTimeout(() => {
        //       const randomNumber = Math.random();
        //       if (randomNumber < 0.5) {
          //         resolve(`Success: ${randomNumber}`); //fullfilled상태
          
          //       } else {
            //         reject(`Error: ${randomNumber}`); // rejected 상태 
            //       }
            //     }, 1000);
            //   });
            
            // // Promise 사용
            //   myPromise
            //     .then((result) => {
              //       console.log(result); // 성공적으로 해결될 경우 실행 //fullfilled상태일 때 실행됨.
              //     })
              //     .catch((error) => {
                //       console.error(error); // 실패 또는 오류 발생 시 실행 // rejected 상태일 때 실행됨.
                //     });
                
                
//69번. promise가 해결(fullfilled,resolved)되거나 거부된 경우를 제작하세요.

  // pending: 초기 상태, 아직 결과가 결정되지 않음.
  // fulfilled (또는 resolved): resolve 함수가 호출되고 해당 함수에 전달된 값이 성공적으로 처리될 때 발생합니다. 이 값은 .then() 메서드에 전달된 콜백 함수의 인자로 전달됩니다.
  // rejected: reject 함수가 호출되고 해당 함수에 전달된 값이 실패할 때 발생합니다. 이 값은 .catch() 메서드에 전달된 콜백 함수의 인자로 전달됩니다.

//70번. javaScript에서 프로미스 체인을 구현하는 코드를 작성해보세요.
  // function asyncTask1() {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve('Task 1 completed');
      // }, 1000);
    // });
  // }
  // 
  // function asyncTask2() {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve('Task 2 completed');
      // }, 1500);
    // });
  // }
  // 
  // function asyncTask3() {
    // return new Promise((resolve, reject) => {
      // setTimeout(() => {
        // resolve('Task 3 completed');
      // }, 500);
    // });
  // }
  // 
  // //프로미스 체인 구현
  // asyncTask1()
    // .then((result) => {
      // console.log(result);
      // return asyncTask2();
    // })
    // .then((result) => {
      // console.log(result);
      // return asyncTask3();
    // })
    // .then((result) => {
      // console.log(result);
      // console.log('All tasks completed');
    // })
    // .catch((error) => {
      // console.error('Error:', error);
    // });

//71번. async/await를 사용해 비동기 코드를 처리하는 목적을 설명하세요.
  // async/await는 비동기 코드를 처리하고 관리하는 목적을 달성하는데 사용되는 JavaScript의 기능입니다. 아래는 async/await의 목적과 장점을 설명한 것입니다:

  // 1. 비동기 코드를 동기 코드처럼 작성: async/await를 사용하면 비동기 코드를 동기 코드와 유사한 구문으로 작성할 수 있습니다. 이렇게 하면 코드가 더 읽기 쉽고 이해하기 쉽게 됩니다. 비동기 코드를 연속적으로 실행하는 것처럼 보이며 콜백 지옥(callback hell)을 피할 수 있습니다.

  // 2. 에러 처리 용이성: async/await는 에러 처리를 간편하게 만듭니다. try...catch 블록 내에서 비동기 코드를 실행하고 오류가 발생하면 catch 블록에서 오류를 처리할 수 있습니다.

  // 3. 비동기 코드의 순서 제어: async/await를 사용하면 비동기 작업의 순서를 명확하게 제어할 수 있습니다. await 키워드를 사용하여 특정 비동기 작업이 완료될 때까지 기다릴 수 있으며, 그 다음 작업을 실행할 수 있습니다.

  // 4. 코드 가독성 향상: async/await를 사용하면 콜백 함수 대신 비동기 코드를 선형적으로 구성할 수 있으므로 코드의 가독성이 향상됩니다.

  // 5. 병렬 처리 및 복잡한 비동기 패턴 관리: 여러 개의 비동기 작업을 병렬로 처리하거나 복잡한 비동기 패턴을 관리하는 것이 훨씬 쉽습니다. Promise.all과 함께 사용하여 병렬 처리도 가능합니다.

  // 6. 예를 들어, 웹 요청, 파일 I/O, 데이터베이스 쿼리와 같은 비동기 작업을 처리하거나 다양한 서비스와 상호 작용할 때 async/await를 사용하면 코드를 더 효과적으로 관리할 수 있습니다.

// 72번. async/await와 promise의 차이점을 설명하세요.
  // async/await와 Promise는 JavaScript에서 비동기 코드를 처리하는 데 사용되는 두 가지 다른 기술입니다. 아래는 async/await와 Promise의 주요 차이점을 설명한 것입니다:
  // 
  // 1.구문과 가독성:
  // Promise: Promise는 .then() 및 .catch() 메서드를 사용하여 비동기 코드를 다룹니다. 이러한 메서드를 사용하면 코드가 좀 더 명시적이 되지만, 중첩된 .then() 호출로 인해 "콜백 지옥" 문제가 발생할 수 있습니다.
  // async/await: async/await를 사용하면 비동기 코드를 동기 코드와 유사한 구문으로 작성할 수 있으므로 코드의 가독성이 향상됩니다. await 키워드를 사용하여 비동기 작업의 완료를 기다리는 것이 가능하며, try...catch 블록을 사용하여 에러 처리가 간편해집니다.
  // 2.에러 처리:
  // Promise: 에러 처리를 위해 .catch() 메서드를 사용하거나 .then() 메서드 체인 내에서 에러 처리를 직접 구현해야 합니다.
  // async/await: try...catch 블록 내에서 에러 처리가 가능하며, 코드가 더 명확하게 에러를 처리할 수 있습니다.
  // 3. 순서 제어:
  // Promise: .then() 메서드를 사용하여 비동기 작업의 순서를 제어할 수 있으며, Promise.all과 같은 메서드를 사용하여 병렬 작업을 처리할 수 있습니다.
  // async/await: await 키워드를 사용하여 특정 비동기 작업이 완료될 때까지 기다릴 수 있으며, 코드가 비동기 작업을 순차적으로 처리하는 것처럼 보입니다.
  // 4. 중첩과 복잡성:
  // Promise: 비동기 코드를 중첩하면 가독성이 떨어질 수 있고 "콜백 지옥"이 발생할 수 있습니다.
  // async/await: async/await를 사용하면 중첩을 피하고 코드를 더 선형적으로 유지할 수 있습니다.

  // 5.비동기 함수 반환 값:
  // Promise: Promise 객체를 반환하는 함수의 결과를 다루려면 .then() 메서드를 사용해야 합니다.
  // async/await: async 함수는 비동기 작업이 완료되면 해당 값을 반환하므로 동기적인 방식으로 값을 다루는 것처럼 보입니다.

  // 보편적으로, async/await는 비동기 코드를 더 읽기 쉽고 관리하기 쉽게 만들며, 에러 처리와 코드 구조를 개선하는 데 도움이 됩니다. 그러나 async/await를 사용할 수 없는 환경에서나 기존 코드와 통합할 때 Promise도 여전히 유용할 수 있습니다.

//73. promise.all을 사용해 여러 promise를 동시에 실행하는 코드를 작성해보세요.

  // function fetchUserData(userId) {
  //   return new Promise((resolve, reject) => {
  //     // 비동기 작업 시뮬레이션 (예: 네트워크 요청)
  //     setTimeout(() => {
  //       resolve(`User data for ID ${userId}`);
  //     }, 1000);
  //   });
  // }

  // function fetchUserPosts(userId) {
  //   return new Promise((resolve, reject) => {
  //     // 비동기 작업 시뮬레이션 (예: 데이터베이스 쿼리)
  //     setTimeout(() => {
  //       resolve(`Posts for User ID ${userId}`);
  //     }, 1500);
  //   });
  // }

  // function fetchUserComments(userId) {
  //   return new Promise((resolve, reject) => {
  //     // 비동기 작업 시뮬레이션
  //     setTimeout(() => {
  //       resolve(`Comments for User ID ${userId}`);
  //     }, 800);
  //   });
  // }

  // const userId = 123;

  // // Promise.all을 사용하여 여러 Promise를 동시에 실행
  // Promise.all([
  //   fetchUserData(userId),
  //   fetchUserPosts(userId),
  //   fetchUserComments(userId)
  // ])
  //   .then((results) => {
  //     // 모든 Promise가 완료되었을 때 결과를 처리
  //     const [userData, userPosts, userComments] = results;
  //     console.log(userData);
  //     console.log(userPosts);
  //     console.log(userComments);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });

// 74번. 비동기 함수에서 예외를 처리하는 방법을 설명하고 예를 들어보세요.
  // async function fetchData() {
    // try {
      // const response = await fetch('https://example.com/api/data');
      // 
      // if (!response.ok) {
        // throw new Error('Failed to fetch data');
      // }
      // 
      // const data = await response.json();
      // 
      // return data;
    // } catch (error) {
      // console.error('An error occurred:', error);
      // return null;
    // }
  // }
  // 

  // //fetchData 함수 호출
  // fetchData()
    // .then((data) => {
      // if (data) {
        // console.log('Data:', data);
      // } else {
        // console.log('No data available.');
      // }
    // })
    // .catch((error) => {
      // console.error('Unhandled error:', error);
    // });

    //? 75번. proxy객체를 생성하는 코드를 작성해보세요.
    //? 76번. proxy를 사용해 객체의 속성에 대한 접근을 제어하는 코드를 작성해보세요.
    //* proxy 객체는 다른 객체에 대한 가상화 프록시를 만드는데 사용함. 이를 통해 객체의 기본동작을 수정하거나 확장할 수 있습니다.

  //기본예시
  //대상 객체 (target object)생성
  // const targetObject = {
  //   name: 'hong',
  //   age: 30
  // }

  // // proxy 객체 생성
  // const proxyObject = new Proxy(targetObject,{
  //   //get 헨들러: 속성에 접근할 때 실행되는 동작 정의
  //   get: function(target, property, receiver){
  //     console.log(`Getting ${property} value`);
  //     // 실제 속성값 반환
  //     return target[property];
  //   },
  //   // set 핸들러: 속성에 값을 할당할 때 실행되는 동작 정의
  //   set: function(target, property, value, receiver){
  //     console.log(`setting ${property} to ${value}`)
  //     // 실제 속성값 할당
  //     target[property] = value;
  //     return true
  //   }
  // })

  // //proxy를 통한 속성 접근과 할당
  // console.log(proxyObject.name);
  // proxyObject.age = 31;

  // // 실제 대상 객체의 값도 변경되었음을 확인
  // console.log(targetObject.age)

//? 77번 DOM요소를 선택하는 코드를 작성해보세요.
  //* DOM 요소를 선택하는 방법은 여러가지가 있다.

  //*querySelector, querySelecotrAll
  //querySelector와 querySelectorAll은 모두 CSS 선택자를 사용하여 DOM에서 요소를 선택하는 메서드입니다. 그러나 두 메서드 간에는 중요한 차이점이 있습니다.
  //주로 사용 목적에 따라 선택하면 됩니다. 만일 단일 요소를 선택하고자 한다면 querySelector를 사용하고, 여러 요소를 선택하고자 한다면 querySelectorAll을 사용합니다. 반환된 NodeList는 배열이 아니기 때문에 배열 메서드를 사용하려면 Array.from()이나 spread 연산자 ...을 사용하여 배열로 변환해주어야 합니다.

  //querySelector:
  //주어진 CSS 선택자와 일치하는 첫 번째 요소를 반환합니다.
  //일치하는 요소가 없으면 null을 반환합니다.
  //반환 값은 단일 요소입니다.
  //const element = document.querySelector('.myClass');

  //querySelectorAll:
  //주어진 CSS 선택자와 일치하는 모든 요소를 반환합니다.
  //일치하는 요소가 없으면 빈 NodeList를 반환합니다.
  //반환 값은 NodeList이며, 모든 일치하는 요소를 포함합니다.
  //const elements = document.querySelectorAll('.myClass');

  //* getElementsbyId, getElementsByClassName, getElementsByName
  //* parentNode, previousSibling, nextSibling, firstChild, lastChild

//? 78번. 선택한 DOM요소의 텍스트를 변경하는 코드를 작성해보세요.
//? 79번. DOM 요소에 이벤트 리스너를 추가하는 코드를 작성하세요.
//? 80번. 웹 브라우저의 콘솔에 로그를 출력하는 코드를 작성하세요.

//? 81번. Local Storage에 데이터를 저장하고 검색하는 코드를 작성하세요.
  //* 주의: Local Storage에 저장되는 데이터는 문자열 형태로 저장되므로, 객체나 배열 같은 복잡한 데이터를 저장하려면 해당 데이터를 JSON 문자열로 변환하여 저장하고, 검색 시에는 다시 JSON 파싱하여 사용해야 합니다.
  
  // <script>
  //   // 데이터 저장
  //   localStorage.setItem('myKey', 'Hello, Local Storage!');

  //   // 데이터 검색
  //   const storedData = localStorage.getItem('myKey');
  //   console.log(storedData); // 'Hello, Local Storage!' 출력
  // </script>

  //이 코드에서는 localStorage.setItem을 사용하여 'myKey'라는 키로 문자열 데이터를 Local Storage에 저장하고 있습니다. 그리고 localStorage.getItem을 사용하여 'myKey' 키에 해당하는 데이터를 검색하고 콘솔에 출력하고 있습니다.

//? 82번. Node.js에서 파일을 읽는 코드를 작성해보세요.
  //* fs.readfile(비동기), fs.readfileSync(동기)
  
//? 83번. node.js에서 HTTP 서버를 생성하는 코드를 작성해보세요.
  //* Node.js에서 HTTP 서버를 생성하는 가장 기본적인 방법은 http 모듈을 사용하는 것입니다. 아래는 간단한 HTTP 서버를 생성하는 코드의 예시입니다:

  // const http = require('http');

  // //서버를 생성
  // const server = http.createServer((req, res) => {
    // //요청이 들어왔을 때의 처리 로직
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.end('Hello, World!\n');
  // });
  // 
  // //서버를 지정한 포트(예: 3000)로 실행
  // const port = 3000;
  // server.listen(port, () => {
    // console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
  // });
  
//? 84번. node.js에서 이벤트를 발생시키고 그것을 처리하는 코드를 작성해보세요.
  //* Node.js에서 이벤트를 발생시키고 처리하기 위해서는 events 모듈을 사용합니다. 아래는 간단한 예시 코드입니다:
  // const EventEmitter = require('events');

  // // 이벤트를 처리할 클래스 정의
  // class MyEmitter extends EventEmitter {}

  // // 이벤트 발생 및 처리 로직
  // const myEmitter = new MyEmitter();

  // // 이벤트 리스너 추가
  // myEmitter.on('customEvent', (arg) => {
  //   console.log('이벤트가 발생했습니다. 전달된 인자:', arg);
  // });

  // // 이벤트 발생
  // myEmitter.emit('customEvent', '인자1');

  // // 이벤트 발생시 콜백 실행
  // myEmitter.once('onceEvent', () => {
  //   console.log('이벤트가 한 번만 발생했습니다.');
  // });

  // myEmitter.emit('onceEvent');
  // myEmitter.emit('onceEvent'); // 두 번째 호출은 실행되지 않음

  // on: 이벤트 리스너를 추가합니다.
  // emit: 이벤트를 발생시킵니다.
  // once: 이벤트 리스너를 추가하되, 한 번만 실행되도록 합니다.

//? 85번. Express.js를 사용해 Http서버를 생성하는 코드를 작성하세요.
  //* express()는 createServer와 같은 기능. 서버를 염.
  //* 그 뒤 get,post요청을 핸들링해주는 라우터 설정.
  // // Express 모듈 불러오기
  // const express = require('express');

  // // Express 애플리케이션 생성
  // const app = express();

  // // 루트 경로에 대한 요청 처리
  // app.get('/', (req, res) => {
  //   res.send('Hello, Express!');
  // });

  // // 서버를 지정한 포트(예: 3000)로 실행
  // const port = 3000;
  // app.listen(port, () => {
  //   console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
  // });

//? 86번. Express.js에서 라우팅을 처리하는 코드를 작성하세요.
  //* app.get(), app.post(), app.put(), app.delete()등의 메서드를 사용하여 각각의 HTTP 메서드에 대한 라우팅을 설정할 수 있습니다. 이러한 메서드들은 각각의 경로에 대한 요청을 처리하며, 콜백 함수에서는 요청(req)과 응답(res) 객체를 통해 클라이언트와 상호작용할 수 있습니다.

//? 87번. node.js에서 환경변수를 사용하는 방법을 설명하고 예를 들어보세요.
  //* Node.js에서 환경변수를 사용하는 것은 주로 process.env 객체를 통해 이루어집니다. process.env 객체에는 현재 프로세스의 환경변수가 포함되어 있습니다. 이를 통해 애플리케이션 코드에서 환경변수를 읽어와 사용할 수 있습니다.

//? 88번. javascript에서 문자열을 숫자로 변환하는 방법을 예로 들어보세요.
  //* parseInt, parseFloat, +

  // let strNumber = "1233.14"
  // let intNUmber = parseInt(strNumber)
  // console.log(intNUmber)
  // let floatNumber = parseFloat(strNumber)
  // console.log(floatNumber)
  // console.log(parseInt.strNumber)
  // console.log(parseFloat.strNumber)
  // console.log(+strNumber)

//? 89번. Node.js에서 비동기 함수를 사용하는 예를 작성해보세요.
  //* setTimeout 함수
  //* 이벤트 리스너
  //* fetch 함수
  //* Promise 객체
  //* async/await함수

//? 90번. javaScript에서 map, filter, reduce함수를 사용하는 예를 들어보세요.
  //* map(): map 함수는 배열의 각 요소에 대해 주어진 함수를 호출한 결과로 새로운 배열을 생성합니다.
  //* filter(): filter 함수는 주어진 함수의 조건을 만족하는 요소로 이루어진 배열을 생성합니다.
  //* reduce(): reduce 함수는 배열의 각 요소에 대해 주어진 함수를 실행하고 누적값을 계산합니다.

//? 91번. fs모듈을 사용하여 디렉토리를 생성하는 코드를 작성하세요.
  // const fs = require('fs');

  // // 새로 생성할 디렉토리 경로
  // const newDirectoryPath = 'new_directory';

  // // 디렉토리 생성
  // fs.mkdir(newDirectoryPath, (err) => {
  //   if (err) {
  //     console.error('디렉토리 생성 오류:', err);
  //     return;
  //   }

  //   console.log('디렉토리가 성공적으로 생성되었습니다.');
  // });

//? 92번. node.js에서 path 모듈을 사용하여 파일 경로를 조작하는 코드를 작성해보세요.
  //* 1번. 경로결합
  // const path = require('path');

  // const folderPath = '/users/user/documents';
  // const fileName = 'example.txt';

  // const filePath = path.join(folderPath, fileName);

  // console.log('결합된 경로:', filePath);

  //* 2번. 경로 정규화
  // const path = require('path');

  // const messyPath = '/users/user/../documents/example.txt';
  // const normalizedPath = path.normalize(messyPath);

  // console.log('정규화된 경로:', normalizedPath);

  //* 3번. 파일 확장자 추출
  // const path = require('path');

  // const filePath = '/users/user/documents/example.txt';
  // const fileExtension = path.extname(filePath);

  // console.log('파일 확장자:', fileExtension);
  
  //* 4번. 경로파싱
  // const path = require('path');

  // const filePath = '/users/user/documents/example.txt';
  // const pathInfo = path.parse(filePath);

  // console.log('파싱된 경로 정보:', pathInfo);

//? 93번. express.js에서 정적 파일을 호스팅하는 방법을 설명하고 예를 들어보세요.
  // const express = require('express');
  // const path = require('path');
  
  // const app = express();
  
  // // 정적 파일을 제공할 디렉토리를 설정
  // app.use(express.static(path.join(__dirname, 'public')));
  
  // // 기타 라우팅 또는 미들웨어 설정...
  
  // const port = 3000;
  // app.listen(port, () => {
  //   console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
  // });

//? 94번. Node.js에서 npm 패키지를 설치하고 사용하는 코드를 작성해보세요.
  //* 밑 코드에서는 axios 패키지를 불러와서, 해당 패키지를 사용하여 JSONPlaceholder API로 HTTP GET 요청을 보내고 응답을 콘솔에 출력하는 예제입니다.

  //* 이제 axios 패키지가 설치되어 있지 않다면 npm install axios 명령을 통해 설치하고, 그 후에 위의 예제 코드를 실행하면 됩니다. 패키지를 설치하면 node_modules 디렉토리가 생성되고, 해당 디렉토리 안에 패키지가 설치됩니다.

  //패키지 설치
  //npm install axios

  // 패키지 불러오기
  // const axios = require('axios');

  // // 사용 예제: HTTP GET 요청 보내기
  // axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => {
  //     // 요청이 성공한 경우
  //     console.log('응답 데이터:', response.data);
  //   })
  //   .catch(error => {
  //     // 요청이 실패한 경우
  //     console.error('에러:', error);
  //   });

//? 95번. javascript에서 프로토타입 기반 상속을 구현하는 코드를 작성해보세요.
  //* 이 코드에서 Animal은 부모 객체이고, Dog는 자식 객체입니다. Dog 생성자 함수 내에서 Animal 생성자를 호출하면서 Animal.call(this, name)을 사용하여 부모 객체의 속성을 상속받습니다. 그리고 Object.create(Animal.prototype)을 통해 자식 객체의 프로토타입을 부모 객체의 인스턴스로 설정하여 메서드를 상속받습니다.

  //* 이렇게 하면 myDog 인스턴스는 Animal의 메서드(speak)와 Dog의 메서드(bark)를 모두 사용할 수 있습니다.


  // // 부모 객체 생성자 함수
  // function Animal(name) {
  //   this.name = name;
  // }

  // // 부모 객체의 메서드 추가
  // Animal.prototype.speak = function() {
  //   console.log(`${this.name}이(가) 소리를 냅니다.`);
  // };

  // // 자식 객체 생성자 함수
  // function Dog(name, breed) {
  //   // 부모 객체 생성자 호출
  //   Animal.call(this, name);
  //   this.breed = breed;
  // }

  // // 자식 객체의 프로토타입을 부모 객체의 인스턴스로 설정
  // Dog.prototype = Object.create(Animal.prototype);

  // // 자식 객체의 메서드 추가
  // Dog.prototype.bark = function() {
  //   console.log(`${this.name}이(가) 짖습니다.`);
  // };

  // // 자식 객체의 인스턴스 생성
  // const myDog = new Dog('멍멍이', '진돗개');

  // // 부모 객체의 메서드 호출
  // myDog.speak(); // 멍멍이이(가) 소리를 냅니다.

  // // 자식 객체의 메서드 호출
  // myDog.bark(); // 멍멍이이(가) 짖습니다.

//? 96번. 삼항 연산자를 사용하는 예를 들어보세요.
  //* 삼항 연산자(ternary operator)는 조건문을 간단하게 표현할 수 있는 JavaScript의 연산자입니다. 삼항 연산자는 다음과 같은 구조를 가지고 있습니다: condition ? expressionIfTrue : expressionIfFalse.
  
  // const age = 25;

  // // 삼항 연산자를 사용하여 성인 여부를 판별
  // const isAdult = age >= 18 ? '성인입니다' : '미성년자입니다';

  // console.log(isAdult); // 출력: '성인입니다'

//? 97번. javascript에서 문자열 템플릿 리터럴을 사용하는 코드를 작성해보세요.
  //* `` (백틱)으로 둘러싸인 문자열 안에서 ${}를 사용하여 변수나 표현식을 삽입할 수 있습니다. 이를 통해 보다 가독성 높은 문자열을 만들 수 있습니다.