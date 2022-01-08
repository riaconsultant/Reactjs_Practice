import React from "react";
const List: React.FC = (props: any) => {
  // const cars = ["BMW", "Maruti", "Hyundai", "TATA", "KIA", "Mahindra"];
  const cars = [
    { id: 1, brand: "BMW" },
    { id: 2, brand: "Audi" },
    { id: 3, brand: "KIA" },
    { id: 4, brand: "Maruti" },
  ];
  return (
    <div>
      <label>List Component</label>
      <ul>
        {cars.map((car: any) => (
          <Car key={car.id + car.brand} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
};

const Car: React.FC<any> = (props: any) => {
  return <li>I am a {props.brand}</li>;
};

export default List;
