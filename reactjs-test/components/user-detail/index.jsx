import Image from "next/image";

export default function UserDetail({ open, close, userDetails }) {
  return (
    <dialog open={open}>
      <div className="hidden justify-center items-center lg:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-jost">
        <div className="relative w-auto max-w-3xl ">
          <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-2xl">
            <div className="relative p-6">
              <div className="h-[300px] w-[400px] overflow-hidden relative">
                <Image
                  alt="User avatar"
                  fill
                  priority
                  src={`https://picsum.photos/200`}
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="mt-2 flex justify-between items-center">
                <p className="font-semibold">USER DETAILS</p>
                <p className="text-xs text-black/50">
                  Latest update: {userDetails.tanggal_input}
                </p>
              </div>

              <div className="mt-4">
                <div className="flex">
                  <div className="basis-1/2">
                    <p className="mb-1 text-sm underline underline-offset-4">
                      NAME
                    </p>
                    <p className="text-lg font-semibold">{userDetails.nama}</p>
                  </div>

                  <div className="basis-1/2">
                    <p className="mb-1 text-sm underline underline-offset-4">
                      GENDER{" "}
                    </p>
                    <p className="text-lg font-semibold">
                      {userDetails.jenis_kelamin}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex">
                  <div className="basis-1/2">
                    <p className="mb-1 text-sm underline underline-offset-4">
                      ADDRESS{" "}
                    </p>
                    <p className="text-lg font-semibold">
                      {userDetails.alamat}
                    </p>
                  </div>

                  <div className="basis-1/2">
                    <p className="mb-1 text-sm underline underline-offset-4">
                      BIRTH DATE{" "}
                    </p>
                    <p className="text-lg font-semibold">
                      {userDetails.tanggal_lahir}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-center items-center">
                <button
                  onClick={() => close(false)}
                  className="px-10 py-2 text-white rounded-full transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-50 fixed inset-0 z-40 bg-black "></div>
    </dialog>
  );
}
