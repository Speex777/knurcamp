
/* 0
const uczniowie = 
[
    {wiek:69, imie: "jan"},     // 0
    {wiek:100, imie: "paweł"},  // 1
    {wiek:21, imie: "gaweł"},    // 2
    {wiek:37, imie: "karolina"} // 3
]; */


/* 1

const a = 10;
const b = "ABC";
const c = [10, 20,30];
const d = {wiek: 69, imie: "jan"};

console.log(typeof a);
console.log(typeof b);
console.log(Array.isArray(c));
console.log(Array.isArray(d)); 
console.log(Object.assign(c,d));


*/

/* 2
uczniowie.push({wiek:37, imie: "karolina"})

const pawel = uczniowie[1]
pawel.wiek = pawel.wiek + 1;

console.log(Object.assign(uczniowie[1].wiek));
console.log(uczniowie[1].wiek);
console.log(pawel);
console.log(pawel.wiek);


for(const uczen of uczniowie)
{
    console.log(uczen);
}
*/

/* 3
for(const uczen of uczniowie)
{
    for(const klucz in uczen)
    {
        //console.log(klucz);
        const wiek = uczen.wiek;
        const wiektensam = uczen["wiek"];
        console.log()
        console.log(klucz + "=2137=" + uczen[klucz])
        
    }
}   */ 



const uczniowie = 
[
    {wiek:69, imie: "jan"},     // 0
    {wiek:100, imie: "paweł"},  // 1
    {wiek:21, imie: "gaweł"},    // 2
    {wiek:37, imie: "karolina"} // 3
];
