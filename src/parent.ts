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
        <div>${arrayItem.id}</div>     
        <div>${arrayItem.message}</div> 
        <div>${arrayItem.firstName}</div>
        <div>${arrayItem.lastName}</div> 
        <div>${arrayItem.email}</div>        
        <div>${arrayItem.createdAt}</div>    
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
        
      if (parentMessage?.value === '' || parentMessage?.value == null) return;    

      const newMessage = {        
        id: uuidV4(),
        message: parentMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value, 
        createdAt: new Date,       
         };
         this.messageArray.push(newMessage);         
         this.renderParentMessage(this.messageArray);
            
  }) 
}
}

const parentInstance = new Parent();
parentInstance.createParentMessage();