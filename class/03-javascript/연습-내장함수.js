setTimeout(function(){
    console.log('3초가 지났습니다')}, 3000)
    // 2
    // 3초가 지났습니다
    
    const boom = function() {
        console.log('펑')
    }
    // undefined
    setTimeout(boom, 3000)
    // 펑
    
    setInterval(function() {
        console.log('3초')
    }, 3000)
    // 3
    // 3초
    
    let time = 10
    // undefined
    
    setInterval(function() {
        console.log(time);
        time = time - 1;
    }, 1000)
    // 2
    
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0
    // -1
    // -2
    // -3
    
    
    let time = 10
    undefined
    setInterval(function() {
    
        if(time >= 0) {
        console.log(time);
        time = time - 1;
        }
    
    }, 1000)
    // 2
    
    // 10
    // 9
    // 8
    // 7
    // 6
    // 5
    // 4
    // 3
    // 2
    // 1
    // 0
    
    
    let time = 180
    undefined
    setInterval(function() {
        if(time >= 0) {
            const min = String(Math.floor(time/60)).padStart(2, "0")
            const sec = String(time%60).padStart(2, "0")
            console.log(`${min} : ${sec}`)
            time--
        }
    }, 1000)
    // 2
    
    // 03 : 00
    // 02 : 59
    // 02 : 58
    // 02 : 57