
var score = 0;
var questions = [
    {
        id: 1,
        question: 'What is the color of blood when its inside your body?',
        Answer1: 'Blue',
        Answer2: 'Yellow',
        Answer3: 'Green',
        Answer4: 'Red',
        correctAns: 'Red'
    },
    {
        id: 2,
        question: 'Which is the fastest bird in the world?',
        Answer1: 'Peregrine Falcon',
        Answer2: 'Perssian Eagle',
        Answer3: 'Hummingbird',
        Answer4: 'Bird',
        correctAns: 'Peregrine Falcon'
    },
    {
        id: 3,
        question: 'What is the tallest waterfall in the world?',
        Answer1: 'Niagra Falls, New Zeealand',
        Answer2: 'Vailus Falls, New York',
        Answer3: 'Angel Falls, Venezuela',
        Answer4: 'Sutharland Falls, Hawai',
        correctAns: 'Angel Falls, Venezuela'
    },
    {
        id: 4,
        question: 'Which planet is known as the "Red Planet"?',
        Answer1: 'Venus',
        Answer2: 'Saturn',
        Answer3: 'Mars',
        Answer4: 'Marcury',
        correctAns: 'Mars'
    },
    {
        id: 5,
        question: 'Which element is known as the building block of life?',
        Answer1: 'Oxygen',
        Answer2: 'Carbondioxide',
        Answer3: 'Hydrogen',
        Answer4: 'Nitrogen',
        correctAns: 'Carbon'
    },
    {
        id: 6,
        question: 'Which ancient civilization is credited with the invention of the wheel?',
        Answer1: 'The Romans',
        Answer2: 'The Egyptions',
        Answer3: 'The Sumerians',
        Answer4: 'The Greek',
        correctAns: 'The Sumerians'
    },
    {
        id: 7,
        question: 'About how many scents can a human nose remember?',
        Answer1: 'Around 1 Million',
        Answer2: 'Around 50000',
        Answer3: 'Around 10000',
        Answer4: 'Around 500',
        correctAns: 'Around 50000'
    },
    {
        id: 8,
        question: 'What is the capital city of Canada?',
        Answer1: 'Toronto',
        Answer2: 'Vancouver',
        Answer3: 'Montreal',
        Answer4: 'Ottowa',
        correctAns: 'Ottowa'
    },
    {
        id: 9,
        question: 'What was the main purpose of the pyramids built by the ancient Egyptians?',
        Answer1: 'To house the tombs of pHaraohs',
        Answer2: 'To Publish as public meeting',
        Answer3: 'To act as defensive Fortress',
        Answer4: 'To the house of tomb Pharaohas',
        correctAns: 'To house the tombs of pHaraohs'
    },
    {
        id: 10,
        question: 'Which color is not there in the rainbow?',
        Answer1: 'Indigo',
        Answer2: 'Brown',
        Answer3: 'Red',
        Answer4: 'Purple',
        correctAns: 'Brown'
    },
    {
        id: 11,
        question: 'How many stripes are there on the US flag?',
        Answer1: '13',
        Answer2: '11',
        Answer3: '10',
        Answer4: '19',
        correctAns: '13'
    },
    {
        id: 12,
        question: 'How many rings appear on the Olympic flag?',
        Answer1: '1',
        Answer2: '3',
        Answer3: '5',
        Answer4: '7',
        correctAns: '5'
    },



]


var ques = document.getElementById('ques')
var allAns = document.getElementsByClassName('allAns')
var next = document.querySelector('.next')

var currentIndex = 0

ques.textContent = questions[currentIndex].question;
allAns[0].textContent = questions[currentIndex].Answer1;
allAns[1].textContent = questions[currentIndex].Answer2;
allAns[2].textContent = questions[currentIndex].Answer3;
allAns[3].textContent = questions[currentIndex].Answer4;

function correctAnswer(selectedAnswer) {
    if (selectedAnswer === questions[currentIndex].correctAns) {

        score += 1
        console.log("Correct! Score: " + score);
    }
    else {
        console.log('incorrect ans');

    }
}


