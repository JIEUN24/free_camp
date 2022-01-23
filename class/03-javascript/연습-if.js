if(1+1 === 2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 정답입니다
// undefined

if(true){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 정답입니다
// undefined

if(false){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// 틀렸습니다
// undefined

const pw1 = 123
// undefined

const pw2 = 567
// undefined

if(pw1 === pw2) {
    console.log('비밀번호가 일치합니다')
} else {
    console.log('무언가 잘못되었다')
}
// 무언가 잘못되었다
// undefined

const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined

if(profile.age >= 20) {
    console.log("성인입니다")
} else if(8 <= profile.age <=19) {
    console.log("학생입니다")
} else {
    console.log("어린이입니다")
}
// 학생입니다
// undefined