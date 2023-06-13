export default function NoDataOnTable({ colSpan = 7 }) {
  return (
    <tr>
      <td colSpan={colSpan} className="p-2 border-2 border-white text-white">
        <p className="text-center">no data</p>
      </td>
    </tr>
  );
}
