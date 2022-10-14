function comp(){
    let a = prompt('Please enter Value A','');
    let b = prompt('Please enter Value B','');
    if(a > b){
        alert(`Value A which is ${a} is Higher than Value B which is ${b}`);
    } else if(a < b) {
        alert(`Value B which is ${b} is Higher than Value A which is ${a}`);
    } else if (a == b) {
        alert(`Both Value A which is ${a} and Value B which is ${b} are equal`);
    } else {
        alert('Please input only numbers')
    }
    
}