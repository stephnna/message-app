import {v4 as uuidV4} from "uuid";


// creates type that holds all the user details
type userDetail = {
  id: string,
  message: string,
  firstName: string,
  lastName: string,
  email: string,
  photo?: File, 
  createdAt: Date, 
}

      //  parent as a type of user implements user
class Teacher { 
  messageArray: userDetail[] = []; 
  public constructor() {}
  
  renderTeacherMessage = (message: userDetail[] ) => {
    const teacherMessage = document.getElementById('teacher-container') as HTMLDivElement;
    let messageContainer = '';
    message.forEach((arrayItem) => {      
      // the above line of code increses the value of each index of the array of oject
      const messageContent = 
      `<div>       
        <div>${arrayItem.id}</div>     
        <div>${arrayItem.message}</div> 
        <div>${arrayItem.firstName}</div>
        <div>${arrayItem.lastName}</div> 
        <div>${arrayItem.email}</div>    
      </div><hr>`;
      messageContainer += messageContent;
    });
    teacherMessage.innerHTML = messageContainer;
  };

 public createteacherMessage(){
  const teacherButton = document.getElementById('teacher-button') as HTMLButtonElement;
  teacherButton.addEventListener("click", () => {
    {
      const teacherMessage = document.getElementById('teacher-message') as HTMLInputElement;
      const firstName = document.getElementById('teacher-first-name') as HTMLInputElement;
      const lastName = document.getElementById('teacher-last-name') as HTMLInputElement;
      const email = document.getElementById('teacher-email') as HTMLInputElement;
        
      if (teacherMessage?.value === '' || teacherMessage?.value == null) return;    

      const newMessage = {        
        id: uuidV4(),
        message: teacherMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value, 
        createdAt: new Date,       
         };
         this.messageArray.push(newMessage);
         this.renderTeacherMessage(this.messageArray);                     
    };
  }) 
}
}

const parentInstance = new Teacher();
parentInstance.createteacherMessage();
