/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IAbsenceDataType } from "../utils/types";

export interface IAbsenceWithConflictType extends IAbsenceDataType {
  conflicts: boolean;
}
const useFetchAbsences = () => {
  const [absenceList, setAbsenceList] = useState<IAbsenceWithConflictType[]>(
    []
  );
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getAbsences = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://front-end-kata.brighthr.workers.dev/api/absences"
      );
      const absences: any = await response.json();

      if (absences && absences.length > 0) {
        const newAbsenceList: any[] = [];

        absences.forEach((absence: IAbsenceDataType) => {
          const res = fetch(
            `https://front-end-kata.brighthr.workers.dev/api/conflict/${absence.id}`
          )
            .then((res) => res.json())
            .then((data) => ({
              ...absence,
              ...data,
            }))
            .catch((err) => {
              console.log(err);
            });

          newAbsenceList.push(res);
        });

        const data = await Promise.all(newAbsenceList);
        setAbsenceList(data);
        setIsLoading(false);
      } else {
        setError("No record found");
        setIsLoading(false);
      }
    } catch (error: any) {
      console.log({ error }, error?.message);
      setError("Something went wrong, Please reload the page.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAbsences();
  }, []);

  return {
    absenceList,
    error,
    isLoading,
  };
};

export default useFetchAbsences;
