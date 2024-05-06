function findUser() {
    var userID = prompt("Enter the UserID to find:");
    if (userID) {
      var userFound = Math.random() > 0.5; 
      if (userFound) {
        alert('User found');
      } else {
        alert('No such user found');
      }
    }
  }
  
  function inviteUser() {
    var userID = prompt("Enter the UserID to invite:");
    if (userID) {
      alert('Invitation sent to ' + userID);
    }
  }
