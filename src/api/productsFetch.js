import { apiProductOrigin } from "./api";

export async function fetchData() {
  try {
    const response = await fetch(apiProductOrigin, {
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
