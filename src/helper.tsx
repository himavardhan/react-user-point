import React, { useEffect, useCallback, useMemo } from "react";

export const Helper: React.FC = () => {
 const [user,setUser] = React.useState({name:'hima'});

 const updateName = () => {
    user.name = "vardhan";
    setUser(user);
    console.log(user);
 }

   useEffect(() => {
    console.log("useEffect 1");
  }, []);

  const increment = useCallback(() => {
    console.log("useCallback 2");
  }, []);

  const squaredCount = useMemo(() => {
    console.log("useMemo 3");
    return 0;
  }, []);

  const template = () => {
    console.log("template");
  }

  return <div>Helper Fun : {squaredCount}<br></br>
    <button onClick={updateName}>increment</button>
    <div>{user?.name}</div>
  </div>;
};

export default Helper;
