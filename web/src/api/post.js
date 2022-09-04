import {getAll, post} from "../helpers/http";
import {postUrl} from "../helpers/apiRoutes";

export const getPosts = async () => await getAll(postUrl())
export const getMyPosts = async () => await getAll(postUrl('my'))
export const createPost = async (data) => await post(postUrl(), data)
