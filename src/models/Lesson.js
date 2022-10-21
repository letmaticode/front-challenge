class Lesson {
    id = null;
    title = null;
    description = null;
    subject_name = null;

    constructor(obj) {
        // IF AN OBJECT WAS PASSED THEN INITIALISE PROPERTIES FROM THAT OBJECT
        this.id = obj.id;
		this.title = obj.title;
		this.description = obj.description;

		this.subject_name = obj.subject.name;
    }
}

export default Lesson