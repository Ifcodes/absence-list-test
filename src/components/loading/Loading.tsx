import AbsenceListItemLoadingCard from "../cards/absence-list-item-card/AbsenceListItemLoadingCard";

interface ILoadingPageProps {
  isLoading: boolean;
  error?: string;
  count: number;
}
const Loading = ({ isLoading, error, count }: ILoadingPageProps) => {
  if (isLoading) {
    return (
      <div data-testid="skeletons">
        {Array(count)
          .fill("")
          .map((_val, index) => (
            <AbsenceListItemLoadingCard key={`loading-key-${index}`} />
          ))}
      </div>
    );
  }

  if (error) {
    return (
      <div
        data-testid="error"
        className="w-full h-[40vh] text-center flex items-center justify-center"
      >
        {error}
      </div>
    );
  }

  return null;
};

export default Loading;
