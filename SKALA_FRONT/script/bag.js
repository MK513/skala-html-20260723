function showMyBag() {
    var myBag = [
        { name: "여권", emoji: "✈️", count: 1 },
        { name: "스마트폰", emoji: "📱", count: 2 },
        { name: "지갑", emoji: "👛", count: 1 }
    ];

    var message = "🎒 [내 가방 속 물품 목록]\n----------------------\n";

    for (var i = 0; i < myBag.length; i++) {
        var item = myBag[i];
        message += "- " + item.name + " " + item.emoji + " : " + item.count + "개\n";
    }

    message += "----------------------\n총 물품 종류: " + myBag.length + "가지";

    alert(message);
}
