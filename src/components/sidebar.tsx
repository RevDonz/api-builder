'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Sidebar() {
  // const Collection: CollectionProps = {
  //   name: 'TokoSaya',
  //   collectionId: '12345',
  //   item: [
  //     {
  //       name: 'Get All Todo',
  //       request: {
  //         method: 'GET',
  //       },
  //     },
  //     {
  //       name: 'Posts',
  //       item: [
  //         {
  //           name: 'Get All Posts',
  //           request: {
  //             method: 'GET',
  //           },
  //         },
  //         {
  //           name: 'Add Post',
  //           request: {
  //             method: 'POST',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // };

  const Collection = [
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
  ];

  return (
    <div className='w-56 bg-gray-800 h-full'>
      <Accordion type='multiple' className='w-full'>
        {Collection.map((data, index) => {
          return (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger>{data.name}</AccordionTrigger>
              <AccordionContent>
                {data.item.map((dataa, index) => {
                  return (
                    <AccordionItem value={`item-${dataa.name}-${index}`}>
                      <AccordionTrigger className='pl-10'>
                        {dataa.name}
                      </AccordionTrigger>
                      <AccordionContent className='pl-16'>
                        {dataa.request.method}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
