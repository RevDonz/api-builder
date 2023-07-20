export type CollectionProps = {
  name: string;
  collectionId: string;
  item: (RequestProps | FolderProps)[];
};

type FolderProps = {
  name: string;
  item: (RequestProps | FolderProps)[];
};

type RequestProps = {
  name: string;
  request: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  };
};

const Data: CollectionProps = {
  name: 'TokoSaya',
  collectionId: '12345',
  item: [
    {
      name: 'Get All Todo',
      request: {
        method: 'GET',
      },
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
      ],
    },
  ],
};
