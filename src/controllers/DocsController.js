const reader = require('xlsx')
const fs = require('fs')
const path = require('path')
const moment  = require('moment')

class DocsController {
    constructor() {
       
    }

    // create(req, res) {
    //     let tipo = req.body.tipo
    //     if (tipo === 'xlsx') {
    //         transformToXLS(req, res);
    //     } else if (tipo === 'pdf') {
    //         this.transformToPdf(req, res);
    //     } else if (tipo === 'doc') {
    //         this.transformToDoc(req, res);
    //     } else {
    //         res.status(404).send({message: `Erro, a API não encontrou essa extensão de documento: .${tipo} `})
    //     }
    // }

    transformToXLS(req, res) {
        try {
            let diaDeHoje = moment(new Date()).format("DD_MM_yyyy")
            let dados = req.body.conteudo
            
            let originalFileName = req.body.titulo
            let exportFileName = originalFileName + '_' + diaDeHoje + '.xls'
            
            
            let dirPath = path.join(__dirname, '../../assets/sheets');//criando o caminho do diretorio
            var fd = fs.openSync(path.join(dirPath, exportFileName), 'w', 0o666); //criando um novo arquivo

            let filePath = path.resolve(dirPath, exportFileName); //pegando o caminho do arquivo criado
            
            const file = reader.readFile(filePath, {type: 'binary', cellDates: true, dateNF: 'yyyy/mm/dd;@'}); //lendo arquivo
            const ws = reader.utils.json_to_sheet(dados); //tranformando json em xls
            reader.utils.book_append_sheet(file, ws, "Dados") //adicionando uma planilha ao arquivo
    
            //Escrevendo nosso arquivo
            reader.writeFile(file, filePath)

            setTimeout(function () {
                // Its printed after the file is closed
                console.log('fechando arquivo');
                
                // closing file descriptor
                fs.closeSync(fd);
              }, 1000);

            res.status(200).send({message: `Tudo certo na criação do seu arquivo .xlsx: ${exportFileName}`})

        } catch(e) {
            res.status(500).send({message: 'Error Get: ' + e.message})
        }
    }

}

export default DocsController