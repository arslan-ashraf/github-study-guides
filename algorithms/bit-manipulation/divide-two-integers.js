function divide_two_integers(dividend, divisor) {
    let is_positive = (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)
    divisor = Math.abs(divisor)
    dividend = Math.abs(dividend)
    if (divisor == 1){
        return is_positive ? dividend : -1 * dividend
    }
    let quotient = 0
    while (divisor <= dividend){
        let running_divisor = divisor
        let running_quotient = 1
        while ((running_divisor << 1) < dividend){
            running_quotient = running_quotient << 1
            running_divisor = running_divisor << 1
        }
        dividend = dividend - running_divisor
        quotient += running_quotient
    }
    return is_positive ? quotient : -1 * quotient
}

console.log(divide_two_integers(5, 4) == 1)
console.log(divide_two_integers(56, -4) == -14)
console.log(divide_two_integers(-100, 25) == -4)
console.log(divide_two_integers(-130, -10) == 13)
console.log(divide_two_integers(15, -1) == -15)