// ACTION CREATOR
export function movieslist() {
  return {
    type: "MOVIES_LIST",
    payload: [
      { id: 1, name: "Capitan Philips" },
      { id: 2, name: "Sully" },
      { id: 3, name: "Forrest Gump" }
    ]
  };
}

export function directorlist() {
  return {
    type: "DIR_LIST",
    payload: [
      { id: 1, name: "Tarantino" },
      { id: 2, name: "Scorsese" },
    ]
  };
}