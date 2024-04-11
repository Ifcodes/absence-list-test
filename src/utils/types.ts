export interface IAbsenceDataType {
  id: string;
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
