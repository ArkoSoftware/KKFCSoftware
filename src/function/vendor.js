import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../config/firebase";
export const getVendorList = async () => {
  const col1 = collection(
    db,
    "vendorList",
    localStorage.getItem("companyId"),
    "record"
  );
  const snap = await getDocs(col1);
  const arr = [];
  snap.forEach((docs) => {
    arr.push(docs.data());
  });
  return arr;
};
