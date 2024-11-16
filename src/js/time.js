export function timeTracker() {
    const dateElement = $("*").attr("data-time");
    const dateIs = new Date();
    const month = dateIs.getUTCMonth() + 1;
    const day = dateIs.getUTCDate();
    const year = dateIs.getUTCFullYear();
    console.log(dateElement);
    if (dateElement == "mdfy") { // fy means full year
        const newDate = month + "/" + day + "/" + year;
        const formDate = `${year}/${month}/${day}`;
        console.log(newDate + " " + formDate);
        $(dateElement).appendTo(newDate);
    } else if (dateElement == "mmddfy") { // fy means full year
        const pMonth = month.toString().padStart(2,"0");
        const pDay = day.toString().padStart(2,"0");
        const newPaddedDate = `${year}/${pMonth}/${pDay}`;
        $(dateElement).appendTo(newPaddedDate);
    }
}