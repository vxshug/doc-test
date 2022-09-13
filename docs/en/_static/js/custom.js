function ht() {
    var n = e("#target-select").val();
    window.location.href = function(e) {
        let n = N + "/" + r
          , i = w.find(e=>e.name === t);
        return i ? (v(i, e) ? n += "/" + i.name : (i = w.find(t=>v(t, e)),
        n += "/" + (i ? i.name : t)),
        i.has_targets && (n += "/" + e)) : n += "/" + t + "/" + e,
        n += "/" + d,
        n
    }(n)
}

var I = [
    { text: "Lora", value: "lora"},
    { text: "Gateway", value: "gateway"},
    { text: "Test", value: "test"}
 ]
$(function () {
var e = document.getElementById("target-select");
e.hidden = !1;
e.onchange = ht;
for (let r = 0; r < I.length; r++) {
    let n = I[r];
    var t = new Option(n.text,n.value);
    e.add(t)
}})
