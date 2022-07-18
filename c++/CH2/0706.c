#include <stdio.h>

/* 분수 크기 비교 */

int main() {

    int a,b,c,d;
    scanf("%d%d%d%d", &a,&b,&c,&d);

    if( (double)a/b > (double)c/d) {
        printf("%d\n",1);
    } else if( (double)a/b == (double)c/d) {
        printf("%d\n", 0);
    } else {
        printf("%d\n", -1);
    }
    return 0;
}
