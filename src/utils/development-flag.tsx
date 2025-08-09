// Check this issue: https://github.com/ArnaudBarre/eslint-plugin-react-refresh/issues/84
// eslint-disable-next-line react-refresh/only-export-components
export function useDevelopmentFlag() {
  return process.env.NODE_ENV === 'development';
}

export default function DevelopmentFlag({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = useDevelopmentFlag();

  return isDev ? <>{children}</> : null;
}
