import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import React from "react";

const Settings = async () => {
  const session = await auth();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <Card className="w-full max-w-md p-6 shadow-2xl rounded-2xl bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-10"></div>
        <CardHeader className="text-center relative z-10">
          <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-gray-200 shadow-lg">
            <AvatarImage className="object-fill"
              src={session?.user.image || "/avatar.jpg"}
              alt={session?.user.name as string}
            />
            <AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-2xl font-bold text-gray-800">
            {session?.user.name}
          </CardTitle>
          <p className="text-gray-500">{session?.user.email}</p>
        </CardHeader>
        <CardContent className="relative z-10">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-700">
              <strong>Role:</strong> {session?.user.role}
            </p>
            <p className="text-gray-700">
              <strong>ID:</strong> {session?.user.id}
            </p>
          </div>
          <Separator className="my-4" />
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button
              variant="secondary"
              type="submit"
              className="w-full text-lg py-2"
            >
              Log Out
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
