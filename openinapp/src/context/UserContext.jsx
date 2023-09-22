import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebaseConfig";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();
const UserAddContext = createContext();
const ModalContext = createContext();
const GraphContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};
export const useAddUser = () => {
  return useContext(UserAddContext);
};
export const useModal = () => {
  return useContext(ModalContext);
};
export const useGraph = () => {
  return useContext(GraphContext);
};

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState("");
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        navigate("/");
      } else {
        navigate("/login");
      }
    });
    fetch("https://openapp-dashboard.onrender.com/api/bar")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBarData(data?.data);
      });
    fetch("https://openapp-dashboard.onrender.com/api/pie")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPieData(data?.data);
      });
    fetch("https://openapp-dashboard.onrender.com/api/card")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCardData(data?.data);
      });
  }, []);

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const addProfile = (profile) => {
    setUserProfile(profile);
  };
  return (
    <UserContext.Provider value={{user}}>
      <UserAddContext.Provider value={handleClick}>
        <ModalContext.Provider
          value={{ isOpen, openModal, closeModal, userProfile, addProfile }}
        >
          <GraphContext.Provider value={{ barData, pieData, cardData }}>
            {children}
          </GraphContext.Provider>
        </ModalContext.Provider>
      </UserAddContext.Provider>
    </UserContext.Provider>
  );
}
