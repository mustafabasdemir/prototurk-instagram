import showAlert from "components/alerts/alert";


export  function ShowAlertMessage(MessageType,error) {
    const errorMessages = {
        "auth/invalid-email": "E-posta adresi hatalı!",
        "auth/wrong-password": "Şifre hatalı!",
        "auth/user-not-found": "Kullanıcı bulunamadı!",
        "auth/email-already-in-use": "Bu e-posta adresi zaten kullanımda!",
        "auth/weak-password": "Şifre çok zayıf!",
        //hata mesajlari buraya ekle
    };

    const message = typeof error === "object" && error.code 
        ? errorMessages[error.code] || "Bir hata oluştu!" 
        : error; // Hata objesi değilse erorruı yaz
    showAlert(MessageType, message);
}