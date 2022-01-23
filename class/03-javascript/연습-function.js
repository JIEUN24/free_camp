let getToken() => {
    // 여기에 명령문 작성
    let token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("num").innerText = token;
}