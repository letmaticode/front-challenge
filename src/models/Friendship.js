class Friendship
{
	id = null;
    useremail = null;
    useremail = null;
    friendname = null;
    friendemail = null;

    constructor(obj) {    
	    // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
		this.id = obj.user.id;
		this.username = obj.user.name;
		this.useremail = obj.user.email;

		this.friendname = obj.friend.name;
		this.friendemail = obj.friend.email;
  	}
}

export default Friendship