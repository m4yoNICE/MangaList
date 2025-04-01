import Http from "./Http";

const Api = {
  getManga: (controller) => {
    return Http.get("api/manga", { signal: controller?.signal });
  },
};

export default Api;
