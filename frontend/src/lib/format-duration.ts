export function formatDuration(seconds: number): string {
  const minute = Math.floor(seconds / 60);
  const second = (seconds % 60).toString().padStart(2, "0");
  const formatedDuration = `${minute}:${second}`;
  return formatedDuration;
}
