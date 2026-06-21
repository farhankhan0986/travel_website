export default function PhoneBar() {
  return (
    <div className="w-full bg-burg-deep py-3 px-4">
      <p className="flex items-center justify-center gap-3 flex-wrap text-white font-body text-sm">
        <span>Prefer to talk?</span>
        <span className="opacity-50" aria-hidden="true">·</span>
        <span className="font-display font-medium text-[20px]">1-800-TRIPILE</span>
        <span className="opacity-50" aria-hidden="true">·</span>
        <span>Mon-Sat, 8am-9pm EST</span>
      </p>
    </div>
  );
}
