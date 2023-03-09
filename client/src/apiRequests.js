const baseUrl = "http://localhost:8000";
// const baseUrl = "https://gocode-shop-project.onrender.com";

export const getAllProducts = async () => {
  const url = baseUrl + "/api/products";
  const response = await fetch(url);
  console.log("response: ", response);
  return response.json();
};

export const getSingleProduct = async (productId) => {
  const url = baseUrl + `/api/products/${productId}`;
  const response = await fetch(url, { method: "GET", params: productId });
  console.log("response: ", response);
  // console.log("response.json: ", response.json());
  return response.json();
};

export const postProduct = async (product) => {
  const url = baseUrl + "/api/addProduct";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  console.log("response: ", response);
  return response.json();
};

export const putProduct = async (productId, newProduct) => {
  const url = baseUrl + `/api/updateProduct/${productId}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    params: productId,
    body: JSON.stringify(newProduct),
  });
  console.log("response: ", response);
  return response.json();
};

export const deleteProduct = async (productId) => {
  const url = baseUrl + `/api/deleteProduct/${productId}`;
  const response = await fetch(url, {
    method: "DELETE",
    params: productId,
  });
  console.log("response: ", response);
  return response.json(); // parses JSON response into native JavaScript objects
};
