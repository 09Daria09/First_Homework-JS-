function submitChoice() {
    const choices = document.getElementsByName('assignment');
    let selectedAssignment;
    let selectedElement;

    for (const choice of choices) {
        if (choice.checked) {
            selectedAssignment = choice.value;
            selectedElement = choice;
            break;
        }
    }

    if (selectedAssignment) {
        console.log("Выбрано задание: " + selectedAssignment);
        alert("Выбрано задание: " + selectedAssignment);
    } else {
        console.log("Задание не выбрано.");
        alert("Пожалуйста, выберите задание.");
    }

    switch (selectedElement.id) {
        case 'assignment1':
            UserInformation();
            break;
        case 'assignment2':
            TicketProcessing();
            break;
        case 'assignment3':
            numberGuessing();
            break;
    }

    function UserInformation() {
        let isUserAgree = false;
        while (!isUserAgree) {
            let userName = prompt("ФИО", "Аноним");
            console.log(userName);

            let userGender;
            do {
                userGender = prompt("Пол (мужской/М, женский/Ж, другое/Д)").toLowerCase();

                if (userGender !== "мужской" && userGender !== "м" &&
                    userGender !== "женский" && userGender !== "ж" &&
                    userGender !== "другое" && userGender !== "д") {
                    alert("Пожалуйста, выберите пол из предложенных вариантов: мужской/М, женский/Ж, другое/Д.");
                }
            } while (userGender !== "мужской" && userGender !== "м" &&
            userGender !== "женский" && userGender !== "ж" &&
            userGender !== "другое" && userGender !== "д");

            if (userGender === "м") {
                userGender = "мужской";
            } else if (userGender === "ж") {
                userGender = "женский";
            } else if (userGender === "д") {
                userGender = "другое";
            }

            console.log(userGender);


            let userAge;
            do {
                userAge = prompt("Возраст");
                if (isNaN(userAge) || userAge < 0 || userAge > 120 || userAge.trim() === "") {
                    alert("Пожалуйста, введите корректный возраст.");
                }
            } while (isNaN(userAge) || userAge < 0 || userAge > 120 || userAge.trim() === "");

            let userEmail;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            do {
                userEmail = prompt("E-mail");
                if (!emailPattern.test(userEmail)) {
                    alert("Пожалуйста, введите корректный E-mail.");
                }
            } while (!emailPattern.test(userEmail));

            isUserAgree = confirm(`Все верно? \n ФИО: ${userName} \n Пол: ${userGender} \n Возраст: ${userAge} \n E-mail: ${userEmail}`);
            console.log(isUserAgree);
        }
    }

    function TicketProcessing() {
        let isUserAgree = true;
        while (isUserAgree) {
            let secondPartSum = 0;
            let firstPartSum = 0;

            let numberTicket = null;
            do {
                numberTicket = prompt("Введите номер вашего билета");
                if (!numberTicket || !/^\d{6}$/.test(numberTicket)) {
                    alert("Пожалуйста, введите корректный номер билета, состоящий из 6 цифр.");
                    numberTicket = null;
                }
            } while (!numberTicket)

            let digitsArray = numberTicket.split('').map(Number);
            console.log(digitsArray);

            for (let i = 0; i < digitsArray.length / 2; i++) {
                firstPartSum += digitsArray[i];
            }
            for (let i = digitsArray.length / 2; i < digitsArray.length; i++) {
                secondPartSum += digitsArray[i];
            }

            if (firstPartSum === secondPartSum) {
                alert("Поздравляю, у вас счастливый билет!");
            } else {
                alert("К сожалению, у вас несчастливый билет.");
            }
            isUserAgree = confirm("Желаете повторить?");
            console.log(isUserAgree);
        }
    }

    function numberGuessing() {
        let isUserAgree = true;
        while (isUserAgree) {
            alert("Загадайте число от 1 до 100");
            let low = 1;
            let high = 100;
    
            while (low <= high) {
                let mid = Math.floor((low + high) / 2);
                let isCorrectNumber = confirm(`Это число ${mid}, которое вы загадали?`);
    
                if (isCorrectNumber) {
                    alert("Ура! Число угадано.");
                    break;
                } else {
                    let isGreater = confirm(`Загаданное число больше, чем ${mid}?`);
                    if (isGreater) {
                        low = mid + 1;
                    } else {
                        high = mid - 1;
                    }
                }
            }
    
            if (low > high) {
                alert("Похоже, вы ошиблись при ответах. Давайте попробуем еще раз.");
            }
    
            isUserAgree = confirm("Желаете повторить?");
        }
    }
    


}
