import { google } from "googleapis";
const sheets = google.sheets("v4");

import creds from "../../silken-dragon-375408-36cd8c3b5255.json";

const serviceAccountAuth = new google.auth.JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

serviceAccountAuth.authorize((err, tokens) => {
  if (err) {
    console.log(err);
  } else {
  }
});

async function appendEmail(emailObject: any) {
  console.log(emailObject, "object");
  const email = emailObject.information.email;
  console.log(email);
  return new Promise((resolve, reject) => {
    sheets.spreadsheets.values.append(
      {
        auth: serviceAccountAuth,
        spreadsheetId: "1u1TnTr78Dxzo21EAzPFuW1I5d7VoqaN6OweFM_ZyYw4",
        range: "Sheet1",
        valueInputOption: "RAW",
        resource: {
          range: "Sheet1",
          majorDimension: "ROWS",
          values: [
            [
              emailObject.information.email,
              emailObject.information.name,
              emailObject.information.inquiry,
              emailObject.information.money,
              emailObject.information.dateInput,
            ],
          ],
        },
      },
      (err: any, resp: any) => {
        if (err) {
          console.log("Data Error :", err);
          reject(err);
        }
        resolve(resp);
      }
    );
  });
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  await appendEmail(body);
  return {
    statusCode: 200,
    body: "Email appended successfully.",
  };
});
