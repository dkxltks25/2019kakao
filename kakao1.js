//아이디 -> 이름
function solution(record) {
    var answer = [];
    const NameId = {};
    record.map(index=>{
        const recored =index.split(" ")
        if(recored[0] === "Enter" || recored[0] === "Change"){
            NameId[recored[1]] = recored[2];
        }
    })
    record.map(index=>{
        const recored = index.split(" ");
        if(recored[0] === "Enter"){
            answer.push(`${NameId[recored[1]]}님이 들어왔습니다.`);
        }else if(recored[0] === "Leave"){
            answer.push(`${NameId[recored[1]]}님이 나갔습니다.`);
        }
    });
    return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

solution(record);