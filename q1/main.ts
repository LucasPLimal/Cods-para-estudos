import {funcionario} from './funcionario'
import {empresa} from './empresa'
import {gerente} from './gerente'
let emp = new empresa("Tech Soluções");
let fu1 = new funcionario("roberto", "S.G", 600);
let fu2 = new funcionario("elena", "Financeiro", 1200);
let fu3 = new funcionario("tamires", "Cafeteiro", 100);
let ge1 = new gerente("mateus", "gerente", 2500, 10);
let ge2 = new gerente("alison", "gerente", 3700, 15);

emp.adicionarfuncionario(fu1);
emp.adicionarfuncionario(fu2);
emp.adicionarfuncionario(fu3);
emp.adicionarfuncionario(ge1);
emp.adicionarfuncionario(ge2);
emp.listarfuncionarios();
