import React, { useEffect, useState } from "react";
import { Phone, User, Mail, MapPin } from "lucide-react";

interface UserData {
  results: Array<{
    name: {
      first: string;
      last: string;
    };
    gender: string;
    phone: string;
    email: string;
    location: {
      city: string;
      country: string;
    };
    picture: {
      large: string;
    };
  }>;
}

function App() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <p className="text-red-500 font-medium">Failed to load user data</p>
      </div>
    );
  }

  const user = userData.results[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-md w-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="relative h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute w-96 h-96 bg-blue-500 rounded-full -top-48 -right-24 mix-blend-multiply filter blur-xl opacity-70"></div>
          <div className="absolute w-96 h-96 bg-purple-500 rounded-full -bottom-48 -left-24 mix-blend-multiply filter blur-xl opacity-70"></div>
        </div>

        <div className="relative px-8 pb-8">
          <div className="relative -mt-24 mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {user.name.first} {user.name.last}
              </h2>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <User size={18} className="text-blue-500" />
                <span className="capitalize text-sm">{user.gender}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-600 transition-all duration-300 hover:text-blue-500">
                <Phone size={18} />
                <span className="text-sm">{user.phone}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 transition-all duration-300 hover:text-blue-500">
                <Mail size={18} />
                <span className="text-sm">{user.email}</span>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 transition-all duration-300 hover:text-blue-500">
                <MapPin size={18} />
                <span className="text-sm">
                  {user.location.city}, {user.location.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
