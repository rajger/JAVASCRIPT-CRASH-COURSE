// Challenge 1: Your age in days


function ageInDays() {
    var birthYear = prompt('Which year were you born?');
    const d = new Date;
    let year = d.getFullYear();
    var ageInDayss = (year - birthYear)*365; 
    var h1 = document.createElement(h1);
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log(ageInDayss);
}

function reset() {
    document.getElementById('ageInDays').remove();
}
