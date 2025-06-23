import PurchasePage from "@/client/pages/PurchasePage"

interface PurchasePageProps {
  params: {
    option: string
  }
}

export default function Purchase({ params }: PurchasePageProps) {
  return <PurchasePage option={params.option} />
}
