const _unAbleNumbers = [[]];
let cnt = 0;
function solution(relation) {
    var answer = 0;
    const CombineArray = CombineSort(
        Combine(relation[0].map((_, number) => number))
    );
    CombineArray.map(index => {
        MulitipleCombine(relation, index);
    });
    return cnt;
}
function CombineSort(_array) {
    _array.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            if (a === b) {
                return 0;
            } else {
                return 1;
            }
        }
    });
    const WrapArray = [];
    let partArray = [];
    let nowSize = 1;
    _array.map(index => {
        if (nowSize == index.length) {
            partArray[partArray.length] = index;
        } else {
            nowSize = index.length;
            partArray.sort();
            partArray.map(partindex => {
                WrapArray[WrapArray.length] = partindex;
            });
            partArray = [];
            partArray[partArray.length] = index;
            if (_array[_array.length - 1].length === index.length) {
                WrapArray[WrapArray.length] = index;
            }
        }
    });
    return WrapArray;
}
const FindSameValue = (_array1, _array2) => {
    let able = true;
    _array1.map(index => {
        let value = 0;
        if(index.length !== 0){
            index.map(compareValue => {
                _array2.map(comparedValue => {
                    if (able) {
                        if (compareValue === comparedValue) {
                            value++;
                        }
                    }
                });
                if (value === index.length) {
                    able = false;
                    //console.log(1);
                }
            });
        }
    });
    return able;
};

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
    StopCheckState = FindSameValue(_unAbleNumbers, _selectNumbers);
    //console.log(StopCheckState) 
    if (StopCheckState) {
        const SelectedArray = [];
        _getArray.map(index => {
            SelectedArray.push(
                _selectNumbers.map(num => index[num]).toString()
            );
        });
       let Able = true;
        console.log(SelectedArray);
        SelectedArray.map((index, number) => {
            if (SelectedArray.indexOf(index) !== number) {
                Able = false;
            }
        });
        if (Able) {
            //Able ++
            cnt++;
            //console.log(_selectNumbers);
            _unAbleNumbers.push(_selectNumbers);
        }
    }
}

const relation = [
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"]
];

solution(relation);
