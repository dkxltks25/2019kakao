//음식이 비어있을경우 0 비어 있지 않을경우 -1을 하고 반환해준다.
function findFood(food) {
    let Able = true;
    let MinusCount = 0;
    food = food.map(index => {
        if (index !== 0) {
            MinusCount++;
            return index - 1;
        } else {
            return index;
        }
    });
    if (MinusCount === 0) {
        Able = false;
        return [Able, 0, food];
    } else {
        return [Able, MinusCount, food];
    }
}
function EatOrFind(food, time) {
    let Able = true;
    let Count = 0;
    food.map(index => {
        if (index !== 0) {
            Count++;
        }
    });
    if (Count >= time) {
        Able = true;
    } else {
        Able = false;
    }
    return Able;
}
function foodPosition(food, time) {
    let Able = true;
    let Count = 0;
    let ReturnValue = -1;
    food.map((index, number) => {
        if (Able) {
            if(number === 0){
                if(index !== 0){
                    ReturnValue = number+1;
                }else{
                    ReturnValue = -1;
                }
            }
            else if(time === 0){
                if(index !== 0){
                    ReturnValue = number+1;
                    Able = false;
                }
            }else{
                if(index !== 0){
                    Count++; 
                    time--;
                } 
            }
        }
    });

    return ReturnValue;
}
function solution(food_times, k) {
    var answer = 0;
    while (true) {
        const State = EatOrFind(food_times, k);
        // console.log(State);
        //음식을 먹아야하는 겨우와 찾아야하는 음식의 경우 find true Eat false
        if (!State) {
            let EatState = true;
            let Count = 0;
            [EatState, Count, food_times] = findFood(food_times);
            if (EatState) {
                k -= Count;
            } else {
                return -1;
            }
        } else {
            let t = foodPosition(food_times, k);
            //console.log(t);
            return t;
        }
    }
    return answer;
}
//solution([3, 1, 2], 5);
//solution([3,1,1,1,2,4,3],12)
//solution([4, 3, 5, 6, 2],7)
