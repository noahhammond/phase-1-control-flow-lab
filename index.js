function scuberGreetingForFeet(distance){
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.'
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else if (distance >= 2501) {
    return 'No can do.'
  }
}
scuberGreetingForFeet(199);

function ternaryCheckCity(bigCity){
  const bigCityMessage = (bigCity === 'NYC') ? ('Ok, sounds good.') : ('No go.');
  return bigCityMessage
}

function switchOnCharmFromTip(tip){

let reply;

if (tip === 'generous') {
  return reply = "Thank you so much.";
} else if (tip === 'not as generous') {
  return reply = 'Thank you.'
} else {
  return reply = 'Bye.';
}
}