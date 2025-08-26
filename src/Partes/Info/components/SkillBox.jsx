
function SkillBox({ nombre, icon }) {
  return (
    <div
      className="flex flex-col items-center justify-center bg-[#ffd44c] border-2 border-[#201c1c] shadow-lg"
      style={{ width: 120, height: 140 }}
    >

      <div className="text-5xl mb-1">{icon}</div>
      <p className="mt-1 text-base font-extrabold text-[#201c1c] tracking-wide transition-colors font-sans">
        {nombre}
      </p>

    </div>
  );
}

export default SkillBox;
