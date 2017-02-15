console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
  $('body').append(section);
  var jSection = $( "section" ).get( 0 );
  //console.log(jSection);
  jSection.id = "middle-earth";
  for(i=0;i<lands.length;i++){
    $('#middle-earth').append("<article><h1 id="+lands[i].replace(/\s+/g, '')+">"+ lands[i]+"</h1></article>");
    //console.log(lands[i]);
  }
}

makeMiddleEarth();

function makeHobbits(){
  // your answers here
  $('#TheShire').append("<ul id='hobbits'></ul>");
  for(i=0;i<hobbits.length;i++){
    //console.log(hobbits[i]);
    $('#hobbits').append("<li id="+hobbits[i].replace(/\s+/g, '')+">"+hobbits[i]+"</li>")
  }
}

makeHobbits();

function keepItSecretKeepItSafe(){
  // your answers here
  $("#FrodoBaggins").append("<div id='the-ring' class='magic-imbued-jewlery'></div>");
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  $('#Rivendell').append("<aside id='oHereWeGo'></aside>");
  $('#oHereWeGo').append("<ul id='buds'></ul>")
  for(i=0;i<buddies.length;i++){
    //console.log(buddies[i]);
    $('#buds').append("<li id="+buddies[i].replace(/\s+/g, '')+">"+buddies[i]+"</li>")
  }
}

makeBuddies();

function beautifulStranger(){
  // your answers here
  $('#Strider').text("Aragorn");
}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  $('#Rivendell').append($('#hobbits'));
}

leaveTheShire();

function forgeTheFellowship() {
  // your answers here
  $('#Rivendell').append("<div id='the-fellowship'></div>");

  $('#Rivendell li').each(function( i, l){
    //console.log("test");
    $('#the-fellowship').append(l);
    alert(l.textContent+ " has joined the party");
  });
}

forgeTheFellowship();

function theBalrog(){
  // your answers here
  $('#GandalftheGrey').text("Gandalf the White");
  $('#GandalftheGrey').css('background', 'white');
  $('#GandalftheGrey').css('border', '3px solid grey');
}

theBalrog();

function hornOfGondor() {
  // your answers here
  alert("The horn of Gondor has been blown!")
  $('#Boromir').remove();
}

hornOfGondor();

function itsDangerousToGoAlone() {
  // your answers here

  $('#Mordor').append($('#FrodoBaggins'));
  $('#Mordor').append($("li:contains('Sam')"));
  $('#Mordor').append("<div id='mount-doom'></div>")
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
  $('#Mordor').append("<div id='gollum'></div>")
  $('#the-ring').appendTo($('#gollum'));
  $('#mount-doom').append($('#gollum'));
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  $('#the-ring').remove();
  $('#gollum').remove();
  for(i=0;i<hobbits.length;i++){
    //console.log(hobbits[i]);
    var addthis = $('body').find($('li:contains('+hobbits[i]+')'));
  $('#TheShire').append(addthis);
  }
 }

  


thereAndBackAgain();
