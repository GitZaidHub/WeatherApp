import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeatherForcast = ({ data }) => {
  const DayInWeek = new Date().getDay();
  const Forecastdays = WEEK_DAYS.slice(DayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, DayInWeek)
  );
  return (
    <>
      <label className="font-semibold text-lg mx-8">5-Days Forecast</label>
      <Accordion>
        {data.list.slice(0, 5).map((item, idx) => {
          const iconCode = item.weather[0].icon;
          const iconPath = `/icons/${iconCode}.png`;
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex items-center justify-between h-14 bg-black bg-opacity-25 px-2 m-2 rounded-xl cursor-pointer hover:bg-transparent from-neutral-600 w-[90%] mx-auto ">
                    <img className="w-12" src={iconPath} alt="" />
                    <label className="day ">{Forecastdays[idx]}</label>
                    <label className="clousdetail w-18">
                      {item.weather[0].description}
                    </label>
                    <label className="min_max">
                      {Math.round(item.main.temp_max)}°C/
                      {Math.round(item.main.temp_min)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="detail grid grid-cols-3 w-[90%] mx-auto  rounded-lg gap-4 bg-black bg-opacity-10">
                    <div className="detail-item flex justify-center">
                        <label className="">Feels Like</label>
                        <label className="mx-4">{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className="detail-item flex justify-center">
                        <label className="">Feels Like</label>
                        <label className="mx-4">{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className="detail-item flex justify-center">
                        <label className="">Humidity</label>
                        <label className="mx-4">{Math.round(item.main.humidity)}%</label>
                    </div>
                    <div className="detail-item flex justify-center">
                        <label className="">Pressure</label>
                        <label className="mx-4">{Math.round(item.main.pressure)}hPa</label>
                    </div>
                    <div className="detail-item flex justify-center">
                        <label className="">Wind</label>
                        <label className="mx-4">{Math.round(item.wind.speed)}m/s</label>
                    </div>
                   

                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default WeatherForcast;
