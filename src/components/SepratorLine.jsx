export default function SeparatorLine() {
  return (
    <div className="relative h-px w-full bg-gradient-to-r from-gray-900 via-[#6b7c93] to-gray-900">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-gray-900 via-[#6b7c93] to-gray-900 opacity-60"></div>
    </div>
  );
}

// className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6b7c93] to-transparent opacity-60"