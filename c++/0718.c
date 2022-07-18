#include <stdio.h>

int add_value(int a, int b) {
    int c = a + b;
    return c;
}

void add_value2(int k, int t) {
    int m = k + t;
    printf("%d \n", m);
    return;
}

int main() {

    // 1
    int sum;
    sum = add_value(3,5);
    printf("%d \n", sum); 

    // 2
    add_value2(3,5);
    return 0;
}