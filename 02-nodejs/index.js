/*
0 obter um usuario
1 Obter o nº de um usuario a partir de seu id
2 obter o endereco do usuario pelo id 
*/

function getUser(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            name: 'Aladin',
            date: new Date()
        })
    }, 1000) // retorna depois de um segundo
}

function getTel(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            tel: '1132425',
            ddd: 11
        })
    }, 2000)
}

function getAdress(idUser, callback) {
    setTimeout(() => {
        return callback (null, {
            street: 'Rua dos bobos',
            number: 0
        })
    }, 2000)
}

function resolveUser(erro, user) { // padrão callback
    console.log('user', user) // chamando as funções
}

getUser(function resolveUser(error, user) {
    //null || "" || 0 === false
    if(error) {
        console.error('Deu ruim em USUÁRIO', error)
        return;
    }
    getTel(user.id, function resolveTel(error1, tel) {
        if(error1) {
            console.error('Deu ruim em TEL', error)
            return;
        }
        getAdress(user.id, function resolveAdress(error2, adress) {
            if(error2) {
                console.error('Deu ruim em ENDEREÇO', error)
                return;
            }
            console.log(`
                Nome: ${user.name},
                Endereço: ${adress.street}, ${adress.number}
                Telefone: (${tel.ddd})${tel.tel}
                `)
        })
    })
})
// const tel = getTel(user.id)

// console.log('tel', tel)