function nextQues() {
    currentIndex++
    if (currentIndex === 1) {
        ques.textContent = questions[1].question;
        allAns[0].textContent = questions[1].Answer1
        allAns[1].textContent = questions[1].Answer2
        allAns[2].textContent = questions[1].Answer3
        allAns[3].textContent = questions[1].Answer4
    }
    else if (currentIndex === 2) {
        ques.textContent = questions[2].question
        allAns[0].textContent = questions[2].Answer1
        allAns[1].textContent = questions[2].Answer2
        allAns[2].textContent = questions[2].Answer3
        allAns[3].textContent = questions[2].Answer4
    }
    else if (currentIndex === 3) {
        ques.textContent = questions[3].question
        allAns[0].textContent = questions[3].Answer1
        allAns[1].textContent = questions[3].Answer2
        allAns[2].textContent = questions[3].Answer3
        allAns[3].textContent = questions[3].Answer4
    } else if (currentIndex === 4) {
        ques.textContent = questions[4].question
        allAns[0].textContent = questions[4].Answer1
        allAns[1].textContent = questions[4].Answer2
        allAns[2].textContent = questions[4].Answer3
        allAns[3].textContent = questions[4].Answer4
    }
    else if (currentIndex === 5) {
        ques.textContent = questions[5].question
        allAns[0].textContent = questions[5].Answer1
        allAns[1].textContent = questions[5].Answer2
        allAns[2].textContent = questions[5].Answer3
        allAns[3].textContent = questions[5].Answer4
    }
    else if (currentIndex === 6) {
        ques.textContent = questions[6].question
        allAns[0].textContent = questions[6].Answer1
        allAns[1].textContent = questions[6].Answer2
        allAns[2].textContent = questions[6].Answer3
        allAns[3].textContent = questions[6].Answer4
    }
    else if (currentIndex === 7) {
        ques.textContent = questions[7].question
        allAns[0].textContent = questions[7].Answer1
        allAns[1].textContent = questions[7].Answer2
        allAns[2].textContent = questions[7].Answer3
        allAns[3].textContent = questions[7].Answer4
    }
    else if (currentIndex === 8) {
        ques.textContent = questions[8].question
        allAns[0].textContent = questions[8].Answer1
        allAns[1].textContent = questions[8].Answer2
        allAns[2].textContent = questions[8].Answer3
        allAns[3].textContent = questions[8].Answer4
    }
    else if (currentIndex === 9) {
        ques.textContent = questions[9].question
        allAns[0].textContent = questions[9].Answer1
        allAns[1].textContent = questions[9].Answer2
        allAns[2].textContent = questions[9].Answer3
        allAns[3].textContent = questions[9].Answer4
    }
    else if (currentIndex === 10) {
        ques.textContent = questions[10].question
        allAns[0].textContent = questions[10].Answer1
        allAns[1].textContent = questions[10].Answer2
        allAns[2].textContent = questions[10].Answer3
        allAns[3].textContent = questions[10].Answer4
    }
    else if (currentIndex === 11) {
        ques.textContent = questions[11].question
        allAns[0].textContent = questions[11].Answer1
        allAns[1].textContent = questions[11].Answer2
        allAns[2].textContent = questions[11].Answer3
        allAns[3].textContent = questions[11].Answer4
    }
    else if (currentIndex === 12) {
        ques.textContent = questions[12].question
        allAns[0].textContent = questions[12].Answer1
        allAns[1].textContent = questions[12].Answer2
        allAns[2].textContent = questions[12].Answer3
        allAns[3].textContent = questions[12].Answer4
    }


    else {
        if (score >= 7) {
           
            var container = document.querySelector(".container");
            container.innerHTML = "";

            var heading = document.getElementById('heading');
            heading.innerHTML = ''; 
        
            var h3 = document.createElement('h3');
            h3.style.color = 'white'
            h3.style.textAlign = 'center';
            h3.style.marginBottom = "20px";
            h3.style.fontSize = "24px";
            h3.textContent = `Your Total Score is ${score}`;
            container.appendChild(h3);
        
            var gifImg = document.createElement("img");
            gifImg.src = "https://gifsec.com/wp-content/uploads/2022/09/happy-new-year-gif-1.gif";
            gifImg.style.width = "100%";
            gifImg.style.height = "auto"; 
            gifImg.style.objectFit = "cover";
            container.appendChild(gifImg);
        }
        else {

            var container = document.querySelector(".container");
            container.innerHTML = "";

            var heading = document.getElementById('heading');
            heading.innerHTML = ''; 

            var h3 = document.createElement('h3');
            h3.style.color = 'white'
            h3.style.textAlign = 'center';
            h3.style.marginBottom = "20px";
            h3.style.fontSize = "24px";
            h3.textContent = `Your Total Score is ${score}`;
            container.appendChild(h3);

            var loose = document.createElement('img')
            loose.src = 'https://i.pinimg.com/originals/ec/02/25/ec02259aeaa448c66d21c3e73bec5632.gif'
            loose.style.color = 'white'
            loose.style.width = "100%";
            loose.style.height = "80%";
            loose.style.objectFit = "cover";
            container.appendChild(loose)


        }

    }

}