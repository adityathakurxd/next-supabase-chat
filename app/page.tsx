import ChatHeader from "@/components/ChatHeader";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <ChatHeader />
      </div>
    </div>
  );
};
export default page;
