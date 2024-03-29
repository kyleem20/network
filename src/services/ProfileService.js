import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService{

async getProfile(id){
  const res = await api.get("api/profiles/"+id)
  logger.log(res.data)
  AppState.profile = res.data
}

async getProfilePostId(id){
  const res = await api.get("api/profiles/"+id+"/posts")
  logger.log(res.data)
  AppState.profilePosts = res.data.posts
}
}


export const profileService = new ProfileService()