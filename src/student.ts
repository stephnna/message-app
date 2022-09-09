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
class Student { 
  messageArray: userDetail[] = []; 
  public constructor() {}
  
  renderStudentMessage = (message: userDetail[] ) => {
    const studentMessage = document.getElementById('student-container') as HTMLDivElement;
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
    studentMessage.innerHTML = messageContainer;
  };

 public createStudentMessage() {
  const studentButton = document.getElementById('student-button') as HTMLButtonElement;
  studentButton.addEventListener("click", () => {
    {
      const studentMessage = document.getElementById('student-message') as HTMLInputElement;
      const firstName = document.getElementById('student-first-name') as HTMLInputElement;
      const lastName = document.getElementById('student-last-name') as HTMLInputElement;
      const email = document.getElementById('student-email') as HTMLInputElement;
        
      if (studentMessage?.value === '' || studentMessage?.value == null) return;    

      const newMessage = {        
        id: uuidV4(),
        message: studentMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
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