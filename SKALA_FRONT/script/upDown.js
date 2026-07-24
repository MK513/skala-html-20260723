function startUpDownGame() {
    var computerNum = Math.floor(Math.random() * 50) + 1;
    var tryCount = 0;
    var userNum;

    while (true) {
        var input = prompt("1부터 50 사이의 숫자 중 컴퓨터가 생각한 숫자는 무엇일까요?");

        if (input === null) {
            alert("게임을 종료합니다.");
            return;
        }

        userNum = Number(input);
        tryCount++;

        if (userNum > computerNum) {
            alert("Down!");
        } else if (userNum < computerNum) {
            alert("Up!");
        } else {
            alert("축하합니다! " + tryCount + "번 만에 맞추셨습니다.");
            break;
        }
    }
}
