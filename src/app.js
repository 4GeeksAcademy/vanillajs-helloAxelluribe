letpronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let domains = [];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      domains.push(pronoun[p] + adj[a] + noun[n] + '.com');
    }
  }
}

console.log(domains);



let  primero = ['El', 'nuestro'];
let segundo  = ['genial','grande'];
let tercero = ['Corredor','mapache'];

let dominios = [];

primero.forEach(p => {
  segundo.forEach(s => {
    tercero.forEach(t => {
      dominios.push(p + s + t + '.com');
    });
  });
});

console.log(dominios);