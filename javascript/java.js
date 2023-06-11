let tasks =[{
    task: 'Dog Care',
    description: 'Walking with dog for at least one and half hour,two times',
    picture:'images/dog.jpg',
    deadline:'Every day',
    priority:0,
},{
    task:'Get groceries',
    description:'Go in supermarket to buy groceries for one week',
    picture:'images/grocery.jpg',
    deadline:'Friday 20:00',
    priority: 0,
},{
    task:'Cooking',
    description:'Preparing meals for whole week',
    picture:'images/cooking.jpg',
    deadline:'Sunday 22:00',
    priority: 0,
},{
    task:'Vacation',
    description:'Book a Vacation on Thailand for January',
    picture:'images/thailand.jpg',
    deadline:'End of the week',
    priority: 0,
},{
    task:'Homework',
    description:'Doing my Code review',
    picture:'images/programming.jpg',
    deadline:'Saturday,18:00',
    priority: 0,
},{
    task:'Training',
    description:'Going at my football training every day',
    picture:'images/training.jpg',
    deadline:'Mon-Fri 18:00',
    priority: 0,
},{
    task:'Party night',
    description:'Going in clubs with my friend',
    picture:'images/party.jpg',
    deadline:'Saturday after 18:00',
    priority: 0,
},{
    task:'Volunteering',
    description:'Go and play with kids without parents at their facility',
    picture:'images/kids.jpg',
    deadline:'Sunday 10:00',
    priority: 0,
},{
    task:'Apartment tasks',
    description:'Clening apartment,washing laundry,cheking postbox,changing sheets,etc.',
    picture:'images/cleaning.jpg',
    deadline:'Sunday 00:00',
    priority: 0,
}
]

for(let job of tasks){
    document.getElementById('cards').innerHTML += `
    <div class="card shadow mb-3 bg-body-tertiary rounded">
    <div class="top1">
        <button class="btn btn-primary">Task</button>
        <div class="card-container-top-right">
            <img src="icons/save.png" width="20px">
            <img src="icons/Options.png" width="20px">
        </div>
    </div>

  <img src="${job.picture} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${job.task} </h5>
    <p class="card-text">${job.description} </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
    <p>Priority level:<a class="btn btn-success btnpr">${job.priority} </a></p>
    <p>Deadline: ${job.deadline} </p></li>
    </li>
  <div class="card-body2">
  <a href="#" class="btn btn-danger">Delete</a>
  <a href="#" class="btn btn-success">Done</a>
    
  </div>
</div>
`;
}
let btns=document.getElementsByClassName('btnpr');
let counters = Array.prototype.map.call(btns,function(){
    return 0;
});
for(let i=0; i< btns.length; i++){
    btns[i].addEventListener("click",function(){
        if (counters[i]<5){
            tasks[i].priority++;
            document.getElementsByClassName("btnpr")[i].innerHTML= tasks[i].priority;
            counters[i]++;
            if(counters[i]=== 6){
                btns[i].removeEventListener("click",handleClick);
            }
            changeColor(i);
            
        }
       
    });
}

function changeColor(index){
    const changeElement = document.getElementsByClassName("btnpr")[index];
    const changeValue= counters[index];
    if ( changeValue ===2){
        changeElement.classList.remove("bg-success");
        changeElement.classList.add("bg-warning");
    } else if (changeValue ===4){
        changeElement.classList.remove("bg-warning");
        changeElement.classList.add("bg-danger");
    }
}