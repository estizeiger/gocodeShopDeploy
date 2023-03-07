export const getAllProducts = async () => {
  const url = "http://localhost:8000/api/products";
  const response = await fetch(url);
  console.log("response: ", response);
  return response.json();
};

export const postProduct = async (product) => {
  const url = "http://localhost:8000/api/addProduct";
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
  const url = `http://localhost:8000/api/updateProduct/${productId}`;
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
  const url = `http://localhost:8000/api/deleteProduct/${productId}`;
  const response = await fetch(url, {
    method: "DELETE",
    params: productId,
  });
  console.log("response: ", response);
  return response.json(); // parses JSON response into native JavaScript objects
};
