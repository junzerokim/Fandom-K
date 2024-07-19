export default function formatNumber(number) {
  return new Intl.NumberFormat("ko-KR").format(number);
}
