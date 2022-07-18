#include <stdio.h>

/* 약수 판별 */

int main() {

    int a,b;
    scanf("%d%d", &a,&b);

    if(a==0) {
        printf("%d !| %d\n", a,b);
    } else if(b%a == 0) {
        printf("%d | %d\n", a,b);
    } else {
        printf("%d !| %d\n", a,b);
    }
    return 0;
}