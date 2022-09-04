import {getAll, post, remove, update} from "../helpers/http";
import {postUrl} from "../helpers/apiRoutes";

export const getPosts = async () => await getAll(postUrl())
export const getMyPosts = async () => await getAll(postUrl('my'))
export const createPost = async (data) => await post(postUrl(), data)
export const updatePost = async (uri, data) => await update(postUrl(uri), data)
export const removePostApi = async (id) => await remove(postUrl(id))
