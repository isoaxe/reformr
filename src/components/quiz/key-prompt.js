import { AiOutlineEnter } from 'react-icons/ai';

export default function KeyPrompt() {
  return (
    <div className="mt-3 flex flex-row items-center text-slate-700">
      <p className="mr-3 text-lg">
        Press <span className="font-bold">Enter</span>
      </p>
      <AiOutlineEnter size={25} />
    </div>
  );
}
