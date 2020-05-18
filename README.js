// Title: function-forms
// Creator: Penelope Jungreis
// Description: Long and concise forms of a simple function.

// Full long-hand function block.
function greetWorld(celestialBody) {
  console.log(`Hello, ${celestialBody}!`);
};
greetWorld('Mars');

// Full function in concise form.
greetWorld = celestialBody => console.log(`Hello, ${celestialBody}!`);
greetWorld('Venus');

// Full function using long-hand with two parameters.
function insertName(celestialBody, name) {
  console.log('Hello, ' + celestialBody + '! My name is ' + name +'.');
};
insertName('Europa', 'Penny');

// Full function using short-hand concise form with two parameters.
insertName = (celestialBody, name) => console.log('Hello, ' + celestialBody + '! My name is ' + name +'.');

insertName('Uranus', 'Zac');
