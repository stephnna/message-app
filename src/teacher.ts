import {v4 as uuidV4} from "uuid";
import type { userDetail } from "./userDetail";


      //  parent as a type of user implements user
class Teacher { 
  messageArray: userDetail[] = []; 
  public constructor() {}
  
  renderTeacherMessage = (message: userDetail[] ) => {
    const teacherMessage = document.getElementById('teacher-container') as HTMLDivElement;
    const teacherParentMessage = document.getElementById('teacher-parent-container') as HTMLDivElement;
    const teacherStudentMessage = document.getElementById('teacher-student-container') as HTMLDivElement;
        let messageContainer = '';
    message.forEach((arrayItem) => {      
      // the above line of code increses the value of each index of the array of oject
      const messageContent = 
      `<div>
        <h2>From teacher</h2>
        <h2>Hi, I am ${arrayItem.firstName} ${arrayItem.lastName}</h2>       
        <div>ID: ${arrayItem.id}</div>          
        <div>Message: ${arrayItem.message}</div>          
        <div>Email address${arrayItem.email}</div> 
        <div>Date sent: ${arrayItem.createdAt.toLocaleString()}</div>   
      </div><hr>`;
      messageContainer += messageContent;
    });
    teacherMessage.innerHTML = messageContainer;
    teacherParentMessage.innerHTML = messageContainer;
    teacherStudentMessage.innerHTML = messageContainer;
  };

 public createteacherMessage(){
  const teacherButton = document.getElementById('teacher-button') as HTMLButtonElement;
  teacherButton.addEventListener("click", () => {
    {
      const teacherMessage = document.getElementById('teacher-message') as HTMLInputElement;
      const firstName = document.getElementById('teacher-first-name') as HTMLInputElement;
      const lastName = document.getElementById('teacher-last-name') as HTMLInputElement;
      const email = document.getElementById('teacher-email') as HTMLInputElement;
        
      if (teacherMessage?.value === '' || teacherMessage?.value == null ||
      firstName.value === '' || firstName.value == null ||
      email.value === '' || email.value == null
      ) return;    

      const newMessage = {        
        id: uuidV4(),
        message: teacherMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        fullName: firstName.value + lastName.value,
        email: email.value, 
        createdAt: new Date(),        
         };
         this.messageArray.push(newMessage);
         this.renderTeacherMessage(this.messageArray);                     
    };
  }) 
}
}

const parentInstance = new Teacher();
parentInstance.createteacherMessage();
