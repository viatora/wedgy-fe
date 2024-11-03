import { useEffect, useState } from "react";
import parseCSV from "../utils/parseCSV";
import dateInPast from "../utils/checkDate";
import TourDatesContainer from "../components/TourDates/TourDatesContainer";
import { TourDateType } from "../utils/types/types";

export default function Tour() {
  const [data, setData] = useState<TourDateType[]>([]); // Use the type here
  const [futureDates, setFutureDates] = useState<TourDateType[]>([]); // Use the type here
  const [pastDates, setPastDates] = useState<TourDateType[]>([]); // Use the type here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY-sZZXmGZQdBX1httEyxhEFNzznVqnGK_bNDPWbi4HZu0eickSRQDLhy0WdX6pgVYmUIAdAOczZBR/pub?output=csv"
        );
        const csvText = await response.text();

        const parsedData = parseCSV(csvText);

        setData(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const past: TourDateType[] = [];
    const future: TourDateType[] = [];

    data.forEach((date) => {
      if (dateInPast(date.event_date)) {
        past.push(date);
      } else {
        future.push(date);
      }
    });

    past.sort((a, b) => {
      const [dayA, monthA, yearA] = a.event_date.split("/").map(Number);
      const [dayB, monthB, yearB] = b.event_date.split("/").map(Number);
      return (
        new Date(yearA, monthA - 1, dayA).getTime() -
        new Date(yearB, monthB - 1, dayB).getTime()
      );
    });

    future.sort((a, b) => {
      const [dayA, monthA, yearA] = a.event_date.split("/").map(Number);
      const [dayB, monthB, yearB] = b.event_date.split("/").map(Number);
      return (
        new Date(yearA, monthA - 1, dayA).getTime() -
        new Date(yearB, monthB - 1, dayB).getTime()
      );
    });

    setPastDates(past);
    setFutureDates(future);

    console.log("Past Dates:", past);
    console.log("Future Dates:", future);
  }, [data]);

  return (
    <main className="min-h-[calc(100vh-9.25rem)]">
      <h2 className=" font-lexend text-white text-5xl md:text-7xl text-center tracking-widest">
        TOUR
      </h2>
      <div className=" m-auto w-11/12 mt-10">
        <TourDatesContainer tourDates={futureDates} title={"upcoming events"} />
        <TourDatesContainer tourDates={pastDates} title={"past events"} />
      </div>
    </main>
  );
}
