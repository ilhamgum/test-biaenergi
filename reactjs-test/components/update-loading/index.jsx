import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function UpdateLoading() {
  return (
    <tr>
      <td
        colSpan={7}
        className="p-2 border-2 border-white text-white h-[50px] bg-gray-800"
      >
        <div className="flex justify-center items-center animate-spin">
          <AiOutlineLoading3Quarters />
        </div>
      </td>
    </tr>
  );
}
