const ConflictIndicatorRibbon = () => {
  return (
    <div
      data-testid="conflict_indicator"
      className="text-red-500 font-medium flex items-center border border-solid border-red-500 rounded-lg w-max px-2 animate-pulse"
    >
      <div className="w-2 h-2 rounded-full bg-red-600 mr-2"></div>
      <div>Conflicts </div>
    </div>
  );
};

export default ConflictIndicatorRibbon;
