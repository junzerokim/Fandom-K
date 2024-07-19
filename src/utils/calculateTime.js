export default function calculateTime(deadline) {
  const currentDate = new Date();
  const deadlineDate = new Date(deadline);
  const difference = deadlineDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.ceil(difference / (1000 * 3600 * 24));

  if (daysRemaining === 0) {
    return "오늘 마감";
  }

  return daysRemaining === 1 ? "1일 남음" : `${daysRemaining}일 남음`;
}
