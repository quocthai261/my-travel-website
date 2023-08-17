import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, whithin a frame.</p>
      <DestinationData
        className="first-des"
        heading="Ha Noi"
        text="Hanoi is the capital and one of the most attractive destinations of Vietnam. It is a city with a rich history, culture, and cuisine that can appeal to any traveler. Hanoi offers a variety of experiences, from exploring the ancient temples and pagodas, to enjoying the vibrant nightlife and street food, to relaxing in the tranquil lakes and parks. Hanoi is also a gateway to other amazing places in Vietnam, such as Ha Long Bay, Sapa, and Ninh Binh. Whether you are looking for adventure, romance, or relaxation, Hanoi has something for you."
        img1="https://images.unsplash.com/photo-1616486410185-81af2d32a2af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
        img2="https://images.unsplash.com/photo-1557770401-dabe8321c0c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
      ></DestinationData>
      <DestinationData
        className="first-des-reverse"
        heading="Ha Giang"
        text="Ha Giang is a province in the northernmost part of Vietnam, bordering China. It is known for its majestic mountains, terraced rice fields, diverse ethnic cultures and colorful festivals. Ha Giang is a paradise for adventure seekers, nature lovers and photographers who want to explore the hidden beauty of Vietnam. Ha Giang offers many attractions such as Dong Van Karst Plateau, Lung Cu Flag Tower, Ma Pi Leng Pass, Quan Ba Heaven Gate and more. Come and discover the charm of Ha Giang, the land of the clouds and the flowers."
        img1="https://images.unsplash.com/photo-1686755500102-427685131202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=693&q=80"
        img2="https://images.unsplash.com/photo-1568206354559-addcfc739aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      ></DestinationData>
      <DestinationData
        className="first-des"
        heading="Ha Long Bay"
        text="Halong Bay is a natural wonder in Vietnam, recognized as a UNESCO World Heritage Site. It is famous for its thousands of limestone islands and islets, which create a stunning landscape of emerald water and rocky peaks. Halong Bay offers many activities for visitors, such as cruising, kayaking, hiking, biking, fishing, and exploring caves. Halong Bay is also rich in culture and history, with many temples, pagodas, and villages to visit. Halong Bay is a perfect destination for anyone who loves nature, adventure, and culture."
        img1="https://images.unsplash.com/photo-1593994602837-530142086918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
        img2="https://images.unsplash.com/photo-1574699404005-b6120622b1e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80"
      ></DestinationData>
    </div>
  );
};

export default Destination;
