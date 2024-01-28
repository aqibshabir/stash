import React from "react";
import { auth } from "@clerk/nextjs";
import Dropzone from "@/components/Dropzone";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));

  const skeletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  // console.log(skeletonFiles);

  return (
    <div className="border-t">
      <Dropzone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>
        <div>
          {/* {TableWrapper} */}
          <TableWrapper skeletonFiles={skeletonFiles} />
        </div>
      </section>\<div className="h-[300px]">
      </div>
      <footer className="flex justify-center items-end h-20 p-2 text-white bg-[#2B2929] dark:bg-slate-800">
        &copy; Aqib Shabir 2024
      </footer>
    </div>
    
  );
}

export default Dashboard;
