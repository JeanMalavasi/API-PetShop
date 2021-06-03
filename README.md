# API-PetShop
API básica, utilizando Nodejs com Express para o backend e MYSQL para persistencia dos dados.

## Endpoints
#### Adicionar: http://localhost:3000/atendimentos
Adiciona um dado ao banco enviando um JSON atravez do body:  
#### Listar: http://localhost:3000/atendimentos/{id}
Retorna todos dados da tabela.  
#### Recuperar um por id: http://localhost:3000/atendimentos/{id}
Retorna o dado especificado pelo id.
#### Alterar por id: http://localhost:3000/atendimentos/{id}
Altera o dado especificado pelo id, utilizando um JSON enviado no body.
#### Deletar por id: http://localhost:3000/atendimentos/{id}
Deleta o dado espesificado pelo id.
##### Formato JSON para requisiçoes:
{  
	"cliente": "string",  
	"pet": "string",  
	"servico": "string",  
	"status": "string",  
	"data": "DD/MM/YYYY",  
	"observacoes": "string"  
}  
