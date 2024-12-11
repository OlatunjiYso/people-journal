import { ApiResponse } from "./definitions";

const API_URL = process.env.NEXT_PUBLIC_API_URL;


export async function makeGetRequest(endpoint: string): Promise<ApiResponse> {
  const headers = {
    "Content-Type": "application/json",
  };
  //discard cache after 30 minutes.
  const response = await fetch(`${API_URL}/${endpoint}`, {
    headers,
    next: { revalidate: 1800 },
  });
  return handleApiResponse(response);
}

export async function makePostRequest(
  endpoint: string,
  payload: any
): Promise<ApiResponse> {
  const headers = {
    "Content-Type": "application/json"
  };
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  return handleApiResponse(response);
}

export async function makeDeleteRequest(
  endpoint: string,
  payload?: any
): Promise<ApiResponse> {
  const headers = {
    "Content-Type": "application/json"
  };
console.log('WE GOT HERER!!!', `${API_URL}/${endpoint}`);
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: "DELETE",
    headers,
    body: payload ? JSON.stringify(payload) : null,
  });

  return handleApiResponse(response);
}

// Helper function to handle response parsing and error handling
async function handleApiResponse(response: Response): Promise<ApiResponse> {
  try {
    const contentType = response.headers.get("Content-Type");
    const data =
      contentType && contentType.includes("application/json")
        ? await response.json()
        : await response.text();

    return {
      data,
      error: null,
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    };
  } catch (error: any) {
    return {
      data: null,
      error: error.message || "An error occurred",
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    };
  }
}
