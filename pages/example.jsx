import Anchor from "@/components/ui/anchor";
import PageTitle from "@/components/base/page-title";
import MetaTag from "@/components/base/meta-tag";
import Button from "@/components/ui/button";
import requestInstance from "../lib/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Example() {
  const handlePayment = () => {
    requestInstance
      .post("api/payment")
      .then((response) => {
        const { body, statusCode } = response.data;
        if (statusCode == 200) {
          let midtransCallback = JSON.parse(body);
          window.location.href = midtransCallback.url;
        } else {
          toast("Failed Request to Midtrans");
        }
      })
      .catch((err) => {
        console.log(err);
        toast("Failed Request to Midtrans" + err);
      });
  };
  return (
    <main
      style={{
        height: "100vh",
      }}
    >
      <ToastContainer />
      <MetaTag title="Example | Frontend Test" />
      <PageTitle name="Example Payment Integration" />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0 justify-center">
          <div className="max-w-7xl mx-auto justify-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center ">
            <div className="mt-8 flex   lg:mt-0 lg:flex-shrink-0 text-center">
              <Button
                className="border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 ml-2 mr-6"
                name="Pay Now"
                handleClick={handlePayment}
              />
              <Anchor
                to="/"
                name="Goto Home"
                className="inline-flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
