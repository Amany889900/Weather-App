var siteNameInput = document.getElementById("siteName") ;
var siteUrlInput =  document.getElementById("siteUrl") ; 
var tableBody = document.getElementById("tableBody") ;
var errorMsg = document.getElementById("errorMsg") ;
var exitBtn = document.getElementById("exitBtn") ;

// console.log( siteNameInput, siteUrlInput);
var bookmarks =[]; 

if(!localStorage.getItem("arrayOfBookmarks")){
    bookmarks =[];
    localStorage.setItem("arrayOfBookmarks",JSON.stringify(bookmarks));
}
else {
    bookmarks = JSON.parse(localStorage.getItem("arrayOfBookmarks"));
}

displayBookmarks();

function addBookmark(){

    if(nameValidation () && urlValidation()){

     var bookmark = {
        name: siteNameInput.value,
        url: siteUrlInput.value
     }

     bookmarks.push(bookmark);

     localStorage.setItem("arrayOfBookmarks",JSON.stringify(bookmarks));
     displayBookmarks();
     clearForm();

    }

    else {
        errorMsg.classList.remove("visually-hidden");
        errorMsg.classList.add("visible");
    }
        
}

function  clearForm(){
    siteNameInput.value = null;
    siteUrlInput.value = null;
}

function deleteBookmark(index){
  bookmarks.splice(index,1);
  localStorage.setItem("arrayOfBookmarks",JSON.stringify(bookmarks));
  displayBookmarks();
}


function displayBookmarks(){
    var bookmarkRow ='';
    for(var i=0; i<bookmarks.length; i++){
        bookmarkRow+= `<tr>
                  <th scope="row">${i+1}</th>
                  <td>${bookmarks[i].name}</td>
                  <td><button class="btn"><a href="${bookmarks[i].url}"><i class="fa-solid fa-eye"></i> Visit</a></button></td>
                  <td><button class="btn btn-delete" onclick="deleteBookmark(${i})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>`
          }
                tableBody.innerHTML = bookmarkRow; 
}

function urlValidation (){
    var url = siteUrlInput.value;
    var regex = /^(http:\/\/|https:\/\/www\.)[\w]{2,256}\.[a-z]{2,6}/g;

    if(regex.test(url)) return true;
    return false;
}

function nameValidation (){
    var name = siteNameInput.value;
    var regex = /[\w]{3,}/;

    if(regex.test(name)) return true;
    return false;
}

function exit(){
    errorMsg.classList.remove("visible");
        errorMsg.classList.add("visually-hidden");
}

