// class UserDTO{
//     constructor(user){
//         this._id=user._id;
//         this.username= user.name;
//         this.email=user.email;
//     }
// }
// module.exports=UserDTO;

class UserDTO {
    constructor(user) {
      if (user) { // Check if user is defined (truthy value)
        this._id = user._id;
        this.username = user.name;
        this.email = user.email;
      } else {
        // Handle the case where user is undefined (optional)
        // You can set default values here or throw an error
      }
    }
  }
  module.exports = UserDTO;
  