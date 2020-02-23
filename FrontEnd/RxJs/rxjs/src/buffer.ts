import {interval} from "rxjs";
import {buffer, map, take} from "rxjs/operators";

const message ='안녕하세요. RxJS 테스트 입니다.';
interval(90).pipe(
    take(message.length),
    map(x => {
        const character = message.charAt(x);
        console.log(character);
        return character;
        }
    ),
    buffer(interval(500))
).subscribe(x => console.log(`buffer : [${x}]`));
