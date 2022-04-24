export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4YWZmNzczYS1iNTlkLTRjMDEtYjA2Yy1jNGFiMDBjYTgyZmQiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY1MDcyNjc2NiwiZXhwIjoxNjUxMzMxNTY2fQ.IKBY9-XcTVVg2Gwq8buTGhpDT1QXP3r3rCs4Hpuo5YI";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ region: "sg001" }),
  });

  const { meetingId } = await res.json();
  return meetingId;
};