import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as user from "~/auth/services/userManagement";

interface UserInfo {
  name?: string;
  email?: string;
  _id?: string;
  [key: string]: unknown;
}

export default function Welcome() {
  const navigateTo = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    
    if (!accessToken) {
      navigateTo("/auth/sign-in");
      return;
    }

    async function fetchUserInfo() {
      const response = await user.getUserInfo();
      if (response.errorMessage) {
        localStorage.removeItem("accessToken");
        navigateTo("/auth/sign-in");
      } else {
        setUserInfo(response);
      }
      setLoading(false);
    }

    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <main className="flex items-center justify-center pt-16 pb-4">
        <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
          <p className="text-center text-lg">Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">

        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center font-bold text-xl">
              Welcome to the application, {userInfo?.name || "User"}!
            </p>
            
            {userInfo && (
              <div className="space-y-2 text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Email:</span> {userInfo.email}
                </p>
              </div>
            )}

            <button
              onClick={() => {
                user.logout();
                navigateTo("/auth/sign-in");
              }}
              className="w-full mt-4 rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Logout
            </button>
          </nav>
        </div>
      </div>
    </main>
  );
}
