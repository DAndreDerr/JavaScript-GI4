const coins1 = [1, 2, 5];
const amount1 = 11;
// output needs to be 3

const coins2 = [2];
const amount2 = 3;
// output needs to be -1


function fewestCoins(x,y){
    let totalcoins = 0;
    if(y > 0){
        let i = x.length - 1;
        while(i >= 0 && i < x.length){
            if(y - x[i] >= 0){
                y = y - x[i];
                totalcoins++

            } else {
                i--;
            }
        }
        if(y === 0){
            return totalcoins;
        } else {
            return -1;
        }
        
    }
}

console.log(fewestCoins(coins1,amount1));
console.log(fewestCoins(coins2,amount2));