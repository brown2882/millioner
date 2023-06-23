let quetion = document.querySelector('.quetion');
let quetion_p = document.getElementById('quetion_p');

let oneAnwser = document.getElementById('oneAnwser');
let twoAnwser = document.getElementById('twoAnswer');
let treeAnwser = document.getElementById('treeAnwser');
let fourAnwser = document.getElementById('fourAnwser');

answerOne();
oneAnwser.addEventListener("click", () => {
    answerTwo()
});
twoAnwser.addEventListener("click", answerTwo);
treeAnwser.addEventListener("click", answerTwo);
fourAnwser.addEventListener("click", answerTwo);

function answerOne() {
    quetionOne()
    oneAnwser.innerHTML = 'Gyumri';
    twoAnwser.innerHTML = 'Erevan';
    treeAnwser.innerHTML = 'Alaverdi';
    fourAnwser.innerHTML = 'Vanadzor';
    
}
function answerTwo() {
    quetionTwo()
    oneAnwser.innerHTML = '1989';
    twoAnwser.innerHTML = '1979';
    treeAnwser.innerHTML = '1978';
    fourAnwser.innerHTML = '1999';

}
// oneAnwser.addEventListener("click", () => {
//     alert('win')
// })
function quetionOne() {
    quetion_p.innerHTML = 'where is he?'; 
}
function quetionTwo() {
    quetion_p.innerHTML = 'when is born Araqel?';
}
