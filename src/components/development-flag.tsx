import useDevelopmentFlag from './use-development-flag';

export default function DevelopmentFlag({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = useDevelopmentFlag();

  return isDev ? <>{children}</> : null;
}
