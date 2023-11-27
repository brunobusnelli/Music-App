const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientId = "474a5c64b382441a9e5a8bf9b3a6375d"
const redirectUri = "http://localhost:5173"
const scopes = ["user-library-read","playlist-read-private"]

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

