export const authUrl = (uri) => `auth/${uri}`
export const userUrl = (uri) => `user/${uri}`
export const postUrl = (uri) => uri ? `posts/${uri}` : 'posts'
