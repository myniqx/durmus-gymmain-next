import PurchasePage from "@/client/src/pages/PurchasePage";

interface PurchasePageProps {
  params: {
    option: string
  }
}

export default function Purchase({ params }: PurchasePageProps) {
  return <PurchasePage />
}
