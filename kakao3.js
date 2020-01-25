const _unAbleNumbers = [[]];
let cnt = 0;
function solution(relation) {
    const CombineArray = Combine(relation[0].map((_, number) => number));
    CombineArray.map(index => {
        MulitipleCombine(relation, index);
    });
    console.log(cnt)
    return cnt;
}
function Combine(array) {
    let result = [[]];
    for (var i = 0; i < array.length; i++) {
        var len = result.length;
        for (var x = 0; x < len; x++) {
            result.push(result[x].concat(array[i]));
        }
    }
    return result;
}
function MulitipleCombine(_getArray, _selectNumbers) {
    let StopCheckState = true;
    _unAbleNumbers.map((UnAbleNumber,number) => {
        let NumberCount = 0;
        //console.log(UnAbleNumber,number,_selectNumbers.slice(0,UnAbleNumber.length-1))
        const TempArray = _selectNumbers.slice(0,UnAbleNumber.length);
        for(let i = 0 ; i <UnAbleNumber.length;i++){
            if(UnAbleNumber[i] === TempArray[i]){
                NumberCount ++;
            }
        }
        if(NumberCount ===  UnAbleNumber.length){
            StopCheckState = false;
        }
    });
    if (StopCheckState) {
        const SelectedArray = [];
        _getArray.map(index => {
            SelectedArray.push(
                _selectNumbers.map(num => index[num]).toString()
            );
        });
        let Able = true;

        SelectedArray.map((index, number) => {
            if (SelectedArray.indexOf(index) !== number) {
                Able = false;
            }
        });
        if (Able) {
            //Able ++
            cnt++;
            _unAbleNumbers.push(_selectNumbers);
        }
    }
}

solution([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]])