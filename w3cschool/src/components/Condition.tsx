import React from "react";

const MissedGoal = () => {
  return <h1>Missed !!!</h1>;
};

const MadeGoal = () => {
  return <h1>Goal !!!</h1>;
};

const Condition: React.FC<any> = (props: any) => {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
};

export default Condition;
