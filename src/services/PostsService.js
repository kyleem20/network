import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { profileService } from "./ProfileService"

class PostsService {

    async getAll(query = ''){
        const res = await api.get('api/posts/' + query)
        // logger.log('get all posts', res.data.posts)
        AppState.posts = res.data.posts
    }

    async create(postData){
        const res = await api.post('api/posts/', postData)
        // logger.log('post Data', res.data)der f4cx 
        AppState.posts.unshift(res.data)
    }

    async deletePost(id){
        const res = await api.delete('api/posts/' + id)
        logger.log(res.data)
        AppState.posts.filter(p => p.id !== id)
        AppState.posts = AppState.posts
    }

    async page(query = ""){
        const res = await api.get('api/posts/' + query)
        AppState.posts = AppState.posts
    }

    async like(id){
        const res = await api.post('api/posts/' + id + '/like')
        logger.log(res.data)
        AppState.posts.unshift(res.data)
    }

    async searchPosts(query){
        const res = await api.get('api/posts?query=', query)
        logger.log(res.data)
       }

}

export const postsService = new PostsService()