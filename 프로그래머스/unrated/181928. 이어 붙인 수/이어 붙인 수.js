const solution = nums => {
    let even = [];
    let odd = [];
    
    for(let i = 0; i < nums.length; i++) {
        nums[i] % 2 === 0 ? even.push(nums[i]) :
                            odd.push(nums[i])
    }
    
    let result = +(even.join('')) + +(odd.join(''))
    
    return result
}