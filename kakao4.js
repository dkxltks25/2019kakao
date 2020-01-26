let Answer = 0;
let cnt = 0;
function solution(food_times, k) {
    var answer = 0;
    let i = 0;
    let stopState = 0;
    while(true){
        let count = 0; 
        if(food_times.length <= k){
            food_times.map((index)=>{
                if(index !== 0){
                    count++;
                    return index-1;
                }
            })
            k=-count;
        }else{
            let stopable = true;
            food_times.map((index)=>{
                if(k === 0){
                    stopable = false;
                }
                else if(index !==0){
                    count++;
                    k--;
                } 
            })
            if(!stopable){
                break;
            }
        }   
        
    }
    console.log(answer);
    return Answer;
}
const food =[3, 1,0,0,0,2]
const time = 6;
solution(food,time)

/*
    배열의 값
*/
// 시작부터 끝까지의 계수를 전부 -1
// 근대 이게 가능한거는 갯수가 