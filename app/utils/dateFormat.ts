export function dateFormat({ date }: any, localCode: string) {
  return new Intl.DateTimeFormat(localCode, {
    dateStyle: "long",
  }).format(date);
};

export function splitDate({date}: any, localCode: string) {
  const newDate =  new Intl.DateTimeFormat(localCode, {
    dateStyle: "short",
  }).format(date);
  return newDate.split('/');
}