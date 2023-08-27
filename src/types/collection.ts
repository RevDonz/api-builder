export type CollectionProps = {
  name: string;
  collectionId: string;
  items: ItemProps[];
};

export type ItemProps = {
  id?: string;
  name: string;
  request?: RequestProps;
  item?: ItemProps[];
};

export type RequestProps = {
  method?: MethodType;
  url?: UrlProps;
};

export type UrlProps = {
  raw: string;
};

export type DataCollection = {
  id: string;
  name: string;
  user_id: string;
};

export type DataRequest = {
  id: string;
  collection_id: string;
  name: string;
  url: string;
  method: MethodType;
  bearer_token: string;
  payload: string;
};

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

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
              id: 'getAllCategories',
              name: 'Get All Categories',
              request: {
                method: 'GET',
                url: {
                  raw: 'https://dummyjson.com/products/categories',
                },
              },
            },
            {
              id: 'getProductByCategory',
              name: 'Get Product by Category',
              request: {
                method: 'GET',
                url: {
                  raw: 'https://dummyjson.com/products/category/smartphones',
                },
              },
            },
          ],
        },
        {
          id: 'getAllProduct',
          name: 'Get all Product',
          request: {
            method: 'GET',
            url: {
              raw: 'https://dummyjson.com/products',
            },
          },
        },
        {
          id: 'addProduct',
          name: 'Add a Product',
          request: {
            method: 'POST',
            url: {
              raw: 'https://dummyjson.com/products/add',
            },
          },
        },
        {
          id: 'deleteProduct',
          name: 'Delete a Product',
          request: {
            method: 'DELETE',
            url: {
              raw: 'https://dummyjson.com/products/1',
            },
          },
        },
        {
          id: 'updateProduct',
          name: 'Update a Product',
          request: {
            method: 'PUT',
            url: {
              raw: 'https://dummyjson.com/products/1',
            },
          },
        },
      ],
    },
    {
      name: 'Posts',
      item: [
        {
          id: 'getAllPost',
          name: 'Get all Post',
          request: {
            method: 'GET',
            url: {
              raw: 'https://dummyjson.com/posts',
            },
          },
        },
        {
          id: 'getSinglePost',
          name: 'Get a Single Post',
          request: {
            method: 'GET',
            url: {
              raw: 'https://dummyjson.com/posts/1',
            },
          },
        },
        {
          id: 'addPost',
          name: 'Add a Post',
          request: {
            method: 'POST',
            url: {
              raw: 'https://dummyjson.com/posts/add',
            },
          },
        },
        {
          id: 'deletePost',
          name: 'Delete a Post',
          request: {
            method: 'DELETE',
            url: {
              raw: 'https://dummyjson.com/posts/1',
            },
          },
        },
        {
          id: 'updatePost',
          name: 'Update a Post',
          request: {
            method: 'PUT',
            url: {
              raw: 'https://dummyjson.com/posts/1',
            },
          },
        },
      ],
    },
  ],
};
