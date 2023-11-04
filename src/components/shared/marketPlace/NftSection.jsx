import { nfts } from "../../../data/nfts";
import author from "../../../assets/author.png";

export function NftSection() {
  return (
    <div className='py-6 flex gap-8 flex-wrap'>
      {nfts.map((nft) => (
        <NftCard nft={nft} />
      ))}
    </div>
  );
}

function NftCard({ nft }) {
  return (
    <div className='card border border-secondary-border rounded-xl border-solid p-2'>
      <div>
        <img src={nft.img} alt='nft' />
      </div>
      <div className='pt-2 flex flex-col gap-1'>
        <span className='text-sm text-[#A1A1AA]'>{nft.title}</span>
        <h1>{nft.reference}</h1>
      </div>
      <div className='py-2 mt-3 flex justify-between rounded-xl px-3 bg-zinc-800'>
        <div className='flex flex-col gap-1'>
          <span className='text-xs text-[#A1A1AA]'>Author</span>
          <div className='flex gap-1'>
            <img src={author} alt='author' />
            <p>{nft.author}</p>
          </div>
        </div>
        <div>
          <span className='text-xs text-[#A1A1AA]'>Price</span>
          <div className='flex gap-1 items-center'>
            <div className='flex gap-1'>
              <p>{nft.priceEth}</p>
              <span>ETH</span>
            </div>
            <span className='text-[#A1A1AA] text-xs'>${nft.priceUsd}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
