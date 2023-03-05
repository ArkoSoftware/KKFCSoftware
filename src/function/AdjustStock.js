import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore/lite";
import { db } from "../config/firebase";
export const saveData = async (itemName) => {
  const doc1 = collection(db, "inventory");
  const q = query(doc1, where("item", "==", itemName.toLowerCase()));
  const snaps = await getDocs(q);
  if (snaps.empty) {
    const snap = await addDoc(doc1, {
      item: itemName.toLowerCase(),
      time: serverTimestamp(),
    });
    return true;
  } else {
    return false;
  }
};
