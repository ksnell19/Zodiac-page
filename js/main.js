var aquarius = {
  name: 'aquarius',
  text: 'Strengths: Progressive, original, independent, humanitarian. \nWeaknesses: Runs from emotional expression, temperamental, uncompromising, aloof. \nAquarius likes: Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener. \nAquarius dislikes: Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them.',
  img: 'http://www.astrology-zodiac-signs.com/images/aquarius.jpg'
};

var pisces = {
  name: 'pisces',
  text: 'Strengths: Compassionate, artistic, intuitive, gentle, wise, musical. \nWeaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr. \nPisces likes: Being alone, sleeping, music, romance, visual media, swimming, spiritual themes. \nPisces dislikes: Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind.',
  img: 'http://www.astrology-zodiac-signs.com/images/pisces.jpg'
};

var aries = {
  name: 'aries',
  text: 'Strengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate. \nWeaknesses: Impatient, moody, short-tempered, impulsive, aggressive. \nAries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports. \nAries dislikes: Inactivity, delays, work that does not use their talents.',
  img: 'http://www.astrology-zodiac-signs.com/images/aries.jpg'
};

var taurus = {
  name: 'taurus',
  text: 'Strengths: Reliable, patient, practical, devoted, responsible, stable. \nWeaknesses: Stubborn, possessive, uncompromising. \nTaurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands.\nTaurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics.',
  img: 'http://www.astrology-zodiac-signs.com/images/taurus.jpg'
};
var gemini = {
  name: 'gemini',
  text: 'Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas. \nWeaknesses: Nervous, inconsistent, indecisive. \nGemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town. \nGemini dislikes: Being alone, being confined, repetition and routine.',
  img: 'http://www.astrology-zodiac-signs.com/images/gemini.jpg'
};
var cancer = {
  name: 'cancer',
  text: 'Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive. \nWeaknesses: Moody, pessimistic, suspicious, manipulative, insecure. \nCancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends. \nCancer dislikes: Strangers, any criticism of Mom, revealing of personal life.',
  img: 'http://www.astrology-zodiac-signs.com/images/cancer.jpg'
};
var leo = {
  name: 'leo',
  text: 'Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous. \nWeaknesses: Arrogant, stubborn, self-centered, lazy, inflexible. \nLeo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends. \nLeo dislikes: Being ignored, facing difficult reality, not being treated like a king or queen.',
  img: 'http://www.astrology-zodiac-signs.com/images/leo.jpg'
};
var virgo = {
  name: 'virgo',
  text: 'Strengths: Loyal, analytical, kind, hardworking, practical. \nWeaknesses: Shyness, worry, overly critical of self and others, all work and no play. \nVirgo likes: Animals, healthy food, books, nature, cleanliness. \nVirgo dislikes: Rudeness, asking for help, taking center stage.',
  img: 'http://www.astrology-zodiac-signs.com/images/virgo.jpg'
};
var libra = {
  name: 'libra',
  text: 'Strengths: Cooperative,diplomatic, gracious, fair-minded, social. \nWeaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity. \nLibra likes: Harmony, gentleness, sharing with others, the outdoors.\nLibra dislikes: Violence, injustice, loudmouths, conformity.',
  img: 'http://www.astrology-zodiac-signs.com/images/libra.jpg'
};
var scorpio = {
  name: 'scorpio',
  text: 'Strengths: Resourceful, brave, passionate, stubborn, a true friend. \nWeaknesses: Distrusting, jealous, secretive, violent. \nScorpio likes: Truth, facts, being right, longtime friends, teasing, a grand passion. \nScorpio dislikes: Dishonesty, revealing secrets, passive people.',
  img: 'http://www.astrology-zodiac-signs.com/images/scorpio.jpg'
};
var sagittarius = {
  name: 'sagittarius',
  text: 'Strengths: Generous, idealistic, great sense of humor. \nWeaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic. \nSagittarius likes: Freedom, travel, philosophy, being outdoors. \nSagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details.',
  img: 'http://www.astrology-zodiac-signs.com/images/sagittarius.jpg'
};
var capricorn = {
  name: 'capricorn',
  text: 'Strengths: Responsible, disciplined, self-control, good managers. \nWeaknesses: Know-it-all, unforgiving, condescending, expecting the worst. \nCapricorn likes: Family, tradition, music, understated status, quality craftsmanship. \nCapricorn dislikes: Almost everything at some point.',
  img: 'http://www.astrology-zodiac-signs.com/images/capricorn.jpg'
};


//array of objects
var zodiac = [aquarius, pisces, aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn];

//create img title for each object and display on the html
for(var i=0; i<zodiac.length; i++) {
  var img = document.createElement('img');
  var p = document.createElement('p');

  img.src= zodiac[i].img;
  p.textContent = zodiac[i].text;

  var div= document.createElement('div');
  div.appendChild(img);
  div.appendChild(p);
  //show on screen
  //attach our dynamically generated elements to our html
  var body = document.querySelector('body');
  body.appendChild(div);

  //play
   function showSign(){
     //grab the input
     var sign = document.getElementById('showSign').value;
     console.log(sign);
     //when the page is ready, do this.
     $(document).ready(function() {
       //when button is clicked do this
        $("#my-btn").click(function() {
        $(".zodiac").fadeIn();

     if(zodiac.length.trim === 0) {
       console.log(zodiac);
     };

     //erase the input
     document.getElementById('text').value ="";

 });
})
