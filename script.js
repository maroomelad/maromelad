let i = 0;
const txt = "[maromelad@root]─[~] $";

function typewriter() {
    if (i < txt.length) {
        document.getElementById("root").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typewriter, 50); // سرعة كتابة الحرف
    } else {
        // أول ما يخلص النص، يستنى ثانيتين ويمسح ويبدأ تاني
        setTimeout(() => {
            document.getElementById("root").innerHTML = ""; // تفريغ النص
            i = 0; // إعادة العداد لصفر
            typewriter(); // إعادة تشغيل الدالة
        }, 2000); // يستنى 2000 مللي ثانية (ثانيتين)
    }
}

typewriter();