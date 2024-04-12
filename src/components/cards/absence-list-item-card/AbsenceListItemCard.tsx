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
      data-testid="list-item-card"
      className="w-full border border-solid border-gray-300 my-4 rounded-lg p-4 cursor-pointer hover:bg-gray-50"
    >
      <div className="mb-4 flex">
        <span
          role="approval_status"
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
          <p
            onClick={handleCardClick}
            data-testid="full_name"
            className="capitalize font-semibold hover:underline"
          >
            {firstName} {lastName}
          </p>
          <p data-testid="absence_type" className="mt-2">
            {absenceType}
          </p>
        </div>
        <p
          data-testid="date_render"
          className=" text-sm font-medium opacity-70"
        >
          {formatDateString(startDate)} - {formatDateString(endDate)}
        </p>
      </div>
    </div>
  );
};

export default AbsenceListItemCard;
