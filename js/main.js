/**  Data una lista della spesa, stampare sulla pagina 
(anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.*/



const cartShopping = ['pane','pasta','caffè','latte','frutta','acqua','verdura'];


let ulLista = document.getElementById('lista-spesa')
console.log(ulLista);

let i = 0 ;


while(i<cartShopping.length){
    

let list = document.createElement('li');
list.innerHTML = cartShopping[i];
console.log(list);
i++;


    ulLista.append(list);
}