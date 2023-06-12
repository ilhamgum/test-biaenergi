export default function UserList({
  users,
  onView,
  onViewUserDetail,
  onEdit,
  isEditing,
  isEditingIndex,
  onDelete,
  showAddUser,
  setShowAddUser,
  setShowModal,
}) {
  return users.map((user, index) => (
    <tr
      key={index}
      className={`${isEditingIndex == index ? "bg-black/50" : ""}`}
    >
      <td className="p-2 border border-black">{user.id}</td>
      <td className="p-2 border border-black">{user.nama}</td>
      <td className="p-2 border border-black">{user.alamat}</td>
      <td className="p-2 border border-black">{user.jenis_kelamin}</td>
      <td className="p-2 border border-black">{user.tanggal_lahir}</td>
      <td className="p-2 border border-black">{user.tanggal_input}</td>

      {/* buttons */}
      <td className="p-2 flex justify-center items-center space-x-2 border border-black">
        <button
          onClick={() => {
            onView(true);
            onViewUserDetail(user);
          }}
          className="px-4 py-2 border border-black rounded-xl hover:bg-black hover:text-white duration-300"
        >
          View
        </button>

        <button
          onClick={() => {
            onEdit([true, index]);

            setShowAddUser(!showAddUser);
          }}
          className="px-4 py-2 border border-black rounded-xl hover:bg-black hover:text-white duration-300"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(index)}
          className="px-4 py-2 border border-black rounded-xl hover:bg-black hover:text-white duration-300"
        >
          Delete
        </button>
      </td>
    </tr>
  ));
}
