const AbsenceListItemLoadingCard = () => {
  return (
    <div className="animate-pulse w-full border border-solid border-gray-300 my-4 rounded-lg p-4">
      <div className="mb-4 flex space-x-4">
        <div className="w-20 h-6 rounded-lg bg-gray-200"></div>
        <div className="w-20 h-5 rounded-lg bg-gray-200"></div>
      </div>
      <div className="flex w-full justify-between">
        <div className="space-y-6 w-[50%]">
          <div className="h-3 w-full bg-gray-200 rounded-lg"></div>
          <div className="h-3 w-full bg-gray-200 rounded-lg"></div>
        </div>
        <div className="h-3 w-[40%] bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default AbsenceListItemLoadingCard;
