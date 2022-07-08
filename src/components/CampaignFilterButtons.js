import { useLocation } from "react-router-dom";

export default function CampaignFilterButtons({ values, setSearchParams }) {
  const location = useLocation();
  return values.map((i) => (
    <button
      style={{
        paddingRight: "2rem",
        textDecoration: "none",
        color: location.search.includes(i.replace(" ", "")) ? "red" : "",
      }}
      // disabled={location.search.includes(i.replace(" ", ""))}
      onClick={(event) => {
        console.log(event);
        const filter = event.target.innerText.replace(" ", "");
        if (filter) {
          setSearchParams({ filter });
        } else {
          setSearchParams({});
        }
      }}
      key={i}
    >
      {i}
    </button>
  ));
}
