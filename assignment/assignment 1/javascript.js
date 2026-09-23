function startQuiz() {

    let name =
        document.getElementById("studentName").value;

    let roll =
        document.getElementById("rollNumber").value;

    let section =
        document.querySelector(
            'input[name="section"]:checked'
        );


    if (name == "" || roll == "" || section == null) {

        alert("Please fill all student information");

        return;
    }


    document.getElementById("studentPage").style.display =
        "none";


    document.getElementById("timer").style.display =
        "block";


    document.getElementById("question1").style.display =
        "block";


    startTimer();
}

function startTimer() {

    timer = setInterval(function () {

        let minutes =
            Math.floor(timeLeft / 60);

        let seconds =
            timeLeft % 60;

        if (seconds < 10) {

            seconds = "0" + seconds;

        }


        document.getElementById("time").innerHTML =
            minutes + ":" + seconds;


        if (timeLeft <= 0) {

            clearInterval(timer);

            alert("Time is over!");

            submitQuiz();

            return;
        }


        timeLeft--;

    }, 1000);
}


function nextQuestion(questionNumber) {

    let answer =
        document.querySelector(
            'input[name="q' +
            questionNumber +
            '"]:checked'
        );



    if (answer == null) {

        alert("Please select an answer");

        return;
    }


    document.getElementById(
        "question" + questionNumber
    ).style.display = "none";


    document.getElementById(
        "question" + (questionNumber + 1)
    ).style.display = "block";
}

function submitQuiz() {


    clearInterval(timer);


    let answer =
        document.querySelector(
            'input[name="q6"]:checked'
        );


    if (answer == null && timeLeft > 0) {

        alert("Please select an answer");

        return;
    }


    let score = 0;

    let q1 =
        document.querySelector(
            'input[name="q1"]:checked'
        );

    if (q1 != null && q1.value == "5") {

        score++;

    }


    let q2 =
        document.querySelector(
            'input[name="q2"]:checked'
        );

    if (q2 != null && q2.value == "4") {

        score++;

    }


    let q3 =
        document.querySelector(
            'input[name="q3"]:checked'
        );

    if (q3 != null && q3.value == "2") {

        score++;

    }


    let q4 =
        document.querySelector(
            'input[name="q4"]:checked'
        );

    if (q4 != null && q4.value == "Delhi") {

        score++;

    }

    let q5 =
        document.querySelector(
            'input[name="q5"]:checked'
        );

    if (q5 != null && q5.value == "HTML") {

        score++;

    }


    let q6 =
        document.querySelector(
            'input[name="q6"]:checked'
        );

    if (q6 != null && q6.value == "CSS") {

        score++;

    }


    for (let i = 1; i <= 6; i++) {

        document.getElementById(
            "question" + i
        ).style.display = "none";

    }

    document.getElementById("timer").style.display =
        "none";


    document.getElementById("resultPage").style.display =
        "block";

    document.getElementById("result").innerHTML =

        "Student: " +
        document.getElementById("studentName").value +

        "<br><br>" +

        "Roll Number: " +
        document.getElementById("rollNumber").value +

        "<br><br>" +

        "Score: " +
        score +
        " / 6";
}

let options =
    document.querySelectorAll(".option");


options.forEach(function (option) {

    let radio =
        option.querySelector("input");


    radio.addEventListener(
        "change",
        function () {


            let sameQuestion =
                document.querySelectorAll(
                    'input[name="' +
                    radio.name +
                    '"]'
                );


            sameQuestion.forEach(
                function (item) {

                    item.parentElement.classList.remove(
                        "selected"
                    );

                }
            );


            option.classList.add("selected");

        }
    );

});
