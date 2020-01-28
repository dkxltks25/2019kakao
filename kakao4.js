function solution(food_items,k){
    
    const food = food_items.map((index,number)=>{
        return [number+1,index]
    })    
    return MuziEat(food,k);
    
}
function MuziEat(food,k){
    let p = 0;
    for( ; k >0;k--){
        if(food.length === 0){
            return -1;
        }
        if(p === food.length){
            p = 0;
        }
        food[p][1] -= 1;
        if(food[p][1] ===  0){
            food.splice(p,1);
        }else{
            p++;
        }
    }
    if(food.length === 0){
        return -1;
    }
    if(p === food.length){
        p = 0;
    }
    return food[p][0]
}
//solution([3, 1, 2], 5);
//solution([3,1,1,1,2,4,3],12)
//solution([4, 3, 5, 6, 2],7)
solution([5,5,5],15)