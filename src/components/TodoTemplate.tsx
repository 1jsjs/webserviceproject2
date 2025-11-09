export default function TodoTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="template">
      {children}
    </div>
  );
}
