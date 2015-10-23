 function Person(f = "Penny", l = "Dog"){
 	this.first = f;
 	this.last = l;
 }

 function babysFirstMessage(person){
 	if(person == null){
 		person = new Person("Melvyn", "Drag")
 	}
	alert(person.first);
 }

 function changeImage(){
 	var my_image = document.getElementById("my_picture")
 	my_image.src = "meow.jpg"
 }