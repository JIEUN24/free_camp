profile
// {}
profile = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교"
}
profile
// {name: '철수', age: 8, school: '다람쥐초등학교'}
let age = profile.age
// undefined
age
// 8
profile.school
// '다람쥐초등학교'

const profiles = [
    { name: "철수", age: 8, school: "다람쥐초등학교" },
    { name: "영희", age: 11, school: "공룡초등학교" },
    { name: "훈이", age: 13, school: "거북이초등학교" }
]
// undefined
profiles.length
// 3
profiles[1]
// {name: '영희', age: 11, school: '공룡초등학교'}
profiles[1].name
// '영희'
profiles[2].school
// '거북이초등학교'