#include <stdio.h>

int main()
{
    int a = 5;
    int b = 3;

    printf("%d\n", a+b);
    printf("%d\n", a-b);
    printf("%d\n", a*b);
    printf("%d\n", a/b);
    printf("%d\n", a%b);

    printf("%f\n", (double)a/b);

    printf("======================\n");

    printf("%d\n", a==b);
    printf("%d\n", a>b);
    printf("%d\n", a!=b);
    printf("%d\n", !(a!=b));
    printf("%d\n", a>=5 && b>=5);

    int c = 5;
    printf("======================\n");
    printf("%d\n", c++);
    printf("%d\n", ++c);
    printf("%d\n", c);
    printf("%d\n", c+=1);
    printf("%d\n", c*=2);


    if(c>10) printf("%d\n", c);
    
    if(c>10) 
        printf("%d\n", 1);
    else 
        printf("%d\n", 2);
    return 0;
}