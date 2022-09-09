import {v4 as uuidV4} from "uuid";
// create an interfact that holds the content of a user
interface User {
sendMessage: () => string;
}

type userDetail = {
  id: string,
  message: string,
  firstName: string,
  lastName: string,
  email: string, 
  createdAt: Date, 
}

      //  parent as a type of user implements user
class Parent implements User {
  public constructor(     
    protected readonly email: string,
    protected readonly photo?: String,
    protected parent = document.getElementById('parent-button'),
    protected messageArray: [] = [],
    ) {}

    public sendMessage(): string {
    return this.email;
  }

 public renderParentMessage() {
  parent.onclick = () => {
      const parentMessage = document.getElementById('parent-input') as HTMLInputElement;
      const firstName = document.getElementById('parent-input') as HTMLInputElement;
      const lastName = document.getElementById('parent-input') as HTMLInputElement;
      const email = document.getElementById('parent-input') as HTMLInputElement;
        
      if (parentMessage?.value === '' || parentMessage?.value == null) return;    

      const newMessage = {        
        id: uuidV4(),
        message: parentMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value, 
        createdAt: new Date,       
         };
         this.messageArray.push(Array<userDetail>(newMessage));      
    };
  }
}
       // Teacher having the same property as parent extends parent 
class Teacher extends Parent {
  public constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    photo?: String,
  ) {
    super(id, firstName, lastName, email, photo);
  }  
}

// const user = new Parent<>(20);