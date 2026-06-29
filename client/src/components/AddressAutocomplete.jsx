import { useState, useEffect } from "react";
import { searchLocation } from "../services/locationService";
import { debounce } from "lodash";

function AddressAutocomplete({
  label,
  placeholder,
  value,
  onSelect,
}) {

  const [query, setQuery] = useState(value || "");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = debounce(async (text) => {

    if (text.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const results = await searchLocation(text);
      setSuggestions(results);
    } catch (err) {
      console.log(err);
    }

  }, 300);

  useEffect(() => {
    fetchSuggestions(query);

    return () => fetchSuggestions.cancel();
  }, [query]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {suggestions.length > 0 && (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginTop: "5px",
            zIndex: 999,
            maxHeight: "220px",
            overflowY: "auto",
            boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
          }}
        >
          {suggestions.map((item) => (
            <div
              key={item.place_id}
              style={{
                padding: "12px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => {

                setQuery(item.display_name);

                setSuggestions([]);

                onSelect({
                  address: item.display_name,
                  lat: item.lat,
                  lon: item.lon,
                });

              }}
            >
              {item.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddressAutocomplete;