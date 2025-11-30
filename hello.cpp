#include <bits/stdc++.h>
using namespace std;

int sumOfSquare(int n) {
    int sum = 0;
    while (n > 0) {
        int d = n % 10;
        sum += d * d;
        n /= 10;
    }
    return sum;
}

bool isHappy(int n, vector<int> &prev) {
    if(n == 1) return true;
    if(n < 10) return false;

    if(prev[i] == false) return false;

    ishappy(sumsq(), prev);
}

int main() {
    int n;
    cin >> n;
    vector<int> prev(maxLimit + 1, -1);

    int x = n + 1;

    while (true) {

        if (isHappy(x, prev)) {
            cout << "Next Happy Number = " << x << endl;
            break;
        }

        x++;
    }

    return 0;
}
