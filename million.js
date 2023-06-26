let quetion = document.querySelector('.quetion'),
    quetion_p = document.getElementById('quetion_p'),
    body = document.querySelector('body');
let one = document.getElementById('oneAnwser');
let two = document.getElementById('twoAnswer');
let tree = document.getElementById('treeAnwser');
let four = document.getElementById('fourAnwser');


let inputQuest = document.createElement('input'),
    inputAnswear = document.createElement('input'),
    btn = document.createElement('button');
btn.setAttribute('id','btn');
btn.innerHTML = 'heelo';

body.appendChild(inputQuest);
body.appendChild(btn);
body.appendChild(inputAnswear);

let questions = [];
let answears = [];
btn.addEventListener('click',function(){
    let random_key = Math.floor(Math.random()*15);

    questions[random_key] = inputQuest.value;
    answears[random_key] =  inputAnswear.value;
    console.log(questions);
    console.log(answears);

    if (questions.length > 7) {
        quetion_p.innerText = questions[Math.floor(Math.random()*4)];
        one.innerText = answears[Math.floor(Math.random()*4)];
        two.innerText = answears[Math.floor(Math.random()*4)];
        tree.innerText = answears[Math.floor(Math.random()*4)];
        four.innerText = answears[Math.floor(Math.random()*4)];
    }
});

body.addEventListener(
    'click',
    function (e) {
        if (quetion_p.innerText == e.target.innerText) {
            
        }
    }
);

//sig devd e 