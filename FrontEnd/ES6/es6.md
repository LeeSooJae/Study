## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
const addMaker = a => b => a+b;

## 클로저
b=>a+b 함수가 a를 계속해서 기억하고 있다.
함수이자 a를 기억하는 클로저이다.

클로저는 b=>a+b가 만들어질때의 환경인 a와 또 이 함수 자체의 객체를 통칭해서 말하는 용어이다.

addMaker는 클로저를 리턴하는 함수이다.

이터러블/이터레이터 프로토콜
arr, set, map은 Symbol.iterator를 갖고있다.
arr,map,set[Symbol.iterator]를 해보면 각각 이터레이터에 해당하는 함수를 갖고있다.
이터러블

처음 Symbol을 봤을 때는 고유한 값이라는 말에 const를 떠올렸다. 하지만 Symbol은 프로그램 전체를 통틀어 유일한 값을 의미한다. Symbol()이 실행될 때마다 유일한 값을 생성하는 것이다. 약속된 Symbol 값을 가지고 객체에 어떠한 특성을 부여할 수 있지 않을까? Symbol이란 무엇인가 먼저 알아보자.
(사실 라이브러리를 만들거나 프레임워크를 만들지 않는 이상, 실무에서 사용할 일이 거의 없을 것 같다.)