import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import React from "react";

const Settings = async () => {
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      <p className="text-white px-5 text-center font-bold text-lg my-5 max-w-[800px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
        nostrum et, temporibus reiciendis iusto maiores, esse, fuga facilis a
        dolorum saepe aspernatur voluptatum? Minus, neque incidunt. Distinctio,
        ex? Quos quam fugit ut consequuntur minima, enim nihil iure magni minus
        voluptatum vel error deserunt, provident laudantium voluptates nostrum
        consequatur obcaecati a.
      </p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button variant={"outline"} type="submit">
          Log Out
        </Button>
      </form>
    </div>
  );
};

export default Settings;
