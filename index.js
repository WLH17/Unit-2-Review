let count = 0;

let countElement = document.getElementById('count');

countElement.innerText = count;

function increment(){
    count += 1
    countElement.innerText = count;
}

function decrement(){
    count -= 1
    countElement.innerText = count;
}

function reset(){
    count = 0;
    countElement.innerText = count;
}

document.querySelector('#reset').addEventListener('click', function(event){
    console.log('Count Reset');
})