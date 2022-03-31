//----------------------------HomePractice (03/30/22)--------------------------------------

//Create a class that manages a simple login page

let myHome = "123 This Location Road";

class Login {
    constructor (first, last, middle, age, bday, address, phoneNumber, userName, passWord){
        this.firstName = first;
        this.lastName = last;
        this. middleName = middle;
        this.age = age;
        this.birthDay = bday;
        this.address = address;
        this.phone = phoneNumber;
        this.userName = userName;
        this.passWord = passWord;
    }

    yourName(){
        return `\nYour Name is: | ${this.firstName} ${this.middleName} ${this.lastName}\n`;
    }
    bornOn(){
        return `Date of Birth: | ${this.birthDay}\n`;
    }
    yourAddress(){
        return `You Live at: | ${this.address}\n`;
    }
    contactInfo(){
        return `Contact Info: | ${this.phone}\n`;
    }
    firstAuthentication(){
        return  `
        Please Enter username and passwod
        ------------------------------------
        UserName: ${this.userName}
        PassWord: ${this.passWord}\n`;
    }
}

//--------------------------
let user1 = new Login("Gabriel", "Jefferson", "Lee", "29", "04/12/92", myHome, "123-456-7689", "username", "password123");
console.log(user1.yourName());
console.log(user1.bornOn());
console.log(user1.yourAddress());
console.log(user1.contactInfo());
console.log(user1.firstAuthentication());

/**
 * Return:
 * -----------
 
Your Name is: | Gabriel Lee Jefferson

Date of Birth: | 04/12/92

You Live at: | 123 This Location Road

Contact Info: | 123-456-7689


        Please Enter username and passwod
        ------------------------------------
        UserName: username
        PassWord: password123

 */

class TwitterPost extends Login{
    constructor(first, last, middle, age, bday, address, phoneNumber, userName, passWord){
        super(first, last, middle, age, bday, address, phoneNumber, userName, passWord);
        this.post = post
    }
    myFirstPost(){
        return`
        
        [PICTURE GOES HERE] | ${this.yourName()} | ${this.userName()} |
        
        ${this.post}`;
    }
}






