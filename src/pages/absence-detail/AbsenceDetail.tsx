import { useEmployeeAbsences } from "../../hooks/useEmployeeAbsences";
import Loading from "../../components/loading/Loading";
import AbsenceListItemCard from "../../components/cards/absence-list-item-card/AbsenceListItemCard";

const AbsenceDetail = () => {
  const { employeeData, employeeAbsences, isLoading, error } =
    useEmployeeAbsences();

  return (
    <div className=" w-[500px]">
      <h1 className="font-bold text-2xl">Employee Absence</h1>
      {isLoading ? (
        <div className="h-2 mt-2 w-64 bg-gray-200 rounded-lg"></div>
      ) : (
        <p>
          Absence record for{" "}
          <strong>
            {employeeData?.employee.firstName} {employeeData?.employee.lastName}
          </strong>
        </p>
      )}
      <Loading count={4} isLoading={isLoading} error={error} />
      {!isLoading &&
        employeeAbsences.length > 0 &&
        employeeAbsences.map((absence) => {
          return <AbsenceListItemCard key={`${absence.id}`} {...absence} />;
        })}
    </div>
  );
};

export default AbsenceDetail;
