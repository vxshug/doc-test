var P = [
    { text: "LORA GATEWAY", value: "gateway"},
    { text: "NODE", value: "node"},
 ]


var prod_obj = {
    gateway: [
        {text: "HT-M00", value: "ht-m00"},
        {text: "HT-M01", value: "ht-m01"},
        {text: "HT-M01S", value: "ht-m01s"},
        {text: "HT-M01S_V2", value: "ht-m01s_v2"},
        {text: "HT-M02_4G", value: "ht-m02_4g"},
        {text: "HT-M02_POE", value: "ht-m02_poe"},
        {text: "SX1301module", value: "sx1301module"},
    ],
    node: [
        {text: "CUBECELL", value: "cubecell"},
        {text: "stm32", value: "stm32"},
    ],
}

function tt() {
    let e = document.getElementById("product-select");
    let t = $("#type-select").val();
    console.log(t);
    console.log(prod_obj);
    e.options.length = 1
    for (let r = 0; r < prod_obj[t].length; r++) {
        let m = prod_obj[t][r];
        console.log(m);
        var o = new Option(m.text,m.value);
        e.add(o)
    }
}

 function ht() {
    var n = $("#product-select").val();
    window.location.href = function(e) {
        let t = $("#type-select").val();
        let href = window.location.href.split('/')
        console.log(href)
        let ll = document.documentElement.lang.replace('-', '_')
        let l = href.indexOf(ll) + 1
        href.splice(l, href.length)
        console.log(href.join('/') + '/' + t + '/' + e + '/index.html')
        return href.join('/') + '/' + t + '/' + e + '/index.html'
    }(n)
}

$(function () {
var t = document.getElementById("type-select");
var e = document.getElementById("product-select");
var th = window.location.href.split('/')[4]
var eh = window.location.href.split('/')[5]
console.log(t)
console.log(e)
console.log(th)
console.log(eh)
t.hidden = !1;
t.onchange = tt;
e.hidden = !1;
e.onchange = ht;
for (let r = 0; r < P.length; r++) {
    let n = P[r];
    var o = new Option(n.text,n.value);
    if (o.value === th) {
        o.selected = true
    }
    t.add(o)
}
tt()
for (let r = 0; r < e.options.length; r++) {
    if (e.options[r].value === eh) {
        e.options[r].selected = true
    }
}
})
