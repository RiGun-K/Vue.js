#include <stdio.h>

/* 네 수의 평균 */

int main()
{
    int a,b;
    scanf("%d %d", &a,&b);
    printf("%d\n", a*(b%10));
    printf("%d\n", a*(b/10%10));
    printf("%d\n", a*(b/100));
    printf("%d\n", a*b);
    return 0;
}