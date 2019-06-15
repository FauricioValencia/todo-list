const url = "http://localhost:3001/";
export const postApi = (body) => {
  fetch(`${url}todo`, {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body
  })
    .then(res => res.json())
    .then(response => console.log("respuesta al crear la tarea: ", response))
    .catch(e => console.error("error al crear la tarea: ", e));
};
export const getTodo = async () => {
  try {
    const res = await fetch(`${url}todo`);
    const resJson = await res.json();
    return resJson;
  } catch (e) {
    console.error("error: ", e);
  }
};
