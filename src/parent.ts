import {v4 as uuidV4} from "uuid";
import type { userDetail } from "./userDetail";

      //  parent as a type of user implements user
class Parent {  
  messageArray: userDetail[] = [];
  public constructor() {}
  
  renderParentMessage = (message: userDetail[] ) => {
    const parentMessage = document.getElementById('parent-container') as HTMLDivElement;
    const parentToTeacher = document.getElementById('parent-to-teacher') as HTMLDivElement;
    
    let messageContainer = '';
    message.forEach((arrayItem) => {      
      // the above line of code increses the value of each index of the array of oject
      const messageContent = 
      `<div>
      <h2>From parent</h2>
      <h4>Hi! teacher, I am ${arrayItem.firstName} ${arrayItem.lastName}</h4>
        <div>ID: ${arrayItem.id}</div>         
        <div>Email: ${arrayItem.email}</div>    
        <div>Message: ${arrayItem.message}</div>                 
        <div>Date sent: ${arrayItem.createdAt.toLocaleString()}</div>    
      </div><hr>`;
      messageContainer += messageContent;
    });
    parentMessage.innerHTML = messageContainer;
    parentToTeacher.innerHTML = messageContainer;    
  };

 public createParentMessage() {  
  const parentButton = document.getElementById('parent-button') as HTMLButtonElement;
  parentButton.addEventListener("click", () => {
   
      const parentMessage = document.getElementById('parent-message') as HTMLInputElement;
      const firstName = document.getElementById('parent-first-name') as HTMLInputElement;
      const lastName = document.getElementById('parent-last-name') as HTMLInputElement;
      const email = document.getElementById('parent-email') as HTMLInputElement;
                
      if (parentMessage?.value === '' || parentMessage?.value == null ||
      firstName.value === '' || firstName.value == null ||
      email.value === '' || email.value == null
      ) return;    
                 
      const newMessage = {        
        id: uuidV4(),
        message: parentMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        fullName: firstName.value + lastName.value,
        email: email.value, 
        createdAt: new Date(),      
         };
         this.messageArray.push(newMessage);         
         this.renderParentMessage(this.messageArray);
            
  }) 
}
}

const parentInstance = new Parent();
parentInstance.createParentMessage();