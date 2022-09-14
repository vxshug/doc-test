var P = [
    { text: "LORA GATEWAY", value: "gateway"},
    { text: "NODE", value: "node"},
 ]


var prod_obj = {
    gateway: [
        {text: "M01", value: "m01"},
        {text: "M02", value: "m02"},
    ],
    node: [
        {text: "T1", value: "t1"},
        {text: "T2", value: "t2"},
    ],
}

function tt() {
    var e = document.getElementById("product-select");
    var t = $("#type-select").val();
    console.log(t);
    console.log(prod_obj);
    e.options.length = 1
    for (let r = 0; r < prod_obj[t].length; r++) {
        let m = prod_obj[t][r];
        console.log(m);
        var t = new Option(m.text,m.value);
        e.add(t)
    }
}

 function ht() {
    var n = $("#product-select").val();
    window.location.href = function(e) {
        var t = $("#type-select").val();
        let h = window.location.href.split('/')
        console.log(h)
        let l = h.indexOf(document.documentElement.lang) + 1
        h.splice(l, h.length)
        console.log(h.join('/') + '/' + t + h + '/index.html')
        return h.join('/') + '/' + t + h + '/index.html'
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
