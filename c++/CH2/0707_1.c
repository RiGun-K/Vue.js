#include <stdio.h>

int main() {

    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);

        3 2 1
    // a>b>c = b
    // c>b>a = b
        4 5 7
    // b>a>c = a
    // c>a>b = a
        2 3 10
    // a>c>b = c
    // b>c>a = c
    if((a+c)/2 >= b) {
        printf("%d", b);
    } else if() {
        printf();
    } else {
        printf();
    }
    return 0;
}