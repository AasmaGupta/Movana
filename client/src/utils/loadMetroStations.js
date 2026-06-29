import Papa from "papaparse";
import metroCSV from "../data/delhiMetro.csv?raw";

export async function loadMetroStations() {
  return new Promise((resolve) => {
    Papa.parse(metroCSV, {
      header: true,
      skipEmptyLines: true,

      complete: (results) => {
        const stations = results.data
          .filter(
            (station) =>
              station.Latitude &&
              station.Longitude
          )
          .map((station) => ({
            name: station["Station Names"],
            line: station["Metro Line"],
            lat: Number(station.Latitude),
            lng: Number(station.Longitude),
          }));

        const uniqueStations = Array.from(
          new Map(
            stations.map((station) => [
              station.name,
              station,
            ])
          ).values()
        );

        resolve(uniqueStations);
      },
    });
  });
}