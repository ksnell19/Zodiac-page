var mercury = {
  name: 'mercury',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/mercury-transparent.png'
};

var venus = {
  name: 'venus',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/venus-transparent.png'
};

var earth = {
  name: 'earth',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/earth-transparent.png'
};

var mars = {
  name: 'mars',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/mars-transparent.png'
};
var jupiter = {
  name: 'jupiter',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/jupiter-transparent.png'
};
var saturn = {
  name: 'saturn',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/saturn.png'
};
var uranus = {
  name: 'uranus',
  text: '',
  img: 'https://space-facts.com/wp-content/uploads/uranus-transparent.png'
};
var neptune = {
  name: 'neptune',
  text: 'STRENGTHS: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive. \nWEAKNESSES: Moody, pessimistic, suspicious, manipulative, insecure. \nLIKES: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends. \nDISLIKES: Strangers, any criticism of Mom, revealing of personal life.',
  img: 'https://space-facts.com/wp-content/uploads/neptune-transparent.png'
};


//array of objects
var planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

//write the click function first
function showInfo(){
//remove whats in div in first place. (Why is there something there?)
document.getElementById('planet-names').innerHTML= '' ;

   //grab the input
   var userInput = document.getElementById('planet').value;
   console.log(userInput);

 //match input to one of our objects
 //loop through and return a match
 for(var i=0; i<planet.length; i++) {
   if(userInput.toLowerCase() === planet[i].name) { //do we have a match?

   var img = document.createElement('img');
   var head = document.createElement('h4');
   var elements= document.createElement('h5');
   var p = document.createElement('p');
   // p.setAttribute('style', 'width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #868e96; border-radius: 10px; text-align: left');
   var div = document.createElement('div');

   //created elements with the zodiac info
   img.src= zodiac[i].img;
   head.textContent = zodiac[i].date;
   elements.textContent = zodiac[i].element;
   p.textContent = zodiac[i].text;

   //add image and p to our div
   div.appendChild(img);
   div.appendChild(head);
   div.appendChild(elements);
   div.appendChild(p);


   //display to user
   var zodiacSign = document.getElementById('zodiac-sign');
   zodiacSign.appendChild(div);
    }
  }
}




  //    //when the page is ready, do this.
  //    $(document).ready(function() {
  //      //when button is clicked do this
  //      $("#my-btn").click(function() {
  //      $(".zodiac").fadeIn();
