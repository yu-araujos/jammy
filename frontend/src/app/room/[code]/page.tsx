import { RoomConnecting } from "@/components/room/room-connecting";

export default async function RoomPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  return <RoomConnecting code={code} />;
}
