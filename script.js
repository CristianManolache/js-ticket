// Date
var distance = prompt ("How many kilometers?");
console.log (distance);
var age = prompt ("How old are you?");
console.log (age);
var costper = (0.21);
// Exec
var kmprice = distance * costper;
var young = Math.floor(kmprice * 0.20);
var old = Math.floor(kmprice * 0.40);

// View page
if (age < 18) {
  document.writeln ('Ticket price: ' + (kmprice - young) + ' €');
} else if (age >= 65) {
  document.writeln ('Ticket price: ' + (kmprice - old) + ' €');
} else {
  document.writeln ('Ticket price: ' + kmprice + ' €');
}
