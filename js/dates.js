// date-methods.js

console.log("🔹 Date Methods in Node.js 🔹");

// 1. Create a new Date object
const now = new Date();
console.log("Current Date:", now);

// 2. Get individual date components
console.log("Year:", now.getFullYear());
console.log("Month (0-based):", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day:", now.getDay()); // 0 (Sunday) to 6 (Saturday)
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// 3. Get timestamp (milliseconds since Unix Epoch)
console.log("Timestamp:", now.getTime());

// 4. Set date components
now.setFullYear(2025);
console.log("Updated Year:", now);
now.setMonth(11);
console.log("Updated Month:", now);
now.setDate(15);
console.log("Updated Date:", now);

// 5. Convert date to string formats
console.log("toString:", now.toString());
console.log("toDateString:", now.toDateString());
console.log("toISOString:", now.toISOString());
console.log("toUTCString:", now.toUTCString());
console.log("toLocaleString:", now.toLocaleString());
console.log("toLocaleDateString:", now.toLocaleDateString());
console.log("toLocaleTimeString:", now.toLocaleTimeString());

// 6. Create a Date from a timestamp
const pastDate = new Date(1672531200000); // Example timestamp
console.log("Past Date from timestamp:", pastDate);

// 7. Create a Date from a string
const stringDate = new Date("2023-07-15T14:30:00Z");
console.log("Date from string:", stringDate);

// 8. Compare Dates
const date1 = new Date("2024-01-01");
const date2 = new Date("2025-01-01");
console.log("Date1 < Date2:", date1 < date2);
console.log("Date1 > Date2:", date1 > date2);
console.log("Date1 == Date2:", date1.getTime() === date2.getTime());

// 9. Add days to a date
const futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7);
console.log("Date after 7 days:", futureDate);

// 10. Subtract days from a date
const past = new Date();
past.setDate(past.getDate() - 7);
console.log("Date 7 days ago:", past);

// 11. Get difference between two dates in days
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
console.log("Difference in days:", diffDays);

// 12. Convert UTC to local time
console.log("Local Time:", now.toLocaleString("en-US", { timeZone: "America/New_York" }));

// 13. Convert local time to UTC
console.log("UTC Time:", now.toUTCString());

// 14. Format date with Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" });
console.log("Formatted Date:", formatter.format(now));