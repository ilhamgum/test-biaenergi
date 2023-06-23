import { logout } from "@services/auth";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    logout().then((res) => {
      router.push("/login");
    });
  };

  return (
    <div className="h-[50px]">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
