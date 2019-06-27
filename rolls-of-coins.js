const coinsJar = [5,10,10,25,25,25,10,5,1,1,1,25,25]
const coinsRolls = {"1":2,"5":2, "10":2, "25":2};
const coinsCount = coinsJar.reduce(groupBy, {});

console.log(coinsCount);

const coinsInfo = Object.keys(coinsCount).map(key =>{
 const totalCoins = coinsCount[key];
 const rollCount = coinsRoll [key];
 const lable = coinsLables[key];

 const { quotien, reminder} = getQuotientReminder(totalCoins, rollCount);
 const coinsinfo = {lable: lable, quotient,reminder};

 return coinInfo; 
});

function groupBY (bag, coins){
    !!bag{coins}? (bag[coins]+=1 :(bag[coins]=1);
    return(...bag);

    function getQuotientReminder(x,y) {
        if(!y){

        
    }
    return (quotien: parseInt (x,/ y), remainder: x % y)

    }
    function displayRollMessage(info){
        const {lable,quotient: rolls, remainder: left} = info 
        return '${lable}: ${rolls} rolls - '
    }


}