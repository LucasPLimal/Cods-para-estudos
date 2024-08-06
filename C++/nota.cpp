#include <iostream>
using namespace std;

main() {
    cout << "Situação do aluno" << endl;
    string aluno;
    cout << "Nome do Aluno: ";
    cin >> aluno;

    int n1;
    int n2;
    int n3;
    
    cout << "Nota do 1B" << endl;
    cin >> n1;
    cout << "Nota do 2B" << endl;
    cin >> n2;
    cout << "Nota do 3B" << endl;
    cin >> n3;

    float media;
    media=(n1+n2+n3)/3;

    if (media>=7) {
        cout << aluno << " Aprovado(a)" << endl;
    }
    else {
        cout << aluno << " Reprovado(a)" << endl;
    }
    return 0;
}