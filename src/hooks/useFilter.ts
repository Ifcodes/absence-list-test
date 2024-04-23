/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useMemo, useState } from "react";
import useFetchAbsences, { IAbsenceWithConflictType } from "./useFetchAbsences";

const useFilter = () => {
  const { absenceList, isLoading, error } = useFetchAbsences();
  const [searchField, setSearchField] = useState("");
  const [sortedList, setSortedList] = useState<IAbsenceWithConflictType[]>([]);
  const [sortValue, setSortValue] = useState("");

  const filteredList = useMemo(() => {
    return sortedList.length > 0 ? sortedList : absenceList;
  }, [sortedList, absenceList]);

  const handleFilter = () => {
    const searchFilter = searchField
      ? absenceList.filter(
          (absence) =>
            absence.employee.firstName
              .toLowerCase()
              .includes(searchField.toLowerCase()) ||
            absence.employee.lastName
              .toLowerCase()
              .includes(searchField.toLowerCase())
        )
      : absenceList;

    setSortedList(searchFilter);
  };

  const handleSort = () => {
    const sortedByName = [...absenceList].sort((a, b) => {
      const name_a = a.employee.firstName.toUpperCase();
      const name_b = b.employee.firstName.toUpperCase();

      if (name_a < name_b) {
        return -1;
      }

      if (name_a > name_b) {
        return 1;
      }

      return 0;
    });

    const sortedByDate = [...absenceList].sort((a, b) => {
      const date_a = new Date(a.startDate);
      const date_b = new Date(b.startDate);

      return date_a > date_b ? -1 : date_a < date_b ? 1 : 0;
    });

    const sortedByAbsenceType = [...absenceList].sort((a, b) =>
      a.absenceType < b.absenceType ? -1 : a.absenceType > b.absenceType ? 1 : 0
    );

    const result =
      sortValue === "name"
        ? sortedByName
        : sortValue === "absenceType"
        ? sortedByAbsenceType
        : sortValue === "date"
        ? sortedByDate
        : absenceList;

    setSortedList(result);
  };

  useEffect(handleFilter, [searchField, absenceList]);

  useEffect(handleSort, [sortValue, absenceList]);

  return {
    filteredList,
    searchField,
    sortValue,
    isLoading,
    error,
    handleSort,
    setSearchField,
    setSortValue,
  };
};

export default useFilter;
