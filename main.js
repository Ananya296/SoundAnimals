function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9fx2kgjfR/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
var wolf = 0;
var crow = 0;
var cow = 0;
var lion = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ '  Detected Cat - '+cat+ '  Detected Wolf - '+wolf+ '  Detected Crow - '+crow+ '  Detected Cow - '+cow+ '  Detected Lion - '+lion;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'Dog.gif';
      dog = dog + 1;
    } else if (results[0].label == "Meowing") {
      img.src = 'Cat.gif';
      cat = cat + 1;
    } else if (results[0].label == "Howling") {
        img.src = 'Wolf.gif';
        wolf = wolf + 1;
    } else if (results[0].label == "Kau-Kau") {
        img.src = 'Crow.gif';
        crow = crow + 1;
    } else if (results[0].label == "Mooing") {
        img.src = 'Cow1.gif';
        cow = cow + 1;
    } else if (results[0].label == "Roaring") {
        img.src = 'Lion.gif';
        lion = lion + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}
