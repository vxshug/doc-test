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

I = [
    { text: "ESP32", value: "esp32"},
    { text: "ESP32-S2", value: "esp32s2"},
    { text: "ESP32-S3", value: "esp32s3"},
    { text: "ESP32-C2", value: "esp32c2"},
    { text: "ESP32-C3", value: "esp32c3"}
 ]
var e = document.getElementById("target-select");
e.hidden = !1,
e.onchange = ht;
for (let r = 0; r < I.length; r++) {
    let n = I[r];
    var t = new Option(n.text,n.value);
    e.add(t)
}
