import axios from "axios";
import { REACT_APP_BASE_URL } from "@env";

const apiAuthInstance = axios.create({
	baseURL: `${REACT_APP_BASE_URL}/api/global/auth`,
});

export default apiAuthInstance;
