let pronoun = ['the','our', 'my'];
let adj = ['great', 'big', 'little' ];
let noun = ['jogger','racoon', 'mouse'];
let domain = ['.com', '.net', '.cl']
let myDomain = []

for (let i=0; i < pronoun.length; i++){
    for (let j=0; j < adj.length; j++){
        for(let k=0; k< noun.length; k++){
            for (let l=0; l<domain.length; l++){
                myDomain.push(pronoun[i] + adj[j] + noun[k] + domain[l])
            }
        }
    }    
}
console.log (myDomain)