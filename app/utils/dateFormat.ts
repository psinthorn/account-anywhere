export function dateFormat({ date }: any, localCode: string) {
  return new Intl.DateTimeFormat(localCode, {
    dateStyle: "long",
  }).format(date);
};

export function splitDate(date: string) {
  return date.split('/')[2];
}