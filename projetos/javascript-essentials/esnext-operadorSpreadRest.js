// operador ... rest(juntar) / spread(espalhar)
// usar rest como parâmetro de função

// usar spread como objeto
const funcionario = { nome: 'Maria', salario: 1234.90 }

// ...funcionario pega todos os atributos de funcionario (nome e salario) e adicionar em clone
const clone = { ativo: true, ...funcionario} 
console.log(clone) //{ ativo: true, nome: 'Maria', salario: 1234.9 }

// usar spread como array
const grupoA = [ 'Joao', 'Maria', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal) // [ 'Maria', 'Joao', 'Maria', 'Gloria', 'Rafaela' ]
