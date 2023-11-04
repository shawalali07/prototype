import {
  Cross,
  Diamond,
  Discount,
  Hand,
  Image,
  Search,
} from "../../../assets/Icons";
import { Button } from "../Button";

export function MarketPlaceSubmenu() {
  return (
    <div className='py-6 flex justify-between text-sm'>
      <div className='w-[900px] flex bg-zinc-800 rounded-xl items-center p-3 gap-1'>
        <Search />
        <input type='search' placeholder='Search' className='bg-zinc-800' />
      </div>
      <div className='flex gap-3'>
        <Button
          className='flex gap-2.5 rounded-xl px-[50px] bg-zinc-800 bg-secondary-danger items-center'
          variant='ghost'
        >
          <Image />
          <span>NFT</span>
          <Cross />
        </Button>
        <Button
          className='flex gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center'
          variant='ghost'
        >
          <Discount />
          <span>Discount Codes</span>
        </Button>
        <Button
          className='flex gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center'
          variant='ghost'
        >
          <Hand />
          <span>Physical Items</span>
        </Button>
        <Button
          className='flex gap-2.5 rounded-xl px-[50px] bg-zinc-800 items-center'
          variant='ghost'
        >
          <Diamond />
          <span>Perks</span>
        </Button>
      </div>
    </div>
  );
}
