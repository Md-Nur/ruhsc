import Link from "next/link";

const Buttons = ({
  label,
  linkUrl,
  linkLabel,
}: {
  label: string;
  linkUrl: string;
  linkLabel: string;
}) => {
  return (
    <div className="form-control mt-6">
      <input
        className="btn btn-primary uppercase"
        type="submit"
        value={label}
      />
      {linkUrl && linkLabel && (
        <Link
          href={linkUrl}
          className="link link-hover label justify-start gap-1 items-center"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
};

export default Buttons;
