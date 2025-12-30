const useTime = (time: any, selectedZone: string) => {
  if (selectedZone === "local") {
    return { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
  }

  const timezoneWiseTime = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: selectedZone,
  }).format(time);
  console.log("timezoneWiseTime", timezoneWiseTime);

  return { hour: new Date(timezoneWiseTime).getHours(), minute: new Date(timezoneWiseTime).getMinutes(), second: new Date(timezoneWiseTime).getSeconds() };
};

export default useTime;
