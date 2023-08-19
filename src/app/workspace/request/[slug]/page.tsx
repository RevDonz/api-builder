const PageRequest = ({ params }: { params: { slug: string } }) => {
  return (
    <div className=''>
      <p>{params.slug}</p>
    </div>
  );
};

export default PageRequest;
