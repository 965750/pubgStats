export const asideLeader = state => {
    //leader Sort
    let swapped
    function bubbleSort(arr) {
        swapped = false
        let end = arr.length - 1
        for (let i = 0; i < end; i++) {
            if (arr[i].avg < arr[i + 1].avg) {
                swapped = true
                let temp = arr[i].avg
                arr[i].avg = arr[i + 1].avg
                arr[i + 1].avg = temp
            }
        }
        end--
    }
    do {
        bubbleSort(state.asideLeader);
    } while (swapped);
    return state.asideLeader
}