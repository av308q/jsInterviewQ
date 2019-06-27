const VM = function (inventory) {
    var drinks = inventory || null;

    if(!drink) {
        throw new Error("no inventory: Cannot add a new VM");
    }

    const drinksKeys = Objects.keys(drinks)

    var sale = function(pid){
        if (!drinks[pid]) {
            return;
        }

        if (drink[pid].stock > 0){
            drink[pid].stock--;
            return '1 ${drinks[pid].name} - Thank you, come again!!';
        }else { 
            drinks[pid].stock=0;
            return '${drinks[pid].name} is out of stock :(come back tomrrow);'
        }
    }
    var sale = function (pid){
    };

    var stock = function(){
        const total = drinksKeys.reduce((c,n)=> c + drinks[n].stock,0);
        return total;

        // const total = drinksKeys.reduce(function(c,n) {
        //     return c + drinks[n].stock;
        // }, 0);

    }
    return (sale, stock);
};

const drinks = {
    1: {name: "mango juice", stock: 2},
    2: {name: "Banna smothies", stock: 2},
    3: {name: "guava mix", stock: 3 },
    4: {name: "citrus blend", stock: 3}
}

const empty = VM ();

console.log(emptyVM());

//learn about Object.freeze 