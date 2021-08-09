function pyramidify() {
    let input = document.getElementById("inputtext").value;
    var out = input;
    out = out.replace(/i/gi, '1');
    out = out.replace(/l/gi, '1');
    out = out.replace(/e/gi, '3');
    out = out.replace(/a/gi, '4');
    out = out.replace(/s/gi, '5');
    out = out.replace(/b/gi, '6');
    out = out.replace(/t/gi, '7');
    setTextAreaValue(out);
}

function setTextAreaValue(value) {
    document.getElementById("outputp").innerHTML = value;
}

// Using chromium-only API because screw firefox users lmao

function copyOutput() {
    navigator.clipboard.writeText(document.getElementById("outputp").value);
}
