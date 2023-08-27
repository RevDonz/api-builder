import { DataCollection } from '@/types/collection';
import axios from 'axios';

export const getAllCollection = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collection/v1/${userId}`,
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

export const getAllCollectionsData = async (userId: string) => {
  try {
    const Collections: DataCollection[] = await getAllCollection(userId);

    const getDataPromises = Collections.map(async (collection) => {
      const data = await getDataRequest(collection.id);

      const transformedData = {
        id: collection.id,
        user_id: collection.user_id,
        name: collection.name,
        items: data.data,
      };

      return transformedData;
    });

    const allData = await Promise.all(getDataPromises);

    return allData;
  } catch (error) {
    console.error('Error in getAllCollectionsData:', error);
    throw error;
  }
};
