import React, { useState, createContext, useContext } from "react";

const UserContext = createContext("");
const Blogs = () => {
  const [user, setUser] = useState("Manoj Chaurasiya");
  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>Blogs</h1>
        <Comp2 user={user} />
      </div>
    </UserContext.Provider>
  );
};

const Comp2: React.FC<any> = ({ user }) => {
  return (
    <div>
      <h2>Comp2</h2>
      <Comp3 user={user} />
    </div>
  );
};
const Comp3: React.FC<any> = ({ user }) => {
  return (
    <div>
      <h2>Comp3</h2>
      <Comp4 user={user} />
    </div>
  );
};
const Comp4: React.FC<any> = ({ user }) => {
  return (
    <div>
      <h2>Comp4</h2>
      <Comp5 user={user} />
    </div>
  );
};
const Comp5: React.FC<any> = ({ user }) => {
  return (
    <div>
      <h2>Comp5</h2>
      <Comp6 user={user} />
    </div>
  );
};
const Comp6: React.FC<any> = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Comp6</h2>
      <h2>{`Hello  ${user} again!`}</h2>
    </div>
  );
};

export default Blogs;
