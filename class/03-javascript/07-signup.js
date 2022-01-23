function checkValidation() {
    
    const email = document.getElementById("email").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value

    // 이메일칸이 비어있지 않아야하고
    // 비밀번호 칸도 비어있지 않아야하고
    // 비밀번호 확인 칸도 비어있지 않아야한다

    if(email !== "" && password1 !== "" && password2 !== "") {
        // 버튼을 활성화한다
        document.getElementById("mybutton").setAttribute("style", "background-color: yellow")
        document.getElementById("mybutton").disabled = false;
    } else {
        // 버튼을 비활성화한다
        document.getElementById("mybutton").setAttribute("style", "background-color: none")
        document.getElementById("mybutton").disabled = true;
    }
}