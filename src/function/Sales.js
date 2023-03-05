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
export const getItemList = async (itemName) => {
  const col1 = collection(db, "inventory");
  const snap = await getDocs(col1);
  const arr = [];
  snap.forEach((docs) => {
    arr.push(docs.data().item);
  });
  return arr;
};
export const getVendorName = async () => {
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
export const addNewInvoice = async ({ tableData, customer, invoiceDate }) => {
  const col1 = collection(db, "sales", invoiceDate, "record");
  const snap = await addDoc(col1, { tableData, customer, invoiceDate });
  return true;
};
