class User
{
	id = null;
    email = null;
    name = null;

    constructor(obj) {    
	    // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
    	for (var prop in obj) this[prop] = obj[prop];
  	}
}

export default User