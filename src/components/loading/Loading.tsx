import AbsenceListItemLoadingCard from "../cards/absence-list-item-card/AbsenceListItemLoadingCard";

interface ILoadingPageProps {
  isLoading: boolean;
  error?: string;
  count: number;
}
const Loading = ({ isLoading, error, count }: ILoadingPageProps) => {
  return (
    <>
      {isLoading ? (
        Array(count)
          .fill("")
          .map((_val, index) => (
            <AbsenceListItemLoadingCard key={`loading-key-${index}`} />
          ))
      ) : error ? (
        <div className="w-full h-[40vh] text-center flex items-center justify-center">
          {error}
        </div>
      ) : null}
    </>
  );
};

export default Loading;
