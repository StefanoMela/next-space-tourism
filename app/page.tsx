import data from "./data/data.json";
import Image from "next/image";

interface Destination {
  name: string;
  image: string
  description: string;
  distance: string;
  travel: string;
}

interface Technology {
  name: string;
  image: string;
  description: string;
}



export default function Home() {

  return (
    <div>
      <h1>Space Tourism</h1>
    </div>
  );
}
