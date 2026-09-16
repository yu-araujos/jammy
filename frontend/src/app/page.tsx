import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreateRoomCard } from "@/components/room/create-room-card";
import { JoinRoomCard } from "@/components/room/join-room-card";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <h1 className="mb-6 text-center text-3xl font-semibold">Jammy</h1>
        <Tabs defaultValue="host">
          <TabsList className="w-full">
            <TabsTrigger value="host">Host</TabsTrigger>
            <TabsTrigger value="join">Join</TabsTrigger>
          </TabsList>
          {/* MOTION: tab content should crossfade/slide when switching between host and join */}
          <TabsContent value="host">
            <CreateRoomCard />
          </TabsContent>
          <TabsContent value="join">
            <JoinRoomCard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
