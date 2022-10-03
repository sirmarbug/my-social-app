import {getAll} from "../helpers/http";
import {userUrl} from "../helpers/apiRoutes";

export const getCurrentUser = async () => await getAll(userUrl('current'))
