export async function fetchData(api) {
  try {
    const response = await fetch(api, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
