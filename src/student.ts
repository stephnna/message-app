import {v4 as uuidV4} from "uuid";
import type { userDetail } from "./userDetail";

      //  parent as a type of user implements user
class Student { 
  messageArray: userDetail[] = []; 
  public constructor() {}
  
  renderStudentMessage = (message: userDetail[] ) => {
    const studentMessage = document.getElementById('student-container') as HTMLDivElement;
    const studentTOTeacher = document.getElementById('student-to-teacher') as HTMLDivElement;
     let messageContainer = '';
    message.forEach((arrayItem) => {      
      // the above line of code increses the value of each index of the array of oject
      const messageContent = 
      `<div> 
        <h2>From student: ${arrayItem.firstName} ${arrayItem.lastName}</h2>      
        <div>ID: ${arrayItem.id}</div>                 
        <div>email: ${arrayItem.email}</div>             
        <div>Message: ${arrayItem.message}</div>       
        <div>Date sent: ${arrayItem.createdAt.toLocaleString()}</div>    
      </div><hr>`;
      messageContainer += messageContent;
    });
    studentMessage.innerHTML = messageContainer;
    studentTOTeacher.innerHTML = messageContainer;
  };

 public createStudentMessage() {
  const studentButton = document.getElementById('student-button') as HTMLButtonElement;
  studentButton.addEventListener("click", () => {
    {
      const studentMessage = document.getElementById('student-message') as HTMLInputElement;
      const firstName = document.getElementById('student-first-name') as HTMLInputElement;
      const lastName = document.getElementById('student-last-name') as HTMLInputElement;
      const email = document.getElementById('student-email') as HTMLInputElement;
        
      if (studentMessage?.value === '' || studentMessage?.value == null ||
      firstName.value === '' || firstName.value == null ||
      email.value === '' || email.value == null) return;    
     
      const newMessage = {        
        id: uuidV4(),
        message: studentMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        fullName: firstName.value + lastName.value,
        email: email.value, 
        createdAt: new Date,       
         };
         this.messageArray.push(newMessage);
         this.renderStudentMessage(this.messageArray);                     
    };
  }) 
}
}

const student = new Student();
student.createStudentMessage();