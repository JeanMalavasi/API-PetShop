//Responsavel por conectar ao banco e subir o servidor
const customExpress = require('./config/customExpress')
const conexao = require('./infra/database/conexao')
const Tabelas = require('./infra/database/tabelas')

conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else {
        console.log("conectado")

        Tabelas.init(conexao)

        const app = customExpress()
        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})

