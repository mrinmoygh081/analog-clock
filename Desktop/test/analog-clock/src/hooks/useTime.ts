const useTime = (time: Date, selectedZone: string) => {
  if (selectedZone === "local") {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds(),
    };
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: selectedZone,
  });

  const parts = formatter.formatToParts(time);

  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  const minute = Number(parts.find((p) => p.type === "minute")?.value);
  const second = Number(parts.find((p) => p.type === "second")?.value);

  return { hour, minute, second };
};

export default useTime;
