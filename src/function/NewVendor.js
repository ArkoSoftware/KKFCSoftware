import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";
import { db } from "../config/firebase";

export const addNewVendor = async (data) => {
  const temp = data;
  temp["time"] = serverTimestamp();
  const doc1 = collection(
    db,
    "vendorList",
    localStorage.getItem("companyId"),
    "record"
  );
  const snap = await addDoc(doc1, temp);
  return true;
};
