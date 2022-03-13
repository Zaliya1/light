const validateForm = () => {
    const inputs = document.querySelectorAll('input');
    const formNames = document.querySelectorAll('input[placeholder="Ваше имя"]');
    const formEmails = document.querySelectorAll('input[type=email]');
    const formPhones = document.querySelectorAll('input[type=tel]');
    const form2Message = document.getElementById('form2-message');
    
    const inputSquare = document.querySelector('.calc-square');
    const inputCount = document.querySelector('.calc-count');
    const inputDay= document.querySelector('.calc-day');
   
    inputs.forEach(item => {
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
            event.target.value = event.target.value.replace(/^[\s\-]/g, ''); // можно ли объединить со строкой 12?
            event.target.value = event.target.value.replace(/[\s\-]$/g, '');
            // event.target.value = event.target.value.replace(/^[\s\-]$/g, '');
        });
    });
    formNames.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-яА-Я\ ]/, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/[^а-яА-Я\ ]/g, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/([а-яА-Я\ ]){1,}/g, () => {
                let str = event.target.value;
                if (!str.includes(" ")) {
                    let updateStr = '';
                    for (let i = 0; i<str.length; i++) {
                        if (i === 0) {
                            updateStr += str[i].toUpperCase(); 
                        } else {
                            updateStr += str[i].toLowerCase();
                        }
                    }
                    return updateStr;
                } else {
                    let arr = str.split(" ");
                    let updateStr = '';
                    for (let n = 0; n<arr.length; n++) {
                        for (let i = 0; i<arr[n].length; i++) {
                            if (i === 0) {
                                updateStr += arr[n][i].toUpperCase(); 
                            } else {
                                updateStr += arr[n][i].toLowerCase();
                            }
                        }
                        updateStr += " ";
                    }
                    updateStr = updateStr.replace(/ $/g, '');
                    return updateStr
                }
            });
            if (item.value.length < 2) {
                item.value = "";
            }
        });
        

    });
    formEmails.forEach(item => {
        item.setAttribute("required", "required");
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/[^\w\@\-\.\!\~\*\']/g, '');
            event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
        });
    });
    formPhones.forEach(item => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^\d\-\(\)\+]/, '');
        });
        item.addEventListener('blur', (event) => {
            event.target.value = event.target.value.replace(/[^\d\-\(\)\+]/g, '');
            event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
            if (item.value.length < 6) {
                item.value = "";
            }
        });
    });
    form2Message.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ \,\!\;\:\"\'\-\?\(\)\d]/, '');
    });
    form2Message.addEventListener('blur', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я\.\ \,\!\;\:\"\'\-\?\(\)\d]/g, '');
        event.target.value = event.target.value.replace(/\s{1,}/g, ' ');
    });

    inputSquare.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
    inputCount.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
    inputDay.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D+/, '');
    });
};
export default validateForm;
