(()=>{
    const collectOddValuesRec = (arr: number[]): number[]=>{
        const newArr = [];

        if(!arr.length) return [];

        if(arr[0] % 2 === 0){
            newArr.push(arr[0]);
        }

        return [...newArr, ...collectOddValuesRec(arr.slice(1))]
    }

    const arr = [1,2,3,4,5,6,7,8];
    console.log(collectOddValuesRec(arr));
})()