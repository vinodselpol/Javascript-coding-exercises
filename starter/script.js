

// calculating the BMI index
const markMass= 95, markHeight= 1.88, johnMass= 85, johnHeight= 1.76;
let johnBMI= (johnMass/(johnHeight*johnHeight));
let markBMI= (markMass/(markHeight*markHeight));
let markHigherBMI;
markHigherBMI=(markBMI> johnBMI)
if (markHigherBMI){
    console.log(`Mark's BMI  (${(markBMI)}) is higher than the john's BMI ${(johnBMI)}`)
} else {
    console.log(`johns's BMI (${(johnBMI)}) is higher than the mark's BMI ${(markBMI)}`)
}



// Strings and template literals 
const firstName= 'vinod';
const job= 'engineer';
const birthYear='1996';
const age= 2021- birthYear;
// normal strings
const details= "I'm " + firstName + ',' + age+ ' years old '+ job;
console.log(details);

// template literals 
const newDetails= `I'm ${firstName},${age} years old ${job} !!`;
console.log(newDetails);

// next line 
console.log("the weather \n\ is super \n\ fantastic ");

console.log(`the weather 
is super duper 
fantastic and crazy`);


// If -else statements
const population= 10000;
if (population >= 500){
    console.log("the place is overcrowded 🤦‍♂️🤦‍♂️")
} else {
    let short= 500- population;
    console.log(`the place is shortage by ${short}`)
}

// difference between == & ===

const num=prompt("what is your favourite number ?");
console.log(num);

if (num === 7){
    console.log('operation is working ')
} else {
    console.log("the operation is not working")
}

// equailty operators assignment
 const numNeighbours= Number(prompt('How many neighbour countries does your country have ?'));
 if (numNeighbours===1){
     console.log('only 1 border')
     console.log(typeof numNeighbours)
 } else if (numNeighbours > 1)
 {
     console.log('more than 1 border');
 } else if (numNeighbours<=0) {
     console.log('no borders');
 }

// logical operators 

 const language = 'english';
 const population= 50;
 const isIsland=false;

 if (language ==='english' && population <50 && isIsland){
     console.log('Portgual does not meet your criteria ')
 } 
  else {
     console.log('You should live in portgual')
 }

// coding challenge 3
 const dolphinFirstTry= 109, dolphinSecondTry= 112, dolphinThirdTry=101;
 const koalasFirstTry= 109, koalasSecondTry= 112, koalasThirdTry= 101;
 let dolphinAverage=(dolphinFirstTry+dolphinSecondTry+dolphinThirdTry)/3;
 let koalasAverage=(koalasFirstTry+koalasSecondTry+koalasThirdTry)/3;
 if (dolphinAverage > koalasAverage && dolphinAverage >=100){
     console.log(`the winner is dolphin: ${dolphinAverage}`)
 } else if(dolphinAverage< koalasAverage && koalasAverage >=100 ) {
     console.log(`the winner is koalas: ${koalasAverage}`)

 } else if  (dolphinAverage>= 100 &&  koalasAverage >=100) {
     console.log('the match is tied ')
 }

// Switch statement

// const spokenLanguage='english';

 switch (spokenLanguage){
     case 'chinese':
     case 'mandarin':
         console.log('most nuber of native speakers!');
         break;
     case 'spanish':
         console.log('2nd place in nunber of native speakers');
         break;
     case 'english':
         console.log('3rd place');
         break;
     case 'hindi':
         console.log('number 4');
         break;
     case 'arabic':
         console.log('5th most spoken language');
         break;
     default:
         console.log('Great langauage too 😊')
     break;
 }

// coding chanllenge 4

const billValue=430 ;
 let tip;
billValue>=50 && billValue<=300 ? tip= billValue*0.15: tip=billValue*0.2;
const totalValue= billValue+tip;
console.log(`the bill value is ${billValue}, and the tip value is ${tip}, and the total value is ${totalValue}` );