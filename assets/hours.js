/* The published week: weekdays 8 AM to 4 PM, Saturday and Sunday open 24
   hours. Minutes from midnight; a 24-hour day is [0, 1440).

   Shared by every page that shows the week table, so the schedule lives in
   one place. Any page with a table.hours and/or an [data-now] line picks
   this up; pages without either are unaffected. */
(function () {
  var HOURS = {
    0: [0, 1440],   // Sunday    open 24 hours
    1: [480, 960],  // Monday    8 - 4
    2: [480, 960],
    3: [480, 960],
    4: [480, 960],
    5: [480, 960],
    6: [0, 1440]    // Saturday  open 24 hours
  };
  var DAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function hhmm(m) {
    var h = Math.floor(m / 60), mm = m % 60, ap = h >= 12 ? "PM" : "AM", hh = h % 12;
    if (hh === 0) hh = 12;
    return hh + (mm ? ":" + (mm < 10 ? "0" + mm : mm) : "") + " " + ap;
  }

  function nextOpen(day, mins) {
    var t = HOURS[day];
    if (t && mins < t[0]) return { when: "today", at: t[0] };
    for (var i = 1; i <= 7; i++) {
      var d = (day + i) % 7;
      if (HOURS[d]) return { when: i === 1 ? "tomorrow" : DAY[d], at: HOURS[d][0] };
    }
    return null;
  }

  function update() {
    var now = new Date(), day = now.getDay(), mins = now.getHours() * 60 + now.getMinutes();
    var t = HOURS[day], open = !!t && mins >= t[0] && mins < t[1];
    var allDay = !!t && t[0] === 0 && t[1] === 1440;

    /* every live line on the page, not just the first */
    var boxes = document.querySelectorAll("[data-now]");
    for (var b = 0; b < boxes.length; b++) {
      var box = boxes[b];
      box.setAttribute("data-open", open ? "yes" : "no");
      var lab = box.querySelector("[data-now-label]"), det = box.querySelector("[data-now-detail]");
      if (lab) lab.textContent = open ? "Open now" : "Closed now";
      if (det) {
        if (open && allDay) det.textContent = "· open all day and all night today";
        else if (open) det.textContent = "· closes " + hhmm(t[1]);
        else {
          var nx = nextOpen(day, mins);
          det.textContent = nx ? "· opens " + nx.when + " " + hhmm(nx.at) : "";
        }
      }
    }

    var rows = document.querySelectorAll("[data-day]");
    for (var i = 0; i < rows.length; i++) {
      rows[i].setAttribute("data-today", Number(rows[i].getAttribute("data-day")) === day ? "yes" : "no");
    }
  }

  update();
  setInterval(update, 60000);
})();
