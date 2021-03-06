# 리액티브 프로그래밍
리액티브(Reactive, 반응형) 프로그래밍은 비동기 데이터 스트림(Asynchronous data stream)에 기반을 둔 프로그래밍 패러다임이다. **데이터 스트림이란 연속적인 데이터의 흐름**을 말하며 **리액티브 프로그래밍은 기본적으로 모든 것을 데이터 스트림으로 본다.**

기존의 프로그래밍 방식은 배열과 함수 반환값과 같은 동기 데이터를 처리하는 방식과 Ajax 통신 결과, 사용자 이벤트와 같은 비동기 데이터 처리 방식이 제각각이지만, **리액티브 프로그래밍은 동기/비동기와 관계없이 데이터를 생산하는 것이라면 무엇이든 시간축을 따라 연속적으로 흐르는 데이터 스트림으로 처리**한다. 리액티브 프로그래밍은 다양한 데이터를 데이터 스트림이라는 하나의 일관된 형식으로 만들고, 이 데이터 스트림을 **구독(subscribe)하여 데이터 스트림의 상태 변화에 반응하는 방식으로 동작**하는 애플리케이션을 작성하는 것을 말한다.


예를 들어 TV 방송국과 TV의 관계를 살펴보자. TV 방송국은 영상 정보를 가지고 있다. 이 영상 정보는 프레임으로 이루어진 정지 사진들의 집합이며 프레임은 시간축에 따라 연속적으로 흐르는 데이터 스트림이다.   
TV는 이 영상 정보를 획득하여 TV 화면에 표시해야 한다. 이때 TV가 TV 방송국이 가지고 있는 영상 정보를 획득하려면 어떻게 해야 할지 생각해보자. 먼저 TV가 TV 방송국에 영상 정보 프레임을 계속해서 요청하여 이를 획득하는 방법(**풀 시나리오, Pull-scenario: 애플리케이션이 외부 환경에서 데이터를 당겨오는 방식**)이 있다. 또는 TV 방송국은 일정 시간 단위로 영상 정보의 프레임을 계속해서 방출(emit)하고 TV는 TV 방송국을 관찰하고 있다가 TV 방송국이 새로운 영상 정보 프레임을 방출하면 이를 획득하는 방법(**푸시 시나리오, Push-scenario: 외부 환경이 애플리케이션에 데이터를 밀어넣는 방식**)이 있다.
리액티브 프로그래밍은 두번째 방식(푸시 시나리오)으로 동작하는 애플리케이션을 작성하는 것이다. 즉, 필요한 데이터를 획득하기 위해서 애플리케이션이 외부 환경에 요청하여 데이터를 획득하는 것이 아니라, 애플리케이션은 외부 환경을 관찰하고 있다가 외부 환경에서 데이터 스트림을 방출하면 그것에 반응하여 데이터를 획득하는 것이다.



이때 외부 환경에서 애플리케이션 내부로 연속적으로 흐르는 데이터, 즉 데이터 스트림을 생성하고 방출하는 객체를 **옵저버블(Observable)**이라 하고, 옵저버블이 **방출한(emit) 노티피케이션**(Notification: 옵저버블이 방출할 수 있는 푸시 기반 이벤트 또는 값)을 획득하여 사용하는 객체를 **옵저버(Observer)**라 한다. 다시 말해 **데이터 소비자(Data consumer)인 옵저버는 데이터 생산자(Data producer)인 옵저버블을 구독(subscription)**한다. 이 구독에 의해 옵저버는 옵저버블에 연결되어 옵저버블의 상태를 관찰한다. 그리고 옵저버블이 방출한 노티피케이션은 옵저버에게 자동으로 전파된다. 방송국의 예에서 TV 방송국은 옵저버블이고 TV는 옵저버이며 영상 정보 프레임은 옵저버블이 방출한 노티피케이션이라고 할 수 있다.

옵저버(데이터 소비자) => 구독 => 옵저버블(데이터 생산자)
옵저버 : 옵저버블 관찰중....   
옵저버블 : 방출할 노티피케이션이 있어 ( 자동으로 옵저버에게 전파 ) 
방송국의 예에서 TV 방송국은 옵저버블이고 TV는 옵저버이며 영상 정보 프레임은 옵저버블이 방출한 노티피케이션.

### 옵저버블은 Angular의 고유 기능이 아니라 ES7 스펙으로 제안이 되어 있는 비동기 데이터를 처리하기 위한 표준이다. 


# 리액티브 프로그래밍의 특징
HTTP 요청은 비동기로 처리되기 때문에 작업이 **종료되지 않은 상태라도 대기하지 않고(Non-Blocking)** 다음 작업을 수행할 수 있다. 이후 서버의 응답이 도착하면 데이터를 처리하거나 화면을 갱신한다. 이러한 비동기 처리는 콜백함수나 프로미스, Generator, async/await 또는 옵저버블로 구현할 수 있다. 콜백함수를 사용하는 경우, 에러 처리가 어렵고 콜백 헬(Callback Hell) 등의 문제가 발생하므로 프로미스를 사용하는 것이 더 나은 방법이지만 프로미스는 아래와 같은 단점이 있다.

한 번에 하나의 데이터를 처리하기 때문에 연속성을 갖는 데이터를 처리할 수 없다.
서버로 보낸 요청은 취소할 수 없다.
옵저버블은 기존 비동기 처리 방식의 단점을 해결할 수 있는 더 나은 대안이다.

또 다른 문제는 처리해야 할 데이터의 유형이 다양하다는 것이다. 애플리케이션이 처리해야 할 데이터는 배열과 함수 반환값과 같은 동기 데이터와 Ajax 통신 결과, 사용자 이벤트와 같은 비동기 데이터 등 여러 가지의 유형을 가지며 이러한 데이터의 유형에 따라 처리하는 방식도 제각각이다. 리액티브 프로그래밍은 동기/비동기와 관계없이 데이터를 생산하는 것이라면 무엇이든 옵저버블로 만들 수 있다. 리액티브 프로그래밍은 이처럼 다양한 형태의 데이터를 처리하기 위한 일관된 방식을 제공하며 이를 통해 안전하고 통일된 데이터 처리가 가능하다.

