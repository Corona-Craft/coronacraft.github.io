function load(){
		fetch("members.json")
		.then(response => response.json())
		.then(data => {
    for (i = 0; i < data.length; i++) {
    //Make adding JSON data easier
    var name = data[i].name;
    var link = data[i].link;
    //Construct Additiom
    var addition = "<p><a href="+link+">"+name+"</a></p>";
    //Add addition
    document.getElementById("jeb").innerHTML += addition;
//test if this is working
alert("hi!");
    }
  });
  }
