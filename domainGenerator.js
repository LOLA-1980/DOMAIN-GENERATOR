let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dotCom = ['.com', '.net', '.mx'];

for (let i in pronoun) {
    for (let j in adj) {
        for (let k in noun) {
            //Verificar si el elemento contiene racoon
            if (noun[k].includes('racoon')) {
                //Reemplazar 'racoon' con 'raco.on'
                noun[k] = noun[k].replace('racoon', 'rac.on');
            }


            for (let l in dotCom) {
                if (noun[k].includes('rac.on')) {
                    console.log(pronoun[i]+adj[j]+noun[k]);
                } else {
                     //console.log("i:", i, "j:", j, "k:", k, "pronoun:", pronoun[i], "adj:", adj[j], "noun:", noun[k]);
                     console.log(pronoun[i]+adj[j]+noun[k]+dotCom[l]);
                }   
            }
        }
    }
}