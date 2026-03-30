export default function TitleSection({ title }) {
  return (
    <div className="flex items-center mx-1.5">
      <hr className="flex-1 border-t-4 border-border-muted" />
      <h1 className="font-body text-secondary px-14 py-1 rounded-md border border-secondary shadow-[4px_4px_0px_0px_#F0F1F3]">
        {title}
      </h1>
      <hr className="flex-1 border-t-4 border-border-muted" />
    </div>
  );
}
