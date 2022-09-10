// build/_snowpack/pkg/uuid.js
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
var byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native = {
  randomUUID
};
function v4(options, buf, offset) {
  if (native.randomUUID && !buf && !options) {
    return native.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}

// build/dist/parent.js
var Parent = class {
  constructor() {
    this.messageArray = [];
    this.renderParentMessage = (message) => {
      const parentMessage = document.getElementById("parent-container");
      const parentToTeacher = document.getElementById("parent-to-teacher");
      let messageContainer = "";
      message.forEach((arrayItem) => {
        const messageContent = `<div>
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
  }
  createParentMessage() {
    const parentButton = document.getElementById("parent-button");
    parentButton.addEventListener("click", () => {
      const parentMessage = document.getElementById("parent-message");
      const firstName = document.getElementById("parent-first-name");
      const lastName = document.getElementById("parent-last-name");
      const email = document.getElementById("parent-email");
      if (parentMessage?.value === "" || parentMessage?.value == null || firstName.value === "" || firstName.value == null || email.value === "" || email.value == null)
        return;
      const newMessage = {
        id: v4(),
        message: parentMessage.value,
        firstName: firstName.value,
        lastName: lastName.value,
        fullName: firstName.value + lastName.value,
        email: email.value,
        createdAt: new Date()
      };
      this.messageArray.push(newMessage);
      this.renderParentMessage(this.messageArray);
    });
  }
};
var parentInstance = new Parent();
parentInstance.createParentMessage();
//# sourceMappingURL=parent.js.map
