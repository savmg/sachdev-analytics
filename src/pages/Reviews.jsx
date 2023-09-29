import { Dropdown } from "../components/Dropdown";
import SegmentedButton from "../components/SegmentedButton";
import ReviewCard from "../components/reviews/ReviewCard";
import { rawFromServer } from "../config/app-data";

function Reviews() {
  return (
    <>
      <div
        className="topSection"
        style={{
          display: "flex",
          gap: "var(--mantine-spacing-md)",
        }}
      >
        <Dropdown name={"Rating"} dropdownOptions={[1, 2, 3, 4, 5]} />
        <SegmentedButton
          data={[
            { label: "7D", value: "7-day-time" },
            { label: "1M", value: "30-day-time" },
            { label: "All time", value: "all-time" },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--mantine-spacing-md)",
        }}
      >
        {rawFromServer.map((data) => (
          <ReviewCard data={data} key={data} />
        ))}
      </div>
    </>
  );
}

export default Reviews;
