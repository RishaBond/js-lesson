let num = 33721;
ans = 1;
while(num){
    ans *= num%10;
    num = Math.floor(num/10);
}
ans = ans**3;

console.log(ans);
