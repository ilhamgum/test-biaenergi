export default function NoDataOnTable({ colSpan = 7 }) {
  return (
    <tr>
      <td colSpan={colSpan} className="p-2 border border-black">
        <p className="text-center">no data</p>
      </td>
    </tr>
  );
}
