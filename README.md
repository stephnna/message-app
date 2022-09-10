## Project demo

- [Test it live](https://stephnna.github.io/message-app/build/)

- [Loom description](https://www.loom.com/share/edb58e65209548e3a70d8746d142ba19)

repository.

## Setup this app local machine
 
- clone this repo
- `cd message-app` to enter the folder
- `npm install` to install dependencies
- `npm start` to start the app on localhost

## Requirements

Together with this document you got how much time you have to complete this task and what programming language to use.

## What we expect from you?
- Use OOP
- If you understand S.O.L.I.D. principle, please use it, that's a big plus
We prefer quality over quantity, meaning: it's better to submit quality coded un-fished task than finished task with spaghetti code.
Use GIT as VCS
- Your final code does not need to have "fancy" styled output. You can use console or webpage for output. Unit tests would be actually the best choice. Basically, provide us simple as possible way to see your code in action.
## What we want you to build?
- You need to code core structure for messaging app.

- This message app have 3 different user types: Student, Teacher and Parent

- Each user type should have follow:

- User ID (required)
- First name (required)
- Last name (required)
- Email (required)
- Profile Photo (optional)
- Difference between user types:

- Teachers and Parents have Salutation (optional), it's used in full name.
Teacher can send message to any user type
Parent and Student can send message only to Teachers
After initialising user object we need to have following options:

- User object need to have option to get full name.
For Students full name is combined from: first name + last name.
For Teachers and Parents is built from: salutation + first name + last name.
- We need a way to get profile picture. If we don't set profile picture on initialising user object, we need to have option to get path/url to default system avatar.
Get email
Get user id.
- We need option to save user. On save we need to validate email and profile picture. For profile picture as this is only test, do not make complex validation, instead check does passed string have .jpg in file name, if not save should fail.
Also, this save feature does not need to actually save user, instead it should only return success if validation passed, and fail if not.


## Each message need to have (all required):

- Sender
- Receiver
- Message text
- Creation time (Unix time format)
- Message type: System or Manual
- For each message we want to have following features

- System message can only send Teacher and only to Students.
Option to get full name of sender and receiver
Option to get message text
Option to get message type
Formatted creation time
Option to save message. Same as for saving user, we don't need actual saving, we just need validation.
For example, if we create new message instance and we set Student as sender, but we also set message type to System, save message should fail as Teacher can only send System messages.

## How final code should look?

We don't want you to implement database or some other data storage provider.

- We want code where you/we can create new object instances and pass hard-coded data just for tests. If coded properly, you should be able to easily connect your code with DB.

- Your code should be clean and easy for read.

- We are looking forward to see your final code.
Enjoy in coding and good luck.
