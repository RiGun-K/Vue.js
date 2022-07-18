#include <stdio.h>

/* ATM */

int main() {

    int a;
    double b;

    scanf("%d %lf", &a,&b);
    // printf("%d %.2lf", a,b);

    // 인출할 금액이 수수료 포함 최초 잔액보다 작거나 같은 경우가 있을 수 있다는 조건을 포함
    if(a%5==0 & (a+0.5)<=b) {
        printf("%.2lf", b-(a+0.5));
    } else {
        printf("%.2lf", b);
    }
    return 0;
}