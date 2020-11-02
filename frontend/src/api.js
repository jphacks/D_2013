export const toJson = async (res) => {
  const js = await res.json();
  if (res.ok) {
    return js;
  } else {
    throw new Error(js.message);
  }
};
