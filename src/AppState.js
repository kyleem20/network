import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  aPoster: [],
  profile: {},
  profilePosts: {},
  page: 0,
  currentPage: 0,
  
})
