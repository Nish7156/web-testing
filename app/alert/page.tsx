import { redirect } from "next/navigation";

function Alert() {
  redirect("/alert/trade");
  return null;
}

export default Alert;
