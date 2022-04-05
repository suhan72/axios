function storage(event){
    event.preventDefault();

    let name=event.target.username.value;
    let email=event.target.emailid.value;
    let phno=event.target.phonenumber.value;

    let obj={
        name,
        email,
        phno
    }

    axios.post("https://crudcrud.com/api/97caa3dfc31846aabaf9f43a8880c438/appoinmentdata",obj)
    .then((response) =>{
        displayDetails(response.data)
        console.log(response)
    })

    .catch((err) => {
        document.body.innerHTML=document.body.innerHTML + "<h1 style=color:red;>something went wrong</h1>"
        console.log(err)
    })
    //localStorage.setItem(obj.email,JSON.stringify(obj));
    //displayDetails(obj);

}

//after screen refresh data doesnt lose
window.addEventListener('DOMContentLoaded', (event) => {

    axios.get("https://crudcrud.com/api/97caa3dfc31846aabaf9f43a8880c438/appoinmentdata")
    .then((response)=>{
        console.log(response)

        for(var i=0;i<response.data.length;i++){
            displayDetails(response.data[i])
        }
    })

    .catch((err)=>{
        console.log(err)
    })


    // Object.keys(localStorage).forEach(key => {
    //     const show = JSON.parse(localStorage.getItem(key))
    //     displayDetails(show)
    // })
})



function displayDetails(show){

    // show = { 
    //     _id:'',
    //     name:'',
    //     email:'',
    // }

//dont print if same mail id
  //if(localStorage.getItem(show.email) !==null){
  //deleteuserinscreen(show.email)
  //}
    let parentNode=document.getElementById('li');
    let childNode=`<li id=${show._id}>${show.name} - ${show.email} - ${show.phno}
                   <button onclick=deleteuser('${show._id}')>delete</button>
                   <button onclick=editeuser('${show.name}','${show.email}','${show.phno}','${show._id}')>edit</button>
                   </li>`;

    parentNode.innerHTML=parentNode.innerHTML + childNode;
}

function edituser(email,name,phno,userId){
    document.getElementById('email').value=email;
    document.getElementById('name').value=name;
    document.getElementById('number').value=phno;

    deleteuser(userId)
}

function deleteuser(userId){

    axios.delete(`https://crudcrud.com/api/97caa3dfc31846aabaf9f43a8880c438/appoinmentdata/${userId}`)
    .then((response)=>{
        deleteuserinscreen(userId)
    })
    .catch((err)=>{
        console.log(err)
        
    })

    // //console.log(email);
    // localStorage.removeItem(email);
    // deleteuserinscreen(email);
}
function deleteuserinscreen(userId){
 let parentNode=document.getElementById('li');
 let childNode=document.getElementById(email);

 //dont print if same mail id
if(childNode){

 parentNode.removeChild(childNode);
}
}