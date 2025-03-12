document.getElementById("petId").addEventListener("input", function (e) {
    const value = e.target.value;

    // Sayılar dışında hiçbir karaktere izin verme
    if (/[^0-9]/.test(value)) {
        // Geçersiz karakter girişi yapılırsa, hata mesajı ekleriz
        e.target.setCustomValidity("Sadece sayı girilebilir.");
        // Geçersiz karakterleri temizleriz
        e.target.value = value.replace(/[^0-9]/g, '');
    } 
    // 5 haneli sayıyı aşan bir sayı girildiyse
    else if (value.length > 5) {
        // 5 haneli sayıdan fazla girişi engelleriz
        e.target.setCustomValidity("Maksimum 5 haneli sayı girilebilir.");
        e.target.value = value.slice(0, 5); // 5 haneye kadar sınırlama
    } else {
        e.target.setCustomValidity("");  // Geçerli giriş olduğunda hata mesajını kaldır
    }
});
