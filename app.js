let pronoun = ['the','our', 'my', 'your', 'their'];
let adj = ['great', 'big', 'small', 'awesome', 'amazing', 'fantastic', 'epic', 'cool'];
let noun = ['jogger','racoon', 'company', 'planet', 'world', 'solutions', 'technologies', 'adventures', 'experiences'];

for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(pronoun[i] + adj[a] + noun[n] + ".com");
    }
  }
}
