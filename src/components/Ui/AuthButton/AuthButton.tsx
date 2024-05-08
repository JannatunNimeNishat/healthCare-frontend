import { getUserInfo, removeUser } from "@/services/actions/auth.sevices";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button color="error" onClick={handleLogOut}>
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
