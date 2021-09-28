import requestOptions from "./requestOptions";
import handleResponse from "./handleResponse";

const apiCallV1 = async (url, bodyOptions = {}, apiCallV1Options = {}) => {
    const apiRequestOptions = {
        method: "POST",
        credentials: "include",
        cache: "default",
        mode: "same-origin",
        redirect: "follow",
        referrer: "no-referrer",
        ...apiCallV1Options,
    };

    const apiResult = await fetch(url, requestOptions(bodyOptions, apiRequestOptions))
        .then(handleResponse)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });

    return apiResult;
};
export default apiCallV1;
