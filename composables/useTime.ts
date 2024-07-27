import dayjs from "dayjs";

type format = "dddd" | "D MMM, YYYY" | "HH: mm" | "DD / MM" | "DD / MMM / YYYY";

export function useTime() {
  const interval = ref();
  const date = ref(new Date());

  const currentDayName = computed(() => formatDate(date.value, "dddd"));
  const currentDate = computed(() => formatDate(date.value, "D MMM, YYYY"));
  const currentTime = computed(() => formatDate(date.value, "HH: mm"));

  function formatDate(date: Date | string, format: format) {
    return dayjs(date).format(format);
  }

  function updateTime() {
    date.value = new Date();
  }

  function startTimer() {
    interval.value = setInterval(updateTime, 1000);
  }

  function clearTimer() {
    clearInterval(interval.value);
  }

  return { startTimer, clearTimer, currentDayName, currentDate, currentTime, formatDate };
}
