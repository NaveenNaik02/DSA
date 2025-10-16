(() => {
    const maxSubArraySum = (arr: number[], n: number): number=>{
        let start = 0;
        let maxSum = 0;

        while(start < n){
            maxSum += arr[start];
            start +=1
        }

        let tempSum = maxSum;
        for(let end = n; end<arr.length; end+=1 ){
            const startIndex = end - n;
            tempSum = tempSum - arr[startIndex] + arr[end];
            maxSum = Math.max(maxSum, tempSum);
        }
        return maxSum;
    }

    const arr = [1, 2, 5, 2, 8, 1, 5];
    const length = 3;
    console.log(maxSubArraySum(arr,length));
})()