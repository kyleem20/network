import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class APosterService {

    async getAll(){
        const res = await api.get('api/ads/')
        logger.log('get all ads', res.data)
        AppState.aPoster = res.data
    }


}

export const aPosterService = new APosterService()