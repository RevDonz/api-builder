export type CollectionProps = {
  name: string;
  collectionId: string;
  items: ItemProps[];
};

export type ItemProps = {
  name: string;
  request?: RequestProps;
  item?: ItemProps[];
};

export type RequestProps = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url?: UrlProps;
};

export type UrlProps = {
  raw: string;
};

export const DataDummy: CollectionProps = {
  name: 'TokoSaya',
  collectionId: '12345',
  items: [
    {
      name: 'Products',
      item: [
        {
          name: 'Categories',
          item: [
            {
              name: 'Get All Categories',
              request: {
                method: 'GET',
              },
            },
            {
              name: 'Get Product by Category',
              request: {
                method: 'GET',
              },
            },
          ],
        },
        {
          name: 'Get all Product',
          request: {
            method: 'GET',
          },
        },
        {
          name: 'Add a Product',
          request: {
            method: 'POST',
          },
        },
        {
          name: 'Delete a Product',
          request: {
            method: 'DELETE',
          },
        },
        {
          name: 'Update a Product',
          request: {
            method: 'PUT',
          },
        },
      ],
    },
    {
      name: 'Posts',
      item: [
        {
          name: 'Get all Post',
          request: {
            method: 'GET',
          },
        },
        {
          name: 'Get a Single Post',
          request: {
            method: 'GET',
          },
        },
        {
          name: 'Add a Post',
          request: {
            method: 'POST',
          },
        },
        {
          name: 'Delete a Post',
          request: {
            method: 'DELETE',
          },
        },
        {
          name: 'Update a Post',
          request: {
            method: 'PUT',
          },
        },
      ],
    },
  ],
};
