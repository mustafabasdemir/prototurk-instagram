import showAlert from "components/alerts/alert";


export  function ShowAlertMessage(MessageType,error) {
    const errorMessages = {
        "auth/invalid-email": "E-posta adresi hatalı!",
        "auth/wrong-password": "Şifre hatalı!",
        "auth/user-not-found": "Kullanıcı bulunamadı!",
        "auth/weak-password": "Şifre çok zayıf!",
        "auth/invalid-credential": "Kimlik doğrulama bilgisi geçersiz!",
        "auth/invalid-verification-code": "Doğrulama kodu geçersiz!",
        "auth/invalid-verification-id": "Doğrulama kimliği geçersiz!",
        "auth/operation-not-allowed": "Bu işlem şu anda devre dışı!",
        "auth/requires-recent-login": "Bu işlemi gerçekleştirmek için tekrar giriş yapmanız gerekiyor!",
        "auth/too-many-requests": "Çok fazla giriş denemesi yapıldı. Lütfen daha sonra tekrar deneyin!",
        "auth/network-request-failed": "Ağ bağlantısı hatası!",
        "auth/internal-error": "Sunucu hatası. Lütfen daha sonra tekrar deneyin!",
        "auth/account-exists-with-different-credential": "Bu e-posta ile başka bir oturum açma yöntemi zaten mevcut!",
        "auth/email-already-in-use": "Bu e-posta adresi zaten bir hesapla ilişkili!",
        "auth/user-disabled": "Bu kullanıcı hesabı devre dışı bırakıldı!",
        "auth/popup-closed-by-user": "Açılan pencere kullanıcı tarafından kapatıldı. İşlem iptal edildi!",
        "auth/credential-already-in-use": "Bu kimlik bilgisi başka bir hesap tarafından kullanılıyor!",
        "auth/timeout": "İşlem zaman aşımına uğradı. Lütfen tekrar deneyin!",
        "auth/user-token-expired": "Kullanıcı oturumu süresi doldu. Lütfen tekrar giriş yapın!",
        "auth/invalid-api-key": "API anahtarı geçersiz. Lütfen geçerli bir anahtar kullanın!",
        "auth/app-not-authorized": "Bu uygulama Firebase'e yetkilendirilmedi. Lütfen ayarları kontrol edin!",
        "auth/argument-error": "Bir veya daha fazla argüman geçersiz!",
        //hata mesajlari buraya ekle
    };

    const message = typeof error === "object" && error.code 
        ? errorMessages[error.code] || "Bir hata oluştu!" 
        : error; // Hata objesi değilse erorruı yaz
    showAlert(MessageType, message);
}