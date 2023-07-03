function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    
    if (name === "" || phone === "") {
      alert("Пожалуйста, заполните все обязательные поля");
      return false;
    }
    

    var nameRegex = /^[а-яА-ЯёЁ\s-]+$/;
    if (!nameRegex.test(name)) {
      alert("Пожалуйста, введите корректное имя на русском языке");
      return false;
    }
    

    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Пожалуйста, введите корректный российский номер телефона (10 цифр без пробелов и знаков)");
      return false;
    }
    
    
    return true;
  }