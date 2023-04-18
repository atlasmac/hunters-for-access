import { google } from "googleapis";
import { htmlToText } from "html-to-text";
import { env } from "../env.mjs";

export async function fetchEvents() {
  console.log(
    env.CALENDAR_CLIENT_EMAIL.length,
    env.CALENDAR_ID.length,
    env.CALENDAR_PRIVATE_KEY.length
  );

  const auth = new google.auth.JWT({
    email: env.CALENDAR_CLIENT_EMAIL,
    // email: keys.client_email,
    key: env.CALENDAR_PRIVATE_KEY,
    scopes: [
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/calendar.events",
    ],
  });

  const calendar = google.calendar({ version: "v3", auth });
  const calendarId = env.CALENDAR_ID;
  const _timeMin = new Date();
  _timeMin.setDate(_timeMin.getDate() - 7);
  const timeMin = _timeMin.toISOString();
  const eList = await calendar.events.list({ calendarId, timeMin });

  const events = eList.data.items
    ?.sort(({ start: a }, { start: b }) => {
      if (!a?.dateTime) return 1;
      if (!b?.dateTime) return -1;
      return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
    })
    .map((el) => {
      const html = el.description || "";
      const descriptionFixed = htmlToText(html);

      return {
        title: el.summary,
        location: el.location || "",
        start: el.start,
        end: el.end,
        description: descriptionFixed || "",
        images: el.attachments || null,
      };
    });

  return events;
}
