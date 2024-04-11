/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { IAbsenceDataType } from "../utils/types";

interface IAbsenceWithConflictType extends IAbsenceDataType {
  conflicts: boolean;
}
const useFetchAbsences = () => {
  const [absenceList, setAbsenceList] = useState<IAbsenceWithConflictType[]>(
    []
  );
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getabsences = async () => {
    try {
      const response = await fetch(
        "https://front-end-kata.brighthr.workers.dev/api/absences"
      );
      const absences: any = await response.json();

      console.log({ absences });

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
        console.log({ data });
        setAbsenceList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getabsences();
  }, []);

  return {
    absenceList,
  };
};

export default useFetchAbsences;
