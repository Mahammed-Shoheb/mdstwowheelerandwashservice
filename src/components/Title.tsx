const Title = ({
  titleFirstPart,
  titleSecondPart,
}: {
  titleFirstPart: string;
  titleSecondPart: string;
}) => {
  return (
    <h2 className="text-3xl font-bold capitalize text-center mb-12">
      <span>{titleFirstPart} </span>
      <span className="text-blue-600 border-b-2 border-blue-500">
        {titleSecondPart}
      </span>
    </h2>
  );
};

export default Title;
