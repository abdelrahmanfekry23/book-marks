

var siteNameInput = document.getElementById("site-name");
var siteUrlInput = document.getElementById("url");
var data = document.getElementById("tableBody");
var validation ;

var bookMarks =[];


if(bookMarks != null)
{
    bookMarks = JSON.parse(localStorage.bookMarks);
    displayData(bookMarks);

}



function addBookMark(){

    var newBookMark ={
        siteName:siteNameInput.value ,
        siteUrl:siteUrlInput.value ,
    };

    bookMarks.push(newBookMark);

    localStorage.setItem('bookMarks',JSON.stringify(bookMarks));

    displayData(bookMarks);
    clear();
         
       
}


function displayData(arr){

    var cartoona = ``;

    for(var i = 0 ; i < arr.length ; i++){

        cartoona+=`<tr>
        <td>${i}</td>
        <td>${arr[i].siteName}</td>
        <td><a type="button" class="btn btn-success" href="${arr[i].siteUrl}" target="_blank" >visit</a></td>
        <td><button onclick=delet(${i}) type="button" class="btn btn-danger">Delet</button></td>
    </tr>`

    }

    data.innerHTML = cartoona;
}



function clear(){
       siteNameInput.value = null;
       siteUrlInput.value = null;
}



function delet(index){
    bookMarks.splice(index,1);
    localStorage.setItem('bookMarks',JSON.stringify(bookMarks));
    displayData(bookMarks);
}


function validate(){

    var bookPattern = /^\w{3,}(\s+\w+)*$/;
    var urlPattern = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
    if(bookPattern.test(siteNameInput.value)&&urlPattern.test(siteUrlInput.value)){

        addBookMark();
    }
    else{
        window.alert("invalied data");
    }
}