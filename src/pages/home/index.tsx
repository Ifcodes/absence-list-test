import { SearchInput } from "../../components/inputs/search-input/SearchInput";
import Select from "../../components/inputs/select/Select";
import Loading from "../../components/loading/Loading";
import useFetchAbsences from "../../hooks/useFetchAbsences";
import useFilter from "../../hooks/useFilter";
import AbsenceListItemCard from "../../components/cards/absence-list-item-card/AbsenceListItemCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { isLoading, error } = useFetchAbsences();
  const { filteredList, setSearchField, searchField, setSortValue, sortValue } =
    useFilter();
  const navigate = useNavigate();
  const sortItems = [
    { key: "Sort by", value: "sortBy" },
    { key: "Name", value: "name" },
    {
      key: "Date",
      value: "date",
    },
    {
      key: "Absence Type",
      value: "absenceType",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-2xl">Absences</h1>
      <p>List of all absence record.</p>
      <div className="mt-10 flex gap-3">
        <SearchInput
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
        <Select
          value={sortValue}
          options={sortItems}
          onChange={(e) => setSortValue(e.target.value)}
        />
      </div>
      <div>
        <Loading count={7} isLoading={isLoading} error={error} />
        {!isLoading &&
          filteredList.length > 0 &&
          filteredList.map((absence) => {
            return (
              <AbsenceListItemCard
                key={`${absence.id}`}
                {...absence}
                handleCardClick={() =>
                  navigate(`absence-detail/${absence.employee.id}`)
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default Home;
