import TripData from "./TripData";
import "./TripStyles.css";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>The top places to visit in 2023 for you.</p>
      <div className="trip-card">
        <TripData
          image="https://images.unsplash.com/photo-1560964645-5296b5099677?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          heading="Da Nang"
          text="Da Nang is a vibrant city in central Vietnam, famous for its beautiful beaches, majestic mountains and rich culture. Whether you want to relax on the white sand, explore the ancient temples, or enjoy the local cuisine, Da Nang has something for everyone. Come and discover why Da Nang is one of the most popular destinations in Vietnam."
        ></TripData>
        <TripData
          image="https://images.unsplash.com/photo-1572551887368-450aa6d8346e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
          heading="Hue"
          text="Hue is a city of historical and cultural significance in Vietnam. It was the capital of the Nguyen dynasty from 1802 to 1945, and the seat of many royal monuments and tombs. Hue is also known for its cuisine, reflects the rich and diverse heritage of the region. Hue is a destination that offers visitors a glimpse into the past and present of Vietnam."
        ></TripData>
        <TripData
          image="https://images.unsplash.com/photo-1592114714621-ccc6cacad26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=843&q=80"
          heading="Ho Chi Minh"
          text="Ho Chi Minh City, also known as Saigon, is the largest and most vibrant city in Vietnam. It is a cultural and economic hub that attracts millions of visitors every year. Whether you are looking for historical landmarks, modern skyscrapers, delicious cuisine, or lively nightlife, Ho Chi Minh City has something for everyone."
        ></TripData>
      </div>
    </div>
  );
}

export default Trip;
