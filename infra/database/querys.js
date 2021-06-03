const conexao = require('./conexao')


const executaQuery = (query, parametros = '') => {
    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (erro, result, campos) => {
            if (erro) {
                reject(erro)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = executaQuery