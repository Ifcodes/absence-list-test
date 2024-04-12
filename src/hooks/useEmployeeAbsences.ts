import { useParams } from "react-router-dom";
import useFetchAbsences from "./useFetchAbsences";

export const useEmployeeAbsences = () => {
  const params = useParams();
  const { absenceList, isLoading, error } = useFetchAbsences();

  const employeeAbsences = absenceList.filter(
    (absence) => absence.employee.id === params.id
  );

  const employeeData = absenceList.find((emp) => emp.employee.id === params.id);

  return {
    employeeAbsences,
    isLoading,
    error,
    employeeData,
  };
};
