import { Router } from 'express'
import DocsController from '../controllers/DocsController'


const routes = Router();
const controller = new DocsController();

/**
 * Rota que recebe a chamada pra transforma json em xlsx
 * @route POST /sheets/
 * @group Sheets
 * @param { integer } page.query - Página a exibir. Ex. 1
 * @param { integer } perPage.query.required - Qtd. Registros por página. Max: 25
 * @returns { object } 200 - Return JSON results
 * @returns { Error }  500 - Tecnical Error!
 * @returns { Error }  401 - Invalid Login!
*/

  routes.post('/sheets', controller.transformToXLS)

 export default routes;



