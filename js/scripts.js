// constructor
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}


let johnDoe = new Contact("John", "Doe", "1234567");
console.log(johnDoe)

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
