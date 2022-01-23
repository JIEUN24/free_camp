const classmate = ['철수', '영희', '훈이']
// undefined
classmate
// (3) ['철수', '영희', '훈이']
classmate [2]
// '훈이'
classmate [3]
// undefined
classmate.includes('훈이')
// true
classmate.includes('코드')
// false
classmate.push('코드')
// 4
classmate
// (4) ['철수', '영희', '훈이', '코드']
classmate.length
// 4
classmate.includes('코드')
// true
classmate.pop()
// '코드'
classmate
// (3) ['철수', '영희', '훈이']
classmate.length
// 3