import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [goals, setGoals] = useState([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [collaboration, setCollaboration] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState(localStorage.getItem("username") || "");

  const navigate = useNavigate();

  return (
    <PageContext.Provider
      value={{
        visibility,
        setVisibility,
        goals,
        setGoals,
        showAddGoal,
        setShowAddGoal,
        title,
        setTitle,
        deadline,
        setDeadline,
        description,
        setDescription,
        collaboration,
        setCollaboration,
        darkMode,
        setDarkMode,
        navigate,
        user,
        setUser,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
