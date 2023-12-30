// import SignoutButton from "./sign-out-button";
import AuthButton from "@/components/AuthButton";
import { redirect } from "next/navigation";
//twitter request clientid or secrete
//allow  and get authorise
//session and token check
//extract data on serverside

// export default async function Home() {
//   // const session = await auth();

//   // if (!session?.user) {
//   //   redirect("/ai-assistant");
//   // }

//   const user = {
//     name: "hi",
//     image: "dsds",
//     id: "ds",
//     createdAt: new Date().toISOString(),
//   };
//   // let session: any;
//   // useEffect(() => {
//   //   session = (async function fetchAuth() {
//   //     return await auth();
//   //   })();
//   // }, []);
//   // const authUser = session?.user;
//   // useEffect(() => {
//   //   if (!session?.user) {
//   //     redirect("/");
//   //   }
//   // }, [authUser]);
//   return (
//     <div className=''>
//       <div
//         className='text-5xl font-bold text-white m-4 cursor-pointer'
//         onClick={() =>
//           signIn("twitter", {
//             callbackUrl: "https://www.google.com/",
//             // "http://localhost:3000/api/auth/callback/twitter",
//           })
//         }
//       >
//         sign in
//       </div>
//       <div className='text-white'>
//         <Link href={"/ai-assistant"}>AI-ASSISTANT</Link>
//       </div>{" "}
//       <br />
//       <div className='text-white'>
//         <Link href={"/alert"}>ALERT</Link>
//       </div>
//       <>
//         {/* {session.user.id}
//         {session.user.name}
//         {session.user.email} */}

//         {/* <SignoutButton
//           signOut={async () => {
//             "use server";
//             await signOut({ redirectTo: "/" });
//           }}
//         /> */}
//       </>
//       {/* <AuthButton /> */}
//     </div>
//   );
// }

export default async function ProfilePage() {
  redirect("/airdrop");
  return null;
}
