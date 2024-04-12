export interface IAbsenceDataType {
  id: number;
  startDate: Date | string;
  days: number;
  absenceType: string;
  employee: {
    firstName: string;
    lastName: string;
    id: string;
  };
  approved: boolean;
  conflicts: boolean;
}
