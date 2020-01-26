        let Answer = 0;
        function solution(food_times, k) {
            let answer = 0;
            MuziEat(food_times,k,0,0)
            console.log(Answer);
            console.log(1)
            return answer+1;
            
        }
        let MuziEatStop = false;
        function MuziEat(_food,time,now,empty){
            console.log(_food,time,now,empty)
            //재귀함수 종료
            if(MuziEatStop){
                return ;
            } 
            //범위 초과
            if(now === _food.length){
                now = 0;
                empty = 0;
                MuziEat(_food,time,now,empty);
            }
            //다먹음
            else if(empty === _food.length){
                MuziEatStop = true;
                Answer = -1;
                return ;
            }
            //시간 초과
            else if(time === 0){
                if(_food[now]=== 0){
                    for(let i = now; i< _food.length;i++){
                        if(i !== _food.length-1){
                            if(_food[i] !== 0){
                                Answer = i;
                                i = _food.length;
                            }
                        }else{
                            if(_food[i] !== 0){
                                Answer = i;
                                i = _food.length
                            }else{
                                i = 0;
                            }
                        }
                    }
                }else{
                    Answer = now;
                }
                MuziEatStop = true;
            }
            //음식 섭취
            else if(_food[now] !== 0){
                _food[now]--;
                MuziEat(_food,time-1,now+1,empty);
            }else{
                MuziEat(_food,time,now+1,empty+1);
            }   
        }

/*
    배열의 값
*/
// 시작부터 끝까지의 계수를 전부 -1
// 근대 이게 가능한거는 갯수가 

//solution([3,1,1,1,2,4,3],12)
solution([3,1,2],6);

