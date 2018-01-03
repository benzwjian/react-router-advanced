function login() {
	return fetch('/api/login', {

	}).then(checkStatus)
		.then(parseJSON)
		.then((json) => setToken(json.token))
}

function logout() {
	removeToken();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error); // eslint-disable-line no-console
  throw error;
}

function parseJSON(response) {
  return response.json();
}

function setToken(token) {
	localStorage.setItem('TOKEN', token);
}

function removeToken() {
	localStorage.removeItem('TOKEN');
}

const client = {login, logout}

export default client
