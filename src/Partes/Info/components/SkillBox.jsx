
function SkillBox({ nombre, icon }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gradient-to-br from-[#f5f5dc] to-[#e8e4cc] rounded-xl border-2 border-[#f30c5d] shadow-lg hover:scale-110 hover:border-[#201c1c] hover:shadow-2xl hover:bg-[#fff0f6] transition-all duration-300 cursor-pointer group"
      style={{ width: 120, height: 140 }}
    >
      <div className="text-5xl mb-1 group-hover:animate-bounce drop-shadow-lg">{icon}</div>
      <p className="mt-1 text-base font-extrabold text-[#201c1c] tracking-wide group-hover:text-[#f30c5d] transition-colors duration-300 font-sans">
        {nombre}
      </p>
    </div>
  );
}

export default SkillBox;
