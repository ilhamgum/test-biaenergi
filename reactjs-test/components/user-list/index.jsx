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
      <td className="p-2 border-2 border-white text-white">{user.id}</td>
      <td className="p-2 border-2 border-white text-white">{user.nama}</td>
      <td className="p-2 border-2 border-white text-white">{user.alamat}</td>
      <td className="p-2 border-2 border-white text-white">
        {user.jenis_kelamin}
      </td>
      <td className="p-2 border-2 border-white text-white">
        {user.tanggal_lahir}
      </td>
      <td className="p-2 border-2 border-white text-white">
        {user.tanggal_input}
      </td>

      {/* buttons */}
      <td className="p-2 border-2 border-white text-white">
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => {
              onView(true);
              onViewUserDetail(user);
            }}
            className="px-10 py-2 text-white rounded-full transition-all duration-500 bg-gradient-to-tl from-green-500 via-yellow-500 to-red-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            View
          </button>

          <button
            onClick={() => {
              onEdit([true, index]);

              setShowAddUser(!showAddUser);
            }}
            className="px-10 py-2 hover:text-white rounded-full transition-all duration-500 bg-gradient-to-tl from-blue-500 via-lightblue-500 to-blue-100/50 bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            Edit
          </button>

          <button
            onClick={() => onDelete()}
            className="px-10 py-2 text-white rounded-full transition-all duration-500 bg-gradient-to-tl from-pink-900 via-red-700 to-yellow-100 bg-size-200 bg-pos-0 hover:bg-pos-100"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));
}
