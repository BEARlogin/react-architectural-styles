import { Api } from "@shared/api";

export const login = (username: string, password: string) => {
  return Api.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log("response", response);
    })
    .catch((error) => {
      console.log("error", error);
    });
};
