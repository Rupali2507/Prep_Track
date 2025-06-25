import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [visibility, setVisibility] = useState(false);
  const [goals, setGoals] = useState([]);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

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
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
