#include <stdio.h>

int main()
{
    char a = 'A';
    int b = 200;
    long c = 400000;
    float e = 3.1492;
    char f[10] = "김리건";

    printf("%c %d\n", a,a);

    printf("%d\n", b);

    printf("%lld\n", c);

    //

     int a,b;

    printf("두 수를 입력하시오.");
    scanf("%d%d", &a,&b);

    printf("%d\n", a*b);
    return 0;

 
}
