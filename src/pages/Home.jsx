import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { db } from "../firebase";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

export default function Home() {
  return (
    <div>
      <Slider />
    </div>
  );
}
