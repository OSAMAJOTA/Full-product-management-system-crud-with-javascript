


let title=document.getElementById('title');

let price=document.getElementById('price');

let taxes=document.getElementById('taxes');

let ads=document.getElementById('ads');

let discount=document.getElementById('discount');

let total=document.getElementById('total');

let count=document.getElementById('count');

let category=document.getElementById('category');

let submit=document.getElementById('submit');



// get total

function getTotal(){
    console.log('done');
    if(price.value != ''){
        let result=(+price.value + +taxes.value + +ads.value )-+discount.value;
        total.innerHTML=result;
        total.style.background='#040';
    }else{
        total.innerHTML='';
        total.style.background='#a00d02';
    }

}


// create product 
let dataPro;
if(localStorage.product !=null){
    dataPro=JSON.parse(localStorage.product)
}else{
    dataPro=[];
}

submit.onclick=function(){
    let newpro ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
        

    }
    dataPro.push(newpro);
    localStorage.setItem('product', JSON.stringify(dataPro)  )
    console.log(dataPro);
    clearData()
}






// save localstorge
//clear input 
function clearData(){
    title.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}


// read count 
// delete 
// update
// search 
// clean data 