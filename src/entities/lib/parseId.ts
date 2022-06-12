// parse numeric id from id with letters in it
// for example: `v15` -> `15`
export const parseId = (id: string) => Number(id.replace(/[^\d]/gi, ''));
