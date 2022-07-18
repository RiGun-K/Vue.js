#include <stdio.h>

int main()
{
    int a,b,c,d;

    scanf("%d %d", &a,&b);
    printf("%.2f\n", (double)(a+b+c+d)/4);  // .Nf\n 소수 N 자리까지 출력 , 형변환을 위해 (double) 선언
    return 0;
}