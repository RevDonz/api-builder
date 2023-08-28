import { DataCollection } from '@/types/collection';
import axios from 'axios';

const token = localStorage.getItem('authToken');
const apiConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getAllCollection = async (userId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/collection/v1/${userId}`,
    apiConfig
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
    apiConfig
  );

  return res.data;
};

export const getAllCollectionsData = async (userId: string) => {
  try {
    const Collections: DataCollection[] = await getAllCollection(userId);

    const allData = [];

    for (const collection of Collections) {
      const data = await getDataRequest(collection.id);

      const transformedData = {
        id: collection.id,
        user_id: collection.user_id,
        name: collection.name,
        items: data.data || [],
      };

      allData.push(transformedData);
    }
    return allData;
  } catch (error) {
    console.error('Error in getAllCollectionsData:', error);
    throw error;
  }
};
