// Function to get Toki Pona Date
function getTokiPonaDate(date) {
  const epoch = new Date(2001, 7, 8); // Epoch date (Month is zero-indexed)
  let daysSinceEpoch = Math.floor((date - epoch) / (1000 * 60 * 60 * 24)) - 3;

  const cycleYears = [
    "tenpo sike kala",
    "tenpo sike pipi",
    "tenpo sike akesi",
    "tenpo sike soweli",
    "tenpo sike waso",
    "tenpo sike kijetesantakalu",
  ];
  const cycleParts = ["sin", "kama", "awen", "tawa", "weka"];

  let yearIndex = Math.floor(daysSinceEpoch / (365.25 * 6));
  let yearInCycle = (daysSinceEpoch % (365.25 * 6)) / 365.25;

  let yearCycleName = cycleYears[Math.floor(yearInCycle)];
  let cyclePartName = cycleParts[yearIndex % 5];

  let daysInYear = daysSinceEpoch % Math.floor(365.25);
  const months = [
    "kipisi lawa",
    "kipisi sijelo",
    "kipisi luka",
    "kipisi poka",
    "kipisi noka",
  ];
  let monthIndex = Math.floor(daysInYear / 73);
  let monthName = months[monthIndex];

  let daysInMonth = daysInYear % 73;
  let weeksInMonth = Math.floor(daysInMonth / 15);
  let dayIndex = daysInMonth % 15;

  const days = [
    "suno kasi",
    "suno pan",
    "suno kule",
    "suno toki",
    "suno moli",
    "suno lete",
    "suno walo",
    "suno nimi",
    "suno seli",
    "suno moku",
    "suno kulupu",
    "suno musi",
    "suno mama",
    "suno nasin",
    "suno penpo",
  ];

  if ((weeksInMonth + 1) % 4 === 0 && dayIndex > 3) {
    dayIndex += 1;
  }

  let dayName = days[dayIndex];

  const weekNames = [
    "nanpa wan",
    "nanpa tu",
    "nanpa tu wan",
    "nanpa tu tu",
    "nanpa luka",
  ];
  let weekName = weekNames[weeksInMonth];

  if (date.getDate() === 8 && date.getMonth() === 7) {
    dayName = "suno pi toki pona";
    monthName = "kipisi lawa";
    yearCycleName = getYearName(date);
    cyclePartName = getCyclePartName(date);
    weekName = "nanpa wan";
  }

  return `${dayName} ${weekName}<br>${monthName}<br>${yearCycleName} ${cyclePartName}`;
}

// Function to get Year Name
function getYearName(date) {
  const epoch = new Date(2001, 7, 8);
  let daysSinceEpoch = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  const cycleYears = [
    "tenpo sike kala",
    "tenpo sike pipi",
    "tenpo sike akesi",
    "tenpo sike soweli",
    "tenpo sike waso",
    "tenpo sike kijetesantakalu",
  ];
  let yearInCycle = (daysSinceEpoch % (365.25 * 6)) / 365.25;
  return cycleYears[Math.floor(yearInCycle)];
}

// Function to get Cycle Part Name
function getCyclePartName(date) {
  const epoch = new Date(2001, 7, 8);
  let daysSinceEpoch = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
  const cycleParts = ["sin", "kama", "awen", "tawa", "weka"];
  let yearIndex = Math.floor(daysSinceEpoch / (365.25 * 6));
  return cycleParts[yearIndex % 5];
}

// Initialize Dates on Page Load
window.onload = function () {
  const date = new Date();
  document.getElementById("tokiPonaDate").innerHTML = getTokiPonaDate(date);
  document.getElementById("gregorianDate").innerHTML = date.toLocaleDateString(
    "en-GB",
    { day: "2-digit", month: "long", year: "numeric" }
  );
};
