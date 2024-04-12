import { formatDateString, getLastDay } from "../../../utils";
import { IAbsenceDataType } from "../../../utils/types";
import ConflictIndicatorRibbon from "../../common/conflict-indicator-ribbon/ConflictIndicatorRibbon";

interface IAbsenceListItemCardProps extends IAbsenceDataType {
  handleCardClick?: () => void;
}

const AbsenceListItemCard = ({
  startDate,
  days,
  absenceType,
  employee,
  approved,
  conflicts,
  handleCardClick,
}: IAbsenceListItemCardProps) => {
  const { firstName, lastName } = employee;
  const approvalStatusColor = approved ? "#075E54" : "#dc2626";
  const endDate = getLastDay(days, startDate);

  return (
    <div
      className="w-full border border-solid border-gray-300 my-4 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
      onClick={handleCardClick}
    >
      <div className="mb-4 flex">
        <span
          style={{
            backgroundColor: `${approvalStatusColor}`,
            borderColor: `${approvalStatusColor}`,
          }}
          className={` w-min py-1 px-3 mr-4 rounded-lg border border-solid text-white `}
        >
          {!approved ? "Pending" : "Approved"}
        </span>
        {conflicts && <ConflictIndicatorRibbon />}
      </div>
      <div className="flex justify-between">
        <div>
          <p className="capitalize font-semibold">
            {firstName} {lastName}
          </p>
          <p className="mt-2">{absenceType}</p>
        </div>
        <p className=" text-sm font-medium opacity-70">
          {formatDateString(startDate)} - {formatDateString(endDate)}
        </p>
      </div>
    </div>
  );
};

export default AbsenceListItemCard;
