import axios from 'axios';

export const getAllCollection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collection/v1/5a4f2e4f-4692-4fc9-8767-8d08f6e72d17`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMxNDgyODcsInVzZXJJRCI6IjVhNGYyZTRmLTQ2OTItNGZjOS04NzY3LThkMDhmNmU3MmQxNyJ9.lpR8RsTavHQadXrg8TpK4ub2A137gGLxLpXHWFEziYY',
      },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const response = await res.json();

  return response.data;
};

export const getDataRequest = async (collectionID: string) => {
  const res = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/request/collection/v1/${collectionID}`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTMxNDgyODcsInVzZXJJRCI6IjVhNGYyZTRmLTQ2OTItNGZjOS04NzY3LThkMDhmNmU3MmQxNyJ9.lpR8RsTavHQadXrg8TpK4ub2A137gGLxLpXHWFEziYY',
      },
    }
  );

  return res.data;
};
