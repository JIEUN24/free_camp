function hello(name) {
    alert( name + "님 안녕하세요")
}
// undefined
let name = "홍길동"
// undefined
hello(name)
// undefined
hello("최지은")
// undefined
function greeting(a) {
    alert( a + "님 안녕하세요")
}
// undefined
greeting(name)
// undefined
greeting("코드캠프")
// undefined


function add(a, b){
    return a + b
}
// undefined
add(1, 1)
// 2
add(5, 301)
// 306
let students = ['철수', '영희', '도우너', '또치', '둘리']
// undefined

function greetingStudents(props) {
    for(let i = 0; i < props.length; i++) {
    console.log(`${props[i]}님 반갑습니다`) //백틱 입력 후 달러표시
    }
}
// undefined

greetingStudents(students)
// 철수님 반갑습니다
// 영희님 반갑습니다
// 도우너님 반갑습니다
// 또치님 반갑습니다
// 둘리님 반갑습니다
// undefined

