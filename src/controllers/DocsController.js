const reader = require('xlsx')
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
            let diaDeHoje = moment(new Date()).format("DD/MM/YYYY")
            let dados = req.body.conteudo
    
            const ws = reader.utils.json_to_sheet(dados);
            const wb = reader.utils.book_new()
        
            reader.utils.book_append_sheet(wb, ws, "Dados")
    
            let originalFileName = req.body.titulo
            let exportFileName = originalFileName + '_' + diaDeHoje
            let path =  'D:/Sistemas/playground/NodeJsonToXLSX/assets/sheets' + exportFileName;
    
            // Writing to our file 
            reader.writeFile(wb, "D:/Sistemas/playground/NodeJsonToXLSX/assets/sheets/exportFileName.xlsx")

            res.status(200).send({message: 'Tudo certo na criação do seu arquivo xlsx'})

        } catch(e) {
            res.status(500).send({message: 'Error Get: ' + e.message})
        }
    }

}

export default DocsController