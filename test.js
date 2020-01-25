const AllPartial = [];
function Partial(arr, visited,n,idx) {
    if(idx == n) {
        console.log(arr, visited, n);

        return;
    }
 
    visited[idx] = false;
    Partial(arr, visited, n, idx + 1);
 
    visited[idx] = true;
    Partial(arr, visited, n, idx + 1);
}

const array = [1,2,3];
Partial(array, [],0,0);
