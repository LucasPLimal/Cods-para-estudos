#include <iostream>
using namespace std;

main() {
    cout << "Situação do aluno" << endl;
    string aluno;
    cout << "Nome do Aluno: ";
    cin >> aluno;

    cout << "Nota do 1B" << endl;
    int n1;
    cin >> n1;
    cout << "Nota do 2B" << endl;
    int n2;
    cin >> n2;
    cout << "Nota do 2B" << endl;
    int n3;
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