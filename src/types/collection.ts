export type CollectionProps = {
  name: string;
  collectionId: string;
  item: ItemProps[];
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
  item: [
    {
      name: 'Login',
      request: {
        method: 'POST',
      },
    },
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
              name: 'Get Product by category',
              request: {
                method: 'GET',
              },
            },
          ],
        },
        {
          name: 'Get All Products',
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
      ],
    },
    {
      name: 'Posts',
      item: [
        {
          name: 'Get All Posts',
          request: {
            method: 'GET',
          },
        },
        {
          name: 'Add Post',
          request: {
            method: 'POST',
          },
        },
        {
          name: 'Postss',
          item: [
            {
              name: 'Get All Posts',
              request: {
                method: 'GET',
              },
            },
            {
              name: 'Add Post',
              request: {
                method: 'POST',
              },
            },
            {
              name: 'Postsss',
              item: [
                {
                  name: 'Get All Posts',
                  request: {
                    method: 'GET',
                  },
                },
                {
                  name: 'Add Post',
                  request: {
                    method: 'POST',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
