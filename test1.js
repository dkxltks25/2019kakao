const FindSameValue = (_array1,_array2) =>{
    let able = true;
    _array1.map(index=>{
        let value = 0; 
        index.map(compareValue=>{
            _array2.map(comparedValue=>{
                if(able){
                    if(compareValue === comparedValue){
                        value++;
                    }
                }
            })
            if(value === _array2.length){
                able = false;   
            }
        })
    })
    return able;
}

FindSameValue([[1,2],[1]],[1,2])
