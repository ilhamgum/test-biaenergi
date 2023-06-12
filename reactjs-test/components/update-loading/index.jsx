import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function UpdateLoading() {
  return (
    <tr>
      <td colSpan={7} className="p-2 border border-black h-[50px] bg-gray-100">
        <div className="flex justify-center items-center animate-spin">
          <AiOutlineLoading3Quarters />
        </div>
      </td>
    </tr>
  );
}
