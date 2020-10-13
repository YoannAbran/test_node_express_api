export function getalltuto(){

return fetch("http://172.21.201.23:8080/api/tutorials")
.then((response) => response.json())
}
