import { useEffect, useRef, useState } from "react";
import { AiOutlineEdit, AiOutlineLoading3Quarters } from "react-icons/ai";

// utils
import { formatTanggalInput, formatTanggalLahir } from "@/utils";

// components
import NoDataOnTable from "@/components/no-data";
import UpdateLoading from "@/components/update-loading";
import UserList from "@/components/user-list";
import UserDetail from "@/components/user-detail";
import Head from "next/head";

// const initialDummy = [
//   {
//     id: 1,
//     nama: "Nama",
//     alamat: "Alamat",
//     jenis_kelamin: "P/W",
//     tanggal_lahir: "29 03 2001",
//     tanggal_input: "12/06/23 19:36:15",
//   },
// ];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // update data
  const [showAddUser, setShowAddUser] = useState(false);
  const [[showEditUser, showEditUserIndex], setShowEditUser] = useState([
    false,
    -1,
  ]);

  // modal
  const [showModal, setShowModal] = useState(false);
  const [modalUserDetail, setModalUserDetail] = useState({});

  // input refs
  const namaRef = useRef(null);
  const alamatRef = useRef(null);
  const jenisKelaminRef = useRef(null);
  const tanggalLahirRef = useRef(null);
  const tanggalInputRef = useRef(null);

  const onAddUser = () => {
    setLoading(true);

    const nama = namaRef.current?.value;
    const alamat = alamatRef.current?.value;
    const jenisKelamin = jenisKelaminRef.current?.value;
    const tanggalLahir = tanggalLahirRef.current?.value;
    const tanggalInput = tanggalInputRef.current?.value;

    setTimeout(() => {
      console.log(
        "add user",
        nama,
        alamat,
        jenisKelamin,
        tanggalLahir,
        tanggalInput
      );

      // set user into array
      setUsers([
        ...users,
        {
          id: users.length + 1,
          nama,
          alamat,
          jenis_kelamin: jenisKelamin,
          tanggal_lahir: formatTanggalLahir(tanggalLahir),
          tanggal_input: tanggalInput,
        },
      ]);

      clearInputState();
    }, 2000);
  };

  const onEditUser = () => {
    setLoading(true);

    const nama = namaRef.current?.value;
    const alamat = alamatRef.current?.value;
    const jenisKelamin = jenisKelaminRef.current?.value;
    const tanggalLahir = tanggalLahirRef.current?.value;
    const tanggalInput = tanggalInputRef.current?.value;

    setTimeout(() => {
      console.log(
        "edit user",
        nama,
        alamat,
        jenisKelamin,
        tanggalLahir,
        tanggalInput
      );

      // set user into array
      const newUsers = [...users];

      newUsers[showEditUserIndex] = {
        ...newUsers[showEditUserIndex],
        nama,
        alamat,
        jenis_kelamin: jenisKelamin,
        tanggal_lahir: formatTanggalLahir(tanggalLahir),
        tanggal_input: tanggalInput,
      };

      setUsers(newUsers);

      clearInputState();
    }, 2000);
  };

  const onDeleteUser = (index) => {
    const newUsers = [...users];

    newUsers.splice(index, 1);

    setUsers(newUsers);

    clearInputState();
  };

  const clearInputState = () => {
    setShowAddUser(false);
    setShowEditUser([false, -1]);
    setLoading(false);
  };

  // detect if showAddUser is true, auto focus to input
  useEffect(() => {
    if (showAddUser) {
      document.querySelector("input").focus();

      // detect if esc key is pressed
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          setShowAddUser(false);
        }
      });
    }
  }, [showAddUser]);

  return (
    <>
      <Head>
        <title>ReactJS Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* main content */}
      <main className="min-h-[100dvh]  background-with-image bg-no-repeat bg-cover p-10">
        <button
          disabled={loading}
          onClick={() => {
            setShowAddUser(!showAddUser);
            setShowEditUser([false, -1]);
          }}
          className="px-4 py-2 border-2 text-white border-white rounded-xl hover:bg-white hover:text-black duration-300"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            "Tambah User"
          )}
        </button>

        <div className="mt-5 p-4 border card">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  No
                </th>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  Nama
                </th>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  Alamat
                </th>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  P/W
                </th>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  Tanggal Lahir
                </th>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  Tanggal Input
                </th>
                <th className="p-2 border-2 text-white border-white rounded-xl">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <UpdateLoading />
              ) : (
                <>
                  {showAddUser || showEditUser ? (
                    <tr>
                      <td className="p-2 border-2 border-white text-white">
                        {showEditUser ? (
                          <p className="select-none text-center">
                            <AiOutlineEdit />
                          </p>
                        ) : (
                          <p className="select-none text-center">
                            {users.length + 1}
                          </p>
                        )}
                      </td>

                      <td className="p-2 border-2 border-white text-white">
                        <input
                          ref={namaRef}
                          type="text"
                          className="p-2 w-full h-full outline-none bg-transparent"
                          value={namaRef.current?.value}
                        />
                      </td>

                      <td className="p-2 border-2 border-white text-white">
                        <input
                          ref={alamatRef}
                          type="text"
                          className="p-2 w-full h-full outline-none bg-transparent"
                          value={alamatRef.current?.value}
                        />
                      </td>

                      <td className="p-2 border-2 border-white text-white">
                        <select
                          ref={jenisKelaminRef}
                          className="p-2 w-full h-full bg-transparent"
                          value={jenisKelaminRef.current?.value}
                        >
                          <option value="Pria" className="text-black">
                            Pria
                          </option>
                          <option value="Wanita" className="text-black">
                            Wanita
                          </option>
                        </select>
                      </td>

                      <td className="p-2 border-2 border-white text-white">
                        <input
                          ref={tanggalLahirRef}
                          type="date"
                          className="p-2 w-full h-full outline-none bg-transparent"
                          value={tanggalLahirRef.current?.value}
                        />
                      </td>

                      <td className="p-2 border-2 border-white text-white">
                        <input
                          disabled
                          ref={tanggalInputRef}
                          type="text"
                          className="p-2 w-full h-full outline-none bg-transparent"
                          value={formatTanggalInput(new Date())}
                        />
                      </td>

                      {/* buttons */}
                      {showAddUser && !showEditUser ? (
                        <td className="p-2 flex justify-center items-center space-x-2 border-2 border-white text-white">
                          <button
                            onClick={onAddUser}
                            className="px-4 py-2 border-2 text-white border-white rounded-xl hover:bg-black hover:text-white duration-300"
                          >
                            Add
                          </button>

                          <button
                            onClick={() => setShowAddUser(false)}
                            className="px-4 py-2 border-2 text-white border-white rounded-xl hover:bg-black hover:text-white duration-300"
                          >
                            Cancel
                          </button>
                        </td>
                      ) : (
                        <td className="p-2 flex justify-center items-center space-x-2 border-2 border-white text-white">
                          <button
                            onClick={onEditUser}
                            className="px-4 py-2 border-2 text-white border-white rounded-xl hover:bg-black hover:text-white duration-300"
                          >
                            Save
                          </button>

                          <button
                            onClick={() => {
                              setShowEditUser([false, -1]);
                            }}
                            className="px-4 py-2 border-2 text-white border-white rounded-xl hover:bg-black hover:text-white duration-300"
                          >
                            Cancel
                          </button>
                        </td>
                      )}
                    </tr>
                  ) : null}
                </>
              )}

              {users.length ? (
                <UserList
                  users={users}
                  onView={setShowModal}
                  onViewUserDetail={setModalUserDetail}
                  onEdit={setShowEditUser}
                  isEditing={showEditUser}
                  isEditingIndex={showEditUserIndex}
                  onDelete={onDeleteUser}
                  showAddUser={showAddUser}
                  setShowAddUser={setShowAddUser}
                />
              ) : (
                <NoDataOnTable />
              )}
            </tbody>
          </table>
        </div>

        {/* user detail modal */}
        <UserDetail
          open={showModal}
          close={setShowModal}
          userDetails={modalUserDetail}
        />
      </main>
    </>
  );
}
