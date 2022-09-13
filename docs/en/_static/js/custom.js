var P = [
    { text: "LORA GATEWAY", value: "gateway"},
    { text: "CUBECELL", value: "cubecell"},
    { text: "ESP32 + LORA", value: "esp32"},
    { text: "STM32 + LORA", value: "stm32"},
    { text: "ESP32 + ARDUINO", value: "esp32%2Barduino"},
    { text: "ESP8266 + ARDUINO", value: "esp8266%2Barduino"},
    { text: "GENERAL DOCS", value: "general"},
 ]

 function ht() {
    var n = $("#product-select").val();
    window.location.href = function(e) {
        let h = window.location.href.split('/')
        console.log(h)
        let l = h.indexOf(document.documentElement.lang) + 2
        h.split(l, h.length)
        console.log(h.join('/') + '/' + e + '/index.html')
        return h.join('/') + '/' + e + '/index.html'
    }(n)
}

$(function () {
var e = document.getElementById("product-select");
e.hidden = !1;
e.onchange = ht;
for (let r = 0; r < P.length; r++) {
    let n = P[r];
    var t = new Option(n.text,n.value);
    e.add(t)
}})
