export default function useDevelopmentFlag() {
  return process.env.NODE_ENV === 'development';
}
