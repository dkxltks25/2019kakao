//스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

function solution(N,stages){
    let answer = [];
    const AllInfo = {};
    let befor_answer = [];
    stages.map((index)=>{
        AllInfo[index] === undefined ? AllInfo[index] = 1 : AllInfo[index]++;
    })
    let NowNum = 1;
    let Count = stages.length;
    for (let [key, value] of Object.entries(AllInfo)) {
        if(NowNum !== key){
            for(let NowNum; key < NowNum; NowNum++){
                befor_answer.push([keys,0]);
            }
        }
        console.log(Count,value);

        befor_answer.push([key,value/Count]);
        Count = Count - value;
        NowNum++;
      }
    console.log(befor_answer)
    return answer;

}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3]);
solution(4,[4,4,4,4,4])