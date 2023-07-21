const baseURL = "https://swapi.dev/api";

function buildUrl(url: string) {
  return `${baseURL}${url}`;
}

async function get(url: string) {
  const response = await fetch(buildUrl(url));

  return {
    data: await response.json(),
  };
}

function api() {
}
api.prototype.get = get;

const apiService = new api();

export default apiService;
