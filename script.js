function comp(){
    let a = prompt('Please enter Value A','');
    let b = prompt('Please enter Value B','');
    if(a > b){
        alert('Value A is Higher, if the valueA is higher than valueB');
    } else if(a < b) {
        alert(`Value B is Higher, if the valueB is higher than valueA`);
    } else if (a == b) {
        alert(`Equal, if valueA and valueB is equal`);
    }
}