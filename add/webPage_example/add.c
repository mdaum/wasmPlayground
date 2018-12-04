#include <stdio.h>

int add(int a, int b) {
  return a + b;
}

int main(int argc, char ** argv) {
  printf("Hello, world! My favorite number is %d \n", add(3,4));
}