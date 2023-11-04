import { Button } from "../Button";

export function MarketPlaceHeader() {
  return (
    <div className='flex md:justify-between md:flex-row flex-col md:gap-0 gap-5'>
      <h1 className='text-[28px] font-semibold'>Marketplace</h1>
      <div className='rounded-full px-3 bg-zinc-800 text-xs w-[270px]'>
        <Button variant='ghost'>Active</Button>
        <Button className='rounded-full px-3 bg-zinc-700' variant='ghost'>
          Recommended
        </Button>
        <Button variant='ghost'>All Products</Button>
      </div>
    </div>
  );
}
