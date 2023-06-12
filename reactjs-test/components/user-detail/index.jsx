export default function UserDetail({ open, close, userDetails }) {
  return (
    <dialog open={open}>
      <div className="hidden justify-center items-center lg:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-jost">
        <div className="relative w-auto max-w-3xl">
          <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* close button */}
            <div
              onClick={() => close(false)}
              className="absolute top-0 right-0 m-3 cursor-pointer z-50"
            >
              <svg
                className="h-9 w-9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <div className="relative px-8 py-14">
              <p>Nama: {userDetails.nama}</p>
              <p>alamat: {userDetails.alamat}</p>
              <p>jenis_kelamin: {userDetails.jenis_kelamin}</p>
              <p>tanggal_lahir: {userDetails.tanggal_lahir}</p>
              <p>tanggal_input: {userDetails.tanggal_input}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-50 fixed inset-0 z-40 bg-black "></div>
    </dialog>
  );
}
