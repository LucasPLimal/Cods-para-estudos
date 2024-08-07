#include <iostream>
using namespace std;

main() {
    cout << "Situacao do aluno" << endl;
    string aluno;
    cout << "Nome do Aluno: ";
    cin >> aluno;

    float n1;
    float n2;
    float n3;
    
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
        cout << "Media: " << media << endl;
    }
    else {
        cout << aluno << " Reprovado(a)" << endl;
        cout << "Media: "<< media << endl;
    }
    return 0;
}