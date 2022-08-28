import {post} from "../helpers/http";
import {authUrl} from "../helpers/apiRoutes";

export const register = async (data) => await post(authUrl('register'), data)
export const login = async (data) => await post(authUrl('login'), data)
